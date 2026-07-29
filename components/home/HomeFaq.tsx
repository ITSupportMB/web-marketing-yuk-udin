import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { homeFaq } from "@/lib/content";
import { IconArrow } from "@/components/ui/icons";

export function HomeFaq() {
  return (
    <Section tone="surface" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Pertanyaan umum</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Masih ada yang mengganjal?
            </h2>
            <Link
              href="/bantuan"
              className="group mt-6 inline-flex items-center gap-1.5 text-[16px] font-medium text-[var(--color-primary-press)]"
            >
              <span className="underline-offset-4 group-hover:underline">Lihat semua bantuan</span>
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={homeFaq} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
