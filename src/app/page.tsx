"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { dateKey, daysBetween, lastNDays } from "@/lib/dates";
import { buildPlan } from "@/lib/plan";
import { latestExam, SECTION_MAX, type SectionId } from "@/lib/program";
import { hashString } from "@/lib/random";
import { words, grammarTopics, readingPassages, listeningTracks, clozePassages } from "@/lib/data";
import { Card, Chip, LinkButton, ProgressBar } from "@/components/ui";
import { DailyTasks } from "@/components/DailyTasks";

const mascotLines = [
  "Bugün 20 dakika bile devleri devirir. Hadi bakalım!",
  "Kelime kelime gider bu iş, bir tık uzağındayım.",
  "MÜYYES mi? O bizden korksun.",
  "Streak'i söndürme, ateş bizim her şeyimiz!",
  "Bir oyun aç, farkında olmadan öğrenirsin.",
  "Dünkü sen, bugünkü senden daha az kelime biliyordu.",
  "Gramer canavarları quiz bekliyor, kılıcını kap!",
  "Kısa mola verdiysen tamam, şimdi tam gaz!",
];

const modules: { href: string; title: string; desc: string; bg: string; section?: SectionId }[] = [
  { href: "/uoe", title: "Use of English", desc: "Gramer, kelime, cloze, restatement, diyalog", bg: "bg-grapesoft", section: "uoe" },
  { href: "/okuma", title: "Reading", desc: "Akademik metinler ve soru tipleri", bg: "bg-mintsoft", section: "reading" },
  { href: "/dinleme", title: "Listening", desc: "2 dinleme hakkıyla sınav provası", bg: "bg-sunsoft", section: "listening" },
  { href: "/yazma", title: "Writing", desc: "Essay planı, kalıplar, 40 dk mod", bg: "bg-oceansoft", section: "writing" },
];

