export type BadgeSnapshot = {
  xp: number;
  streak: number;
  bestStreak: number;
  learnedCount: number;
  masteredCount: number;
  grammarCompleted: number;
  readingCompleted: number;
  listeningCompleted: number;
  clozeCompleted: number;
  examCount: number;
  bestExamPercent: number;
  gamesPlayed: number;
};

export type Badge = {
  id: string;
  name: string;
  desc: string;
  check: (s: BadgeSnapshot) => boolean;
};

export const badges: Badge[] = [
  { id: "ilk-adim", name: "İlk Adım", desc: "İlk XP'ni kazandın", check: (s) => s.xp > 0 },
  { id: "xp-1000", name: "Bin XP Kulübü", desc: "Toplam 1.000 XP topladın", check: (s) => s.xp >= 1000 },
  { id: "xp-5000", name: "XP Canavarı", desc: "Toplam 5.000 XP topladın", check: (s) => s.xp >= 5000 },
  { id: "xp-15000", name: "Efsanevi Emek", desc: "Toplam 15.000 XP topladın", check: (s) => s.xp >= 15000 },
  { id: "seri-3", name: "Isınıyorum", desc: "3 günlük seri yaptın", check: (s) => s.bestStreak >= 3 },
  { id: "seri-7", name: "Ateş Topu", desc: "7 günlük seri yaptın", check: (s) => s.bestStreak >= 7 },
  { id: "seri-14", name: "Durdurulamaz", desc: "14 günlük seri yaptın", check: (s) => s.bestStreak >= 14 },
  { id: "kelime-50", name: "Kelime Koleksiyoncusu", desc: "50 kelime öğrendin", check: (s) => s.learnedCount >= 50 },
  { id: "kelime-150", name: "Sözlük Yiyen", desc: "150 kelime öğrendin", check: (s) => s.learnedCount >= 150 },
  { id: "kelime-300", name: "Yürüyen Sözlük", desc: "300 kelime öğrendin", check: (s) => s.learnedCount >= 300 },
  { id: "usta-50", name: "Hafıza Ustası", desc: "50 kelimeyi ustalık seviyesine getirdin", check: (s) => s.masteredCount >= 50 },
  { id: "gramer-4", name: "Kural Tanır", desc: "4 gramer konusunu tamamladın", check: (s) => s.grammarCompleted >= 4 },
  { id: "gramer-8", name: "Yapı Ustası", desc: "8 gramer konusunu tamamladın", check: (s) => s.grammarCompleted >= 8 },
  { id: "gramer-16", name: "Gramer Profesörü", desc: "16 gramer konusunun hepsini bitirdin", check: (s) => s.grammarCompleted >= 16 },
  { id: "okuma-5", name: "Kitap Kurdu", desc: "5 okuma parçası bitirdin", check: (s) => s.readingCompleted >= 5 },
  { id: "okuma-10", name: "Hızlı Okur", desc: "Tüm okuma parçalarını bitirdin", check: (s) => s.readingCompleted >= 10 },
  { id: "dinleme-4", name: "Keskin Kulak", desc: "4 dinleme parçası tamamladın", check: (s) => s.listeningCompleted >= 4 },
  { id: "cloze-5", name: "Boşluk Doldurucu", desc: "5 cloze testi çözdün", check: (s) => s.clozeCompleted >= 5 },
  { id: "deneme-1", name: "İlk Deneme", desc: "İlk denemeni çözdün", check: (s) => s.examCount >= 1 },
  { id: "deneme-gecti", name: "Barajı Aştın", desc: "Bir denemede yüzde 60 üstü aldın", check: (s) => s.bestExamPercent >= 60 },
  { id: "deneme-80", name: "Sınav Canavarı", desc: "Bir denemede yüzde 80 üstü aldın", check: (s) => s.bestExamPercent >= 80 },
  { id: "oyun-10", name: "Oyunbaz", desc: "10 oyun oynadın", check: (s) => s.gamesPlayed >= 10 },
];

export function badgeById(id: string): Badge | undefined {
  return badges.find((b) => b.id === id);
}
