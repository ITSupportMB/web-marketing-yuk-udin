import type { ReactNode } from "react";
import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-16 pt-36 sm:pt-40">
      <Container>
        <Reveal className="max-w-[760px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-subtle)]">
            <span aria-hidden className="h-1 w-4 rounded-full bg-[var(--color-primary)]" />
            {eyebrow}
          </span>
          <h1 className="font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[56px]">
            {title}
          </h1>
          {children && (
            <div className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-[var(--color-muted)]">
              {children}
            </div>
          )}
        </Reveal>
      </Container>
    </header>
  );
}
