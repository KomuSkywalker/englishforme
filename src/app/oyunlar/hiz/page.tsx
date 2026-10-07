"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { words } from "@/lib/data";
import { exerciseFromWord } from "@/lib/vocabQuiz";
import { shuffle } from "@/lib/random";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/fx";
import { Button, Card, LinkButton, PageHeader } from "@/components/ui";

const DURATION = 60;

export default function HizTuruPage() {
  const { addXp, tally, answer } = useProgress();
  const [phase, setPhase] = useState<"idle" | "play" | "done">("idle");
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [queue, setQueue] = useState(() => shuffle(words));
  const [qIndex, setQIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);

  const current = useMemo(() => {
    const w = queue[qIndex % queue.length];
    return exerciseFromWord(w, words, qIndex % 2 === 0 ? "en-tr" : "tr-en");
  }, [queue, qIndex]);

  useEffect(() => {
    if (phase !== "play") return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 6 && s > 1) sfx.tick();
        if (s <= 1) {
          clearInterval(t);
          setPhase("done");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    const bonus = correct * 5 + bestCombo * 3;
    addXp(bonus);
    tally("game");
    if (correct >= 10) burst();
    sfx.win();
  }, [phase]);

  function start() {
    setQueue(shuffle(words));
    setQIndex(0);
    setCorrect(0);
    setTotal(0);
    setCombo(0);
    setBestCombo(0);
    setTimeLeft(DURATION);
    setPhase("play");
  }

  function pickOption(i: number) {
    const ok = i === current.answer;
    answer(ok, { xp: ok ? 6 : 1, isWord: true });
    setTotal((t) => t + 1);
    if (ok) {
      sfx.correct();
      setCorrect((c) => c + 1);
      setCombo((c) => {
        const n = c + 1;
        setBestCombo((b) => Math.max(b, n));
        if (n % 5 === 0) sfx.combo();
        return n;
      });
      setFlash("ok");
    } else {
      sfx.wrong();
      setCombo(0);
      setFlash("no");
    }
    setTimeout(() => setFlash(null), 180);
    setQIndex((i2) => i2 + 1);
  }

  if (phase === "idle") {
    return (
      <div>
        <PageHeader title="Hız Turu" desc="60 saniye, sınırsız soru. Ne kadar hızlısın?" />
        <Card className="text-center">
          <p className="mx-auto mt-3 max-w-sm font-bold text-inksoft">
            Doğru cevap 6 XP, üst üste 5 doğru combo sesi getirir. Süre bitince combo bonusu da eklenir!
          </p>
          <Button accent="sun" className="mt-5 text-lg" onClick={start}>
            Başlat!
          </Button>
        </Card>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div>
        <PageHeader title="Hız Turu" />
        <Card className="text-center">
          <h2 className="text-3xl font-extrabold">{correct} doğru</h2>
          <p className="mt-1 text-inksoft">
            {total} soruda {correct} doğru, en iyi combo x{bestCombo}
          </p>
          <p className="mt-3 inline-block rounded-full bg-sunsoft px-4 py-1.5 font-bold text-sundark">
            Tur bonusu: +{correct * 5 + bestCombo * 3} XP
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button accent="sun" onClick={start}>
              Bir tur daha
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
      <div className="mb-4 flex items-center gap-3 font-display font-extrabold">
        <span
          className={`rounded-full px-4 py-1.5 text-lg ${
            timeLeft <= 10 ? "bg-berrysoft text-berrydark anim-shake" : "bg-sunsoft text-sundark"
          }`}
        >
          Süre {timeLeft}s
        </span>
        <span className="rounded-full bg-mintsoft px-4 py-1.5 text-mintdark">Doğru {correct}</span>
        {combo >= 2 ? (
          <motion.span
            key={combo}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="rounded-full bg-grapesoft px-4 py-1.5 text-grape"
          >
            Seri x{combo}
          </motion.span>
        ) : null}
      </div>
      <motion.div
        key={qIndex}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.12 }}
        className={`rounded-3xl border-4 p-5 transition-colors ${
          flash === "ok" ? "border-mint" : flash === "no" ? "border-berry" : "border-line"
        } bg-card`}
      >
        <p className="text-center font-display text-2xl font-extrabold">{current.prompt}</p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => pickOption(i)}
              className="cursor-pointer rounded-2xl border-2 border-line bg-paper p-3.5 font-bold transition-all hover:border-sun active:scale-[0.97]"
            >
              {opt}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
