import type { ClozePassage, Exercise } from "@/data/types";
import { dialogueCompletion, restatement, sentenceCompletion } from "@/data/useofenglish";
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
  return [
    { title: "Gramer", emoji: "🧩", exercises: sample(grammarPool(), 6) },
    { title: "Kelime", emoji: "🃏", exercises: mixedVocabExercises(sample(words, 4), words) },
    { title: "Sentence Completion", emoji: "✂️", exercises: sample(sentenceCompletion, 4) },
    { title: "Restatement", emoji: "♻️", exercises: sample(restatement, 3) },
    { title: "Dialogue Completion", emoji: "💬", exercises: sample(dialogueCompletion, 3) },
  ];
}

export function buildFullExam(): ExamSection[] {
  const cloze = sample(clozePassages, 1)[0];
  const readings = sample(readingPassages, 3);
  const listenings = sample(listeningTracks, 2);
  return [
    { title: "Cloze Test", emoji: "🕳️", passage: clozeText(cloze), exercises: clozeToExercises(cloze) },
    { title: "Sentence Completion", emoji: "✂️", exercises: sample(sentenceCompletion, 8) },
    { title: "Restatement", emoji: "♻️", exercises: sample(restatement, 6) },
    { title: "Dialogue Completion", emoji: "💬", exercises: sample(dialogueCompletion, 4) },
    { title: "Vocabulary", emoji: "🃏", exercises: mixedVocabExercises(sample(words, 10), words) },
    ...readings.map((r, i) => ({
      title: `Reading ${i + 1}`,
      emoji: "📖",
      passage: r.text,
      exercises: r.questions,
    })),
    ...listenings.map((l, i) => ({
      title: `Listening ${i + 1}`,
      emoji: "🎧",
      listening: l.script,
      exercises: l.questions,
    })),
  ];
}
