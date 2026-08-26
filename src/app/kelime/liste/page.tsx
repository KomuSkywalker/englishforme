"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/lib/progress";
import { isLearned, isMastered } from "@/lib/srs";
import { words } from "@/lib/data";
import { Chip, PageHeader } from "@/components/ui";

const posLabels: Record<string, string> = {
  noun: "isim",
  verb: "fiil",
  adj: "sıfat",
  adv: "zarf",
  prep: "edat",
  conj: "bağlaç",
  phrase: "kalıp",
};

type Filter = "hepsi" | "yeni" | "deste" | "ogrenildi";

export default function ListePage() {
  const { state } = useProgress();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("hepsi");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return words.filter((w) => {
      const entry = state.srs[w.id];
      if (filter === "yeni" && entry) return false;
      if (filter === "deste" && !entry) return false;
      if (filter === "ogrenildi" && (!entry || !isLearned(entry))) return false;
      if (!needle) return true;
      return w.en.toLowerCase().includes(needle) || w.tr.toLowerCase().includes(needle);
    });
  }, [q, filter, state.srs]);

  const tabs: { key: Filter; label: string }[] = [
    { key: "hepsi", label: "Hepsi" },
    { key: "yeni", label: "Keşfedilmedi" },
    { key: "deste", label: "Destemde" },
    { key: "ogrenildi", label: "Öğrenildi" },
  ];

  return (
    <div>
      <PageHeader emoji="📚" title="Kelime Destesi" desc={`${words.length} kelimelik MÜYYES cephaneliğin.`} />
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Kelime ara... (EN veya TR)"
          className="w-full rounded-2xl border-2 border-line bg-card px-4 py-3 font-bold outline-none focus:border-grape"
        />
        <div className="flex gap-1.5 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                filter === t.key ? "bg-grape text-white" : "bg-card text-inksoft border-2 border-line"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-3 text-sm font-bold text-inksoft">{filtered.length} kelime</p>
      <div className="flex flex-col gap-2">
        {filtered.slice(0, 200).map((w) => {
          const entry = state.srs[w.id];
          const status = !entry
            ? { label: "yeni", cls: "bg-line text-inksoft" }
            : isMastered(entry)
              ? { label: "usta 🏆", cls: "bg-mintsoft text-mintdark" }
              : isLearned(entry)
                ? { label: "öğrenildi ✅", cls: "bg-mintsoft text-mintdark" }
                : { label: `kutu ${entry.box}`, cls: "bg-sunsoft text-sundark" };
          const isOpen = open === w.id;
          return (
            <button
              key={w.id}
              onClick={() => setOpen(isOpen ? null : w.id)}
              className="cursor-pointer rounded-2xl border-2 border-line bg-card p-3 text-left transition-colors hover:border-grape/40"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display font-extrabold">{w.en}</span>
                <span className="flex items-center gap-2">
                  <Chip className="bg-paper text-inksoft">{posLabels[w.pos]}</Chip>
                  <Chip className={status.cls}>{status.label}</Chip>
                </span>
              </div>
              <p className="text-sm font-bold text-grape">{w.tr}</p>
              {isOpen ? (
                <div className="mt-2 rounded-xl bg-paper p-3 text-sm">
                  <p className="font-bold">{w.example}</p>
                  <p className="mt-1 text-inksoft">{w.exampleTr}</p>
                  {w.synonyms && w.synonyms.length > 0 ? (
                    <p className="mt-1 font-bold text-mintdark">≈ {w.synonyms.join(", ")}</p>
                  ) : null}
                </div>
              ) : null}
            </button>
          );
        })}
        {filtered.length > 200 ? (
          <p className="text-center text-sm font-bold text-inksoft">
            İlk 200 sonuç gösteriliyor, aramayı daralt.
          </p>
        ) : null}
      </div>
    </div>
  );
}
