"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "./ui";

const items = [
  { href: "/", label: "Panel", emoji: "🏠" },
  { href: "/kelime", label: "Kelime", emoji: "🃏" },
  { href: "/gramer", label: "Gramer", emoji: "🧩" },
  { href: "/okuma", label: "Okuma", emoji: "📖" },
  { href: "/dinleme", label: "Dinleme", emoji: "🎧" },
  { href: "/cloze", label: "Boşluk Doldurma", emoji: "🕳️" },
  { href: "/oyunlar", label: "Oyunlar", emoji: "🎮" },
  { href: "/deneme", label: "Deneme Sınavı", emoji: "🎯" },
  { href: "/yazma", label: "Yazma", emoji: "✍️" },
  { href: "/istatistik", label: "İstatistik", emoji: "📊" },
  { href: "/ayarlar", label: "Ayarlar", emoji: "⚙️" },
];

const mobileItems = items.filter((i) =>
  ["/", "/kelime", "/gramer", "/oyunlar", "/deneme"].includes(i.href)
);

export function Sidebar() {
  const pathname = usePathname();
  const { state, todayXp, levelInfo } = useProgress();
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r-2 border-line bg-card p-4 lg:flex">
      <Link href="/" className="mb-6 flex items-center gap-2 px-2">
        <span className="text-3xl">🦜</span>
        <span className="font-display text-xl font-extrabold">
          English<span className="text-grape">ForMe</span>
        </span>
      </Link>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 font-display font-bold transition-colors ${
                active ? "bg-grapesoft text-grape" : "text-inksoft hover:bg-paper"
              }`}
            >
              <span className="text-xl">{item.emoji}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-4 rounded-2xl bg-paper p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-sm font-bold">
            Sv. {levelInfo.level} · {levelInfo.title}
          </span>
          <span className="text-sm font-bold text-inksoft">🔥 {state.streak}</span>
        </div>
        <ProgressBar value={levelInfo.into} max={levelInfo.need} accent="grape" />
        <p className="mt-2 text-xs font-bold text-inksoft">
          Bugün ⚡ {todayXp} / {state.settings.dailyGoal} XP
        </p>
      </div>
    </aside>
  );
}

export function MobileTopBar() {
  const { state, todayXp, levelInfo } = useProgress();
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b-2 border-line bg-card px-4 py-2.5 lg:hidden">
      <Link href="/" className="flex items-center gap-1.5">
        <span className="text-2xl">🦜</span>
        <span className="font-display font-extrabold">
          English<span className="text-grape">ForMe</span>
        </span>
      </Link>
      <div className="flex items-center gap-2 text-sm font-bold">
        <span className="rounded-full bg-berrysoft px-2.5 py-1">🔥 {state.streak}</span>
        <span className="rounded-full bg-sunsoft px-2.5 py-1">⚡ {todayXp}</span>
        <span className="rounded-full bg-grapesoft px-2.5 py-1">Sv. {levelInfo.level}</span>
      </div>
    </header>
  );
}

export function MobileTabBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t-2 border-line bg-card px-2 pb-[env(safe-area-inset-bottom)] lg:hidden">
      {mobileItems.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-[11px] font-bold ${
              active ? "text-grape" : "text-inksoft"
            }`}
          >
            <span className={`text-2xl ${active ? "anim-pop" : ""}`}>{item.emoji}</span>
            {item.label.split(" ")[0]}
          </Link>
        );
      })}
    </nav>
  );
}
