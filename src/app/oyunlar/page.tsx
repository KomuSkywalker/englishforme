"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { Card, Chip, PageHeader } from "@/components/ui";

const games = [
  {
    href: "/oyunlar/eslestirme",
    emoji: "🧠",
    title: "Eşleştirme",
    desc: "Kartları aç, EN ile TR'yi eşleştir. Hız bonusu var!",
    bg: "bg-grapesoft",
  },
  {
    href: "/oyunlar/hiz",
    emoji: "⏱️",
    title: "Hız Turu",
    desc: "60 saniyede kaç kelime bilirsin? Combo yap, uçuşa geç.",
    bg: "bg-sunsoft",
  },
  {
    href: "/oyunlar/cumle",
    emoji: "🧱",
    title: "Cümle Dizme",
    desc: "Karışık kelimelerden doğru cümleyi inşa et.",
    bg: "bg-mintsoft",
  },
  {
    href: "/oyunlar/avi",
    emoji: "🎣",
    title: "Kelime Avı",
    desc: "Harf harf tahmin et, papağanı kurtar!",
    bg: "bg-oceansoft",
  },
];

export default function OyunlarHub() {
  const { state } = useProgress();
  return (
    <div>
      <PageHeader
        emoji="🎮"
        title="Oyun Salonu"
        desc="Beynin oyun sanacak ama aslında MÜYYES kelimesi çalışıyor olacaksın. 😏"
      />
      <Card className="mb-4 flex items-center justify-between">
        <span className="font-display font-extrabold">🕹️ Toplam oynanan oyun</span>
        <Chip className="bg-grapesoft text-grape">{state.gamesPlayed}</Chip>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {games.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="rounded-3xl border-2 border-line bg-card p-5 transition-all hover:-translate-y-1 hover:border-grape/40"
          >
            <span className={`grid size-14 place-items-center rounded-2xl text-3xl ${g.bg}`}>
              {g.emoji}
            </span>
            <p className="mt-3 font-display text-xl font-extrabold">{g.title}</p>
            <p className="mt-1 text-sm font-bold text-inksoft">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
