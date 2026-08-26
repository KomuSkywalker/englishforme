"use client";

import { useEffect, useMemo, useState } from "react";
import { useProgress, XP } from "@/lib/progress";
import type { ExamSection } from "@/lib/exam";
import { bigCelebration } from "@/lib/fx";
import { sfx } from "@/lib/sound";
import { Button, Card, Chip, PageHeader } from "@/components/ui";
import { TtsPlayer } from "@/components/Speech";
import { QuizEngine, type WrongItem } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

type SectionResult = { title: string; emoji: string; correct: number; total: number };

export function ExamRunner({
  kind,
  title,
  minutes,
  build,
}: {
  kind: string;
  title: string;
  minutes: number;
  build: () => ExamSection[];
}) {
  const { addExam, tally, addXp } = useProgress();
  const [attempt, setAttempt] = useState(0);
  const sections = useMemo(() => build(), [attempt]);
  const totalQuestions = useMemo(
    () => sections.reduce((sum, s) => sum + s.exercises.length, 0),
    [sections]
  );
  const [sectionIndex, setSectionIndex] = useState(0);
  const [phase, setPhase] = useState<"start" | "intro" | "quiz" | "result">("start");
  const [results, setResults] = useState<SectionResult[]>([]);
  const [wrong, setWrong] = useState<WrongItem[]>([]);
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [listened, setListened] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const correctSoFar = results.reduce((sum, r) => sum + r.correct, 0);

  useEffect(() => {
    if (phase === "start" || phase === "result") return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setTimedOut(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (timedOut && phase !== "result" && phase !== "start") {
      finalize(results, wrong);
    }
  }, [timedOut]);

  function finalize(allResults: SectionResult[], allWrong: WrongItem[]) {
    const correct = allResults.reduce((sum, r) => sum + r.correct, 0);
    const pct = Math.round((correct / totalQuestions) * 100);
    addExam(kind, correct, totalQuestions);
    tally("exam");
    addXp(correct * XP.examCorrect);
    if (pct >= 60) {
      bigCelebration();
      sfx.win();
    }
    setResults(allResults);
    setWrong(allWrong);
    setPhase("result");
  }

  function onSectionFinish(correct: number, total: number, sectionWrong: WrongItem[]) {
    const section = sections[sectionIndex];
    const nextResults = [
      ...results,
      { title: section.title, emoji: section.emoji, correct, total },
    ];
    const nextWrong = [...wrong, ...sectionWrong];
    if (sectionIndex === sections.length - 1) {
      finalize(nextResults, nextWrong);
      return;
    }
    setResults(nextResults);
    setWrong(nextWrong);
    setSectionIndex(sectionIndex + 1);
    setListened(false);
    setPhase("intro");
  }

  function restart() {
    setAttempt((a) => a + 1);
    setSectionIndex(0);
    setResults([]);
    setWrong([]);
    setTimeLeft(minutes * 60);
    setListened(false);
    setTimedOut(false);
    setPhase("start");
  }

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  const section = sections[sectionIndex];

  if (phase === "start") {
    return (
      <div>
        <PageHeader emoji="🎯" title={title} desc="Gerçek sınav havası: süre işler, açıklamalar sınav bitince gelir." />
        <Card className="text-center">
          <p className="text-6xl">⏳</p>
          <p className="mt-3 font-display text-xl font-extrabold">
            {totalQuestions} soru · {minutes} dakika
          </p>
          <div className="mx-auto mt-3 flex max-w-md flex-wrap justify-center gap-2">
            {sections.map((s, i) => (
              <Chip key={i} className="bg-paper text-inksoft">
                {s.emoji} {s.title} ({s.exercises.length})
              </Chip>
            ))}
          </div>
          <p className="mt-3 text-sm font-bold text-inksoft">
            Geçme barajı yüzde 60. Süre bitince sınav otomatik kapanır!
          </p>
          <Button accent="grape" className="mt-5 text-lg" onClick={() => setPhase("intro")}>
            🚀 Sınavı başlat
          </Button>
        </Card>
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((correctSoFar / totalQuestions) * 100);
    return (
      <div>
        <PageHeader emoji="🎯" title={title} />
        {pct >= 60 ? (
          <Card className="mb-4 border-mint bg-mintsoft text-center">
            <p className="font-display text-xl font-extrabold text-mintdark">
              🎓 Barajı geçtin! Gerçek sınavda da bu kafayla devam.
            </p>
          </Card>
        ) : (
          <Card className="mb-4 border-sun bg-sunsoft text-center">
            <p className="font-display text-lg font-extrabold text-sundark">
              Baraj yüzde 60. Yanlışlarını incele, zayıf konulara geri dön, bir daha dene! 💪
            </p>
          </Card>
        )}
        {timedOut ? (
          <Card className="mb-4 text-center">
            <p className="font-bold text-berrydark">⏰ Süre doldu, kalan sorular boş sayıldı.</p>
          </Card>
        ) : null}
        <Result
          correct={correctSoFar}
          total={totalQuestions}
          xpNote={`+${correctSoFar * XP.examCorrect} XP kazandın`}
          wrong={wrong}
          backHref="/deneme"
          backLabel="Deneme merkezine dön"
          onRetry={restart}
          extra={
            <div className="mx-auto mt-4 flex max-w-md flex-col gap-1.5">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-paper px-3 py-2 text-sm font-bold"
                >
                  <span>
                    {r.emoji} {r.title}
                  </span>
                  <span className={r.correct / r.total >= 0.6 ? "text-mintdark" : "text-berrydark"}>
                    {r.correct}/{r.total}
                  </span>
                </div>
              ))}
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Chip className="bg-grapesoft text-grape">
          Bölüm {sectionIndex + 1}/{sections.length}
        </Chip>
        <Chip className="bg-paper text-inksoft">
          {section.emoji} {section.title}
        </Chip>
        <span
          className={`ml-auto rounded-full px-4 py-1.5 font-display font-extrabold ${
            timeLeft <= 120 ? "bg-berrysoft text-berrydark" : "bg-sunsoft text-sundark"
          }`}
        >
          ⏱️ {mm}:{ss}
        </span>
      </div>

      {phase === "intro" ? (
        <Card className="text-center">
          <p className="text-5xl">{section.emoji}</p>
          <h2 className="mt-2 text-2xl font-extrabold">{section.title}</h2>
          <p className="mt-1 font-bold text-inksoft">{section.exercises.length} soru</p>
          {section.listening ? (
            <div className="mt-4 text-left">
              <TtsPlayer script={section.listening} onComplete={() => setListened(true)} />
              {!listened ? (
                <p className="mt-2 text-center text-sm font-bold text-inksoft">
                  Sorulara geçmeden önce parçayı sonuna kadar dinle.
                </p>
              ) : null}
            </div>
          ) : null}
          <Button
            accent="grape"
            className="mt-5"
            disabled={Boolean(section.listening) && !listened}
            onClick={() => setPhase("quiz")}
          >
            Bölüme başla →
          </Button>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {section.passage ? (
            <details open className="rounded-3xl border-2 border-line bg-card p-4">
              <summary className="cursor-pointer font-display font-extrabold">
                📄 Metin (aç/kapa)
              </summary>
              <div className="mt-3">
                {section.passage.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3 text-[15px] leading-relaxed last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </details>
          ) : null}
          <QuizEngine
            key={`${attempt}-${sectionIndex}`}
            exercises={section.exercises}
            mode="exam"
            onFinish={(r) => onSectionFinish(r.correct, r.total, r.wrong)}
          />
        </div>
      )}
    </div>
  );
}
