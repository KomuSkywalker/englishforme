"use client";

import { useMemo, useState } from "react";
import { useProgress } from "@/lib/progress";
import { isDue } from "@/lib/srs";
import { words } from "@/lib/data";
import { mixedVocabExercises } from "@/lib/vocabQuiz";
import { shuffle } from "@/lib/random";
import { Card, LinkButton, PageHeader } from "@/components/ui";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export default function TekrarPage() {
  const { state, reviewWord } = useProgress();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [round, setRound] = useState(0);

  const exercises = useMemo(() => {
    const dueIds = Object.entries(state.srs)
      .filter(([, e]) => isDue(e))
      .map(([id]) => id);
    const dueWords = shuffle(words.filter((w) => dueIds.includes(w.id))).slice(0, 30);
    return mixedVocabExercises(dueWords, words);
  }, [round]);

  if (result) {
    return (
      <div>
        <PageHeader emoji="🔁" title="Kelime Tekrarı" />
        <Result
          correct={result.correct}
          total={result.total}
          xpNote="Kutular güncellendi"
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

  if (exercises.length === 0) {
    return (
      <div>
        <PageHeader emoji="🔁" title="Kelime Tekrarı" />
        <Card className="text-center">
          <p className="text-5xl">😎</p>
          <p className="mt-2 font-display text-xl font-extrabold">Şu an tekrar bekleyen kelime yok!</p>
          <p className="mt-1 text-inksoft">
            Yeni kelimeler ekle ya da hızlı testle desteyi karıştır.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <LinkButton href="/kelime/ogren" accent="ocean">
              ✨ Yeni kelimeler
            </LinkButton>
            <LinkButton href="/kelime/quiz" accent="sun">
              ⚡ Hızlı test
            </LinkButton>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        emoji="🔁"
        title="Kelime Tekrarı"
        desc={`${exercises.length} kelime tekrar bekliyor. Doğru bildiklerin üst kutuya zıplayacak.`}
      />
      <QuizEngine
        exercises={exercises}
        record={(ex, correct) => reviewWord(ex.id, correct)}
        onFinish={setResult}
      />
    </div>
  );
}
