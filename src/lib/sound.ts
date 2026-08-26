let enabled = true;
let ctx: AudioContext | null = null;

export function setSoundEnabled(v: boolean) {
  enabled = v;
}

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = "sine", vol = 0.12) {
  const ac = audio();
  if (!ac || !enabled) return;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ac.currentTime + start);
  gain.gain.linearRampToValueAtTime(vol, ac.currentTime + start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + start + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + dur + 0.05);
}

export const sfx = {
  correct() {
    tone(660, 0, 0.12, "sine", 0.1);
    tone(880, 0.09, 0.16, "sine", 0.1);
  },
  wrong() {
    tone(220, 0, 0.2, "square", 0.05);
    tone(180, 0.12, 0.22, "square", 0.05);
  },
  click() {
    tone(500, 0, 0.05, "triangle", 0.06);
  },
  combo() {
    tone(700, 0, 0.09, "sine", 0.1);
    tone(900, 0.07, 0.09, "sine", 0.1);
    tone(1150, 0.14, 0.14, "sine", 0.1);
  },
  levelUp() {
    tone(523, 0, 0.13, "sine", 0.12);
    tone(659, 0.11, 0.13, "sine", 0.12);
    tone(784, 0.22, 0.13, "sine", 0.12);
    tone(1046, 0.33, 0.3, "sine", 0.12);
  },
  win() {
    tone(523, 0, 0.11, "triangle", 0.11);
    tone(659, 0.1, 0.11, "triangle", 0.11);
    tone(784, 0.2, 0.11, "triangle", 0.11);
    tone(659, 0.3, 0.09, "triangle", 0.09);
    tone(1046, 0.38, 0.35, "triangle", 0.12);
  },
  tick() {
    tone(880, 0, 0.04, "sine", 0.04);
  },
};
