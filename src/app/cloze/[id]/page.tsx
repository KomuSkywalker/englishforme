"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { clozePassages } from "@/lib/data";
import { sfx } from "@/lib/sound";
import { Button, Card, LinkButton, PageHeader } from "@/components/ui";
import { Result } from "@/components/Result";

const letters = ["A", "B", "C", "D"];

export default function ClozeDetay() {
  const params = useParams<{ id: string }>();
  const passage = clozePassages.find((p) => p.id === params.id);
  const { answer, tally, finishSection, addXp } = useProgress();
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => passage?.blanks.map(() => null) ?? []
  );
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState(false);

  const parts = useMemo(() => (passage ? passage.text.split(/\{(\d+)\}/) : []), [passage]);

  if (!passage) {
    return (
      <Card className="text-center">
        <p className="text-5xl">🕳️</p>
        <p className="mt-2 font-display text-xl font-extrabold">Test bulunamadı</p>
        <LinkButton href="/cloze" accent="grape" className="mt-4">
          Testlere dön
        </LinkButton>
      </Card>
    );
  }

  const allFilled = answers.every((a) => a !== null);
  const correctCount = answers.filter((a, i) => a === passage.blanks[i].answer).length;

  function choose(optIndex: number) {
    if (checked) return;
    sfx.click();
    setAnswers((prev) => {
      const next = [...prev];
      next[active] = optIndex;
      const firstEmpty = next.findIndex((a) => a === null);
      if (firstEmpty !== -1) setActive(firstEmpty);
      return next;
    });
  }

  function check() {
    setChecked(true);
    answers.forEach((a, i) => answer(a === passage!.blanks[i].answer));
    const pct = Math.round((correctCount / passage!.blanks.length) * 100);
    finishSection("cloze", passage!.id, pct);
    tally("cloze");
    addXp(20);
  }

  function reset() {
    setAnswers(passage!.blanks.map(() => null));
    setActive(0);
    setChecked(false);
  }

  return (
    <div>
      <PageHeader emoji="🕳️" title={passage.title} desc="Boşluğa dokun, alttan doğru parçayı seç." />
      <Card>
        <p className="text-[16px] leading-loose">
          {parts.map((part, i) => {
            if (i % 2 === 0) return <span key={i}>{part}</span>;
            const idx = Number(part) - 1;
            const chosen = answers[idx];
            const isActive = active === idx && !checked;
            let cls = "border-dashed border-inksoft/40 bg-paper text-inksoft";
            if (chosen !== null) cls = "border-grape bg-grapesoft text-grapedark";
            if (isActive) cls = "border-grape bg-grapesoft text-grapedark ring-2 ring-grape/40";
            if (checked)
              cls =
                chosen === passage.blanks[idx].answer
                  ? "border-mint bg-mintsoft text-mintdark"
                  : "border-berry bg-berrysoft text-berrydark";
            return (
              <button
                key={i}
                onClick={() => !checked && setActive(idx)}
                className={`mx-1 inline-block min-w-14 cursor-pointer rounded-xl border-2 px-2 py-0.5 align-baseline font-bold transition-all ${cls}`}
              >
                {chosen !== null ? passage.blanks[idx].options[chosen] : idx + 1}
              </button>
            );
          })}
        </p>
      </Card>

      {!checked ? (
        <>
          <Card className="mt-4">
            <p className="mb-3 font-display font-extrabold">
              Boşluk {active + 1} için hangisi geliyor?
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {passage.blanks[active].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  className={`flex cursor-pointer items-center gap-2 rounded-2xl border-2 p-3 text-left font-bold transition-all active:scale-[0.98] ${
                    answers[active] === i
                      ? "border-grape bg-grapesoft"
                      : "border-line bg-card hover:border-grape/50"
                  }`}
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-paper text-sm font-extrabold text-inksoft">
                    {letters[i]}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </Card>
          <div className="mt-4 flex justify-end">
            <Button accent="grape" disabled={!allFilled} onClick={check}>
              Kontrol et ✅
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          <Result
            correct={correctCount}
            total={passage.blanks.length}
            xpNote="Cloze bonusu +20 XP"
            backHref="/cloze"
            backLabel="Testlere dön"
            onRetry={reset}
          />
          <Card>
            <h2 className="mb-3 font-display text-lg font-extrabold">🔎 Boşluk boşluk açıklama</h2>
            <div className="flex flex-col gap-2">
              {passage.blanks.map((b, i) => {
                const ok = answers[i] === b.answer;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border-2 p-3 ${
                      ok ? "border-mint bg-mintsoft/60" : "border-berry bg-berrysoft/60"
                    }`}
                  >
                    <p className="font-bold">
                      {i + 1}. boşluk: <span className="text-mintdark">{b.options[b.answer]}</span>
                      {!ok && answers[i] !== null ? (
                        <span className="text-berrydark"> (senin cevabın: {b.options[answers[i]!]})</span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-sm text-inksoft">{b.explain}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
