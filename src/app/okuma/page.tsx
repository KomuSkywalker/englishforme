"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { readingPassages } from "@/lib/data";
import { Chip, PageHeader } from "@/components/ui";
import { SectionStatus } from "@/components/SectionStatus";

const levelLabels = ["", "Isınma", "Sınav Ayarı", "Zorlu"];
const levelCls = ["", "bg-mintsoft text-mintdark", "bg-sunsoft text-sundark", "bg-berrysoft text-berrydark"];

export default function OkumaHub() {
  const { state } = useProgress();
  return (
    <div>
      <PageHeader
        title="Reading"
        desc="Okuma bölümü: akademik parçalar ve MÜYYES tarzı sorular (ana fikir, detay, çıkarım, referans). Sözlük hep yanında."
      />
      <SectionStatus section="reading" />
      <div className="grid gap-3 sm:grid-cols-2">
        {readingPassages.map((p) => {
          const score = state.reading[p.id];
          return (
            <Link
              key={p.id}
              href={`/okuma/${p.id}`}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-mint/60"
            >
              <div className="flex items-center justify-between">
                <Chip className="bg-mintsoft text-mintdark">{p.topicTr}</Chip>
                {score !== undefined ? (
                  <Chip className="bg-grapesoft text-grape">%{score}</Chip>
                ) : null}
              </div>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">{p.title}</p>
              <div className="mt-2 flex items-center gap-2">
                <Chip className={levelCls[p.level]}>{levelLabels[p.level]}</Chip>
                <Chip className="bg-paper text-inksoft">{p.questions.length} soru</Chip>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
