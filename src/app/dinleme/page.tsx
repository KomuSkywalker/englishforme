"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { listeningTracks } from "@/lib/data";
import { Chip, PageHeader } from "@/components/ui";
import { SectionStatus } from "@/components/SectionStatus";

export default function DinlemeHub() {
  const { state } = useProgress();
  return (
    <div>
      <PageHeader
        title="Listening"
        desc="Bilgisayarın sana okuyacak, sen dinleyip soruları çözeceksin. Gerçek sınavda da 2 dinleme parçası var!"
      />
      <SectionStatus section="listening" />
      <div className="grid gap-3 sm:grid-cols-2">
        {listeningTracks.map((t) => {
          const score = state.listening[t.id];
          const isDialog = t.script.includes("A:");
          return (
            <Link
              key={t.id}
              href={`/dinleme/${t.id}`}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-sun/60"
            >
              <div className="flex items-center justify-between">
                <Chip className="bg-sunsoft text-sundark">{t.topicTr}</Chip>
                {score !== undefined ? <Chip className="bg-grapesoft text-grape">%{score}</Chip> : null}
              </div>
              <p className="mt-2 font-display text-lg font-extrabold leading-tight">{t.title}</p>
              <div className="mt-2 flex gap-2">
                <Chip className="bg-paper text-inksoft">{isDialog ? "diyalog" : "monolog"}</Chip>
                <Chip className="bg-paper text-inksoft">{t.questions.length} soru</Chip>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
