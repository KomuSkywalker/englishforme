"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { addDays, dateKey, daysBetween } from "./dates";
import { isDue, isLearned, isMastered, newEntry, reviewEntry, type SrsEntry } from "./srs";
import { levelFromXp } from "./levels";
import { badges as allBadges, type BadgeSnapshot } from "./badges";
import { allQuestsBonusXp, questsForDay, type QuestKind } from "./quests";
import { setSoundEnabled, sfx } from "./sound";
import { bigCelebration, burst, starRain, toast } from "./fx";

export const XP = { correct: 10, wrong: 2, newWord: 12, review: 8, examCorrect: 12 };

export type DayStat = { xp: number; questions: number; correct: number; words: number };
export type ExamRecord = { day: string; kind: string; score: number; total: number };
export type GrammarResult = { correct: number; total: number; stars: number };
export type Settings = {
  examDate: string;
  examDateSet: boolean;
  dailyGoal: number;
  sound: boolean;
  name: string;
};

// Sabit varsayılan: kullanıcı tarih kaydetmediyse geri sayım her gün kaymasın.
export const DEFAULT_EXAM_DATE = "2027-01-07";

export type ProgressState = {
  xp: number;
  streak: number;
  bestStreak: number;
  lastStreakDay: string;
  srs: Record<string, SrsEntry>;
  grammar: Record<string, GrammarResult>;
  reading: Record<string, number>;
  listening: Record<string, number>;
  cloze: Record<string, number>;
  writingDone: string[];
  exams: ExamRecord[];
  days: Record<string, DayStat>;
  badges: string[];
  questDay: string;
  questCounts: Partial<Record<QuestKind, number>>;
  questAwarded: string[];
  gamesPlayed: number;
  settings: Settings;
};

const STORAGE_KEY = "efm-progress-v1";

function defaultState(): ProgressState {
  return {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastStreakDay: "",
    srs: {},
    grammar: {},
    reading: {},
    listening: {},
    cloze: {},
    writingDone: [],
    exams: [],
    days: {},
    badges: [],
    questDay: dateKey(),
    questCounts: {},
    questAwarded: [],
    gamesPlayed: 0,
    settings: { examDate: DEFAULT_EXAM_DATE, examDateSet: false, dailyGoal: 150, sound: true, name: "" },
  };
}

function parseStored(raw: string): ProgressState {
  const loaded = JSON.parse(raw) as Partial<ProgressState>;
  const base = defaultState();
  const settings: Settings = { ...base.settings, ...(loaded.settings ?? {}) };
  if (!settings.examDateSet) {
    // Eski sürüm varsayılanı "bugün + 14 gün" idi ve her açılışta kayıyordu.
    // Kullanıcının seçtiği belli olmayan yakın tarihleri sabit varsayılana çek.
    const looksLikeOldDefault = daysBetween(dateKey(), settings.examDate) <= 14;
    if (looksLikeOldDefault) settings.examDate = DEFAULT_EXAM_DATE;
    else settings.examDateSet = true;
  }
  return { ...base, ...loaded, settings };
}

function rollover(s: ProgressState): ProgressState {
  const today = dateKey();
  if (s.questDay === today) return s;
  return { ...s, questDay: today, questCounts: {}, questAwarded: [] };
}

function withXp(s: ProgressState, n: number): ProgressState {
  const today = dateKey();
  const day = s.days[today] ?? { xp: 0, questions: 0, correct: 0, words: 0 };
  const nextDay = { ...day, xp: day.xp + n };
  let { streak, bestStreak, lastStreakDay } = s;
  if (nextDay.xp >= s.settings.dailyGoal && lastStreakDay !== today) {
    streak = lastStreakDay === addDays(today, -1) ? streak + 1 : 1;
    bestStreak = Math.max(bestStreak, streak);
    lastStreakDay = today;
  }
  return {
    ...s,
    xp: s.xp + n,
    streak,
    bestStreak,
    lastStreakDay,
    days: { ...s.days, [today]: nextDay },
  };
}

