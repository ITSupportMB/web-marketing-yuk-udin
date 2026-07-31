import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { seoContent } from "@/lib/content";

/**
 * Blok konten naratif untuk SEO & GEO (mesin jawaban AI).
 * Diletakkan dekat footer: menambah kepadatan kata kunci lokal secara natural
 * tanpa mengganggu alur konversi di atasnya.
 */
export function SeoContent() {
  return (
    <Section className="border-t border-[var(--color-border)] !py-20">
      <Container>
        <Reveal className="mx-auto max-w-[760px]">
          <h2 className="font-display text-[24px] font-medium tracking-[-0.015em] text-[var(--color-ink)] sm:text-[28px]">
            {seoContent.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {seoContent.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-[var(--color-muted)]">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
