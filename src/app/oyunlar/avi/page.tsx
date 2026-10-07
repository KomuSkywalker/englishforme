"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { sample } from "@/lib/random";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/fx";
import { Button, Card, LinkButton, PageHeader } from "@/components/ui";
import type { Word } from "@/data/types";

const ROUNDS = 5;
const MAX_WRONG = 6;
const keyboard = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function pickWords(): Word[] {
  const pool = words.filter(
    (w) => w.pos !== "phrase" && !w.en.includes(" ") && w.en.length >= 4 && w.en.length <= 10
  );
  return sample(pool, ROUNDS);
}

const posLabels: Record<string, string> = {
  noun: "isim",
  verb: "fiil",
  adj: "sıfat",
  adv: "zarf",
  prep: "edat",
  conj: "bağlaç",
  phrase: "kalıp",
};

export default function KelimeAviPage() {
  const { addXp, tally, answer } = useProgress();
  const [roundWords, setRoundWords] = useState<Word[]>(pickWords);
  const [roundIndex, setRoundIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [roundState, setRoundState] = useState<"play" | "won" | "lost">("play");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const word = roundWords[roundIndex];
  const target = word.en.toUpperCase();
  const revealed = target
    .split("")
    .map((ch) => (guessed.has(ch) ? ch : null));

  function guess(letter: string) {
    if (roundState !== "play" || guessed.has(letter)) return;
    const next = new Set(guessed);
    next.add(letter);
    setGuessed(next);
    if (target.includes(letter)) {
      sfx.correct();
      const allFound = target.split("").every((ch) => next.has(ch));
      if (allFound) {
        setRoundState("won");
        setScore((s) => s + 1);
        answer(true, { xp: 20, isWord: true });
        burst();
        sfx.win();
      }
    } else {
      sfx.wrong();
      const wrongs = wrongCount + 1;
      setWrongCount(wrongs);
      if (wrongs >= MAX_WRONG) {
        setRoundState("lost");
        answer(false, { xp: 2, isWord: true });
      }
    }
  }

  function nextRound() {
    if (roundIndex === ROUNDS - 1) {
      setFinished(true);
      tally("game");
      addXp(score * 5);
      sfx.win();
      return;
    }
    setRoundIndex((i) => i + 1);
    setGuessed(new Set());
    setWrongCount(0);
    setRoundState("play");
  }

  function restart() {
    setRoundWords(pickWords());
    setRoundIndex(0);
    setGuessed(new Set());
    setWrongCount(0);
    setRoundState("play");
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div>
        <PageHeader title="Kelime Avı" />
        <Card className="text-center">
          <h2 className="text-3xl font-extrabold">
            {score} / {ROUNDS} kelime avlandı
          </h2>
          <p className="mt-3 inline-block rounded-full bg-sunsoft px-4 py-1.5 font-bold text-sundark">
            Av bonusu: +{score * 5} XP
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button accent="ocean" onClick={restart}>
              Yeni av
            </Button>
            <LinkButton href="/oyunlar" accent="ghost">
              Oyun salonuna dön
            </LinkButton>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Kelime Avı" desc="Harf harf tahmin et, 6 yanlış hakkın var." />
      <div className="mb-4 flex items-center gap-3 font-display font-extrabold">
        <span className="rounded-full bg-grapesoft px-4 py-1.5 text-grape">
          {roundIndex + 1} / {ROUNDS}
        </span>
        <span className="rounded-full bg-mintsoft px-4 py-1.5 text-mintdark">Avlanan {score}</span>
        <span className="ml-auto rounded-full bg-berrysoft px-4 py-1.5 text-berrydark">
          Kalan hak {MAX_WRONG - wrongCount}
        </span>
      </div>
      <Card className="text-center">
        <motion.div
          key={wrongCount + roundState}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="mx-auto flex max-w-xs gap-1.5"
        >
          {Array.from({ length: MAX_WRONG }, (_, i) => (
            <span
              key={i}
              className={`h-2.5 flex-1 rounded-full ${i < MAX_WRONG - wrongCount ? "bg-mint" : "bg-berrysoft"}`}
            />
          ))}
        </motion.div>
        <p className="mt-3 rounded-2xl bg-paper px-3 py-2 text-sm font-bold text-inksoft">
          İpucu: {word.tr} ({posLabels[word.pos]})
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {revealed.map((ch, i) => (
            <span
              key={i}
              className={`grid h-12 w-10 place-items-center rounded-xl border-2 font-display text-xl font-extrabold ${
                ch
                  ? "border-mint bg-mintsoft text-mintdark"
                  : roundState === "lost"
                    ? "border-berry bg-berrysoft text-berrydark"
                    : "border-line bg-card"
              }`}
            >
              {ch ?? (roundState === "lost" ? target[i] : "")}
            </span>
          ))}
        </div>
        {roundState === "play" ? (
          <div className="mt-5 flex flex-col items-center gap-1.5">
            {keyboard.map((row) => (
              <div key={row} className="flex gap-1.5">
                {row.split("").map((letter) => {
                  const used = guessed.has(letter);
                  const wasCorrect = used && target.includes(letter);
                  return (
                    <button
                      key={letter}
                      onClick={() => guess(letter)}
                      disabled={used}
                      className={`h-10 w-8 cursor-pointer rounded-lg border-2 font-bold transition-all active:scale-90 sm:w-9 ${
                        !used
                          ? "border-line bg-card hover:border-ocean"
                          : wasCorrect
                            ? "border-mint bg-mintsoft text-mintdark"
                            : "border-line bg-line text-inksoft/50"
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5">
            {roundState === "won" ? (
              <p className="font-display text-lg font-extrabold text-mintdark">
                Avlandı! {word.en} = {word.tr} (+20 XP)
              </p>
            ) : (
              <p className="font-display text-lg font-extrabold text-berrydark">
                Kaçtı! Doğrusu: {word.en} = {word.tr}
              </p>
            )}
            <p className="mt-1 text-sm font-bold text-inksoft">{word.example}</p>
            <Button accent="ocean" onClick={nextRound} className="anim-pop mt-4">
              {roundIndex === ROUNDS - 1 ? "Bitir" : "Sıradaki kelime"} →
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
