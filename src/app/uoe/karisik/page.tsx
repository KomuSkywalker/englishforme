"use client";

import { useMemo } from "react";
import { dialogueCompletion, restatement, sentenceCompletion } from "@/data/useofenglish";
import { BankQuiz } from "@/components/BankQuiz";

export default function KarisikPage() {
  const bank = useMemo(
    () => [...sentenceCompletion, ...restatement, ...dialogueCompletion],
    []
  );
  return (
    <BankQuiz
      bank={bank}
      count={12}
      emoji="🌪️"
      title="Karışık Tur"
      desc="Cümle tamamlama, yakın anlam ve diyalog karışık gelir, tıpkı sınavdaki gibi."
      backHref="/uoe"
      backLabel="Use of English'e dön"
    />
  );
}
