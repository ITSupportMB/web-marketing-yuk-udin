import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { coverageAreas, site } from "@/lib/content";
import { IconPin } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/Button";

export function Coverage() {
  return (
    <Section tone="surface" decor="glow-tr" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Cakupan wilayah</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[44px]">
              Cari material bangunan di kotamu.
            </h2>
            <p className="mt-5 max-w-[480px] text-[18px] leading-relaxed text-[var(--color-muted)]">
              Yuk Udin melayani pemesanan material bangunan di Jabodetabek, Bandung,
              dan sekitarnya — dan terus meluas. Belum ada di kotamu? Unduh aplikasinya,
              kami memberi tahu begitu wilayahmu dibuka.
            </p>
            <LinkButton
              href={site.playStoreUrl}
              external
              size="lg"
              className="mt-8"
            >
              Cek ketersediaan di aplikasi
            </LinkButton>
          </Reveal>

          <Reveal delay={0.1}>
            <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {coverageAreas.map((city) => (
                <RevealItem key={city}>
                  <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5 transition-colors hover:border-[var(--color-border-strong)]">
                    <IconPin className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                    <span className="text-[15px] font-medium text-[var(--color-ink)]">{city}</span>
                  </div>
                </RevealItem>
              ))}
              <RevealItem>
                <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] px-4 py-3.5">
                  <span className="text-[15px] font-medium text-[var(--color-subtle)]">
                    &amp; terus bertambah
                  </span>
                </div>
              </RevealItem>
            </RevealGroup>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
