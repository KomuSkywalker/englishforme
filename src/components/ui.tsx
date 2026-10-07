"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { sfx } from "@/lib/sound";

export type Accent = "grape" | "sun" | "mint" | "berry" | "ocean" | "pink" | "ghost";

const btnStyles: Record<Accent, string> = {
  grape: "bg-grape text-white shadow-[0_4px_0_var(--color-grapedark)]",
  sun: "bg-sun text-white shadow-[0_4px_0_var(--color-sundark)]",
  mint: "bg-mint text-white shadow-[0_4px_0_var(--color-mintdark)]",
  berry: "bg-berry text-white shadow-[0_4px_0_var(--color-berrydark)]",
  ocean: "bg-ocean text-white shadow-[0_4px_0_var(--color-oceandark)]",
  pink: "bg-rose2 text-white shadow-[0_4px_0_var(--color-rose2dark)]",
  ghost: "bg-card text-ink border-2 border-line shadow-[0_4px_0_var(--color-line)]",
};

export function Button({
  accent = "grape",
  className = "",
  children,
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { accent?: Accent }) {
  return (
    <button
      {...rest}
      onClick={(e) => {
        sfx.click();
        onClick?.(e);
      }}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 py-3 font-display font-bold transition-all hover:brightness-105 active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-40 ${btnStyles[accent]} ${className}`}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  accent = "grape",
  className = "",
  children,
}: {
  href: string;
  accent?: Accent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => sfx.click()}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-display font-bold transition-all hover:brightness-105 active:translate-y-[3px] active:shadow-none ${btnStyles[accent]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-3xl border-2 border-line bg-card p-5 ${className}`}>{children}</div>
  );
}

export function ProgressBar({
  value,
  max,
  accent = "grape",
  className = "",
}: {
  value: number;
  max: number;
  accent?: Exclude<Accent, "ghost">;
  className?: string;
}) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.round((value / max) * 100));
  const colors: Record<string, string> = {
    grape: "bg-grape",
    sun: "bg-sun",
    mint: "bg-mint",
    berry: "bg-berry",
    ocean: "bg-ocean",
    pink: "bg-rose2",
  };
  return (
    <div className={`h-3.5 w-full overflow-hidden rounded-full bg-line ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ${colors[accent]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold ${className}`}
    >
      {children}
    </span>
  );
}

export function PageHeader({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6 border-l-4 border-grape pl-4">
      <h1 className="text-2xl font-extrabold sm:text-3xl">{title}</h1>
      {desc ? <p className="mt-1 text-inksoft">{desc}</p> : null}
    </div>
  );
}

export function Stars({ count, size = "text-xl" }: { count: number; size?: string }) {
  return (
    <span className={`${size} inline-flex gap-0.5`} aria-label={`${count}/3 yıldız`}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`size-[1em] ${i < count ? "fill-sun" : "fill-line"}`}
          aria-hidden
        >
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}
