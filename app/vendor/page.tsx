import type { Metadata } from "next";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/home/Sections";
import { Accordion } from "@/components/ui/Accordion";
import { VendorLeadForm } from "@/components/vendor/VendorLeadForm";
import {
  vendorBenefits,
  vendorSteps,
  vendorRequirements,
  vendorFaq,
  vendorCoverage,
} from "@/lib/content";
import { IconCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Untuk vendor — jual material bangunan online",
  description:
    "Permintaan material datang ke tokomu dengan alamat dan volume yang jelas. Daftar jadi vendor Yuk Udin tanpa biaya iklan.",
  alternates: { canonical: "/vendor" },
};

export default function VendorPage() {
  return (
    <>
      {/* 1 — Hero + form lead */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-[var(--space-block)] pt-36 sm:pt-40">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Untuk vendor</Eyebrow>
              <h1 className="font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[56px]">
                Permintaan material datang{" "}
                <span className="text-[var(--color-primary)]">ke tokomu</span>.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed text-[var(--color-muted)]">
                Berhenti menunggu pembeli yang cuma nanya harga lalu hilang. Terima
                permintaan nyata dengan alamat dan volume yang jelas — kamu tinggal
                kasih harga.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {["Tanpa biaya iklan", "Permintaan lengkap dengan alamat & volume", "Pembayaran jelas dan tercatat"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3 text-[16px] text-[var(--color-ink)]">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <VendorLeadForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — Cara kerja vendor */}
      <Section>
        <Container>
          <Reveal className="max-w-[720px]">
            <Eyebrow>Cara kerja</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Empat langkah sampai menang.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vendorSteps.map((s) => (
              <RevealItem key={s.no} as="article">
                <Card>
                  <span className="font-mono text-sm text-[var(--color-primary-press)]">{s.no}</span>
                  <h3 className="mt-4 font-display text-[20px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">{s.body}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* 3 — Apa untungnya */}
      <Section tone="alt">
        <Container>
          <Reveal className="max-w-[720px]">
            <Eyebrow>Apa untungnya</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Dibuat supaya jualanmu lebih pasti.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {vendorBenefits.map((b) => (
              <RevealItem key={b.title} as="article">
                <Card>
                  <h3 className="font-display text-[22px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-muted)]">{b.body}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* 4 & 5 — Syarat + cakupan wilayah */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Syarat & biaya</Eyebrow>
              <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] sm:text-[34px]">
                Yang perlu kamu siapkan.
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {vendorRequirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-[16px] text-[var(--color-ink)]">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                Pendaftaran dan verifikasi gratis. Skema biaya transaksi dijelaskan
                transparan sebelum kamu mulai — tanpa bintang kecil.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Cakupan wilayah</Eyebrow>
              <h2 className="font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] sm:text-[34px]">
                Kota yang sedang aktif.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {vendorCoverage.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-[16px] text-[var(--color-ink)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                Kotamu belum ada? Tetap daftar — kami memberi tahu begitu wilayahmu dibuka.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6 — FAQ vendor */}
      <Section tone="alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Pertanyaan vendor</Eyebrow>
              <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
                Sebelum daftar.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion items={vendorFaq} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7 — Form lead (ulang) */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[560px] text-center">
            <Reveal>
              <Eyebrow>Mulai sekarang</Eyebrow>
              <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[40px]">
                Daftarkan tokomu.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-muted)]">
                Isi lima kolom di bawah. Tim kami menghubungi lewat WhatsApp untuk
                langkah berikutnya.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 text-left">
              <VendorLeadForm id="daftar" />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
