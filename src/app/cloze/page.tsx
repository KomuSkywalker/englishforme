"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { clozePassages } from "@/lib/data";
import { Chip, PageHeader } from "@/components/ui";

export default function ClozeHub() {
  const { state } = useProgress();
  return (
    <div>
      <PageHeader
        title="Boşluk Doldurma"
        desc="MÜYYES'in Use of English bölümünün provası: metindeki 6 boşluğu doğru parçalarla doldur."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {clozePassages.map((p, i) => {
          const score = state.cloze[p.id];
          return (
            <Link
              key={p.id}
              href={`/cloze/${p.id}`}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-rose2/50"
            >
              <div className="flex items-center justify-between">
                <Chip className="bg-rose2soft text-rose2dark">Test {i + 1}</Chip>
                {score !== undefined ? <Chip className="bg-grapesoft text-grape">%{score}</Chip> : null}
              </div>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">{p.title}</p>
              <Chip className="mt-2 bg-paper text-inksoft">6 boşluk</Chip>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
