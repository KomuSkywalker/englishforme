"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { allTasksBonusXp, latestExam, sectionNames } from "@/lib/program";
import { Card, Chip, ProgressBar } from "./ui";

export function DailyTasks() {
  const { state, ready, todayTasks } = useProgress();
  const doneCount = todayTasks.filter((t) => state.questAwarded.includes(t.id)).length;
  const basedOnExam = !!latestExam(state.pastExams);

  return (
    <Card>
      <div className="mb-1 flex items-center justify-between gap-2">
        <h2 className="text-lg font-extrabold">Günün görevleri</h2>
        {ready ? (
          <Chip className="bg-mintsoft text-mintdark">
            {doneCount}/{todayTasks.length}
          </Chip>
        ) : null}
      </div>
      <p className="mb-3 text-sm font-bold text-inksoft">
        {basedOnExam ? (
          "Geçmiş sınav sonucuna göre zayıf bölümlerine ağırlık verildi."
        ) : (
          <>
            Şimdilik dengeli bir program.{" "}
            <Link href="/program" className="text-grape underline">
              Geçmiş sınav notunu gir
            </Link>
            , görevler zayıf bölümlerine göre ayarlansın.
          </>
        )}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {todayTasks.map((t) => {
          const count = Math.min(state.questCounts[t.kind] ?? 0, t.target);
          const done = state.questAwarded.includes(t.id);
          return (
            <Link
              key={t.id}
              href={t.href}
              className={`rounded-2xl border-2 p-3 transition-all hover:-translate-y-0.5 ${
                done ? "border-mint bg-mintsoft" : "border-line bg-paper"
              }`}
            >
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-inksoft">
                {t.section === "exam" ? "Deneme" : sectionNames[t.section]}
              </p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold">{t.label}</span>
                <span className="shrink-0 text-sm font-extrabold text-inksoft">
                  {done ? "Tamam" : `+${t.xp} XP`}
                </span>
              </div>
              <ProgressBar value={done ? t.target : count} max={t.target} accent="mint" className="mt-2 !h-2.5" />
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-center text-sm font-bold text-inksoft">
        Hepsini bitirene +{allTasksBonusXp} bonus XP var.
      </p>
    </Card>
  );
}
