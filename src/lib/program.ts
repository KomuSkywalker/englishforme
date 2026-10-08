import { hashString } from "./random";
import { phaseFor } from "./plan";

// MÜYYES'te 4 bölüm eşit ağırlıklı: her biri 25 puan, toplam 100.
export const SECTION_MAX = 25;
export const PASS_SCORE = 60;

export type SectionId = "uoe" | "reading" | "listening" | "writing";

export const sectionIds: SectionId[] = ["uoe", "reading", "listening", "writing"];

export const sectionNames: Record<SectionId, string> = {
  uoe: "Use of English",
  reading: "Reading",
  listening: "Listening",
  writing: "Writing",
};

export const sectionHref: Record<SectionId, string> = {
  uoe: "/uoe",
  reading: "/okuma",
  listening: "/dinleme",
  writing: "/yazma",
};

export type PastExam = {
  id: string;
  date: string;
  total: number;
  // Bölüm puanları (0-25). Bilinmiyorsa null.
  sections: Record<SectionId, number | null>;
};

export type Weights = Record<SectionId, number>;

const EQUAL: Weights = { uoe: 0.25, reading: 0.25, listening: 0.25, writing: 0.25 };

export function latestExam(exams: PastExam[]): PastExam | undefined {
  return [...exams].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))[0];
}

export function hasSectionScores(exam: PastExam | undefined): exam is PastExam {
  return !!exam && sectionIds.every((s) => exam.sections[s] !== null);
}

// Bölüm başına eksik puan ne kadar fazlaysa o bölüme o kadar çok süre ayrılır.
// Tam puan alınan bölüm bile sıfırlanmaz: unutmamak için küçük bir pay kalır.
export function focusWeights(exams: PastExam[]): Weights {
  const exam = latestExam(exams);
  if (!hasSectionScores(exam)) return EQUAL;
  const deficit = sectionIds.map((s) => SECTION_MAX - (exam.sections[s] ?? 0) + 3);
  const sum = deficit.reduce((a, b) => a + b, 0);
  const w = {} as Weights;
  sectionIds.forEach((s, i) => (w[s] = deficit[i] / sum));
  return w;
}

export function rankSections(w: Weights): SectionId[] {
  return [...sectionIds].sort((a, b) => w[b] - w[a]);
}

export function minutesSplit(w: Weights, dailyMinutes: number): Record<SectionId, number> {
  const out = {} as Record<SectionId, number>;
  for (const s of sectionIds) out[s] = Math.max(10, Math.round((dailyMinutes * w[s]) / 5) * 5);
  return out;
}

export type TaskKind = "words" | "grammar" | "reading" | "listening" | "cloze" | "game" | "exam" | "writing";

export type DailyTask = {
  id: string;
  kind: TaskKind;
  section: SectionId | "exam";
  target: number;
  label: string;
  xp: number;
  href: string;
};

function intensity(weight: number): 0 | 1 | 2 {
  if (weight >= 0.33) return 2;
  if (weight >= 0.22) return 1;
  return 0;
}

function taskFor(section: SectionId, weight: number, day: string): DailyTask {
  const lvl = intensity(weight);
  if (section === "reading") {
    const n = lvl === 2 ? 2 : 1;
    return { id: `reading-${n}`, kind: "reading", section, target: n, label: `${n} okuma parçası bitir`, xp: 50 * n, href: "/okuma" };
  }
  if (section === "listening") {
    const n = lvl === 2 ? 2 : 1;
    return { id: `listening-${n}`, kind: "listening", section, target: n, label: `${n} dinleme parçası bitir`, xp: 50 * n, href: "/dinleme" };
  }
  if (section === "writing") {
    return { id: "writing-1", kind: "writing", section, target: 1, label: "1 essay planı ya da taslağı çalış", xp: 50, href: "/yazma" };
  }
  // Use of English: gramer ve cloze günlere göre dönüşümlü.
  if (hashString("uoe" + day) % 3 === 0) {
    return { id: "cloze-1", kind: "cloze", section, target: 1, label: "1 cloze test çöz", xp: 45, href: "/cloze" };
  }
  const q = [15, 20, 30][lvl];
  return { id: `grammar-${q}`, kind: "grammar", section, target: q, label: `${q} Use of English / gramer sorusu çöz`, xp: 2 * q + 20, href: "/uoe" };
}

// Günün görevleri: her gün kelime tekrarı + en zayıf iki bölüm + ağırlığa göre bir bölüm daha,
// haftada iki gün (ve deneme döneminde her gün) bir deneme.
export function tasksForDay(day: string, w: Weights, daysLeft: number): DailyTask[] {
  const ranked = rankSections(w);
  const wordTarget = [20, 30, 40][intensity(w.uoe)];
  const tasks: DailyTask[] = [
    {
      id: `words-${wordTarget}`,
      kind: "words",
      section: "uoe",
      target: wordTarget,
      label: `${wordTarget} kelime tekrarı yap`,
      xp: wordTarget + 20,
      href: "/kelime",
    },
  ];
  // Kalan iki bölümden ağırlığı yüksek olan 3 günün 2'sinde, diğeri 1'inde gelir.
  const third = hashString("efm-rest-" + day) % 3 === 0 ? ranked[3] : ranked[2];
  const picked: SectionId[] = [ranked[0], ranked[1], third];
  for (const s of picked) {
    const t = taskFor(s, w[s], day);
    if (!tasks.some((x) => x.kind === t.kind)) tasks.push(t);
  }
  const [y, m, d] = day.split("-").map(Number);
  const weekday = new Date(y, m - 1, d).getDay();
  const examDay = weekday === 0 || weekday === 3 || phaseFor(daysLeft).name === "Deneme dönemi";
  if (examDay) {
    const full = weekday === 0 && daysLeft <= 56;
    tasks.push({
      id: full ? "exam-full" : "exam-mini",
      kind: "exam",
      section: "exam",
      target: 1,
      label: full ? "1 tam deneme çöz" : "1 mini deneme çöz",
      xp: full ? 120 : 80,
      href: full ? "/deneme/tam" : "/deneme/mini",
    });
  }
  return tasks;
}

export const allTasksBonusXp = 150;
