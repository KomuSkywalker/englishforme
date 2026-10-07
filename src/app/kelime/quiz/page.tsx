"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { mixedVocabExercises } from "@/lib/vocabQuiz";
import { sample } from "@/lib/random";
import { PageHeader } from "@/components/ui";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export default function KelimeQuizPage() {
  const { state, ready, reviewWord } = useProgress();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [round, setRound] = useState(0);

  const exercises = useMemo(() => {
    if (!ready) return [];
    const seen = words.filter((w) => state.srs[w.id]);
    const pool = seen.length >= 12 ? seen : words;
    return mixedVocabExercises(sample(pool, 12), words);
  }, [round, ready]);

  if (!ready) return null;

  if (result) {
    return (
      <div>
        <PageHeader title="Hızlı Test" />
        <Result
          correct={result.correct}
          total={result.total}
          xpNote="Deste güncellendi"
          wrong={result.wrong}
          backHref="/kelime"
          backLabel="Kelime kampına dön"
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
      <PageHeader
        title="Hızlı Test"
        desc="12 soruluk karışık kelime testi: anlam, çeviri ve eş anlamlılar."
      />
      <QuizEngine
        exercises={exercises}
        record={(ex, correct) => reviewWord(ex.id, correct)}
        onFinish={setResult}
      />
    </div>
  );
}
