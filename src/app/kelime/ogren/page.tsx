"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { mixedVocabExercises } from "@/lib/vocabQuiz";
import { sfx } from "@/lib/sound";
import { Button, Card, LinkButton, PageHeader, ProgressBar } from "@/components/ui";
import { QuizEngine, type QuizResult } from "@/components/QuizEngine";
import { Result } from "@/components/Result";

const posLabels: Record<string, string> = {
  noun: "isim",
  verb: "fiil",
  adj: "sıfat",
  adv: "zarf",
  prep: "edat",
  conj: "bağlaç",
  phrase: "kalıp",
};

export default function OgrenPage() {
  const { state, ready, startWord, reviewWord } = useProgress();
  const batch = useMemo(
    () =>
      ready
        ? [...words]
            .filter((w) => !state.srs[w.id])
            .sort((a, b) => a.level - b.level)
            .slice(0, 10)
        : [],
    [ready]
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [phase, setPhase] = useState<"cards" | "quiz" | "done">("cards");
  const [result, setResult] = useState<QuizResult | null>(null);

  const quiz = useMemo(
    () => (phase === "quiz" ? mixedVocabExercises(batch, words) : []),
    [phase, batch]
  );

  if (!ready) {
    return (
      <div>
        <PageHeader title="Yeni Kelimeler" />
        <Card className="text-center">
          <p className="mt-2 font-bold text-inksoft">Deste hazırlanıyor...</p>
        </Card>
      </div>
    );
  }

  if (batch.length === 0) {
    return (
      <div>
        <PageHeader title="Yeni Kelimeler" />
        <Card className="text-center">
          <p className="mt-2 font-display text-xl font-extrabold">Destede yeni kelime kalmadı!</p>
          <p className="mt-1 text-inksoft">Hepsini eklemişsin. Şimdi iş tekrarda.</p>
          <LinkButton href="/kelime/tekrar" accent="grape" className="mt-4">
            Tekrara geç
          </LinkButton>
        </Card>
      </div>
    );
  }

  if (phase === "done" && result) {
    return (
      <div>
        <PageHeader title="Yeni Kelimeler" />
        <Result
          correct={result.correct}
          total={result.total}
          xpNote="Yeni kelimeler desteye eklendi"
          wrong={result.wrong}
          backHref="/kelime"
          backLabel="Kelimeye dön"
        />
      </div>
    );
  }

  if (phase === "quiz") {
    return (
      <div>
        <PageHeader title="Mini Test" desc="Az önce gördüğün 10 kelimeyi hemen sınayalım." />
        <QuizEngine
          exercises={quiz}
          record={(ex, correct) => reviewWord(ex.id, correct)}
          onFinish={(r) => {
            setResult(r);
            setPhase("done");
          }}
        />
      </div>
    );
  }

  const word = batch[index];

  return (
    <div>
      <PageHeader title="Yeni Kelimeler" desc="Karta dokun, çevir, tanış. Sonra mini test var!" />
      <div className="mb-4">
        <ProgressBar value={index} max={batch.length} accent="ocean" />
      </div>
      <AnimatePresence mode="wait">
        <motion.button
          key={word.id + (flipped ? "-b" : "-f")}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.18 }}
          onClick={() => {
            if (!flipped) {
              sfx.click();
              setFlipped(true);
            }
          }}
          className="block w-full cursor-pointer rounded-3xl border-2 border-line bg-card p-8 text-center"
        >
          {flipped ? (
            <div>
              <p className="font-display text-3xl font-extrabold text-grape">{word.tr}</p>
              <p className="mt-4 rounded-2xl bg-paper p-4 text-lg font-bold">{word.example}</p>
              <p className="mt-2 text-sm font-bold text-inksoft">{word.exampleTr}</p>
              {word.synonyms && word.synonyms.length > 0 ? (
                <p className="mt-3 flex flex-wrap justify-center gap-2">
                  {word.synonyms.map((s) => (
                    <span key={s} className="rounded-full bg-mintsoft px-3 py-1 text-sm font-bold text-mintdark">
                      ≈ {s}
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          ) : (
            <div>
              <span className="rounded-full bg-oceansoft px-3 py-1 text-sm font-bold text-oceandark">
                {posLabels[word.pos]} · seviye {word.level}
              </span>
              <p className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">{word.en}</p>
              <p className="mt-6 text-sm font-bold text-inksoft">Dokun ve anlamını gör</p>
            </div>
          )}
        </motion.button>
      </AnimatePresence>
      <div className="mt-5 flex justify-center gap-3">
        {flipped ? (
          <Button
            accent="mint"
            className="anim-pop text-lg"
            onClick={() => {
              startWord(word.id);
              setFlipped(false);
              if (index === batch.length - 1) setPhase("quiz");
              else setIndex(index + 1);
            }}
          >
            Tanıştık! Sıradaki →
          </Button>
        ) : (
          <Button accent="ocean" onClick={() => setFlipped(true)}>
            Kartı çevir
          </Button>
        )}
      </div>
      <p className="mt-3 text-center text-sm font-bold text-inksoft">
        {index + 1} / {batch.length}
      </p>
    </div>
  );
}
