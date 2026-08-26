import type { Exercise, Word } from "@/data/types";
import { sample, shuffle } from "./random";

export type Direction = "en-tr" | "tr-en" | "syn";

function distractorPool(word: Word, pool: Word[]): Word[] {
  const samePos = pool.filter((w) => w.id !== word.id && w.pos === word.pos);
  const rest = pool.filter((w) => w.id !== word.id && w.pos !== word.pos);
  return [...shuffle(samePos), ...shuffle(rest)];
}

export function exerciseFromWord(word: Word, pool: Word[], direction: Direction): Exercise {
  if (direction === "syn" && word.synonyms && word.synonyms.length > 0) {
    const correct = word.synonyms[0];
    const others = sample(
      pool.filter((w) => w.id !== word.id && w.synonyms && w.synonyms.length > 0),
      3
    ).map((w) => w.synonyms![0]);
    const options = shuffle([correct, ...others]);
    return {
      id: word.id,
      prompt: `Which one is closest in meaning to "${word.en}"?`,
      options,
      answer: options.indexOf(correct),
      explain: `${word.en} = ${correct} (${word.tr}). Örnek: ${word.example}`,
    };
  }
  if (direction === "tr-en") {
    const distractors = distractorPool(word, pool).slice(0, 3).map((w) => w.en);
    const options = shuffle([word.en, ...distractors]);
    return {
      id: word.id,
      prompt: `"${word.tr}" hangisi?`,
      options,
      answer: options.indexOf(word.en),
      explain: `${word.en}: ${word.tr}. Örnek: ${word.example}`,
    };
  }
  const distractors = distractorPool(word, pool).slice(0, 3).map((w) => w.tr);
  const options = shuffle([word.tr, ...distractors]);
  return {
    id: word.id,
    prompt: `"${word.en}" ne demek?`,
    options,
    answer: options.indexOf(word.tr),
    explain: `${word.en}: ${word.tr}. Örnek: ${word.example}`,
  };
}

export function mixedVocabExercises(wordsToAsk: Word[], pool: Word[]): Exercise[] {
  return wordsToAsk.map((w, i) => {
    const canSyn = w.synonyms && w.synonyms.length > 0;
    const dir: Direction = canSyn && i % 4 === 3 ? "syn" : i % 2 === 0 ? "en-tr" : "tr-en";
    return exerciseFromWord(w, pool, dir);
  });
}
