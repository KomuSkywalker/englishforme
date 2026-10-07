import { hashString, seededShuffle } from "./random";

export type QuestKind =
  | "words"
  | "grammar"
  | "reading"
  | "listening"
  | "cloze"
  | "game"
  | "exam"
  | "writing";

export type Quest = {
  id: string;
  kind: QuestKind;
  target: number;
  label: string;
  xp: number;
  href: string;
};

export const allQuests: Quest[] = [
  { id: "q-words-30", kind: "words", target: 30, label: "30 kelime tekrarı yap", xp: 60, href: "/kelime" },
  { id: "q-words-15", kind: "words", target: 15, label: "15 kelime tekrarı yap", xp: 35, href: "/kelime" },
  { id: "q-grammar-20", kind: "grammar", target: 20, label: "20 gramer sorusu çöz", xp: 60, href: "/gramer" },
  { id: "q-reading-1", kind: "reading", target: 1, label: "1 okuma parçası bitir", xp: 50, href: "/okuma" },
  { id: "q-listening-1", kind: "listening", target: 1, label: "1 dinleme yap", xp: 50, href: "/dinleme" },
  { id: "q-cloze-1", kind: "cloze", target: 1, label: "1 boşluk doldurma çöz", xp: 45, href: "/cloze" },
  { id: "q-game-2", kind: "game", target: 2, label: "2 oyun oyna", xp: 40, href: "/oyunlar" },
  { id: "q-exam-1", kind: "exam", target: 1, label: "1 mini deneme çöz", xp: 80, href: "/deneme" },
  { id: "q-writing-1", kind: "writing", target: 1, label: "1 essay planı çalış", xp: 40, href: "/yazma" },
];

export function questsForDay(day: string): Quest[] {
  const seed = hashString("efm-quests-" + day);
  const shuffled = seededShuffle(allQuests, seed);
  const picked: Quest[] = [];
  const kinds = new Set<QuestKind>();
  for (const q of shuffled) {
    if (kinds.has(q.kind)) continue;
    kinds.add(q.kind);
    picked.push(q);
    if (picked.length === 4) break;
  }
  return picked;
}

export const allQuestsBonusXp = 150;
