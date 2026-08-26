"use client";

import { useState } from "react";
import { useProgress } from "@/lib/progress";
import { Button, Card, PageHeader } from "@/components/ui";

const goals = [100, 150, 250, 400];

export default function AyarlarPage() {
  const { state, updateSettings, resetAll } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <PageHeader emoji="⚙️" title="Ayarlar" desc="Her şey bu tarayıcıda, sende kalıyor." />

      <Card>
        <label className="font-display font-extrabold">👤 Adın</label>
        <input
          value={state.settings.name}
          onChange={(e) => updateSettings({ name: e.target.value })}
          placeholder="Panelde sana böyle sesleneceğim"
          className="mt-2 w-full rounded-2xl border-2 border-line bg-paper px-4 py-3 font-bold outline-none focus:border-grape"
        />
      </Card>

      <Card>
        <label className="font-display font-extrabold">🗓️ MÜYYES tarihi</label>
        <p className="mt-1 text-sm font-bold text-inksoft">Paneldeki geri sayım buna göre işler.</p>
        <input
          type="date"
          value={state.settings.examDate}
          onChange={(e) => e.target.value && updateSettings({ examDate: e.target.value })}
          className="mt-2 rounded-2xl border-2 border-line bg-paper px-4 py-3 font-bold outline-none focus:border-grape"
        />
      </Card>

      <Card>
        <label className="font-display font-extrabold">⚡ Günlük XP hedefi</label>
        <p className="mt-1 text-sm font-bold text-inksoft">
          Bu hedefe ulaştığın her gün serin (🔥) bir artar.
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
          <p className="font-display font-extrabold">🔊 Ses efektleri</p>
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
        <p className="font-display font-extrabold text-berrydark">🧨 Tehlikeli bölge</p>
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
        Verilerin sadece bu tarayıcının hafızasında tutulur, hiçbir sunucuya gitmez. 🦜
      </p>
    </div>
  );
}
