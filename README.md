# EnglishForMe 🦜

MÜYYES (Marmara Üniversitesi Yabancı Dil Yeterlilik Sınavı) için oyunlaştırılmış,
"ders çalışıyor gibi hissettirmeyen" kişisel İngilizce hazırlık kampı.

## Ne var içinde

- **Panel**: sınav geri sayımı, günlük XP hedefi, seri (streak), günün 4 görevi, haftalık grafik
- **Kelime** (400 kelime): flashcard ile öğrenme, Leitner kutulu aralıklı tekrar (SRS),
  hızlı test, aranabilir deste listesi, sesli okuma
- **Gramer** (16 konu, 224 soru): Türkçe hap anlatım + sınav taktikleri + 14 soruluk görev,
  yıldız sistemi (yüzde 50/70/90)
- **Okuma** (10 parça): MÜYYES tarzı akademik parçalar, 5'er soru, mini sözlük
- **Dinleme** (8 parça): tarayıcı text-to-speech ile monolog/diyalog, 4'er soru
- **Boşluk Doldurma** (10 cloze testi): Use of English provası, 6'şar boşluk
- **Oyunlar**: eşleştirme, 60 saniyelik hız turu, cümle dizme, kelime avı (adam asmaca)
- **Deneme**: mini (20 soru / 20 dk) ve tam (61 soru / 60 dk, dinleme dahil), süre ve
  bölüm bazlı sonuç, baraj yüzde 60
- **Yazma** (8 konu): essay planı, hazır kalıplar, kelime sayacı, bağlaç radarı, 40 dk sınav modu
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
Deneme sınavları her seferinde soru havuzundan rastgele kurulur.
