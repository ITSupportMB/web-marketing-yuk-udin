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

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  tone = "bg",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  tone?: "bg" | "surface" | "alt" | "ink";
}) {
  const tones: Record<string, string> = {
    bg: "bg-[var(--color-bg)]",
    surface: "bg-[var(--color-surface)]",
    alt: "bg-[var(--color-surface-alt)]",
    ink: "bg-[var(--color-surface-ink)] text-[var(--color-on-dark)]",
  };
  return (
    <Tag
      id={id}
      className={`py-[var(--space-section)] ${tones[tone]} ${className}`}
    >
      {children}
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
