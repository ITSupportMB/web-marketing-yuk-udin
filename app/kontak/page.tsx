import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";
import { IconBadge } from "@/components/ui/IconBadge";
import { IconWhatsApp, IconArrow } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Kontak — hubungi tim Yuk Udin",
  description: "Hubungi Yuk Udin lewat WhatsApp bisnis, email, atau kunjungi alamat kantor kami.",
  alternates: { canonical: "/kontak" },
};

const waLink = `https://wa.me/${site.waNumber}?text=${encodeURIComponent(site.waMessage)}`;

export default function KontakPage() {
  return (
    <>
      <PageHeader eyebrow="Kontak" title="Ada yang mau ditanyakan? Kami dengar.">
        Untuk pertanyaan cepat, WhatsApp adalah cara tercepat menghubungi tim kami.
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_1px_2px_rgba(89,31,10,0.06)] transition-[transform,border-color,box-shadow] duration-[240ms] hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_8px_24px_rgba(89,31,10,0.10)]"
              >
                <IconBadge>
                  <IconWhatsApp className="h-6 w-6" />
                </IconBadge>
                <h2 className="mt-5 font-display text-[22px] font-medium text-[var(--color-ink)]">
                  WhatsApp bisnis
                </h2>
                <p className="mt-2 flex-1 text-[16px] text-[var(--color-muted)]">
                  Chat langsung dengan tim kami di jam kerja.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-primary-press)]">
                  Buka WhatsApp
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_1px_2px_rgba(89,31,10,0.06)]">
                <h2 className="font-display text-[22px] font-medium text-[var(--color-ink)]">Email</h2>
                <p className="mt-2 flex-1 text-[16px] text-[var(--color-muted)]">
                  Untuk hal yang butuh lampiran atau catatan panjang.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 text-[15px] font-medium text-[var(--color-primary-press)] underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_1px_2px_rgba(89,31,10,0.06)]">
                <h2 className="font-display text-[22px] font-medium text-[var(--color-ink)]">Alamat kantor</h2>
                <p className="mt-2 flex-1 text-[16px] text-[var(--color-muted)]">{site.address}</p>
                <span className="mt-4 text-[13px] text-[var(--color-subtle)]">
                  Kunjungan dengan janji temu.
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
