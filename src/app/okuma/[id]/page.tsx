"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { readingPassages } from "@/lib/data";
import { Button, Card, Chip, LinkButton, PageHeader } from "@/components/ui";
import { SpeakButton } from "@/components/Speech";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export default function OkumaDetay() {
  const params = useParams<{ id: string }>();
  const passage = readingPassages.find((p) => p.id === params.id);
  const { answer, tally, finishSection, addXp } = useProgress();
  const [phase, setPhase] = useState<"read" | "quiz">("read");
  const [showGlossary, setShowGlossary] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  if (!passage) {
    return (
      <Card className="text-center">
        <p className="text-5xl">🔍</p>
        <p className="mt-2 font-display text-xl font-extrabold">Parça bulunamadı</p>
        <LinkButton href="/okuma" accent="grape" className="mt-4">
          Okuma rafına dön
        </LinkButton>
      </Card>
    );
  }

  if (result) {
    return (
      <div>
        <PageHeader emoji="📖" title={passage.title} />
        <Result
          correct={result.correct}
          total={result.total}
          xpNote="Okuma bonusu +25 XP"
          wrong={result.wrong}
          backHref="/okuma"
          backLabel="Okuma rafına dön"
          onRetry={() => {
            setResult(null);
            setPhase("read");
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader emoji="📖" title={passage.title} desc={passage.topicTr} />
      {phase === "read" ? (
        <div className="flex flex-col gap-4">
          <Card>
            <div className="mb-3 flex items-center justify-between">
              <Chip className="bg-mintsoft text-mintdark">
                ~{passage.text.split(" ").length} kelime
              </Chip>
              <SpeakButton text={passage.text} />
            </div>
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="mb-3 text-[16px] leading-relaxed last:mb-0">
                {para}
              </p>
            ))}
          </Card>
          <Card>
            <button
              onClick={() => setShowGlossary((v) => !v)}
              className="w-full cursor-pointer text-left font-display font-extrabold"
            >
              📔 Mini sözlük {showGlossary ? "▲" : "▼"}
            </button>
            {showGlossary ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {passage.glossary.map((g) => (
                  <span key={g.en} className="rounded-full bg-paper px-3 py-1.5 text-sm font-bold">
                    {g.en} <span className="text-grape">= {g.tr}</span>
                  </span>
                ))}
              </div>
            ) : null}
          </Card>
          <div className="flex justify-center">
            <Button accent="mint" className="text-lg" onClick={() => setPhase("quiz")}>
              Sorulara geç ({passage.questions.length} soru) →
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <details className="rounded-3xl border-2 border-line bg-card p-4">
            <summary className="cursor-pointer font-display font-extrabold">
              📄 Metni tekrar aç
            </summary>
            <div className="mt-3">
              {passage.text.split("\n\n").map((para, i) => (
                <p key={i} className="mb-3 text-[15px] leading-relaxed last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </details>
          <QuizEngine
            exercises={passage.questions}
            record={(ex, correct) => answer(correct)}
            onFinish={(r) => {
              const pct = Math.round((r.correct / r.total) * 100);
              finishSection("reading", passage.id, pct);
              tally("reading");
              addXp(25);
              setResult(r);
            }}
          />
        </div>
      )}
    </div>
  );
}
