# EnglishForMe 🦜

MÜYYES (Marmara Üniversitesi Yabancı Dil Yeterlilik Sınavı) için oyunlaştırılmış,
"ders çalışıyor gibi hissettirmeyen" kişisel İngilizce hazırlık kampı.

## Ne var içinde

- **Panel**: sınav geri sayımı, günlük XP hedefi, seri (streak), günün 4 görevi, haftalık grafik
- **Kelime** (500 kelime): flashcard ile öğrenme, Leitner kutulu aralıklı tekrar (SRS),
  hızlı test, aranabilir deste listesi, sesli okuma
- **Gramer** (16 konu, 224 soru): Türkçe hap anlatım + sınav taktikleri + 14 soruluk görev,
  yıldız sistemi (yüzde 50/70/90)
- **Use of English**: resmi sınavdaki 5 soru tipi: cloze (10 test), sentence completion (24),
  restatement (24), dialogue completion (16) ve kelime soruları
- **Okuma** (10 parça): MÜYYES tarzı akademik parçalar, 5'er soru, mini sözlük
- **Dinleme** (8 parça): tarayıcı text-to-speech ile monolog/diyalog, 4'er soru
- **Deneme**: mini (20 soru / 20 dk, Use of English turu) ve tam deneme (57 soru / 100 dk,
  gerçek MÜYYES kurgusu: cloze + SC + restatement + diyalog + kelime + 3 okuma + 2 dinleme,
  dinlemede 2'şer hak), bölüm bazlı karne, baraj yüzde 60
- **Yazma** (8 konu): essay planı, hazır kalıplar, kelime sayacı, bağlaç radarı, 40 dk sınav modu
- **Sınav Rehberi**: resmi örnek sınav ve duyurulardan derlenen format bilgisi, kurallar,
  bölüm bölüm taktikler ve resmi kaynak linkleri
- **Oyunlar**: eşleştirme, 60 saniyelik hız turu, cümle dizme, kelime avı (adam asmaca)
- **Oyunlaştırma**: XP, 10 unvanlı seviye sistemi, 22 rozet, combo, konfeti, ses efektleri

## Nasıl çalışır

```bash
npm install
npm run dev
```

http://localhost:3000 aç. Tüm ilerleme tarayıcının localStorage'ında tutulur,
sunucu ve hesap yoktur. Sınav tarihi ve günlük hedef Ayarlar'dan değişir.

## Teknik

- Next.js 16 + TypeScript + Tailwind v4, animasyon: motion, kutlama: canvas-confetti
- Dinleme sesleri Web Speech API (speechSynthesis) ile üretilir, ses dosyası yoktur
- Env değişkeni yok, dış servis yok

## İçerik notu

Tüm sorular ve metinler MÜYYES formatı (Use of English, Reading, Listening, Writing,
baraj 60) örnek alınarak bu proje için üretilmiştir; gerçek çıkmış soru içermez.
Format bilgisi Marmara YDYO'nun resmi örnek sınavından (100_sample_exam.pdf) ve
duyurularından derlenmiştir. Deneme sınavları her seferinde havuzdan rastgele kurulur.
