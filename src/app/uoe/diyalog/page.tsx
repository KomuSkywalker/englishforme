"use client";

import { dialogueCompletion } from "@/data/useofenglish";
import { BankQuiz } from "@/components/BankQuiz";

export default function DiyalogPage() {
  return (
    <BankQuiz
      bank={dialogueCompletion}
      count={10}
      title="Dialogue Completion"
      desc="Diyalogdaki boş konuşmayı akışa göre doldur. Önceki ve sonraki cümle ipucudur."
      backHref="/uoe"
      backLabel="Use of English'e dön"
    />
  );
}
