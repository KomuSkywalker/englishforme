"use client";

import { useMemo, useState } from "react";
import type { Exercise } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { sample } from "@/lib/random";
import { PageHeader } from "@/components/ui";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export function BankQuiz({
  bank,
  count,
  title,
  desc,
  backHref,
  backLabel,
}: {
  bank: Exercise[];
  count: number;
  title: string;
  desc: string;
  backHref: string;
  backLabel: string;
}) {
  const { answer, tally } = useProgress();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [round, setRound] = useState(0);
  const exercises = useMemo(() => sample(bank, count), [round, bank, count]);

  if (result) {
    return (
      <div>
        <PageHeader title={title} />
        <Result
          correct={result.correct}
          total={result.total}
          wrong={result.wrong}
          backHref={backHref}
          backLabel={backLabel}
          onRetry={() => {
            setResult(null);
            setRound((r) => r + 1);
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={title} desc={desc} />
      <QuizEngine
        key={round}
        exercises={exercises}
        record={(ex, correct) => {
          answer(correct);
          tally("grammar");
        }}
        onFinish={setResult}
      />
    </div>
  );
}
