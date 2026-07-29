"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { MascotShowcase } from "./MascotShowcase";
import { site } from "@/lib/content";
import { track } from "@/lib/analytics";
import { IconArrow } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Latar gradient hangat & lembut (echo hero referensi, versi oranye) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 22%, rgba(200,80,15,0.10), transparent 70%), linear-gradient(180deg, #faf5ef 0%, var(--color-bg) 46%)",
        }}
      />
      <div className="mx-auto grid min-h-[100svh] max-w-[var(--container-site)] items-center gap-12 px-[var(--gutter)] py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            <m.p
              variants={rise}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-subtle)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              Material bangunan, satu layar
            </m.p>

            <m.h1
              variants={rise}
              className="font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)] sm:text-[56px] lg:text-[72px]"
            >
              Kirim satu daftar belanja.
              <br />
              Terima{" "}
              <span className="text-[var(--color-primary)]">banyak penawaran</span>.
            </m.h1>

            <m.p
              variants={rise}
              className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--color-muted)] sm:text-[18px]"
            >
              Tulis material yang kamu butuh, kirim ke toko-toko terverifikasi di sekitar
              lokasi proyek. Harga, stok, dan ongkos kirim masuk ke satu layar — kamu
              tinggal pilih yang paling masuk akal.
            </m.p>

            <m.div variants={rise} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <LinkButton
                href={site.playStoreUrl}
                external
                size="lg"
                onClick={() => track("hero_cta_click", { location: "hero" })}
              >
                Download aplikasi
              </LinkButton>
              <Link
                href="/cara-kerja"
                className="group inline-flex items-center gap-1.5 text-[16px] font-medium text-[var(--color-primary-press)]"
              >
                <span className="underline-offset-4 group-hover:underline">Lihat cara kerjanya</span>
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </m.div>
          </m.div>
        </LazyMotion>

        <div className="relative">
          <MascotShowcase />
        </div>
      </div>
    </section>
  );
}
