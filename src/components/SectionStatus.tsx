"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { latestExam, minutesSplit, rankSections, SECTION_MAX, type SectionId } from "@/lib/program";

// Bölüm sayfalarının üstündeki şerit: son sınavdaki puan + programın bu bölüme ayırdığı süre.
export function SectionStatus({ section }: { section: SectionId }) {
  const { state, ready, weights } = useProgress();
  if (!ready) return null;
  const last = latestExam(state.pastExams);
  const score = last?.sections[section] ?? null;
  const minutes = minutesSplit(weights, state.settings.dailyMinutes)[section];
  const weakest = last && score !== null && rankSections(weights)[0] === section;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border-2 border-line bg-card px-4 py-3 text-sm font-bold">
      {score !== null ? (
        <span>
          Son sınavında: <span className="text-grape">{score}/{SECTION_MAX}</span>
          {weakest ? <span className="ml-2 text-berrydark">en zayıf bölümün</span> : null}
        </span>
      ) : (
        <Link href="/program" className="text-grape underline">
          Geçmiş sınav notunu gir
        </Link>
      )}
      <span className="text-inksoft">Programında günde {minutes} dk</span>
    </div>
  );
}
