"use client";

import Link from "next/link";
import { useProgress } from "@/lib/progress";
import { writingPrompts } from "@/lib/data";
import { Card, Chip, PageHeader } from "@/components/ui";
import { SectionStatus } from "@/components/SectionStatus";

const typeCls: Record<string, string> = {
  opinion: "bg-grapesoft text-grape",
  "cause-effect": "bg-oceansoft text-oceandark",
  "for-against": "bg-sunsoft text-sundark",
  compare: "bg-mintsoft text-mintdark",
};

export default function YazmaHub() {
  const { state } = useProgress();
  return (
    <div>
      <PageHeader
        title="Writing"
        desc="MÜYYES'te 250 kelimelik essay yazacaksın. Burada plan kur, kalıpları kap, taslağını yaz."
      />
      <SectionStatus section="writing" />
      <Card className="mb-4 bg-sunsoft/60">
        <p className="text-sm font-bold">
          Sınav formatı: sana 2 konu verilir, birini seçer ve yaklaşık 250 kelimelik bir essay
          yazarsın. Şablon hep aynı: giriş (hook + tez), 2 gövde paragrafı, sonuç.
        </p>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {writingPrompts.map((p) => {
          const done = state.writingDone.includes(p.id);
          return (
            <Link
              key={p.id}
              href={`/yazma/${p.id}`}
              className="rounded-3xl border-2 border-line bg-card p-4 transition-all hover:-translate-y-1 hover:border-grape/40"
            >
              <div className="flex items-center justify-between">
                <Chip className={typeCls[p.type]}>{p.typeTr}</Chip>
                {done ? <Chip className="bg-mintsoft text-mintdark">Tamamlandı</Chip> : null}
              </div>
              <p className="mt-2 text-[15px] font-bold leading-snug">{p.prompt}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
