"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ToastPayload } from "@/lib/fx";

type Item = ToastPayload & { key: number };

export function Toasts() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    let counter = 0;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ToastPayload>).detail;
      const key = ++counter;
      setItems((prev) => [...prev.slice(-2), { ...detail, key }]);
      setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.key !== key));
      }, 3800);
    };
    window.addEventListener("efm-toast", handler);
    return () => window.removeEventListener("efm-toast", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40 }}
            className="flex items-center gap-3 rounded-2xl border-2 border-line bg-card p-3 shadow-lg"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sunsoft text-2xl">
              {item.emoji}
            </span>
            <div className="min-w-0">
              <p className="font-display font-bold leading-tight">{item.title}</p>
              {item.body ? <p className="text-sm text-inksoft">{item.body}</p> : null}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
