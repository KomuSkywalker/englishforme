"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { sample, shuffle } from "@/lib/random";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/fx";
import { Button, Card, LinkButton, PageHeader } from "@/components/ui";

type Tile = { key: string; wordId: string; text: string; side: "en" | "tr" };

function buildTiles(): Tile[] {
  const picked = sample(words, 6);
  const tiles: Tile[] = [];
  for (const w of picked) {
    tiles.push({ key: w.id + "-en", wordId: w.id, text: w.en, side: "en" });
    tiles.push({ key: w.id + "-tr", wordId: w.id, text: w.tr, side: "tr" });
  }
  return shuffle(tiles);
}

export default function EslestirmePage() {
  const { addXp, tally } = useProgress();
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<Set<string>>(new Set());
  const [seconds, setSeconds] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [finished, setFinished] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setTiles(buildTiles());
  }, []);

  useEffect(() => {
    if (finished || tiles.length === 0) return;
    timer.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [finished, tiles.length]);

  const bonus = Math.max(0, 60 - seconds - mistakes * 5);
  const totalXp = 30 + bonus;

  function clickTile(tile: Tile) {
    if (matched.has(tile.key) || finished) return;
    if (selected === tile.key) {
      setSelected(null);
      return;
    }
    if (!selected) {
      sfx.click();
      setSelected(tile.key);
      return;
    }
    const prev = tiles.find((t) => t.key === selected)!;
    if (prev.wordId === tile.wordId && prev.side !== tile.side) {
      sfx.correct();
      const next = new Set(matched);
      next.add(prev.key);
      next.add(tile.key);
      setMatched(next);
      setSelected(null);
      if (next.size === tiles.length) {
        setFinished(true);
        addXp(totalXp);
        tally("game");
        burst();
        sfx.win();
      }
    } else {
      sfx.wrong();
      setMistakes((m) => m + 1);
      setWrongPair(new Set([prev.key, tile.key]));
      setSelected(null);
      setTimeout(() => setWrongPair(new Set()), 450);
    }
  }

  function restart() {
    setTiles(buildTiles());
    setSelected(null);
    setMatched(new Set());
    setSeconds(0);
    setMistakes(0);
    setFinished(false);
  }

  return (
    <div>
      <PageHeader emoji="🧠" title="Eşleştirme" desc="İngilizce kelimeyi Türkçe anlamıyla eşleştir." />
      <div className="mb-4 flex items-center gap-3 font-display font-extrabold">
        <span className="rounded-full bg-sunsoft px-4 py-1.5">⏱️ {seconds}s</span>
        <span className="rounded-full bg-berrysoft px-4 py-1.5">❌ {mistakes}</span>
        <span className="ml-auto rounded-full bg-grapesoft px-4 py-1.5">
          {matched.size / 2} / {tiles.length / 2}
        </span>
      </div>
      {finished ? (
        <Card className="text-center">
          <p className="text-6xl anim-pop">🏆</p>
          <h2 className="mt-2 text-2xl font-extrabold">{seconds} saniyede bitirdin!</h2>
          <p className="mt-1 text-inksoft">
            {mistakes === 0 ? "Hem de hiç hatasız, canavarsın!" : `${mistakes} yanlış deneme oldu, sorun değil.`}
          </p>
          <p className="mt-3 inline-block rounded-full bg-sunsoft px-4 py-1.5 font-bold text-sundark">
            ⚡ +{totalXp} XP (hız bonusu: {bonus})
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button accent="grape" onClick={restart}>
              🔄 Yeni tur
            </Button>
            <LinkButton href="/oyunlar" accent="ghost">
              Oyun salonuna dön
            </LinkButton>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {tiles.map((tile) => {
            const isMatched = matched.has(tile.key);
            const isSelected = selected === tile.key;
            const isWrong = wrongPair.has(tile.key);
            return (
              <motion.button
                key={tile.key}
                layout
                onClick={() => clickTile(tile)}
                className={`min-h-20 cursor-pointer rounded-2xl border-2 p-2 text-center font-bold transition-colors ${
                  isMatched
                    ? "border-mint bg-mintsoft text-mintdark opacity-60"
                    : isWrong
                      ? "anim-shake border-berry bg-berrysoft"
                      : isSelected
                        ? "border-grape bg-grapesoft"
                        : "border-line bg-card hover:border-grape/40"
                } ${tile.side === "en" ? "font-display text-lg" : "text-[15px]"}`}
                disabled={isMatched}
              >
                {isMatched ? "✅" : tile.text}
              </motion.button>
            );
          })}
        </div>
      )}
    </div>
  );
}
