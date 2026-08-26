"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Exercise } from "@/data/types";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/fx";
import { Button, ProgressBar } from "./ui";

export type WrongItem = { ex: Exercise; picked: number };
export type QuizResult = { correct: number; total: number; wrong: WrongItem[] };

const letters = ["A", "B", "C", "D", "E"];

function PromptText({ text, filled }: { text: string; filled?: string }) {
  const parts = text.split("___");
  if (parts.length === 1) return <span>{text}</span>;
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 &&
            (filled ? (
              <span className="mx-1 rounded-lg bg-mintsoft px-2 font-bold text-mintdark">
                {filled}
              </span>
            ) : (
              <span className="mx-1 inline-block min-w-16 translate-y-1 border-b-4 border-dashed border-inksoft/40">
                &nbsp;
              </span>
            ))}
        </span>
      ))}
    </span>
  );
}

export function QuizEngine({
  exercises,
  mode = "practice",
  record,
  onFinish,
}: {
  exercises: Exercise[];
  mode?: "practice" | "exam";
  record?: (ex: Exercise, correct: boolean) => void;
  onFinish: (result: QuizResult) => void;
}) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrong, setWrong] = useState<WrongItem[]>([]);
  const [examAnswers, setExamAnswers] = useState<number[]>([]);

  const ex = exercises[index];
  const isLast = index === exercises.length - 1;

  function choose(i: number) {
    if (mode === "practice") {
      if (answered) return;
      const correct = i === ex.answer;
      setPicked(i);
      setAnswered(true);
      record?.(ex, correct);
      if (correct) {
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        setCorrectCount((c) => c + 1);
        if (nextCombo > 0 && nextCombo % 5 === 0) {
          sfx.combo();
          burst();
        } else {
          sfx.correct();
        }
      } else {
        setCombo(0);
        setWrong((w) => [...w, { ex, picked: i }]);
        sfx.wrong();
      }
    } else {
      sfx.click();
      setPicked(i);
    }
  }

  function next() {
    if (mode === "exam") {
      if (picked === null) return;
      const correct = picked === ex.answer;
      const nextAnswers = [...examAnswers, picked];
      const nextCorrect = correctCount + (correct ? 1 : 0);
      const nextWrong = correct ? wrong : [...wrong, { ex, picked }];
      if (isLast) {
        onFinish({ correct: nextCorrect, total: exercises.length, wrong: nextWrong });
        return;
      }
      setExamAnswers(nextAnswers);
      setCorrectCount(nextCorrect);
      setWrong(nextWrong);
      setIndex(index + 1);
      setPicked(null);
      return;
    }
    if (isLast) {
      onFinish({ correct: correctCount, total: exercises.length, wrong });
      return;
    }
    setIndex(index + 1);
    setPicked(null);
    setAnswered(false);
  }

  const showFeedback = mode === "practice" && answered;
  const pickedCorrect = picked !== null && picked === ex.answer;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={index + (showFeedback ? 1 : 0)} max={exercises.length} accent="grape" className="flex-1" />
        <span className="shrink-0 text-sm font-bold text-inksoft">
          {index + 1} / {exercises.length}
        </span>
        {combo >= 2 && mode === "practice" ? (
          <motion.span
            key={combo}
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            className="shrink-0 rounded-full bg-sunsoft px-2.5 py-1 text-sm font-extrabold text-sundark"
          >
            🔥 x{combo}
          </motion.span>
        ) : null}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-5 rounded-3xl border-2 border-line bg-card p-5">
            <p className="text-lg font-bold leading-relaxed sm:text-xl">
              <PromptText
                text={ex.prompt}
                filled={showFeedback ? ex.options[ex.answer] : undefined}
              />
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {ex.options.map((opt, i) => {
              let style = "border-line bg-card hover:border-grape/50 hover:bg-grapesoft/40";
              if (mode === "exam" && picked === i) {
                style = "border-grape bg-grapesoft";
              }
              if (showFeedback) {
                if (i === ex.answer) style = "border-mint bg-mintsoft";
                else if (i === picked) style = "border-berry bg-berrysoft anim-shake";
                else style = "border-line bg-card opacity-50";
              }
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={showFeedback}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-4 text-left font-bold transition-all active:scale-[0.98] disabled:cursor-default ${style}`}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-paper font-display text-sm font-extrabold text-inksoft">
                    {letters[i]}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {showFeedback ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 rounded-2xl border-2 p-4 ${
                pickedCorrect ? "border-mint bg-mintsoft" : "border-berry bg-berrysoft"
              }`}
            >
              <p className="font-display font-extrabold">
                {pickedCorrect ? "Doğru! 🎉" : `Doğru cevap: ${letters[ex.answer]}) ${ex.options[ex.answer]}`}
              </p>
              <p className="mt-1 text-sm">{ex.explain}</p>
            </motion.div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex justify-end">
        {mode === "exam" ? (
          <Button accent="grape" onClick={next} disabled={picked === null}>
            {isLast ? "Bitir" : "Sonraki"} →
          </Button>
        ) : showFeedback ? (
          <Button accent={pickedCorrect ? "mint" : "grape"} onClick={next} className="anim-pop">
            {isLast ? "Bitir" : "Devam et"} →
          </Button>
        ) : null}
      </div>
    </div>
  );
}