export default function Dashboard() {
  const { state, ready, todayXp, levelInfo, dueCount, learnedCount } = useProgress();
  const today = dateKey();
  const daysLeft = Math.max(0, daysBetween(today, state.settings.examDate));
  const line = mascotLines[hashString(today + "line") % mascotLines.length];
  const name = state.settings.name.trim();
  const newWordsAvailable = words.filter((w) => !state.srs[w.id]).length;
  const nextTopic = grammarTopics.find((t) => (state.grammar[t.id]?.stars ?? 0) === 0);
  const week = lastNDays(7);
  const weekMax = Math.max(...week.map((d) => state.days[d]?.xp ?? 0), state.settings.dailyGoal);
  const doneCount =
    Object.keys(state.reading).length + Object.keys(state.listening).length + Object.keys(state.cloze).length;
  const totalPieces = readingPassages.length + listeningTracks.length + clozePassages.length;
  const topicsLeft = grammarTopics.filter((t) => (state.grammar[t.id]?.stars ?? 0) === 0).length;
  const plan = buildPlan(daysLeft, newWordsAvailable, topicsLeft);
  const lastExam = latestExam(state.pastExams);
  const examDateTr = (() => {
    const [y, m, d] = state.settings.examDate.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  })();

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h1 className="text-2xl font-extrabold sm:text-3xl">
          Selam{name ? ` ${name}` : " şampiyon"}!
        </h1>
        <p className="mt-1 text-sm font-bold text-inksoft">{line}</p>
      </Card>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-grape">{ready ? daysLeft : "–"}</p>
          <p className="text-xs font-bold text-inksoft">gün kaldı (MÜYYES)</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-berry">{state.streak}</p>
          <p className="text-xs font-bold text-inksoft">günlük seri</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-mint">{learnedCount}</p>
          <p className="text-xs font-bold text-inksoft">öğrenilen kelime</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-sun">Sv. {levelInfo.level}</p>
          <p className="text-xs font-bold text-inksoft">{levelInfo.title}</p>
        </Card>
      </div>

      {ready ? (
        <Card>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-extrabold">Sınav planı</h2>
            <Link href="/ayarlar" className="text-sm font-bold text-grape hover:underline">
              {examDateTr}
              {state.settings.examDateSet ? "" : " (varsayılan, değiştir)"}
            </Link>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Chip className="bg-grapesoft text-grape">{plan.phase.name}</Chip>
            <span className="text-sm font-bold text-inksoft">
              {plan.weeksLeft > 0 ? `${plan.weeksLeft} hafta ${daysLeft % 7} gün kaldı` : `${daysLeft} gün kaldı`}
            </span>
          </div>
          <p className="mt-3 text-[15px]">{plan.phase.focus}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <div className="rounded-2xl bg-paper p-3">
              <p className="font-display text-xl font-extrabold text-ocean">
                {plan.wordsPerDay > 0 ? plan.wordsPerDay : "Bitti"}
              </p>
              <p className="text-xs font-bold text-inksoft">
                {plan.wordsPerDay > 0 ? `yeni kelime / gün (${newWordsAvailable} kaldı)` : "tüm kelimeler açıldı, tekrara devam"}
              </p>
            </div>
            <div className="rounded-2xl bg-paper p-3">
              <p className="font-display text-xl font-extrabold text-mint">
                {plan.topicsPerWeek > 0 ? plan.topicsPerWeek : "Bitti"}
              </p>
              <p className="text-xs font-bold text-inksoft">
                {plan.topicsPerWeek > 0 ? `gramer konusu / hafta (${topicsLeft} kaldı)` : "tüm konular açıldı, zayıflara dön"}
              </p>
            </div>
            <div className="rounded-2xl bg-paper p-3">
              <p className="font-display text-base font-extrabold text-berry">{plan.phase.exams}</p>
              <p className="text-xs font-bold text-inksoft">deneme temposu</p>
            </div>
          </div>
        </Card>
      ) : null}

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Bugünkü hedef</h2>
          <span className="font-bold text-inksoft">
            {todayXp} / {state.settings.dailyGoal} XP
          </span>
        </div>
        <ProgressBar value={todayXp} max={state.settings.dailyGoal} accent="sun" />
        {todayXp >= state.settings.dailyGoal ? (
          <p className="mt-2 text-sm font-bold text-mintdark">Hedef tamam, seri güvende!</p>
        ) : (
          <p className="mt-2 text-sm font-bold text-inksoft">
            Serini korumak için {Math.max(0, state.settings.dailyGoal - todayXp)} XP daha topla.
          </p>
        )}
      </Card>

      <DailyTasks />

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Hızlı başla</h2>
        <div className="flex flex-col gap-2">
          {ready && dueCount > 0 ? (
            <LinkButton href="/kelime/tekrar" accent="grape" className="justify-between">
              <span>{dueCount} kelime tekrar bekliyor</span> <span>→</span>
            </LinkButton>
          ) : null}
          {ready && newWordsAvailable > 0 ? (
            <LinkButton href="/kelime/ogren" accent="ocean" className="justify-between">
              <span>10 yeni kelime öğren</span> <span>→</span>
            </LinkButton>
          ) : null}
          {nextTopic ? (
            <LinkButton href={`/gramer/${nextTopic.id}`} accent="mint" className="justify-between">
              <span>
                Sıradaki konu: {nextTopic.title}
              </span>
              <span>→</span>
            </LinkButton>
          ) : null}
        </div>
      </Card>

      <h2 className="-mb-2 text-lg font-extrabold">Sınav bölümleri</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {modules.map((m, i) => (
          <motion.div
            key={m.href}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              href={m.href}
              className="block rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-grape/40"
            >
              <span className={`block h-2 w-10 rounded-full ${m.bg}`} />
              <p className="mt-3 font-display font-extrabold">{m.title}</p>
              <p className="text-xs font-bold text-inksoft">{m.desc}</p>
              {m.section && lastExam && lastExam.sections[m.section] !== null ? (
                <p className="mt-2 text-xs font-extrabold text-grape">
                  Son sınavın: {lastExam.sections[m.section]}/{SECTION_MAX}
                </p>
              ) : null}
            </Link>
          </motion.div>
        ))}
      </div>

      <Link
        href="/rehber"
        className="flex items-center justify-between rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-grape/40"
      >
        <span className="flex items-center gap-3 font-display font-extrabold">
          MÜYYES Rehberi: format, kurallar ve bölüm taktikleri
        </span>
        <span className="text-xl">→</span>
      </Link>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Son 7 gün</h2>
          <Chip className="bg-grapesoft text-grape">
            {doneCount}/{totalPieces} parça bitti
          </Chip>
        </div>
        <div className="flex h-28 items-end justify-between gap-2">
          {week.map((d) => {
            const xp = state.days[d]?.xp ?? 0;
            const h = Math.max(6, Math.round((xp / weekMax) * 100));
            const isToday = d === today;
            return (
              <div key={d} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] font-bold text-inksoft">{xp}</span>
                <div
                  className={`w-full rounded-t-xl ${isToday ? "bg-grape" : "bg-grapesoft"}`}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] font-bold text-inksoft">{d.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
