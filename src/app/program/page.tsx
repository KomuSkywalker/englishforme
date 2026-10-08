"use client";

import Link from "next/link";
import { useState } from "react";
import { useProgress } from "@/lib/progress";
import { dateKey } from "@/lib/dates";
import { phaseFor } from "@/lib/plan";
import {
  hasSectionScores,
  latestExam,
  minutesSplit,
  PASS_SCORE,
  rankSections,
  SECTION_MAX,
  sectionHref,
  sectionIds,
  sectionNames,
  type PastExam,
  type SectionId,
} from "@/lib/program";
import { Button, Card, Chip, PageHeader, ProgressBar } from "@/components/ui";
import { DailyTasks } from "@/components/DailyTasks";

const minuteOptions = [60, 90, 120, 180];

const howTo: Record<SectionId, string[]> = {
  uoe: [
    "Her gün kelime tekrarı (SRS), sonra yeni kelimeler.",
    "Gramer konularını sırayla bitir, 2 yıldızın altındakilere geri dön.",
    "Sentence completion, restatement ve diyalog bankalarından karışık soru çöz.",
  ],
  reading: [
    "Parça başına 15 dakika süre tut, önce soruları gör sonra metni oku.",
    "Yanlış yaptığın her sorunun cevabını metinde bulup altını çiz.",
    "Bilmediğin kelimeleri mini sözlükten kontrol et.",
  ],
  listening: [
    "Parça başlamadan soruları ve şıkları oku.",
    "İlk dinlemede cevapla, ikinci dinlemede kontrol et; metni en son aç.",
    "Kaçırdığın yerleri metinle birlikte bir kez daha dinle.",
  ],
  writing: [
    "Haftada 2 kez süre tutarak (40 dk) tam essay yaz.",
    "Diğer günler 10 dakikalık plan çıkar ve hazır kalıpları çalış.",
    "Giriş, iki gövde paragrafı ve sonuç şablonundan çıkma.",
  ],
};

type Draft = {
  id: string | null;
  date: string;
  totalOnly: boolean;
  total: string;
  sections: Record<SectionId, string>;
};

function emptyDraft(): Draft {
  return {
    id: null,
    date: dateKey(),
    totalOnly: false,
    total: "",
    sections: { uoe: "", reading: "", listening: "", writing: "" },
  };
}

function parseScore(v: string, max: number): number | null {
  if (v.trim() === "") return null;
  const n = Number(v.replace(",", "."));
  if (!Number.isFinite(n) || n < 0 || n > max) return null;
  return Math.round(n * 10) / 10;
}

