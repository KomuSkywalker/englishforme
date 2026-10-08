import { useId } from "react";

// Üç çubuktan oluşan "E": ilerleme çubukları gibi doluyor, sarı nokta hedefi (sınavı) temsil ediyor.
export function LogoMark({ className = "size-9" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="0.55" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#db2777" />
        </linearGradient>
        <radialGradient id={`${id}shine`} cx="0.2" cy="0.1" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#${id}bg)`} />
      <rect width="64" height="64" rx="15" fill={`url(#${id}shine)`} />
      <rect x="14" y="13" width="10" height="38" rx="3.5" fill="#fff" />
      <rect x="14" y="13" width="34" height="10" rx="5" fill="#fff" />
      <rect x="14" y="27" width="21" height="10" rx="5" fill="#fff" />
      <rect x="14" y="41" width="34" height="10" rx="5" fill="#fff" />
      <circle cx="46" cy="32" r="6.5" fill="#fbbf24" stroke="#fff" strokeWidth="2.5" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark className={compact ? "size-7" : "size-9"} />
      <span className={`font-display font-extrabold leading-none ${compact ? "" : "text-xl"}`}>
        English<span className="text-grape">ForMe</span>
      </span>
    </span>
  );
}
