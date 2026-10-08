// Üç çubuktan oluşan "E": ilerleme çubukları gibi doluyor, sarı nokta hedefi (sınavı) temsil ediyor.
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="16" fill="var(--color-grape)" />
      <rect x="15" y="15" width="9" height="34" rx="3" fill="#fff" />
      <rect x="15" y="15" width="32" height="9" rx="4.5" fill="#fff" />
      <rect x="15" y="27.5" width="20" height="9" rx="4.5" fill="#fff" fillOpacity="0.75" />
      <rect x="15" y="40" width="32" height="9" rx="4.5" fill="#fff" />
      <circle cx="45" cy="32" r="5" fill="var(--color-sun)" />
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
