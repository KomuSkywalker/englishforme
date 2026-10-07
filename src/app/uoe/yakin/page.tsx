"use client";

import { restatement } from "@/data/useofenglish";
import { BankQuiz } from "@/components/BankQuiz";

export default function YakinPage() {
  return (
    <BankQuiz
      bank={restatement}
      count={10}
      title="Restatement"
      desc="Verilen cümleye anlamca en yakın cümleyi seç. Kalıp dönüşümlerini (so...that, despite, passive) kolla."
      backHref="/uoe"
      backLabel="Use of English'e dön"
    />
  );
}
