"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { grammarTopics } from "@/lib/data";
import { Card, Chip, PageHeader, ProgressBar, Stars } from "@/components/ui";

const levelLabels = ["", "Temel", "Orta", "Zor"];
const levelCls = ["", "bg-mintsoft text-mintdark", "bg-sunsoft text-sundark", "bg-berrysoft text-berrydark"];

export default function GramerHub() {
  const { state } = useProgress();
  const completed = grammarTopics.filter((t) => (state.grammar[t.id]?.stars ?? 0) >= 1).length;
  const totalStars = grammarTopics.reduce((sum, t) => sum + (state.grammar[t.id]?.stars ?? 0), 0);

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        eyebrow={{ label: "Use of English", href: "/uoe" }}
        title="Gramer Haritası"
        desc="Her konuda önce hap bilgi, sonra 14 soruluk görev. Yüzde 50 üstü 1, yüzde 70 üstü 2, yüzde 90 üstü 3 yıldız!"
      />
      <Card>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display font-extrabold">
            {completed} / {grammarTopics.length} konu tamamlandı
          </span>
          <Chip className="bg-sunsoft text-sundark">{totalStars} / {grammarTopics.length * 3}</Chip>
        </div>
        <ProgressBar value={completed} max={grammarTopics.length} accent="ocean" />
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {grammarTopics.map((t, i) => {
          const res = state.grammar[t.id];
          return (
            <Link
              key={t.id}
              href={`/gramer/${t.id}`}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-grape/40"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="grid size-12 place-items-center rounded-2xl bg-oceansoft font-display text-lg font-extrabold text-ocean">
                  {i + 1}
                </span>
                <Stars count={res?.stars ?? 0} size="text-base" />
              </div>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">{t.title}</p>
              <p className="text-sm font-bold text-inksoft">{t.titleTr}</p>
              <div className="mt-2 flex items-center gap-2">
                <Chip className={levelCls[t.level]}>{levelLabels[t.level]}</Chip>
                {res ? (
                  <Chip className="bg-paper text-inksoft">
                    son: {res.correct}/{res.total}
                  </Chip>
                ) : (
                  <Chip className="bg-grapesoft text-grape">hiç denenmedi</Chip>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
