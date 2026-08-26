"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { topicById } from "@/lib/data";
import { Card, LinkButton, PageHeader, Stars } from "@/components/ui";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export default function GramerKonu() {
  const params = useParams<{ id: string }>();
  const topic = topicById(params.id);
  const { state, answer, tally, finishGrammar } = useProgress();
  const [tab, setTab] = useState<"konu" | "quiz">("konu");
  const [result, setResult] = useState<QuizResult | null>(null);
  const [round, setRound] = useState(0);

  if (!topic) {
    return (
      <Card className="text-center">
        <p className="text-5xl">🤔</p>
        <p className="mt-2 font-display text-xl font-extrabold">Konu bulunamadı</p>
        <LinkButton href="/gramer" accent="grape" className="mt-4">
          Gramer haritasına dön
        </LinkButton>
      </Card>
    );
  }

  const stars = state.grammar[topic.id]?.stars ?? 0;

  return (
    <div>
      <PageHeader emoji={topic.emoji} title={topic.title} desc={topic.summary} />
      <div className="mb-5 flex items-center gap-2">
        <button
          onClick={() => setTab("konu")}
          className={`cursor-pointer rounded-2xl px-5 py-2.5 font-display font-bold transition-colors ${
            tab === "konu" ? "bg-grape text-white" : "border-2 border-line bg-card text-inksoft"
          }`}
        >
          📖 Konu
        </button>
        <button
          onClick={() => {
            setTab("quiz");
            setResult(null);
            setRound((r) => r + 1);
          }}
          className={`cursor-pointer rounded-2xl px-5 py-2.5 font-display font-bold transition-colors ${
            tab === "quiz" ? "bg-grape text-white" : "border-2 border-line bg-card text-inksoft"
          }`}
        >
          🎯 Görev (14 soru)
        </button>
        <span className="ml-auto">
          <Stars count={stars} />
        </span>
      </div>

      {tab === "konu" ? (
        <div className="flex flex-col gap-4">
          {topic.sections.map((s, i) => (
            <Card key={i}>
              <h2 className="mb-2 text-lg font-extrabold">{s.heading}</h2>
              <p className="text-[15px] leading-relaxed">{s.body}</p>
              <div className="mt-3 flex flex-col gap-2">
                {s.examples.map((ex, j) => (
                  <div key={j} className="rounded-2xl bg-paper p-3">
                    <p className="font-bold">{ex.en}</p>
                    <p className="text-sm text-inksoft">{ex.tr}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
          <Card className="border-sun bg-sunsoft/60">
            <h2 className="mb-2 text-lg font-extrabold">🎯 Sınav taktikleri</h2>
            <ul className="flex flex-col gap-2">
              {topic.tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-[15px] font-bold">
                  <span>💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex justify-center">
            <button
              onClick={() => setTab("quiz")}
              className="cursor-pointer rounded-2xl bg-grape px-8 py-4 font-display text-lg font-bold text-white shadow-[0_4px_0_var(--color-grapedark)] transition-all hover:brightness-105 active:translate-y-[3px] active:shadow-none"
            >
              Hazırım, göreve başla! 🎯
            </button>
          </div>
        </div>
      ) : result ? (
        <Result
          correct={result.correct}
          total={result.total}
          xpNote={`${topic.title} görevi tamamlandı`}
          wrong={result.wrong}
          backHref="/gramer"
          backLabel="Gramer haritasına dön"
          onRetry={() => {
            setResult(null);
            setRound((r) => r + 1);
          }}
        />
      ) : (
        <QuizEngine
          key={round}
          exercises={topic.exercises}
          record={(ex, correct) => {
            answer(correct);
            tally("grammar");
          }}
          onFinish={(r) => {
            finishGrammar(topic.id, r.correct, r.total);
            setResult(r);
          }}
        />
      )}
    </div>
  );
}
