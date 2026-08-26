export const levelTitles = [
  "Çaylak",
  "Meraklı Kaşif",
  "Kelime Avcısı",
  "Cümle Ustası",
  "Gramer Ninjası",
  "Okuma Kurdu",
  "Dil Cambazı",
  "Sınav Avcısı",
  "Küçük Profesör",
  "MÜYYES Efsanesi",
];

export function xpNeedFor(level: number): number {
  return 300 + (level - 1) * 130;
}

export function levelFromXp(xp: number) {
  let level = 1;
  let rest = xp;
  while (rest >= xpNeedFor(level) && level < 99) {
    rest -= xpNeedFor(level);
    level++;
  }
  const title = levelTitles[Math.min(level - 1, levelTitles.length - 1)];
  return { level, title, into: rest, need: xpNeedFor(level) };
}
