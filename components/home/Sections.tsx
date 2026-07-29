import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import {
  valuePillars,
  problems,
  howItWorks,
  categories,
  trustPoints,
  testimonials,
} from "@/lib/content";
import {
  IconList,
  IconInbox,
  IconCheck,
  IconShield,
  IconStar,
  IconClock,
  IconHeadset,
  IconArrow,
} from "@/components/ui/icons";
import type { ReactNode } from "react";

/* 02 — Nilai inti (pengganti angka bukti, tanpa data yang belum ada) */
const valueIcons = [IconList, IconInbox, IconCheck];

export function ValueStrip() {
  return (
    <Section tone="surface" className="!py-20">
      <Container>
        <RevealGroup className="grid gap-10 sm:grid-cols-3">
          {valuePillars.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <RevealItem key={v.title}>
                <IconBadge>
                  <Icon className="h-6 w-6" />
                </IconBadge>
                <h3 className="mt-5 font-display text-[22px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--color-muted)]">{v.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* 03 — Masalahnya */
export function Problem() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <div className="max-w-[720px]">
          <Reveal>
            <Eyebrow>Kenapa ribet</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Cari material bangunan masih terlalu melelahkan.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 flex flex-col gap-5">
            {problems.map((p, i) => (
              <RevealItem
                key={i}
                className="flex gap-4 border-l-2 border-[var(--color-border-strong)] pl-5"
              >
                <p className="text-[18px] leading-relaxed text-[var(--color-muted)]">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}

/* 04 — Cara kerja (3 langkah) */
const stepIcons = [IconList, IconInbox, IconCheck];

export function HowItWorks() {
  return (
    <Section tone="surface" id="cara-kerja" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-[560px]">
            <Eyebrow>Cara kerja</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Tiga langkah, dari daftar sampai kirim.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/cara-kerja"
              className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-[var(--color-primary-press)]"
            >
              <span className="underline-offset-4 group-hover:underline">Lihat alur lengkap</span>
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <RevealItem key={step.no} as="article">
                <Card>
                  <div className="flex items-center justify-between">
                    <IconBadge>
                      <Icon className="h-6 w-6" />
                    </IconBadge>
                    <span className="font-mono text-sm text-[var(--color-subtle)]">{step.no}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[24px] font-medium tracking-[-0.015em] text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-muted)]">
                    {step.body}
                  </p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* 05 — Kategori material */
export function Categories() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal className="max-w-[720px]">
          <Eyebrow>Kategori material</Eyebrow>
          <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
            Dari pondasi sampai finishing.
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <RevealItem key={cat}>
              <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-[16px] text-[var(--color-ink)] transition-colors hover:border-[var(--color-border-strong)]">
                {cat}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* 06 — Kepercayaan (dibingkai sebagai prinsip, bukan klaim skala) */
const trustIcons = [IconShield, IconStar, IconClock, IconHeadset];

export function Trust() {
  return (
    <Section tone="surface" className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal className="max-w-[720px]">
          <Eyebrow>Rasa aman</Eyebrow>
          <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
            Dibangun supaya kamu tenang bertransaksi.
          </h2>
          <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-[var(--color-muted)]">
            Kami baru mulai — dan justru karena itu rasa aman dibangun sejak transaksi
            pertama, bukan ditambal belakangan.
          </p>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {trustPoints.map((t, i) => {
            const Icon = trustIcons[i];
            return (
              <RevealItem key={t.title} as="article">
                <div className="flex gap-5">
                  <IconBadge>
                    <Icon className="h-6 w-6" />
                  </IconBadge>
                  <div>
                    <h3 className="font-display text-[20px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-[var(--color-muted)]">
                      {t.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* 07 — Testimoni (statis, tidak berputar) */
export function Testimonials() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <Reveal className="max-w-[720px]">
          <Eyebrow>Kata mereka</Eyebrow>
          <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
            Orang lapangan yang sudah pakai.
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name} as="article">
              <figure className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                <blockquote className="flex-1 text-[18px] leading-relaxed text-[var(--color-ink)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--color-border)] pt-5 text-[15px]">
                  <span className="font-medium text-[var(--color-ink)]">{t.name}</span>
                  <span className="mt-0.5 block text-[var(--color-subtle)]">
                    {t.role} · {t.city}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/* 08 — Strip vendor */
export function VendorStrip() {
  return (
    <Section className="!py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="font-display text-[26px] font-medium tracking-[-0.015em] text-[var(--color-ink)] sm:text-[30px]">
                Punya toko material?
              </h2>
              <p className="mt-2 text-[16px] text-[var(--color-muted)]">
                Terima permintaan nyata dengan alamat dan volume yang jelas — tanpa biaya iklan.
              </p>
            </div>
            <Link
              href="/vendor"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-primary)] px-6 py-3.5 text-[16px] font-medium text-[var(--color-primary-press)] transition-colors hover:bg-[var(--color-primary-soft)]"
            >
              Daftar jadi vendor
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* Kartu dasar — satu komponen untuk seluruh halaman */
export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group h-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-[transform,box-shadow,border-color] duration-[240ms] ease-out hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_8px_24px_rgba(89,31,10,0.08)]">
      {children}
    </div>
  );
}
