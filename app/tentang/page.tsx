import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/home/Sections";
import { companyInfo, companyValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tentang — siapa di balik Yuk Udin",
  description:
    "Yuk Udin menghubungkan pembeli material bangunan dengan toko terverifikasi lewat satu daftar belanja dan banyak penawaran.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <PageHeader eyebrow="Tentang" title="Kami membuat belanja material jadi jujur dan cepat.">
        Yuk Udin lahir dari satu keluhan yang sama di setiap proyek: cari harga material
        itu melelahkan. Kami mengubahnya jadi satu daftar belanja yang mengundang banyak
        penawaran sekaligus.
      </PageHeader>

      <Section>
        <Container>
          <Reveal className="max-w-[720px]">
            <Eyebrow>Yang kami pegang</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[44px]">
              Tiga hal yang tidak kami tawar.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {companyValues.map((v) => (
              <RevealItem key={v.title} as="article">
                <Card>
                  <h3 className="font-display text-[22px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-muted)]">{v.body}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <Reveal className="max-w-[720px]">
            <Eyebrow>Legalitas</Eyebrow>
            <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] sm:text-[34px]">
              Badan hukum & alamat.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <dl className="grid max-w-2xl gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
              {[
                ["Nama badan usaha", companyInfo.legalName],
                ["NIB", companyInfo.nib],
                ["Berdiri", companyInfo.founded],
                ["Alamat kantor", companyInfo.address],
              ].map(([k, v]) => (
                <div key={k} className="bg-[var(--color-surface)] p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-subtle)]">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-[16px] text-[var(--color-ink)]">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[13px] text-[var(--color-subtle)]">
              Data legal akan diperbarui dengan dokumen resmi saat tersedia.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
