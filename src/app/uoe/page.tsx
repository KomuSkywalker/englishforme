"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { clozePassages } from "@/lib/data";
import { Card, Chip, PageHeader } from "@/components/ui";

const modes = [
  {
    href: "/cloze",
    emoji: "🕳️",
    title: "Cloze Test",
    desc: "Metindeki 6 boşluğu doldur, sınavın açılış bölümü",
    bg: "bg-rose2soft",
  },
  {
    href: "/uoe/cumle",
    emoji: "✂️",
    title: "Sentence Completion",
    desc: "Yarım cümleyi mantık + gramerle tamamla",
    bg: "bg-grapesoft",
  },
  {
    href: "/uoe/yakin",
    emoji: "♻️",
    title: "Restatement",
    desc: "Anlamca en yakın cümleyi yakala",
    bg: "bg-mintsoft",
  },
  {
    href: "/uoe/diyalog",
    emoji: "💬",
    title: "Dialogue Completion",
    desc: "Diyalogdaki eksik konuşmayı bul",
    bg: "bg-sunsoft",
  },
  {
    href: "/uoe/karisik",
    emoji: "🌪️",
    title: "Karışık Tur",
    desc: "Üç soru tipi karışık, 12 soru, sınav provası",
    bg: "bg-oceansoft",
  },
];

export default function UoeHub() {
  const { state } = useProgress();
  const clozeDone = Object.keys(state.cloze).length;
  return (
    <div>
      <PageHeader
        emoji="🧰"
        title="Use of English"
        desc="MÜYYES'in ilk bölümünün soru tipleri: cloze, cümle tamamlama, yakın anlam, diyalog ve kelime."
      />
      <Card className="mb-4 bg-sunsoft/60">
        <p className="text-sm font-bold">
          💡 Gerçek sınavda bu bölüm cloze test + sentence completion + restatement + dialogue
          completion + vocabulary sorularından oluşur. Hepsi çoktan seçmelidir.
        </p>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {modes.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-grape/40"
          >
            <div className="flex items-center justify-between">
              <span className={`grid size-12 place-items-center rounded-2xl text-2xl ${m.bg}`}>
                {m.emoji}
              </span>
              {m.href === "/cloze" ? (
                <Chip className="bg-paper text-inksoft">
                  {clozeDone}/{clozePassages.length} bitti
                </Chip>
              ) : null}
            </div>
            <p className="mt-2 font-display text-lg font-extrabold">{m.title}</p>
            <p className="text-sm font-bold text-inksoft">{m.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
