"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { bigCelebration, burst } from "@/lib/fx";
import { sfx } from "@/lib/sound";
import { Button, LinkButton } from "./ui";
import type { WrongItem } from "./QuizEngine";

const letters = ["A", "B", "C", "D", "E"];

function band(pct: number) {
  if (pct >= 90) return { msg: "Efsanesin! Bu konu senden sorulur." };
  if (pct >= 70) return { msg: "Çok iyi! Ufak rötuşlarla mükemmel olur." };
  if (pct >= 50) return { msg: "Fena değil, biraz daha pratikle oturur." };
  return { msg: "Sorun yok, tekrar edince kafanda netleşecek." };
}

export function Result({
  correct,
  total,
  xpNote,
  onRetry,
  backHref,
  backLabel = "Geri dön",
  wrong = [],
  extra,
}: {
  correct: number;
  total: number;
  xpNote?: string;
  onRetry?: () => void;
  backHref?: string;
  backLabel?: string;
  wrong?: WrongItem[];
  extra?: React.ReactNode;
}) {
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
  const info = band(pct);
  const [showWrong, setShowWrong] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (pct >= 90) {
      bigCelebration();
      sfx.win();
    } else if (pct >= 70) {
      burst();
      sfx.win();
    }
  }, [pct]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="rounded-3xl border-2 border-line bg-card p-8 text-center">
        <h2 className="text-3xl font-extrabold">
          {correct} / {total}
        </h2>
        <p className="mt-1 font-display text-xl font-bold text-grape">%{pct}</p>
        <p className="mx-auto mt-2 max-w-sm text-inksoft">{info.msg}</p>
        {xpNote ? (
          <p className="mt-3 inline-block rounded-full bg-sunsoft px-4 py-1.5 font-bold text-sundark">
            {xpNote}
          </p>
        ) : null}
        {extra}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {onRetry ? (
            <Button accent="grape" onClick={onRetry}>
              Tekrar dene
            </Button>
          ) : null}
          {backHref ? (
            <LinkButton href={backHref} accent="ghost">
              {backLabel}
            </LinkButton>
          ) : null}
          {wrong.length > 0 ? (
            <Button accent="sun" onClick={() => setShowWrong((v) => !v)}>
              {showWrong ? "Yanlışları gizle" : `${wrong.length} yanlışı incele`}
            </Button>
          ) : null}
        </div>
      </div>

      {showWrong ? (
        <div className="mt-4 flex flex-col gap-3">
          {wrong.map(({ ex, picked }, i) => (
            <div key={i} className="rounded-2xl border-2 border-line bg-card p-4">
              <p className="font-bold">{ex.prompt.replaceAll("___", "＿＿")}</p>
              <p className="mt-2 text-sm">
                <span className="rounded-lg bg-berrysoft px-2 py-0.5 font-bold text-berrydark">
                  Senin cevabın: {letters[picked]}) {ex.options[picked]}
                </span>
              </p>
              <p className="mt-1.5 text-sm">
                <span className="rounded-lg bg-mintsoft px-2 py-0.5 font-bold text-mintdark">
                  Doğrusu: {letters[ex.answer]}) {ex.options[ex.answer]}
                </span>
              </p>
              <p className="mt-2 text-sm text-inksoft">{ex.explain}</p>
            </div>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}
