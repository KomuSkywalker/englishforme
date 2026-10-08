"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { clozePassages, grammarTopics, words } from "@/lib/data";
import { Card, Chip, LinkButton, PageHeader, ProgressBar } from "@/components/ui";
import { SectionStatus } from "@/components/SectionStatus";

const questionTypes = [
  {
    href: "/cloze",
    title: "Cloze Test",
    desc: "Metindeki boşlukları doldur, sınavın açılış bölümü",
    bg: "bg-rose2soft",
  },
  {
    href: "/uoe/cumle",
    title: "Sentence Completion",
    desc: "Yarım cümleyi mantık + gramerle tamamla",
    bg: "bg-grapesoft",
  },
  {
    href: "/uoe/yakin",
    title: "Restatement",
    desc: "Anlamca en yakın cümleyi yakala",
    bg: "bg-mintsoft",
  },
  {
    href: "/uoe/diyalog",
    title: "Dialogue Completion",
    desc: "Diyalogdaki eksik konuşmayı bul",
    bg: "bg-sunsoft",
  },
  {
    href: "/uoe/karisik",
    title: "Karışık Tur",
    desc: "Üç soru tipi karışık, 12 soru",
    bg: "bg-oceansoft",
  },
];

export default function UoeHub() {
  const { state, dueCount, learnedCount } = useProgress();
  const clozeDone = Object.keys(state.cloze).length;
  const topicsDone = grammarTopics.filter((t) => (state.grammar[t.id]?.stars ?? 0) >= 1).length;
  const nextTopic = grammarTopics.find((t) => (state.grammar[t.id]?.stars ?? 0) === 0);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <PageHeader
          title="Use of English"
          desc="MÜYYES'in ilk bölümü: gramer, kelime, cloze test, cümle tamamlama, yakın anlam ve diyalog. Bu bölüm için gereken her şey burada."
        />
        <SectionStatus section="uoe" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Card className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold">Gramer</h2>
            <Chip className="bg-oceansoft text-oceandark">
              {topicsDone}/{grammarTopics.length} konu
            </Chip>
          </div>
          <ProgressBar value={topicsDone} max={grammarTopics.length} accent="ocean" className="mt-3 !h-2.5" />
          <p className="mt-2 flex-1 text-sm font-bold text-inksoft">
            {nextTopic ? `Sıradaki: ${nextTopic.title}` : "Tüm konular açıldı, 2 yıldızın altındakilere dön."}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {nextTopic ? (
              <LinkButton href={`/gramer/${nextTopic.id}`} accent="ocean" className="!py-2">
                Sıradaki konu
              </LinkButton>
            ) : null}
            <LinkButton href="/gramer" accent="ghost" className="!py-2">
              Tüm konular
            </LinkButton>
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold">Kelime</h2>
            <Chip className="bg-grapesoft text-grape">
              {learnedCount}/{words.length} öğrenildi
            </Chip>
          </div>
          <ProgressBar value={learnedCount} max={words.length} accent="grape" className="mt-3 !h-2.5" />
          <p className="mt-2 flex-1 text-sm font-bold text-inksoft">
            {dueCount > 0 ? `${dueCount} kelime tekrar bekliyor.` : "Bugünlük tekrar yok, yeni kelimelere geç."}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkButton href={dueCount > 0 ? "/kelime/tekrar" : "/kelime/ogren"} accent="grape" className="!py-2">
              {dueCount > 0 ? "Tekrara başla" : "Yeni kelimeler"}
            </LinkButton>
            <LinkButton href="/kelime" accent="ghost" className="!py-2">
              Kelime merkezi
            </LinkButton>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="mb-1 text-lg font-extrabold">Sınavdaki soru tipleri</h2>
        <p className="mb-3 text-sm font-bold text-inksoft">
          Gerçek sınavda bu bölüm cloze test, sentence completion, restatement, dialogue completion ve
          vocabulary sorularından oluşur. Hepsi çoktan seçmelidir.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {questionTypes.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-grape/40"
            >
              <div className="flex items-center justify-between">
                <span className={`block h-2 w-12 rounded-full ${m.bg}`} />
                {m.href === "/cloze" ? (
                  <Chip className="bg-paper text-inksoft">
                    {clozeDone}/{clozePassages.length} bitti
                  </Chip>
                ) : null}
              </div>
              <p className="mt-2 font-display text-lg font-extrabold">{m.title}</p>
              <p className="text-sm font-bold text-inksoft">{m.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Card className="flex flex-col">
          <h2 className="text-lg font-extrabold">Bölüm denemesi</h2>
          <p className="mt-1 flex-1 text-sm font-bold text-inksoft">
            Sadece Use of English: 20 soru, 20 dakika. Gramer, kelime, cümle tamamlama, restatement ve diyalog.
          </p>
          <LinkButton href="/deneme/mini" accent="sun" className="mt-3">
            Mini denemeye başla
          </LinkButton>
        </Card>
        <Card className="flex flex-col">
          <h2 className="text-lg font-extrabold">Kelime oyunları</h2>
          <p className="mt-1 flex-1 text-sm font-bold text-inksoft">
            Eşleştirme, hız turu, cümle dizme ve kelime avı. Sınav kelimeleriyle kısa molalar.
          </p>
          <LinkButton href="/oyunlar" accent="ghost" className="mt-3">
            Oyunlara git
          </LinkButton>
        </Card>
      </div>
    </div>
  );
}
