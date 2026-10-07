// Kalan gün sayısına göre çalışma evresi ve tempo önerisi.
// Yeni kelimeler sınavdan 3 hafta önce, gramer konuları 4 hafta önce bitecek şekilde dağıtılır;
// son haftalar deneme ve tekrara kalır.

export type Phase = { name: string; focus: string; exams: string };

export type StudyPlan = {
  phase: Phase;
  weeksLeft: number;
  wordsPerDay: number;
  topicsPerWeek: number;
};

const WORDS_BUFFER_DAYS = 21;
const GRAMMAR_BUFFER_DAYS = 28;

export function phaseFor(daysLeft: number): Phase {
  if (daysLeft > 56)
    return {
      name: "Temel evre",
      focus: "Kelime ve gramer ağırlıklı çalış, her gün kısa bir okuma ya da dinleme ekle.",
      exams: "Haftada 2 mini deneme",
    };
  if (daysLeft > 21)
    return {
      name: "Pekiştirme evresi",
      focus: "Use of English, okuma ve dinlemeye ağırlık ver, yanlış yaptığın gramer konularına dön.",
      exams: "Haftada 1 tam deneme + 2 mini deneme",
    };
  if (daysLeft > 7)
    return {
      name: "Deneme dönemi",
      focus: "Süre tutarak tam deneme çöz, her denemeden sonra yanlışlarını incele.",
      exams: "Haftada 2-3 tam deneme",
    };
  return {
    name: "Son hafta",
    focus: "Yeni konu açma. Kelime tekrarı, kalıplar ve hafif mini denemelerle formda kal.",
    exams: "Günde 1 mini deneme",
  };
}

export function buildPlan(daysLeft: number, newWordsLeft: number, topicsLeft: number): StudyPlan {
  const wordDays = Math.max(1, daysLeft - WORDS_BUFFER_DAYS);
  const grammarWeeks = Math.max(1, (daysLeft - GRAMMAR_BUFFER_DAYS) / 7);
  return {
    phase: phaseFor(daysLeft),
    weeksLeft: Math.floor(daysLeft / 7),
    wordsPerDay: newWordsLeft === 0 ? 0 : Math.ceil(newWordsLeft / wordDays),
    topicsPerWeek: topicsLeft === 0 ? 0 : Math.ceil(topicsLeft / grammarWeeks),
  };
}
