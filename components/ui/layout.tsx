import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-site)] px-[var(--gutter)] ${className}`}
    >
      {children}
    </div>
  );
}

export type Decor = "glow-tr" | "glow-bl" | "glow-tl" | "glow-br" | "dots" | "none";

const glows: Record<string, string> = {
  "glow-tr":
    "radial-gradient(42% 55% at 88% 4%, rgba(200,80,15,0.10), transparent 68%)",
  "glow-bl":
    "radial-gradient(42% 55% at 10% 96%, rgba(200,80,15,0.09), transparent 68%)",
  "glow-tl":
    "radial-gradient(42% 55% at 8% 6%, rgba(239,160,11,0.10), transparent 68%)",
  "glow-br":
    "radial-gradient(46% 60% at 94% 94%, rgba(239,160,11,0.08), transparent 68%)",
};

function DecorLayer({ variant }: { variant: Decor }) {
  if (variant === "none") return null;
  if (variant === "dots")
    return (
      <div aria-hidden className="pattern-dots pointer-events-none absolute inset-0 z-0" />
    );
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{ background: glows[variant] }}
    />
  );
}

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  tone = "bg",
  decor = "none",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  tone?: "bg" | "surface" | "alt" | "ink";
  decor?: Decor;
}) {
  // Latar gradasi lembut (bukan satu warna datar) untuk mengurangi kesan kosong.
  const tones: Record<string, string> = {
    bg: "bg-[linear-gradient(180deg,#f9f6f1_0%,var(--color-bg)_60%)]",
    surface: "bg-[linear-gradient(180deg,#fefdfb_0%,var(--color-surface)_60%)]",
    alt: "bg-[var(--color-surface-alt)]",
    ink: "bg-[linear-gradient(155deg,#4a1c0b_0%,var(--color-surface-ink)_75%)] text-[var(--color-on-dark)]",
  };
  const hasDecor = decor !== "none";
  return (
    <Tag
      id={id}
      className={`relative ${hasDecor ? "overflow-hidden" : ""} py-[var(--space-section)] ${tones[tone]} ${className}`}
    >
      <DecorLayer variant={decor} />
      {hasDecor ? <div className="relative z-10">{children}</div> : children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-subtle)]">
      <span aria-hidden className="h-1 w-4 rounded-full bg-[var(--color-primary)]" />
      {children}
    </span>
  );
}
