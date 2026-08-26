"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useProgress } from "@/lib/progress";
import { writingPrompts } from "@/lib/data";
import { burst, toast } from "@/lib/fx";
import { sfx } from "@/lib/sound";
import { Button, Card, Chip, LinkButton, PageHeader } from "@/components/ui";

const linkers = [
  "however",
  "therefore",
  "moreover",
  "although",
  "in addition",
  "on the other hand",
  "for example",
  "for instance",
  "as a result",
  "in conclusion",
  "firstly",
  "secondly",
  "finally",
  "despite",
  "whereas",
  "in my opinion",
];

export default function YazmaDetay() {
  const params = useParams<{ id: string }>();
  const prompt = writingPrompts.find((p) => p.id === params.id);
  const { state, finishWriting, tally, addXp } = useProgress();
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!prompt) return;
    try {
      setText(localStorage.getItem("efm-essay-" + prompt.id) ?? "");
    } catch {}
    setLoaded(true);
  }, [prompt?.id]);

  useEffect(() => {
    if (!prompt || !loaded) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem("efm-essay-" + prompt.id, text);
      } catch {}
    }, 400);
    return () => clearTimeout(t);
  }, [text, prompt?.id, loaded]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((s) => (s === null ? null : s - 1)), 1000);
    return () => clearInterval(t);
  }, [timeLeft !== null && timeLeft > 0]);

  const wordCount = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean).length,
    [text]
  );
  const foundLinkers = useMemo(
    () => linkers.filter((l) => text.toLowerCase().includes(l)),
    [text]
  );

  if (!prompt) {
    return (
      <Card className="text-center">
        <p className="text-5xl">📝</p>
        <p className="mt-2 font-display text-xl font-extrabold">Konu bulunamadı</p>
        <LinkButton href="/yazma" accent="grape" className="mt-4">
          Atölyeye dön
        </LinkButton>
      </Card>
    );
  }

  const done = state.writingDone.includes(prompt.id);
  const countCls =
    wordCount >= 230 && wordCount <= 280
      ? "bg-mintsoft text-mintdark"
      : wordCount >= 180
        ? "bg-sunsoft text-sundark"
        : "bg-paper text-inksoft";

  function complete() {
    finishWriting(prompt!.id);
    tally("writing");
    addXp(40);
    burst();
    sfx.win();
    toast({ emoji: "✍️", title: "Essay tamamlandı!", body: "+40 XP. Kendini bir hocaya da okutursan süper olur." });
  }

  return (
    <div>
      <PageHeader emoji="✍️" title={prompt.typeTr + " Essay"} />
      <div className="flex flex-col gap-4">
        <Card className="border-grape bg-grapesoft/40">
          <p className="font-display text-lg font-extrabold leading-snug">{prompt.prompt}</p>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 font-display text-lg font-extrabold">🗺️ Plan (böyle kur)</h2>
            <ol className="flex flex-col gap-2">
              {prompt.plan.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm font-bold">
                  <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-grapesoft text-xs text-grape">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <h2 className="mb-2 font-display text-lg font-extrabold">🧰 Hazır kalıplar</h2>
            <p className="mb-2 text-xs font-bold text-inksoft">Dokununca panoya kopyalanır.</p>
            <div className="flex flex-wrap gap-1.5">
              {prompt.phrases.map((ph) => (
                <button
                  key={ph}
                  onClick={() => {
                    navigator.clipboard?.writeText(ph);
                    sfx.click();
                    toast({ emoji: "📋", title: "Kopyalandı", body: ph });
                  }}
                  className="cursor-pointer rounded-full bg-paper px-3 py-1.5 text-sm font-bold transition-colors hover:bg-sunsoft"
                >
                  {ph}
                </button>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h2 className="font-display text-lg font-extrabold">📝 Taslağın</h2>
            <Chip className={countCls}>{wordCount} kelime / hedef 250</Chip>
            {timeLeft === null ? (
              <button
                onClick={() => setTimeLeft(40 * 60)}
                className="cursor-pointer rounded-full bg-berrysoft px-3 py-1 text-sm font-bold text-berrydark"
              >
                ⏱️ 40 dk sınav modu
              </button>
            ) : (
              <Chip className={timeLeft <= 300 ? "bg-berrysoft text-berrydark" : "bg-sunsoft text-sundark"}>
                ⏱️ {Math.floor(Math.max(0, timeLeft) / 60)}:{String(Math.max(0, timeLeft) % 60).padStart(2, "0")}
              </Chip>
            )}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your essay here... (taslak otomatik kaydedilir)"
            spellCheck={false}
            className="min-h-72 w-full resize-y rounded-2xl border-2 border-line bg-paper p-4 text-[15px] leading-relaxed outline-none focus:border-grape"
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-inksoft">Bağlaç radarı:</span>
            {foundLinkers.length === 0 ? (
              <span className="text-sm font-bold text-inksoft/60">
                henüz linker yok, however/therefore/although dene 😉
              </span>
            ) : (
              foundLinkers.map((l) => (
                <Chip key={l} className="bg-mintsoft text-mintdark">
                  {l} ✓
                </Chip>
              ))
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs font-bold text-inksoft">
              {wordCount < 180
                ? "Bitir butonu 180 kelimede açılır."
                : wordCount > 300
                  ? "Biraz uzadı, 250 civarına toparla."
                  : "Süper, sınav bandındasın!"}
            </p>
            {done ? (
              <Chip className="bg-mintsoft text-mintdark">Tamamlandı ✅</Chip>
            ) : (
              <Button accent="mint" disabled={wordCount < 180} onClick={complete}>
                Tamamladım ✅
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