function withAnswer(s: ProgressState, correct: boolean, xpGain: number, isWord: boolean): ProgressState {
  const today = dateKey();
  const base = withXp(s, xpGain);
  const day = base.days[today];
  return {
    ...base,
    days: {
      ...base.days,
      [today]: {
        ...day,
        questions: day.questions + 1,
        correct: day.correct + (correct ? 1 : 0),
        words: day.words + (isWord ? 1 : 0),
      },
    },
  };
}

function snapshot(s: ProgressState): BadgeSnapshot {
  const entries = Object.values(s.srs);
  return {
    xp: s.xp,
    streak: s.streak,
    bestStreak: s.bestStreak,
    learnedCount: entries.filter(isLearned).length,
    masteredCount: entries.filter(isMastered).length,
    grammarCompleted: Object.values(s.grammar).filter((g) => g.stars >= 1).length,
    readingCompleted: Object.keys(s.reading).length,
    listeningCompleted: Object.keys(s.listening).length,
    clozeCompleted: Object.keys(s.cloze).length,
    examCount: s.exams.length,
    bestExamPercent: s.exams.reduce((m, e) => Math.max(m, (e.score / e.total) * 100), 0),
    gamesPlayed: s.gamesPlayed,
  };
}

type Ctx = {
  state: ProgressState;
  ready: boolean;
  addXp: (n: number) => void;
  answer: (correct: boolean, opts?: { xp?: number; isWord?: boolean }) => void;
  startWord: (id: string) => void;
  reviewWord: (id: string, correct: boolean) => void;
  tally: (kind: QuestKind, amount?: number) => void;
  finishGrammar: (id: string, correct: number, total: number) => void;
  finishSection: (kind: "reading" | "listening" | "cloze", id: string, pct: number) => void;
  finishWriting: (id: string) => void;
  addExam: (kind: string, score: number, total: number) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  resetAll: () => void;
  todayXp: number;
  levelInfo: ReturnType<typeof levelFromXp>;
  dueCount: number;
  learnedCount: number;
};

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);
  const [ready, setReady] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevLevel = useRef(1);
  const prevStreak = useRef(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const rolled = rollover(parseStored(raw));
        prevLevel.current = levelFromXp(rolled.xp).level;
        prevStreak.current = rolled.streak;
        setState(rolled);
      }
    } catch {}
    setReady(true);
    // Safari gibi tarayıcıların siteyi kullanılmadığında veriyi silmesini zorlaştırır.
    navigator.storage?.persist?.().catch(() => {});

    // Başka bir sekmede yapılan değişikliği al; yoksa açık kalan eski sekme
    // kaydettiğin tarihi (ve ilerlemeyi) kendi eski haliyle ezer.
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        const next = rollover(parseStored(e.newValue));
        prevLevel.current = levelFromXp(next.xp).level;
        prevStreak.current = next.streak;
        setState(next);
      } catch {}
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {}
    }, 250);
  }, [state, ready]);

  useEffect(() => {
    setSoundEnabled(state.settings.sound);
  }, [state.settings.sound]);

  useEffect(() => {
    if (!ready) return;
    const info = levelFromXp(state.xp);
    if (info.level > prevLevel.current) {
      sfx.levelUp();
      starRain();
      toast({ title: `Seviye ${info.level}!`, body: `Yeni unvanın: ${info.title}` });
    }
    prevLevel.current = info.level;
    if (state.streak > prevStreak.current) {
      sfx.win();
      toast({ title: `${state.streak} günlük seri!`, body: "Günlük hedefini tamamladın, seri devam ediyor." });
    }
    prevStreak.current = state.streak;
  }, [state.xp, state.streak, ready]);

  useEffect(() => {
    if (!ready) return;
    const snap = snapshot(state);
    const earned = allBadges.filter((b) => !state.badges.includes(b.id) && b.check(snap));
    if (earned.length > 0) {
      setState((s) => ({ ...s, badges: [...s.badges, ...earned.map((b) => b.id)] }));
      const first = earned[0];
      burst();
      sfx.win();
      toast({ title: `Rozet kazandın: ${first.name}`, body: first.desc });
    }
  }, [state, ready]);

  useEffect(() => {
    if (!ready) return;
    const today = dateKey();
    if (state.questDay !== today) {
      setState(rollover);
      return;
    }
    const quests = questsForDay(today);
    const pending = quests.filter(
      (q) => !state.questAwarded.includes(q.id) && (state.questCounts[q.kind] ?? 0) >= q.target
    );
    if (pending.length > 0) {
      setState((s) => {
        let next = { ...s, questAwarded: [...s.questAwarded, ...pending.map((q) => q.id)] };
        for (const q of pending) next = withXp(next, q.xp);
        const allDone = quests.every((q) => next.questAwarded.includes(q.id));
        if (allDone && !next.questAwarded.includes("day-bonus")) {
          next = withXp(next, allQuestsBonusXp);
          next.questAwarded = [...next.questAwarded, "day-bonus"];
        }
        return next;
      });
      const q = pending[0];
      sfx.win();
      toast({ title: "Görev tamamlandı!", body: `${q.label} (+${q.xp} XP)` });
      const willAllDone = quests.every(
        (q2) => state.questAwarded.includes(q2.id) || pending.some((p) => p.id === q2.id)
      );
      if (willAllDone) {
        bigCelebration();
        toast({ title: "Günün tüm görevleri bitti!", body: `Bonus +${allQuestsBonusXp} XP kazandın.` });
      }
    }
  }, [state, ready]);

  const value = useMemo<Ctx>(() => {
    const today = dateKey();
    const entries = Object.values(state.srs);
    return {
      state,
      ready,
      addXp: (n) => setState((s) => withXp(rollover(s), n)),
      answer: (correct, opts) =>
        setState((s) =>
          withAnswer(rollover(s), correct, opts?.xp ?? (correct ? XP.correct : XP.wrong), opts?.isWord ?? false)
        ),
      startWord: (id) =>
        setState((s) => {
          if (s.srs[id]) return s;
          return withXp({ ...rollover(s), srs: { ...s.srs, [id]: newEntry() } }, XP.newWord);
        }),
      reviewWord: (id, correct) =>
        setState((s) => {
          const entry = s.srs[id] ?? newEntry();
          const rolled = rollover(s);
          const next = {
            ...rolled,
            srs: { ...rolled.srs, [id]: reviewEntry(entry, correct) },
            questCounts: { ...rolled.questCounts, words: (rolled.questCounts.words ?? 0) + 1 },
          };
          return withAnswer(next, correct, correct ? XP.review : XP.wrong, true);
        }),
      tally: (kind, amount = 1) =>
        setState((s) => {
          const rolled = rollover(s);
          const next = {
            ...rolled,
            questCounts: { ...rolled.questCounts, [kind]: (rolled.questCounts[kind] ?? 0) + amount },
          };
          return kind === "game" ? { ...next, gamesPlayed: next.gamesPlayed + 1 } : next;
        }),
      finishGrammar: (id, correct, total) =>
        setState((s) => {
          const pct = total === 0 ? 0 : correct / total;
          const stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
          const old = s.grammar[id];
          const best: GrammarResult =
            old && old.stars > stars ? old : { correct, total, stars };
          return { ...rollover(s), grammar: { ...s.grammar, [id]: best } };
        }),
      finishSection: (kind, id, pct) =>
        setState((s) => {
          const rolled = rollover(s);
          const map = { ...rolled[kind] };
          map[id] = Math.max(map[id] ?? 0, pct);
          return { ...rolled, [kind]: map };
        }),
      finishWriting: (id) =>
        setState((s) => {
          const rolled = rollover(s);
          if (rolled.writingDone.includes(id)) return rolled;
          return { ...rolled, writingDone: [...rolled.writingDone, id] };
        }),
      addExam: (kind, score, total) =>
        setState((s) => ({
          ...rollover(s),
          exams: [...s.exams, { day: today, kind, score, total }],
        })),
      updateSettings: (patch) =>
        setState((s) => ({ ...s, settings: { ...s.settings, ...patch } })),
      resetAll: () => {
        localStorage.removeItem(STORAGE_KEY);
        prevLevel.current = 1;
        prevStreak.current = 0;
        setState(defaultState());
      },
      todayXp: state.days[today]?.xp ?? 0,
      levelInfo: levelFromXp(state.xp),
      dueCount: Object.entries(state.srs).filter(([, e]) => isDue(e)).length,
      learnedCount: entries.filter(isLearned).length,
    };
  }, [state, ready]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
