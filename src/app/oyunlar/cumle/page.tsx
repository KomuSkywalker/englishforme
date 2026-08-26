"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { sample, shuffle } from "@/lib/random";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/fx";
import { Button, Card, LinkButton, PageHeader, ProgressBar } from "@/components/ui";

const ROUNDS = 5;

type Round = { sentence: string; tr: string; pieces: { id: number; text: string }[] };

function buildRounds(): Round[] {
  const pool = words.filter((w) => {
    const len = w.example.split(" ").length;
    return len >= 6 && len <= 12;
  });
  return sample(pool, ROUNDS).map((w) => {
    const clean = w.example.replace(/[.!?]$/, "");
    const pieces = clean.split(" ").map((text, id) => ({ id, text }));
    return { sentence: clean, tr: w.exampleTr, pieces: shuffle(pieces) };
  });
}

export default function CumleDizmePage() {
  const { addXp, tally, answer } = useProgress();
  const [rounds, setRounds] = useState<Round[]>(buildRounds);
  const [roundIndex, setRoundIndex] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]);
  const [status, setStatus] = useState<"building" | "correct" | "wrong">("building");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const round = rounds[roundIndex];
  const answerSentence = useMemo(
    () => [...round.pieces].sort((a, b) => a.id - b.id).map((p) => p.text).join(" "),
    [round]
  );

  function place(pieceId: number) {
    if (status === "correct") return;
    sfx.click();
    setStatus("building");
    setPlaced((prev) => (prev.includes(pieceId) ? prev : [...prev, pieceId]));
  }

  function unplace(pieceId: number) {
    if (status === "correct") return;
    sfx.click();
    setStatus("building");
    setPlaced((prev) => prev.filter((id) => id !== pieceId));
  }

  function check() {
    const built = placed
      .map((id) => round.pieces.find((p) => p.id === id)!.text)
      .join(" ");
    const ok = built === answerSentence;
    answer(ok, { xp: ok ? 15 : 2 });
    if (ok) {
      sfx.correct();
      setStatus("correct");
      setScore((s) => s + 1);
    } else {
      sfx.wrong();
      setStatus("wrong");
    }
  }

  function next() {
    if (roundIndex === ROUNDS - 1) {
      setFinished(true);
      tally("game");
      addXp(score * 5);
      if (score >= 4) burst();
      sfx.win();
      return;
    }
    setRoundIndex((i) => i + 1);
    setPlaced([]);
    setStatus("building");
  }

  function restart() {
    setRounds(buildRounds());
    setRoundIndex(0);
    setPlaced([]);
    setStatus("building");
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div>
        <PageHeader emoji="🧱" title="Cümle Dizme" />
        <Card className="text-center">
          <p className="text-6xl anim-pop">{score >= 4 ? "🏆" : score >= 3 ? "🌟" : "💪"}</p>
          <h2 className="mt-2 text-3xl font-extrabold">
            {score} / {ROUNDS} cümle
          </h2>
          <p className="mt-3 inline-block rounded-full bg-sunsoft px-4 py-1.5 font-bold text-sundark">
            ⚡ Tur bonusu: +{score * 5} XP
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button accent="mint" onClick={restart}>
              🔄 Yeni cümleler
            </Button>
            <LinkButton href="/oyunlar" accent="ghost">
              Oyun salonuna dön
            </LinkButton>
          </div>
        </Card>
      </div>
    );
  }

  const remaining = round.pieces.filter((p) => !placed.includes(p.id));

  return (
    <div>
      <PageHeader emoji="🧱" title="Cümle Dizme" desc="Kelimelere sırayla dokunup cümleyi inşa et." />
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={roundIndex} max={ROUNDS} accent="mint" className="flex-1" />
        <span className="font-display font-extrabold text-inksoft">
          {roundIndex + 1} / {ROUNDS}
        </span>
      </div>
      <Card className="mb-4 bg-mintsoft/50">
        <p className="text-sm font-bold text-inksoft">İpucu (Türkçesi):</p>
        <p className="font-bold">{round.tr}</p>
      </Card>
      <div
        className={`min-h-24 rounded-3xl border-2 p-4 transition-colors ${
          status === "correct"
            ? "border-mint bg-mintsoft"
            : status === "wrong"
              ? "anim-shake border-berry bg-berrysoft"
              : "border-dashed border-inksoft/30 bg-card"
        }`}
      >
        {placed.length === 0 ? (
          <p className="text-center text-sm font-bold text-inksoft/60">
            Cümlen burada oluşacak 👇 alttaki kelimelere dokun
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {placed.map((id) => {
              const piece = round.pieces.find((p) => p.id === id)!;
              return (
                <motion.button
                  key={id}
                  layout
                  onClick={() => unplace(id)}
                  className="cursor-pointer rounded-xl bg-grape px-3 py-2 font-bold text-white shadow-[0_3px_0_var(--color-grapedark)] active:translate-y-[2px] active:shadow-none"
                >
                  {piece.text}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-4 flex min-h-16 flex-wrap gap-2">
        {remaining.map((piece) => (
          <motion.button
            key={piece.id}
            layout
            onClick={() => place(piece.id)}
            className="cursor-pointer rounded-xl border-2 border-line bg-card px-3 py-2 font-bold transition-colors hover:border-mint"
          >
            {piece.text}
          </motion.button>
        ))}
      </div>
      {status === "wrong" ? (
        <p className="mt-3 text-center text-sm font-bold text-berrydark">
          Olmadı, sıralamayla biraz daha oyna. Kelimeye dokununca geri çıkar. 🧐
        </p>
      ) : null}
      <div className="mt-5 flex justify-end gap-3">
        {status === "correct" ? (
          <Button accent="mint" onClick={next} className="anim-pop">
            {roundIndex === ROUNDS - 1 ? "Bitir" : "Sıradaki cümle"} →
          </Button>
        ) : (
          <Button accent="grape" disabled={placed.length !== round.pieces.length} onClick={check}>
            Kontrol et ✅
          </Button>
        )}
      </div>
    </div>
  );
}
