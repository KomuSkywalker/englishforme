"use client";

import { useProgress } from "@/lib/progress";
import { isMastered } from "@/lib/srs";
import { words } from "@/lib/data";
import { Card, LinkButton, PageHeader, ProgressBar } from "@/components/ui";

const boxLabels = ["Yeni", "Kutu 1", "Kutu 2", "Kutu 3", "Kutu 4", "Usta"];
const boxColors = ["bg-line", "bg-berrysoft", "bg-sunsoft", "bg-oceansoft", "bg-grapesoft", "bg-mintsoft"];

export default function KelimeHub() {
  const { state, dueCount, learnedCount } = useProgress();
  const entries = Object.values(state.srs);
  const inDeck = entries.length;
  const mastered = entries.filter(isMastered).length;
  const fresh = words.length - inDeck;
  const boxCounts = [0, 1, 2, 3, 4, 5].map((b) => entries.filter((e) => e.box === b).length);

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="Kelime Kampı"
        desc={`${words.length} sınav kelimesi seni bekliyor. Kutular yükseldikçe kelime kalıcı hafızana geçer.`}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <LinkButton
          href="/kelime/tekrar"
          accent={dueCount > 0 ? "grape" : "ghost"}
          className="!justify-between !p-5 text-lg"
        >
          <span>Tekrar zamanı</span>
          <span className="rounded-full bg-white/20 px-3 py-0.5">{dueCount}</span>
        </LinkButton>
        <LinkButton
          href="/kelime/ogren"
          accent={fresh > 0 ? "ocean" : "ghost"}
          className="!justify-between !p-5 text-lg"
        >
          <span>Yeni kelimeler</span>
          <span className="rounded-full bg-white/20 px-3 py-0.5">10</span>
        </LinkButton>
        <LinkButton href="/kelime/quiz" accent="sun" className="!justify-between !p-5 text-lg">
          <span>Hızlı test</span>
          <span>12 soru</span>
        </LinkButton>
        <LinkButton href="/kelime/liste" accent="mint" className="!justify-between !p-5 text-lg">
          <span>Kelime destesi</span>
          <span>{inDeck}/{words.length}</span>
        </LinkButton>
      </div>

      <Card>
        <h2 className="mb-2 text-lg font-extrabold">Hafıza yolculuğun</h2>
        <ProgressBar value={learnedCount} max={words.length} accent="mint" />
        <p className="mt-2 text-sm font-bold text-inksoft">
          {learnedCount} öğrenildi · {mastered} ustalık · {fresh} keşfedilmedi
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {boxCounts.map((count, b) => (
            <div key={b} className={`rounded-2xl p-3 text-center ${boxColors[b]}`}>
              <p className="font-display text-xl font-extrabold">{count}</p>
              <p className="text-[11px] font-bold text-inksoft">{boxLabels[b]}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-bold text-inksoft">
          Doğru bildikçe kelime bir üst kutuya zıplar, yanlışta 1. kutuya döner. Kutu 3 ve
          üzerindeki kelimeler artık öğrenilmiş sayılır.
        </p>
      </Card>
    </div>
  );
}
