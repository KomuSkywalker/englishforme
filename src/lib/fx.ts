import confetti from "canvas-confetti";

const palette = ["#7c3aed", "#f59e0b", "#10b981", "#0ea5e9", "#ec4899"];

export function burst() {
  confetti({
    particleCount: 70,
    spread: 75,
    origin: { y: 0.7 },
    colors: palette,
    disableForReducedMotion: true,
  });
}

export function bigCelebration() {
  const end = Date.now() + 1200;
  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: palette,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: palette,
      disableForReducedMotion: true,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

export function starRain() {
  confetti({
    particleCount: 45,
    spread: 100,
    scalar: 1.2,
    shapes: ["star"],
    colors: ["#f59e0b", "#fbbf24", "#fde68a"],
    origin: { y: 0.4 },
    disableForReducedMotion: true,
  });
}

export type ToastPayload = { emoji: string; title: string; body?: string };

export function toast(payload: ToastPayload) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ToastPayload>("efm-toast", { detail: payload }));
}
