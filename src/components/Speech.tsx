"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui";

function pickVoices(): SpeechSynthesisVoice[] {
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => v.lang.startsWith("en"));
  const preferred = en.filter((v) => /Samantha|Daniel|Karen|Moira|Google US|Google UK/i.test(v.name));
  return preferred.length > 0 ? preferred : en;
}

export function speak(text: string, rate = 0.95) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voices = pickVoices();
  if (voices.length > 0) u.voice = voices[0];
  u.lang = voices[0]?.lang ?? "en-US";
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

export function SpeakButton({ text, className = "" }: { text: string; className?: string }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`inline-flex cursor-pointer items-center rounded-full bg-oceansoft px-3 py-1.5 text-ocean transition-transform active:scale-90 ${className}`}
      aria-label="Sesli dinle"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
      </svg>
    </button>
  );
}

export function TtsPlayer({
  script,
  onComplete,
  maxPlays,
}: {
  script: string;
  onComplete?: () => void;
  maxPlays?: number;
}) {
  const [status, setStatus] = useState<"idle" | "playing" | "done">("idle");
  const [plays, setPlays] = useState(0);
  const completed = useRef(false);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  const playsLeft = maxPlays === undefined ? Infinity : maxPlays - plays;

  function play() {
    const synth = window.speechSynthesis;
    if (!synth || playsLeft <= 0) return;
    synth.cancel();
    const voices = pickVoices();
    const lines = script.split("\n").filter((l) => l.trim().length > 0);
    setStatus("playing");
    setPlays((p) => p + 1);
    lines.forEach((line, i) => {
      const isB = line.startsWith("B:");
      const clean = line.replace(/^[AB]:\s*/, "");
      const u = new SpeechSynthesisUtterance(clean);
      const voice = isB && voices.length > 1 ? voices[1] : voices[0];
      if (voice) u.voice = voice;
      u.lang = voice?.lang ?? "en-US";
      u.rate = 0.92;
      u.pitch = isB ? 0.85 : 1;
      if (i === lines.length - 1) {
        u.onend = () => {
          setStatus("done");
          if (!completed.current) {
            completed.current = true;
            onComplete?.();
          }
        };
      }
      synth.speak(u);
    });
  }

  function stop() {
    window.speechSynthesis?.cancel();
    setStatus("idle");
  }

  return (
    <div className="flex items-center gap-3 rounded-3xl border-2 border-line bg-card p-4">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        {status === "playing" ? (
          <Button accent="berry" onClick={stop} className="!py-2">
            Durdur
          </Button>
        ) : (
          <Button accent="ocean" onClick={play} className="!py-2" disabled={playsLeft <= 0}>
            {status === "done" ? "Tekrar dinle" : "Dinlemeye başla"}
          </Button>
        )}
        <p className="text-sm font-bold text-inksoft">
          {maxPlays !== undefined
            ? playsLeft <= 0
              ? "Dinleme hakkın bitti, gerçek sınavdaki gibi 2 kez dinledin."
              : `Kalan dinleme hakkı: ${playsLeft} (sınavda her parça 2 kez çalınır)`
            : status === "playing"
              ? "Çalıyor... dikkatini ver!"
              : status === "done"
                ? "Bitti. Gerçek sınavda 2 kez dinletilir."
                : "Ses bilgisayarından gelecek, sesi aç."}
        </p>
      </div>
    </div>
  );
}
