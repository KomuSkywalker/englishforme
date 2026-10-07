"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { dateKey, lastNDays } from "@/lib/dates";
import { badges } from "@/lib/badges";
import { grammarTopics } from "@/lib/data";
import { Card, PageHeader, Stars } from "@/components/ui";

const boxLabels = ["Yeni", "K1", "K2", "K3", "K4", "Usta"];
const boxColors = ["bg-line", "bg-berrysoft", "bg-sunsoft", "bg-oceansoft", "bg-grapesoft", "bg-mintsoft"];

export default function IstatistikPage() {
  const { state, levelInfo, learnedCount } = useProgress();
  const today = dateKey();
  const days = lastNDays(14);
  const maxXp = Math.max(...days.map((d) => state.days[d]?.xp ?? 0), 1);
  const totalQuestions = Object.values(state.days).reduce((s, d) => s + d.questions, 0);
  const totalCorrect = Object.values(state.days).reduce((s, d) => s + d.correct, 0);
  const accuracy = totalQuestions === 0 ? 0 : Math.round((totalCorrect / totalQuestions) * 100);
  const boxCounts = [0, 1, 2, 3, 4, 5].map(
    (b) => Object.values(state.srs).filter((e) => e.box === b).length
  );
  const weakTopics = grammarTopics
    .filter((t) => (state.grammar[t.id]?.stars ?? 0) < 2)
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="İstatistik Panosu" desc="Emeklerinin fotoğrafı. Grafik yükseldikçe sınav küçülür." />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-grape">{state.xp}</p>
          <p className="text-xs font-bold text-inksoft">toplam XP</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-sun">Sv. {levelInfo.level}</p>
          <p className="text-xs font-bold text-inksoft">{levelInfo.title}</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-berry">{state.bestStreak}</p>
          <p className="text-xs font-bold text-inksoft">en uzun seri</p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="font-display text-2xl font-extrabold text-mint">%{accuracy}</p>
          <p className="text-xs font-bold text-inksoft">doğruluk ({totalQuestions} soru)</p>
        </Card>
      </div>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Son 14 gün XP</h2>
        <div className="flex h-32 items-end justify-between gap-1">
          {days.map((d) => {
            const xp = state.days[d]?.xp ?? 0;
            return (
              <div key={d} className="group flex flex-1 flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-lg transition-all ${d === today ? "bg-grape" : "bg-grapesoft group-hover:bg-grape/50"}`}
                  style={{ height: `${Math.max(4, (xp / maxXp) * 100)}%` }}
                  title={`${d}: ${xp} XP`}
                />
                <span className="text-[9px] font-bold text-inksoft">{d.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="mb-3 text-lg font-extrabold">Kelime kutuları</h2>
          <p className="mb-3 text-sm font-bold text-inksoft">
            {learnedCount} öğrenildi · {Object.keys(state.srs).length} destede
          </p>
          <div className="grid grid-cols-6 gap-1.5">
            {boxCounts.map((count, b) => (
              <div key={b} className={`rounded-xl p-2 text-center ${boxColors[b]}`}>
                <p className="font-display font-extrabold">{count}</p>
                <p className="text-[10px] font-bold text-inksoft">{boxLabels[b]}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="mb-3 text-lg font-extrabold">Güçlendirilecek konular</h2>
          {weakTopics.length === 0 ? (
            <p className="text-sm font-bold text-mintdark">Tüm konular 2+ yıldız, canavarsın!</p>
          ) : (
            <div className="flex flex-col gap-2">
              {weakTopics.map((t) => (
                <Link
                  key={t.id}
                  href={`/gramer/${t.id}`}
                  className="flex items-center justify-between rounded-2xl bg-paper px-3 py-2 font-bold transition-colors hover:bg-grapesoft"
                >
                  <span className="text-sm">
                    {t.title}
                  </span>
                  <Stars count={state.grammar[t.id]?.stars ?? 0} size="text-sm" />
                </Link>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Deneme gelişimi</h2>
        {state.exams.length === 0 ? (
          <p className="text-sm font-bold text-inksoft">Henüz deneme yok. İlkini çöz, grafiğin başlasın!</p>
        ) : (
          <div className="flex items-end gap-2 overflow-x-auto pb-2">
            {state.exams.map((e, i) => {
              const pct = Math.round((e.score / e.total) * 100);
              return (
                <div key={i} className="flex min-w-12 flex-col items-center gap-1">
                  <span className="text-xs font-extrabold">{pct}</span>
                  <div
                    className={`w-8 rounded-t-lg ${pct >= 60 ? "bg-mint" : "bg-berry"}`}
                    style={{ height: `${Math.max(8, pct)}px` }}
                  />
                  <span className="text-[9px] font-bold text-inksoft">{e.kind}</span>
                </div>
              );
            })}
          </div>
        )}
        <p className="mt-1 text-xs font-bold text-inksoft">Yeşil çubuk: baraj (yüzde 60) geçildi.</p>
      </Card>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">
          Rozetler ({state.badges.length}/{badges.length})
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {badges.map((b) => {
            const earned = state.badges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`rounded-2xl border-2 p-3 text-center ${
                  earned ? "border-sun bg-sunsoft/60" : "border-line bg-paper opacity-50 grayscale"
                }`}
              >
                <p className="font-display text-sm font-extrabold leading-tight">{b.name}</p>
                <p className="mt-0.5 text-[11px] font-bold text-inksoft">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
