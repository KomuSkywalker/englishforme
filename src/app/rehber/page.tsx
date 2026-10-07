"use client";

import Link from "next/link";
import { Card, Chip, PageHeader } from "@/components/ui";

const sections = [
  {
    title: "Use of English",
    color: "bg-grapesoft",
    items: [
      "Soru tipleri: cloze test, sentence completion (cümle tamamlama), restatement (yakın anlam), dialogue completion, vocabulary.",
      "En sık test edilenler: tense uyumu, bağlaçlar (although, despite, however...), modallar ve akademik kelimeler.",
      "Cümle tamamlamada önce bağlaca bak: zıtlık mı, sebep mi, koşul mu? Yanlış şıklar genelde mantığı bozar.",
      "Restatement'ta kalıp dönüşümlerini ezbere bil: so...that = too...to, despite + isim = although + cümle, unless = if not.",
    ],
    train: [
      { href: "/uoe", label: "Use of English pratiği" },
      { href: "/gramer", label: "Gramer konuları" },
      { href: "/kelime", label: "Kelime kampı" },
    ],
  },
  {
    title: "Reading",
    color: "bg-mintsoft",
    items: [
      "3-4 akademik metin, her birinden 5-7 soru. Resmi örnekte: 3 metin, 20 soru, 60 dakika.",
      "Soru tipleri: ana fikir, detay, çıkarım (infer), NOT/TRUE soruları, \"closest in meaning\", referans soruları (\"they\" kimi kastediyor?), metni en iyi bitiren cümle.",
      "Önce sorulara göz at, sonra metni oku (skimming). Detay sorusunda anahtar kelimeyi metinde tara (scanning).",
      "NOT sorularında şıkların 3'ü metinde vardır: tek tek işaretleyerek ele.",
    ],
    train: [{ href: "/okuma", label: "Okuma rafı" }],
  },
  {
    title: "Listening",
    color: "bg-sunsoft",
    items: [
      "2-3 parça, toplam ~20 soru, yaklaşık 30 dakika. Her parça 2 kez dinletilir.",
      "\"While listening\" formatı: sorular parça sırasına göre gider, dinlerken işaretlersin.",
      "Parça başlamadan soruları ve şıkları oku: ne duyacağını bilmek yarı yarıya avantaj.",
      "İlk dinlemede cevapla, ikinci dinlemede kontrol et. Boş bırakma, eleme yap.",
    ],
    train: [{ href: "/dinleme", label: "Dinleme stüdyosu" }],
  },
  {
    title: "Writing",
    color: "bg-oceansoft",
    items: [
      "2 konudan birini seçip yaklaşık 250 kelimelik akademik essay yazarsın.",
      "Türler: opinion, cause-effect, for & against, compare & contrast.",
      "Şablon hep aynı: giriş (hook + tez cümlesi), 2 gövde paragrafı (her biri 1 ana fikir + örnek), sonuç.",
      "Bağlaç kullan (however, moreover, as a result...), paragraf başlarını belirgin yap, süreni yönet: plan 5 dk, yazım 30 dk, kontrol 5 dk.",
    ],
    train: [{ href: "/yazma", label: "Yazma atölyesi" }],
  },
];

const rules = [
  "Sınav tek oturumdur, yaklaşık 2 saat 20 dakika sürer (ör. 10:00-12:20).",
  "Geçme notu 100 üzerinden 60'tır ve 4 bölüm eşit ağırlıktadır.",
  "Listening başlamadan Use of English ve Reading bölümlerini bitirmiş olman gerekir.",
  "İlk 30 dakika ve Listening sırasında salondan çıkılmaz.",
  "Telefon ve akıllı cihaz kullanmak kopya sayılır, sınavın sıfırlanır.",
  "Fotoğraflı kimlik şart, sınav sabahı listeden yerini kontrol et.",
  "Mazeret sınavı yoktur; sonuçlar yaklaşık 5 iş gününde açıklanır.",
  "MÜYYES yılda 4 kez yapılır: Güz, Kış, Bahar ve Yaz (yaz okulu açılırsa).",
];

