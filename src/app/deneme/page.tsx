"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { Card, Chip, LinkButton, PageHeader } from "@/components/ui";

export default function DenemeHub() {
  const { state } = useProgress();
  const history = [...state.exams].reverse();

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="Deneme Merkezi"
        desc="MÜYYES provası: Use of English, Reading, Cloze ve Listening. Geçme barajı yüzde 60."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <Card className="flex flex-col">
          <h2 className="mt-2 text-xl font-extrabold">Mini Deneme</h2>
          <p className="mt-1 flex-1 text-sm font-bold text-inksoft">
            20 soruluk Use of English turu (gramer, kelime, cümle tamamlama, restatement, diyalog),
            20 dakika.
          </p>
          <LinkButton href="/deneme/mini" accent="sun" className="mt-4">
            Mini denemeye başla →
          </LinkButton>
        </Card>
        <Card className="flex flex-col">
          <h2 className="mt-2 text-xl font-extrabold">Tam Deneme</h2>
          <p className="mt-1 flex-1 text-sm font-bold text-inksoft">
            Gerçek MÜYYES kurgusu: cloze + sentence completion + restatement + diyalog + kelime,
            3 okuma metni ve 2 dinleme (ikişer dinleme hakkı). 57 soru, 100 dakika.
          </p>
          <LinkButton href="/deneme/tam" accent="grape" className="mt-4">
            Tam denemeye başla →
          </LinkButton>
        </Card>
      </div>
      <Card className="bg-oceansoft/50">
        <p className="text-sm font-bold">
          Gerçek sınavdaki 4. bölüm olan Writing burada puanlanmaz: denemeden sonra{" "}
          <Link href="/yazma" className="underline">
            Writing
          </Link>
          {" bölümünde"} bir essay yazarak tam sınav provası yapmış olursun.
        </p>
      </Card>
      <Card>
        <h2 className="mb-3 text-lg font-extrabold">Deneme geçmişin</h2>
        {history.length === 0 ? (
          <p className="text-center text-sm font-bold text-inksoft">
            Henüz deneme çözmedin. İlk denemede rozet var!
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {history.map((e, i) => {
              const pct = Math.round((e.score / e.total) * 100);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl bg-paper px-4 py-2.5 font-bold"
                >
                  <span className="text-sm">
                    {e.kind === "tam" ? "Tam" : "Mini"} · {e.day}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-sm text-inksoft">
                      {e.score}/{e.total}
                    </span>
                    <Chip className={pct >= 60 ? "bg-mintsoft text-mintdark" : "bg-berrysoft text-berrydark"}>
                      %{pct} {pct >= 60 ? "geçti" : "kaldı"}
                    </Chip>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
