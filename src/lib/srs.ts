import { addDays, dateKey } from "./dates";

export type SrsEntry = {
  box: number;
  due: string;
  seen: number;
  correct: number;
  wrong: number;
};

const intervals = [0, 1, 2, 4, 7, 12];

export function newEntry(): SrsEntry {
  return { box: 0, due: dateKey(), seen: 0, correct: 0, wrong: 0 };
}

export function reviewEntry(entry: SrsEntry, correct: boolean): SrsEntry {
  const box = correct ? Math.min(entry.box + 1, 5) : 1;
  return {
    box,
    due: addDays(dateKey(), intervals[box]),
    seen: entry.seen + 1,
    correct: entry.correct + (correct ? 1 : 0),
    wrong: entry.wrong + (correct ? 0 : 1),
  };
}

export function isDue(entry: SrsEntry, today: string = dateKey()): boolean {
  return entry.due <= today;
}

export function isLearned(entry: SrsEntry): boolean {
  return entry.box >= 3;
}

export function isMastered(entry: SrsEntry): boolean {
  return entry.box >= 5;
}
