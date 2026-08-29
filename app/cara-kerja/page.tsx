import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Tabs } from "@/components/ui/Tabs";
import { LinkButton } from "@/components/ui/Button";
import { howItWorks, vendorSteps, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cara kerja — minta penawaran material bangunan",
  description:
    "Alur lengkap Yuk Udin: tulis daftar belanja, terima penawaran dari toko terverifikasi, bandingkan, lalu pilih dan kirim.",
  alternates: { canonical: "/cara-kerja" },
};

type Step = { no: string; title: string; body: string, img: string };

function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.no} delay={i * 0.05}>
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 pb-12">
            <div className="flex flex-col items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--color-primary)] font-mono text-[18px] font-medium text-[var(--color-primary-press)]">
                {s.no}
              </span>
              {i < steps.length - 1 && (
                <span className="mt-2 w-px flex-1 border-l border-dashed border-[var(--color-border-strong)]" />
              )}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-[24px] font-medium tracking-[-0.015em] text-[var(--color-ink)] sm:text-[28px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-[17px] leading-relaxed text-[var(--color-muted)]">
                {s.body}
              </p>
              <div className="mt-5 aspect-auto overflow-hidden max-w-md rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-alt)]">
                <div className="grid h-full place-items-center font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-subtle)]">
                  <img src={s.img} alt={`${s.title} - ${s.no}`} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function CaraKerjaPage() {
  return (
    <>
      <PageHeader eyebrow="Cara kerja" title="Dari daftar belanja sampai material sampai di lokasi.">
        Satu alur yang sama, dilihat dari dua sisi. Pilih tampilan sesuai peranmu.
      </PageHeader>

      <Section>
        <Container>
          <Tabs
            tabs={[
              {
                id: "customer",
                label: "Untuk customer",
                content: <Steps steps={howItWorks} />,
              },
              {
                id: "vendor",
                label: "Untuk vendor",
                content: <Steps steps={vendorSteps} />,
              },
            ]}
          />
        </Container>
      </Section>

      <Section tone="alt" className="!py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-display text-[30px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] sm:text-[40px]">
              Siap mencoba sendiri?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LinkButton href={site.playStoreUrl} external size="lg">
                Download aplikasi
              </LinkButton>
              <LinkButton href="/vendor" variant="secondary" size="lg">
                Daftar jadi vendor
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