export default function RehberPage() {
  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="MÜYYES Rehberi"
        desc="Sınavın resmi örnek sorularından ve duyurularından derlenen her şey: format, kurallar, taktikler."
      />

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Sınav künyesi</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-2xl bg-paper p-3 text-center">
            <p className="font-display text-xl font-extrabold text-grape">4 bölüm</p>
            <p className="text-xs font-bold text-inksoft">eşit ağırlık</p>
          </div>
          <div className="rounded-2xl bg-paper p-3 text-center">
            <p className="font-display text-xl font-extrabold text-berry">60 puan</p>
            <p className="text-xs font-bold text-inksoft">geçme barajı</p>
          </div>
          <div className="rounded-2xl bg-paper p-3 text-center">
            <p className="font-display text-xl font-extrabold text-sun">~140 dk</p>
            <p className="text-xs font-bold text-inksoft">tek oturum</p>
          </div>
          <div className="rounded-2xl bg-paper p-3 text-center">
            <p className="font-display text-xl font-extrabold text-mint">2 kez</p>
            <p className="text-xs font-bold text-inksoft">her listening parçası</p>
          </div>
        </div>
      </Card>

      {sections.map((s, si) => (
        <Card key={s.title}>
          <div className="mb-3 flex items-center gap-3">
            <span className={`grid size-11 place-items-center rounded-2xl font-display text-lg font-extrabold ${s.color}`}>
              {si + 1}
            </span>
            <h2 className="text-xl font-extrabold">{s.title}</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {s.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-[15px]">
                <span className="shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.train.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-full bg-grapesoft px-4 py-1.5 text-sm font-bold text-grape transition-colors hover:bg-grape hover:text-white"
              >
                Burada çalış: {t.label} →
              </Link>
            ))}
          </div>
        </Card>
      ))}

      <Card className="border-sun bg-sunsoft/50">
        <h2 className="mb-3 text-lg font-extrabold">Sınav günü kuralları</h2>
        <ul className="flex flex-col gap-2">
          {rules.map((r, i) => (
            <li key={i} className="flex gap-2 text-[15px] font-bold">
              <span className="shrink-0">•</span>
              {r}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Resmi kaynaklar</h2>
        <div className="flex flex-col gap-2">
          <a
            href="http://dosya.marmara.edu.tr/ydyo/100_sample_exam.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-paper px-4 py-3 font-bold transition-colors hover:bg-grapesoft"
          >
            Resmi örnek sınav PDF (Reading + Listening)
          </a>
          <a
            href="http://dosya.marmara.edu.tr/ydyo/100_sample_exam_key.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-paper px-4 py-3 font-bold transition-colors hover:bg-grapesoft"
          >
            Örnek sınav cevap anahtarı
          </a>
          <a
            href="https://soundcloud.com/user-651353194/proficiency100"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-paper px-4 py-3 font-bold transition-colors hover:bg-grapesoft"
          >
            Örnek sınavın dinleme kaydı (SoundCloud)
          </a>
          <a
            href="https://ydil.marmara.edu.tr"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-paper px-4 py-3 font-bold transition-colors hover:bg-grapesoft"
          >
            Yabancı Diller Yüksekokulu duyuruları (tarihler burada açıklanır)
          </a>
        </div>
        <p className="mt-3 text-xs font-bold text-inksoft">
          Not: Bu sitedeki tüm sorular MÜYYES formatı örnek alınarak üretilmiştir, gerçek çıkmış
          soru içermez. Format değişebilir, sınavdan önce resmi duyuruyu mutlaka oku.
        </p>
      </Card>

      <Card className="text-center">
        <p className="font-display text-lg font-extrabold">
          Formatı bilen öğrenci, sınavın yarısını çözmüş demektir.
        </p>
        <p className="mt-1 text-sm font-bold text-inksoft">
          Diğer yarısı için: <Chip className="bg-grapesoft text-grape">günde 1 mini deneme</Chip>
        </p>
      </Card>
    </div>
  );
}
