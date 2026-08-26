"use client";

import { sentenceCompletion } from "@/data/useofenglish";
import { BankQuiz } from "@/components/BankQuiz";

export default function CumlePage() {
  return (
    <BankQuiz
      bank={sentenceCompletion}
      count={10}
      emoji="✂️"
      title="Sentence Completion"
      desc="Yarım cümleyi hem gramer hem mantık olarak tamamlayan seçeneği bul. Bağlaca dikkat!"
      backHref="/uoe"
      backLabel="Use of English'e dön"
    />
  );
}
