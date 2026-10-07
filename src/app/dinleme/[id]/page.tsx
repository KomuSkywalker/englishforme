"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { listeningTracks } from "@/lib/data";
import { Button, Card, LinkButton, PageHeader } from "@/components/ui";
import { TtsPlayer } from "@/components/Speech";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

export default function DinlemeDetay() {
  const params = useParams<{ id: string }>();
  const track = listeningTracks.find((t) => t.id === params.id);
  const { answer, tally, finishSection, addXp } = useProgress();
  const [listened, setListened] = useState(false);
  const [phase, setPhase] = useState<"listen" | "quiz">("listen");
  const [showScript, setShowScript] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  if (!track) {
    return (
      <Card className="text-center">
        <p className="mt-2 font-display text-xl font-extrabold">Parça bulunamadı</p>
        <LinkButton href="/dinleme" accent="grape" className="mt-4">
          Stüdyoya dön
        </LinkButton>
      </Card>
    );
  }

  if (result) {
    return (
      <div>
        <PageHeader title={track.title} />
        <Result
          correct={result.correct}
          total={result.total}
          xpNote="Dinleme bonusu +25 XP"
          wrong={result.wrong}
          backHref="/dinleme"
          backLabel="Stüdyoya dön"
          onRetry={() => {
            setResult(null);
            setPhase("listen");
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={track.title} desc={track.topicTr} />
      <div className="flex flex-col gap-4">
        <TtsPlayer script={track.script} onComplete={() => setListened(true)} />
        {phase === "listen" ? (
          <div className="flex flex-col items-center gap-2">
            <Button
              accent="sun"
              className="text-lg"
              disabled={!listened}
              onClick={() => setPhase("quiz")}
            >
              Soruları aç ({track.questions.length} soru) →
            </Button>
            {!listened ? (
              <p className="text-sm font-bold text-inksoft">
                Önce parçayı sonuna kadar dinle, sorular sonra açılır.
              </p>
            ) : null}
          </div>
        ) : (
          <>
            <QuizEngine
              exercises={track.questions}
              record={(ex, correct) => answer(correct)}
              onFinish={(r) => {
                const pct = Math.round((r.correct / r.total) * 100);
                finishSection("listening", track.id, pct);
                tally("listening");
                addXp(25);
                setResult(r);
              }}
            />
            <Card>
              <button
                onClick={() => setShowScript((v) => !v)}
                className="w-full cursor-pointer text-left font-display font-extrabold"
              >
                Metni göster (takılırsan) {showScript ? "▲" : "▼"}
              </button>
              {showScript ? (
                <div className="mt-3 flex flex-col gap-1.5">
                  {track.script.split("\n").map((line, i) => (
                    <p key={i} className="text-[15px] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
