export type Word = {
  id: string;
  en: string;
  tr: string;
  pos: "noun" | "verb" | "adj" | "adv" | "prep" | "conj" | "phrase";
  level: 1 | 2 | 3;
  example: string;
  exampleTr: string;
  synonyms?: string[];
};

export type Exercise = {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
};

export type GrammarSection = {
  heading: string;
  body: string;
  examples: { en: string; tr: string }[];
};

export type GrammarTopic = {
  id: string;
  title: string;
  titleTr: string;
  level: 1 | 2 | 3;
  summary: string;
  sections: GrammarSection[];
  tips: string[];
  exercises: Exercise[];
};

export type ReadingPassage = {
  id: string;
  title: string;
  topicTr: string;
  level: 1 | 2 | 3;
  text: string;
  questions: Exercise[];
  glossary: { en: string; tr: string }[];
};

export type ListeningTrack = {
  id: string;
  title: string;
  topicTr: string;
  script: string;
  questions: Exercise[];
};

export type ClozeBlank = {
  options: string[];
  answer: number;
  explain: string;
};

export type ClozePassage = {
  id: string;
  title: string;
  text: string;
  blanks: ClozeBlank[];
};

export type WritingPrompt = {
  id: string;
  type: "opinion" | "cause-effect" | "for-against" | "compare";
  typeTr: string;
  prompt: string;
  plan: string[];
  phrases: string[];
};
