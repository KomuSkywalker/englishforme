"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { dateKey, daysBetween, lastNDays } from "@/lib/dates";
import { questsForDay } from "@/lib/quests";
import { hashString } from "@/lib/random";
import { words, grammarTopics, readingPassages, listeningTracks, clozePassages } from "@/lib/data";
import { Card, Chip, LinkButton, ProgressBar } from "@/components/ui";

const mascotLines = [
  "Bugün 20 dakika bile devleri devirir. Hadi bakalım!",
  "Kelime kelime gider bu iş, bir tık uzağındayım.",
  "MÜYYES mi? O bizden korksun. 🦾",
  "Streak'i söndürme, ateş bizim her şeyimiz! 🔥",
  "Bir oyun aç, farkında olmadan öğrenirsin.",
  "Dünkü sen, bugünkü senden daha az kelime biliyordu.",
  "Gramer canavarları quiz bekliyor, kılıcını kap!",
  "Kısa mola verdiysen tamam, şimdi tam gaz!",
];

const modules = [
  { href: "/kelime", emoji: "🃏", title: "Kelime", desc: "Kart destesi ve tekrarlar", bg: "bg-grapesoft" },
  { href: "/gramer", emoji: "🧩", title: "Gramer", desc: "16 konu, yıldız topla", bg: "bg-oceansoft" },
  { href: "/okuma", emoji: "📖", title: "Okuma", desc: "Merak uyandıran parçalar", bg: "bg-mintsoft" },
  { href: "/dinleme", emoji: "🎧", title: "Dinleme", desc: "Kulağını sınava alıştır", bg: "bg-sunsoft" },
  { href: "/cloze", emoji: "🕳️", title: "Boşluk Doldurma", desc: "Use of English pratiği", bg: "bg-rose2soft" },
  { href: "/oyunlar", emoji: "🎮", title: "Oyunlar", desc: "Eğlenerek XP kas", bg: "bg-berrysoft" },
  { href: "/deneme", emoji: "🎯", title: "Deneme", desc: "Mini ve tam MÜYYES provası", bg: "bg-grapesoft" },
  { href: "/yazma", emoji: "✍️", title: "Yazma", desc: "Essay planı ve kalıplar", bg: "bg-oceansoft" },
];

export default function Dashboard() {
  const { state, ready, todayXp, levelInfo, dueCount, learnedCount } = useProgress();
  const today = dateKey();
  const daysLeft = Math.max(0, daysBetween(today, state.settings.examDate));
  const quests = questsForDay(today);
  const line = mascotLines[hashString(today + "line") % mascotLines.length];
  const name = state.settings.name.trim();
  const newWordsAvailable = words.filter((w) => !state.srs[w.id]).length;
  const nextTopic = grammarTopics.find((t) => (state.grammar[t.id]?.stars ?? 0) === 0);
  const week = lastNDays(7);
  const weekMax = Math.max(...week.map((d) => state.days[d]?.xp ?? 0), state.settings.dailyGoal);
  const doneCount =
    Object.keys(state.reading).length + Object.keys(state.listening).length + Object.keys(state.cloze).length;
  const totalPieces = readingPassages.length + listeningTracks.length + clozePassages.length;

  return (
    <div className="flex flex-col gap-5">
      <Card className="relative overflow-hidden">
        <div className="flex items-center gap-4">
          <motion.span
            className="anim-float text-6xl"
            initial={{ rotate: -8 }}
            animate={{ rotate: 0 }}
          >
            🦜
          </motion.span>
          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold sm:text-3xl">
              Selam{name ? ` ${name}` : " şampiyon"}! 👋
            </h1>
            <p className="mt-1 rounded-2xl rounded-tl-none bg-paper px-3 py-2 text-sm font-bold text-inksoft">
              {line}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="!p-4 text-center">
          <p className="text-3xl">🗓️</p>
          <p className="font-display text-2xl font-extrabold text-grape">{daysLeft}</p>
          <p className="text-xs font-bold text-inksoft">gün kaldı (MÜYYES)</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="text-3xl">🔥</p>
          <p className="font-display text-2xl font-extrabold text-berry">{state.streak}</p>
          <p className="text-xs font-bold text-inksoft">günlük seri</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="text-3xl">🧠</p>
          <p className="font-display text-2xl font-extrabold text-mint">{learnedCount}</p>
          <p className="text-xs font-bold text-inksoft">öğrenilen kelime</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="text-3xl">👑</p>
          <p className="font-display text-2xl font-extrabold text-sun">Sv. {levelInfo.level}</p>
          <p className="text-xs font-bold text-inksoft">{levelInfo.title}</p>
        </Card>
      </div>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">⚡ Bugünkü hedef</h2>
          <span className="font-bold text-inksoft">
            {todayXp} / {state.settings.dailyGoal} XP
          </span>
        </div>
        <ProgressBar value={todayXp} max={state.settings.dailyGoal} accent="sun" />
        {todayXp >= state.settings.dailyGoal ? (
          <p className="mt-2 text-sm font-bold text-mintdark">Hedef tamam, seri güvende! 🔥</p>
        ) : (
          <p className="mt-2 text-sm font-bold text-inksoft">
            Serini korumak için {Math.max(0, state.settings.dailyGoal - todayXp)} XP daha topla.
          </p>
        )}
      </Card>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">🗺️ Günün görevleri</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {quests.map((q) => {
            const count = Math.min(state.questCounts[q.kind] ?? 0, q.target);
            const done = state.questAwarded.includes(q.id);
            return (
              <Link
                key={q.id}
                href={q.href}
                className={`rounded-2xl border-2 p-3 transition-all hover:-translate-y-0.5 ${
                  done ? "border-mint bg-mintsoft" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">
                    {q.emoji} {q.label}
                  </span>
                  <span className="text-sm font-extrabold text-inksoft">
                    {done ? "✅" : `+${q.xp} XP`}
                  </span>
                </div>
                <ProgressBar value={done ? q.target : count} max={q.target} accent="mint" className="mt-2 !h-2.5" />
              </Link>
            );
          })}
        </div>
        <p className="mt-3 text-center text-sm font-bold text-inksoft">
          4 görevi de bitirene 👑 +150 bonus XP var!
        </p>
      </Card>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">🚀 Bugün ne yapsak?</h2>
        <div className="flex flex-col gap-2">
          {ready && dueCount > 0 ? (
            <LinkButton href="/kelime/tekrar" accent="grape" className="justify-between">
              <span>🃏 {dueCount} kelime tekrar bekliyor</span> <span>→</span>
            </LinkButton>
          ) : null}
          {ready && newWordsAvailable > 0 ? (
            <LinkButton href="/kelime/ogren" accent="ocean" className="justify-between">
              <span>✨ 10 yeni kelime öğren</span> <span>→</span>
            </LinkButton>
          ) : null}
          {nextTopic ? (
            <LinkButton href={`/gramer/${nextTopic.id}`} accent="mint" className="justify-between">
              <span>
                {nextTopic.emoji} Sıradaki konu: {nextTopic.title}
              </span>
              <span>→</span>
            </LinkButton>
          ) : null}
          <LinkButton href="/oyunlar" accent="sun" className="justify-between">
            <span>🎮 Beynini oyunla kandır</span> <span>→</span>
          </LinkButton>
        </div>
      </Card>

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
              <span className={`grid size-11 place-items-center rounded-2xl text-2xl ${m.bg}`}>
                {m.emoji}
              </span>
              <p className="mt-2 font-display font-extrabold">{m.title}</p>
              <p className="text-xs font-bold text-inksoft">{m.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">📊 Son 7 gün</h2>
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
