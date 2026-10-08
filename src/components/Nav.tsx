"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useProgress } from "@/lib/progress";
import { Logo } from "./Logo";
import { ProgressBar } from "./ui";

type NavItem = {
  href: string;
  label: string;
  hint?: string;
  // Bu öğeyi aktif sayan ek yollar (örn. Use of English altındaki gramer, kelime).
  also?: string[];
  children?: { href: string; label: string }[];
};

type NavGroup = { title?: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    items: [
      { href: "/", label: "Panel" },
      { href: "/program", label: "Programım", hint: "geçmiş sınav ve plan" },
    ],
  },
  {
    title: "Sınav bölümleri",
    items: [
      {
        href: "/uoe",
        label: "Use of English",
        also: ["/gramer", "/kelime", "/cloze", "/oyunlar"],
        children: [
          { href: "/gramer", label: "Gramer" },
          { href: "/kelime", label: "Kelime" },
          { href: "/cloze", label: "Cloze Test" },
          { href: "/uoe/cumle", label: "Sentence Completion" },
          { href: "/uoe/yakin", label: "Restatement" },
          { href: "/uoe/diyalog", label: "Dialogue Completion" },
          { href: "/uoe/karisik", label: "Karışık tur" },
          { href: "/oyunlar", label: "Kelime oyunları" },
        ],
      },
      { href: "/okuma", label: "Reading", hint: "okuma" },
      { href: "/dinleme", label: "Listening", hint: "dinleme" },
      { href: "/yazma", label: "Writing", hint: "yazma" },
    ],
  },
  {
    title: "Sınav provası",
    items: [
      { href: "/deneme", label: "Deneme Sınavı" },
      { href: "/rehber", label: "Sınav Rehberi" },
    ],
  },
  {
    title: "Hesap",
    items: [
      { href: "/istatistik", label: "İstatistik" },
      { href: "/ayarlar", label: "Ayarlar" },
    ],
  },
];

function matches(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

function isActive(pathname: string, item: NavItem) {
  return matches(pathname, item.href) || (item.also ?? []).some((h) => matches(pathname, h));
}

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-4">
      {groups.map((g, gi) => (
        <div key={gi}>
          {g.title ? (
            <p className="mb-1 px-3 text-[11px] font-extrabold uppercase tracking-wider text-inksoft">
              {g.title}
            </p>
          ) : null}
          <div className="flex flex-col gap-0.5">
            {g.items.map((item) => {
              const active = isActive(pathname, item);
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`flex items-baseline justify-between gap-2 rounded-xl px-3 py-2 font-display font-bold transition-colors ${
                      active ? "bg-grapesoft text-grape" : "text-ink hover:bg-paper"
                    }`}
                  >
                    {item.label}
                    {item.hint ? <span className="text-xs font-bold text-inksoft">{item.hint}</span> : null}
                  </Link>
                  {active && item.children ? (
                    <div className="ml-4 mt-0.5 flex flex-col border-l-2 border-line pl-2">
                      {item.children.map((c) => {
                        const childActive = matches(pathname, c.href);
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={onNavigate}
                            className={`rounded-lg px-2 py-1.5 text-sm font-bold transition-colors ${
                              childActive ? "text-grape" : "text-inksoft hover:text-ink"
                            }`}
                          >
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { state, todayXp, levelInfo, daysLeft, ready } = useProgress();
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r-2 border-line bg-card p-4 lg:flex">
      <Link href="/" className="mb-5 px-2">
        <Logo />
      </Link>
      <div className="flex-1 overflow-y-auto">
        <NavList pathname={pathname} />
      </div>
      <div className="mt-4 rounded-2xl bg-paper p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-sm font-bold">
            Sv. {levelInfo.level} · {levelInfo.title}
          </span>
          <span className="text-sm font-bold text-inksoft">Seri {state.streak}</span>
        </div>
        <ProgressBar value={levelInfo.into} max={levelInfo.need} accent="grape" />
        <p className="mt-2 text-xs font-bold text-inksoft">
          Bugün {todayXp} / {state.settings.dailyGoal} XP
          {ready ? ` · sınava ${daysLeft} gün` : ""}
        </p>
      </div>
    </aside>
  );
}

export function MobileTopBar() {
  const { state, todayXp } = useProgress();
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b-2 border-line bg-card px-4 py-2.5 lg:hidden">
      <Link href="/">
        <Logo compact />
      </Link>
      <div className="flex items-center gap-2 text-sm font-bold">
        <span className="rounded-full bg-berrysoft px-2.5 py-1">Seri {state.streak}</span>
        <span className="rounded-full bg-sunsoft px-2.5 py-1">{todayXp} XP</span>
      </div>
    </header>
  );
}

const mobileTabs: NavItem[] = [
  { href: "/", label: "Panel" },
  { href: "/program", label: "Program" },
  { href: "/uoe", label: "UoE", also: ["/gramer", "/kelime", "/cloze", "/oyunlar"] },
  { href: "/deneme", label: "Deneme" },
];

export function MobileTabBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Menüyü kapat"
            className="absolute inset-0 bg-ink/30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-card p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
            <div className="mb-4 flex items-center justify-between">
              <Logo compact />
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-full bg-paper px-3 py-1 text-sm font-bold text-inksoft"
              >
                Kapat
              </button>
            </div>
            <NavList pathname={pathname} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t-2 border-line bg-card px-2 pb-[env(safe-area-inset-bottom)] lg:hidden">
        {mobileTabs.map((item) => {
          const active = isActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 pb-2.5 pt-1.5 text-[13px] font-bold ${
                active ? "text-grape" : "text-inksoft"
              }`}
            >
              <span className={`h-1 w-6 rounded-full ${active ? "bg-grape" : "bg-transparent"}`} />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={() => setOpen(true)}
          className="flex cursor-pointer flex-col items-center gap-1 rounded-xl px-3 pb-2.5 pt-1.5 text-[13px] font-bold text-inksoft"
        >
          <span className="h-1 w-6 rounded-full bg-transparent" />
          Menü
        </button>
      </nav>
    </>
  );
}