function formatTr(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ProgramPage() {
  const { state, ready, daysLeft, weights, savePastExam, removePastExam, updateSettings } = useProgress();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const exams = [...state.pastExams].sort((a, b) => (a.date < b.date ? 1 : -1));
  const last = latestExam(state.pastExams);
  const prev = exams[1];
  const ranked = rankSections(weights);
  const split = minutesSplit(weights, state.settings.dailyMinutes);
  const phase = phaseFor(daysLeft);

  // Form doğrulama
  const sectionVals = draft
    ? sectionIds.map((s) => parseScore(draft.sections[s], SECTION_MAX))
    : [];
  const allSections = draft ? sectionVals.every((v) => v !== null) : false;
  const totalVal = draft
    ? draft.totalOnly
      ? parseScore(draft.total, 100)
      : allSections
        ? Math.round((sectionVals as number[]).reduce((a, b) => a + b, 0) * 10) / 10
        : null
    : null;
  const canSave = !!draft && totalVal !== null && /^\d{4}-\d{2}-\d{2}$/.test(draft.date);

  function save() {
    if (!draft || totalVal === null) return;
    const sections = {} as PastExam["sections"];
    sectionIds.forEach((s, i) => (sections[s] = draft.totalOnly ? null : sectionVals[i]));
    savePastExam({
      id: draft.id ?? `pe-${Date.now()}`,
      date: draft.date,
      total: totalVal,
      sections,
    });
    setDraft(null);
  }

  function edit(e: PastExam) {
    const totalOnly = !hasSectionScores(e);
    setDraft({
      id: e.id,
      date: e.date,
      totalOnly,
      total: String(e.total),
      sections: {
        uoe: e.sections.uoe?.toString() ?? "",
        reading: e.sections.reading?.toString() ?? "",
        listening: e.sections.listening?.toString() ?? "",
        writing: e.sections.writing?.toString() ?? "",
      },
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title="Programım"
        desc="Daha önce girdiğin MÜYYES'in sonucunu yaz; program zayıf bölümlerine göre kurulsun."
      />

      <Card>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold">Geçmiş sınav notlarım</h2>
          {!draft ? (
            <Button accent="grape" className="!py-2" onClick={() => setDraft(emptyDraft())} disabled={!ready}>
              Sınav sonucu ekle
            </Button>
          ) : null}
        </div>

        {draft ? (
          <div className="rounded-2xl border-2 border-line bg-paper p-4">
            <div className="flex flex-wrap items-end gap-3">
              <label className="flex flex-col gap-1 text-sm font-bold">
                Sınav tarihi
                <input
                  type="date"
                  value={draft.date}
                  max={dateKey()}
                  onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                  className="rounded-xl border-2 border-line bg-card px-3 py-2 font-bold outline-none focus:border-grape"
                />
              </label>
              <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm font-bold">
                <input
                  type="checkbox"
                  checked={draft.totalOnly}
                  onChange={(e) => setDraft({ ...draft, totalOnly: e.target.checked })}
                  className="size-4 accent-[var(--color-grape)]"
                />
                Bölüm puanlarını bilmiyorum, sadece toplamı gireceğim
              </label>
            </div>

            {draft.totalOnly ? (
              <label className="mt-3 flex max-w-48 flex-col gap-1 text-sm font-bold">
                Toplam puan (0-100)
                <input
                  inputMode="decimal"
                  value={draft.total}
                  onChange={(e) => setDraft({ ...draft, total: e.target.value })}
                  className="rounded-xl border-2 border-line bg-card px-3 py-2 font-bold outline-none focus:border-grape"
                />
              </label>
            ) : (
              <>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {sectionIds.map((s) => {
                    const raw = draft.sections[s];
                    const bad = raw.trim() !== "" && parseScore(raw, SECTION_MAX) === null;
                    return (
                      <label key={s} className="flex flex-col gap-1 text-sm font-bold">
                        {sectionNames[s]} (0-{SECTION_MAX})
                        <input
                          inputMode="decimal"
                          value={raw}
                          onChange={(e) =>
                            setDraft({ ...draft, sections: { ...draft.sections, [s]: e.target.value } })
                          }
                          className={`rounded-xl border-2 bg-card px-3 py-2 font-bold outline-none focus:border-grape ${
                            bad ? "border-berry" : "border-line"
                          }`}
                        />
                      </label>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs font-bold text-inksoft">
                  4 bölüm eşit ağırlıklı, her biri 25 puan. Sonuç belgende yüzde olarak görüyorsan 4&apos;e böl
                  (ör. Reading %60 = 15).
                </p>
              </>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button accent="grape" onClick={save} disabled={!canSave}>
                Kaydet
              </Button>
              <Button accent="ghost" onClick={() => setDraft(null)}>
                Vazgeç
              </Button>
              {totalVal !== null ? (
                <span className="text-sm font-bold text-inksoft">Toplam: {totalVal} / 100</span>
              ) : null}
            </div>
          </div>
        ) : null}

        {ready && exams.length === 0 && !draft ? (
          <p className="text-sm font-bold text-inksoft">
            Henüz sonuç girmedin. Daha önce MÜYYES&apos;e girdiysen sonucu ekle; bölüm puanların varsa
            program en çok puan kaybettiğin bölüme daha fazla süre ayırır.
          </p>
        ) : null}

        {exams.length > 0 ? (
          <div className="mt-3 flex flex-col gap-2">
            {exams.map((e) => (
              <div key={e.id} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-paper px-4 py-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold">{formatTr(e.date)}</span>
                  <Chip className={e.total >= PASS_SCORE ? "bg-mintsoft text-mintdark" : "bg-berrysoft text-berrydark"}>
                    {e.total} / 100
                  </Chip>
                  {hasSectionScores(e) ? (
                    <span className="text-xs font-bold text-inksoft">
                      {sectionIds.map((s) => `${sectionNames[s]} ${e.sections[s]}`).join(" · ")}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-inksoft">bölüm puanı yok</span>
                  )}
                </div>
                <div className="flex gap-2">
                  {confirmDelete === e.id ? (
                    <>
                      <button
                        onClick={() => {
                          removePastExam(e.id);
                          setConfirmDelete(null);
                        }}
                        className="cursor-pointer text-sm font-bold text-berrydark"
                      >
                        Evet, sil
                      </button>
                      <button onClick={() => setConfirmDelete(null)} className="cursor-pointer text-sm font-bold text-inksoft">
                        Vazgeç
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => edit(e)} className="cursor-pointer text-sm font-bold text-grape">
                        Düzenle
                      </button>
                      <button onClick={() => setConfirmDelete(e.id)} className="cursor-pointer text-sm font-bold text-inksoft">
                        Sil
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </Card>

      {last ? (
        <Card>
          <h2 className="mb-1 text-lg font-extrabold">Son sınavının analizi</h2>
          <p className="mb-3 text-sm font-bold text-inksoft">
            {last.total >= PASS_SCORE
              ? `${last.total} puanla barajı geçmişsin. Hedef puanını yükseltmek için zayıf bölümlere yüklen.`
              : `${last.total} puan aldın, baraj ${PASS_SCORE}. ${Math.ceil((PASS_SCORE - last.total) * 10) / 10} puan daha lazım.`}
            {prev ? ` Bir önceki sınava göre ${last.total - prev.total >= 0 ? "+" : ""}${Math.round((last.total - prev.total) * 10) / 10} puan.` : ""}
          </p>
          {hasSectionScores(last) ? (
            <div className="flex flex-col gap-3">
              {ranked.map((s, i) => {
                const score = last.sections[s] ?? 0;
                const lost = SECTION_MAX - score;
                return (
                  <div key={s}>
                    <div className="mb-1 flex items-center justify-between gap-2 text-sm font-bold">
                      <span>
                        {sectionNames[s]}
                        {i === 0 ? <Chip className="ml-2 !py-0 bg-berrysoft text-berrydark">en zayıf</Chip> : null}
                      </span>
                      <span className="text-inksoft">
                        {score}/{SECTION_MAX} · {lost > 0 ? `${lost} puan kayıp` : "tam puan"}
                      </span>
                    </div>
                    <ProgressBar
                      value={score}
                      max={SECTION_MAX}
                      accent={score / SECTION_MAX >= 0.6 ? "mint" : score / SECTION_MAX >= 0.45 ? "sun" : "berry"}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm font-bold text-inksoft">
              Bu sınav için bölüm puanı girmedin, o yüzden program bölümlere eşit süre ayırıyor. Bölüm puanlarını
              biliyorsan Düzenle&apos;den ekle.
            </p>
          )}
        </Card>
      ) : null}

      <Card>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold">Günlük çalışma programın</h2>
          <Chip className="bg-grapesoft text-grape">
            {phase.name} · {daysLeft} gün
          </Chip>
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-inksoft">Günde ne kadar çalışabilirsin?</span>
          {minuteOptions.map((m) => (
            <button
              key={m}
              onClick={() => updateSettings({ dailyMinutes: m })}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-sm font-bold transition-colors ${
                state.settings.dailyMinutes === m ? "bg-grape text-white" : "border-2 border-line bg-card text-inksoft"
              }`}
            >
              {String(m / 60).replace(".", ",")} saat
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {ranked.map((s) => (
            <div key={s} className="rounded-2xl bg-paper p-4">
              <div className="flex items-baseline justify-between gap-2">
                <Link href={sectionHref[s]} className="font-display text-lg font-extrabold hover:text-grape">
                  {sectionNames[s]} →
                </Link>
                <span className="font-display text-lg font-extrabold text-grape">{split[s]} dk</span>
              </div>
              <ul className="mt-1 flex flex-col gap-1">
                {howTo[s].map((h) => (
                  <li key={h} className="flex gap-2 text-sm">
                    <span className="shrink-0 text-inksoft">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border-2 border-line p-4">
          <p className="font-display font-extrabold">Haftalık ritim</p>
          <ul className="mt-1 flex flex-col gap-1 text-sm">
            <li>
              <b>Çarşamba:</b> mini deneme (20 dk) ve yanlış analizi
            </li>
            <li>
              <b>Pazar:</b> {daysLeft <= 56 ? "tam deneme (100 dk) + 40 dk essay" : "mini deneme + haftalık kelime tekrarı"}
            </li>
            <li>
              <b>Deneme temposu:</b> {phase.exams}
            </li>
          </ul>
        </div>
      </Card>

      <DailyTasks />
    </div>
  );
}
