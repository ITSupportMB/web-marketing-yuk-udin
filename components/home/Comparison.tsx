import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { comparison } from "@/lib/content";
import { IconCheck, IconX } from "@/components/ui/icons";

export function Comparison() {
  return (
    <Section decor="dots" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal className="mx-auto max-w-[720px] text-center">
          <Eyebrow>Kenapa ribet</Eyebrow>
          <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
            Cari material bangunan tak perlu melelahkan lagi.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[18px] leading-relaxed text-[var(--color-muted)]">
            Bandingkan cara lama survei harga dengan cara Yuk Udin. Selisihnya
            terasa sejak permintaan pertama.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Cara lama */}
          <Reveal>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-4 py-1.5 text-sm font-medium text-[var(--color-muted)]">
                {comparison.old.title}
              </span>
              <ul className="mt-8 flex flex-col gap-4">
                {comparison.old.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-border)] text-[var(--color-muted)]">
                      <IconX className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[16px] leading-snug text-[var(--color-muted)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Dengan Yuk Udin */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-[var(--radius-lg)] border-2 border-[var(--color-primary)] bg-[var(--color-surface)] p-8 shadow-[0_12px_32px_rgba(63,23,7,0.08)] sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-soft)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary-press)]">
                {comparison.neu.title}
              </span>
              <ul className="mt-8 flex flex-col gap-4">
                {comparison.neu.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-white">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[16px] font-medium leading-snug text-[var(--color-ink)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
