"use client";

import { useState } from "react";
import { useProgress } from "@/lib/progress";
import { dateKey, daysBetween } from "@/lib/dates";
import { Button, Card, PageHeader } from "@/components/ui";

const goals = [100, 150, 250, 400];

function formatTr(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default function AyarlarPage() {
  const { state, ready, updateSettings, resetAll } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const [draftDate, setDraftDate] = useState<string | null>(null);
  const [savedFlash, setSavedFlash] = useState(false);

  const saved = state.settings.examDate;
  const draft = draftDate ?? saved;
  const draftValid = /^\d{4}-\d{2}-\d{2}$/.test(draft) && daysBetween(dateKey(), draft) >= 0;
  const dirty = draft !== saved;

  function saveDate() {
    if (!draftValid) return;
    updateSettings({ examDate: draft, examDateSet: true });
    setDraftDate(null);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2500);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Ayarlar" desc="Her şey bu tarayıcıda, sende kalıyor." />

      <Card>
        <label className="font-display font-extrabold">Adın</label>
        <input
          value={state.settings.name}
          onChange={(e) => updateSettings({ name: e.target.value })}
          placeholder="Panelde sana böyle sesleneceğim"
          className="mt-2 w-full rounded-2xl border-2 border-line bg-paper px-4 py-3 font-bold outline-none focus:border-grape"
        />
      </Card>

      <Card>
        <label className="font-display font-extrabold">MÜYYES tarihi</label>
        <p className="mt-1 text-sm font-bold text-inksoft">
          Paneldeki geri sayım ve çalışma planı buna göre işler. Tarihi seçip Kaydet&apos;e bas.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <input
            type="date"
            value={draft}
            min={dateKey()}
            disabled={!ready}
            onChange={(e) => setDraftDate(e.target.value)}
            className="rounded-2xl border-2 border-line bg-paper px-4 py-3 font-bold outline-none focus:border-grape"
          />
          <Button accent="grape" onClick={saveDate} disabled={!dirty || !draftValid}>
            Kaydet
          </Button>
          {dirty ? (
            <Button accent="ghost" onClick={() => setDraftDate(null)}>
              Vazgeç
            </Button>
          ) : null}
        </div>
        <p className="mt-2 text-sm font-bold text-inksoft">
          {dirty && !draftValid
            ? "Geçerli ve bugünden sonraki bir tarih seç."
            : savedFlash
              ? "Kaydedildi."
              : state.settings.examDateSet
                ? `Kayıtlı tarih: ${formatTr(saved)}`
                : `Henüz tarih kaydetmedin, varsayılan: ${formatTr(saved)} (yaklaşık 3 ay sonra)`}
        </p>
      </Card>

      <Card>
        <label className="font-display font-extrabold">Günlük XP hedefi</label>
        <p className="mt-1 text-sm font-bold text-inksoft">
          Bu hedefe ulaştığın her gün serin bir artar.
        </p>
        <div className="mt-3 flex gap-2">
          {goals.map((g) => (
            <button
              key={g}
              onClick={() => updateSettings({ dailyGoal: g })}
              className={`cursor-pointer rounded-2xl px-5 py-2.5 font-display font-bold transition-colors ${
                state.settings.dailyGoal === g
                  ? "bg-grape text-white"
                  : "border-2 border-line bg-card text-inksoft"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <p className="font-display font-extrabold">Ses efektleri</p>
          <p className="text-sm font-bold text-inksoft">Doğru/yanlış ve kutlama sesleri</p>
        </div>
        <button
          onClick={() => updateSettings({ sound: !state.settings.sound })}
          className={`h-9 w-16 cursor-pointer rounded-full p-1 transition-colors ${
            state.settings.sound ? "bg-mint" : "bg-line"
          }`}
        >
          <span
            className={`block size-7 rounded-full bg-white transition-transform ${
              state.settings.sound ? "translate-x-7" : ""
            }`}
          />
        </button>
      </Card>

      <Card className="border-berry/40">
        <p className="font-display font-extrabold text-berrydark">Tehlikeli bölge</p>
        <p className="mt-1 text-sm font-bold text-inksoft">
          Tüm ilerlemeyi (XP, kelime kutuları, rozetler, denemeler) kalıcı olarak siler.
        </p>
        {confirmReset ? (
          <div className="mt-3 flex gap-2">
            <Button
              accent="berry"
              onClick={() => {
                resetAll();
                setConfirmReset(false);
              }}
            >
              Evet, her şeyi sil
            </Button>
            <Button accent="ghost" onClick={() => setConfirmReset(false)}>
              Vazgeç
            </Button>
          </div>
        ) : (
          <Button accent="berry" className="mt-3" onClick={() => setConfirmReset(true)}>
            İlerlemeyi sıfırla
          </Button>
        )}
      </Card>

      <p className="text-center text-xs font-bold text-inksoft">
        Verilerin sadece bu tarayıcının hafızasında tutulur, hiçbir sunucuya gitmez.
      </p>
    </div>
  );
}
