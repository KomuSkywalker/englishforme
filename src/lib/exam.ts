import type { ClozePassage, Exercise } from "@/data/types";
import { clozePassages, grammarTopics, listeningTracks, readingPassages, words } from "./data";
import { sample } from "./random";
import { mixedVocabExercises } from "./vocabQuiz";

export type ExamSection = {
  title: string;
  emoji: string;
  passage?: string;
  listening?: string;
  exercises: Exercise[];
};

export function clozeToExercises(p: ClozePassage): Exercise[] {
  return p.blanks.map((b, i) => ({
    id: `${p.id}-b${i + 1}`,
    prompt: `(${i + 1}) numaralı boşluk için en uygun ifade hangisi?`,
    options: b.options,
    answer: b.answer,
    explain: b.explain,
  }));
}

function clozeText(p: ClozePassage): string {
  return p.text.replace(/\{(\d+)\}/g, "($1) ______");
}

function grammarPool(): Exercise[] {
  return grammarTopics.flatMap((t) => t.exercises);
}

export function buildMiniExam(): ExamSection[] {
  const reading = sample(readingPassages, 1)[0];
  return [
    { title: "Use of English", emoji: "🧩", exercises: sample(grammarPool(), 10) },
    { title: "Vocabulary", emoji: "🃏", exercises: mixedVocabExercises(sample(words, 5), words) },
    { title: "Reading", emoji: "📖", passage: reading.text, exercises: reading.questions },
  ];
}

export function buildFullExam(): ExamSection[] {
  const clozes = sample(clozePassages, 2);
  const readings = sample(readingPassages, 2);
  const listening = sample(listeningTracks, 1)[0];
  return [
    { title: "Use of English: Gramer", emoji: "🧩", exercises: sample(grammarPool(), 20) },
    {
      title: "Use of English: Kelime",
      emoji: "🃏",
      exercises: mixedVocabExercises(sample(words, 15), words),
    },
    ...clozes.map((c, i) => ({
      title: `Cloze ${i + 1}`,
      emoji: "🕳️",
      passage: clozeText(c),
      exercises: clozeToExercises(c),
    })),
    ...readings.map((r, i) => ({
      title: `Reading ${i + 1}`,
      emoji: "📖",
      passage: r.text,
      exercises: r.questions,
    })),
    { title: "Listening", emoji: "🎧", listening: listening.script, exercises: listening.questions },
  ];
}
