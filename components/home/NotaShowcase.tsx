"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { IconStar, IconTruck } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.2 } as const;

const notaItems = [
  { qty: "50 sak", name: "Semen 40kg" },
  { qty: "2 ton", name: "Besi ulir 10mm" },
  { qty: "1.000", name: "Batako press" },
];

const offers = [
  { toko: "Toko Berkah", harga: "Rp 12,4 jt", kirim: "Kirim besok", rating: "4.8" },
  { toko: "UD Sumber", harga: "Rp 11,9 jt", kirim: "Kirim 2 hari", rating: "4.6", best: true },
  { toko: "Toko Jaya", harga: "Rp 12,1 jt", kirim: "Kirim besok", rating: "4.7" },
];

/**
 * Signature "nota jadi penawaran" (blueprint §4.4 & §4.5).
 * Daftar belanja muncul, lalu tiga kartu penawaran masuk berurutan saat
 * seksi masuk viewport. Animasi hanya vertikal supaya tidak pernah memicu
 * scroll horizontal.
 */
export function NotaShowcase() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Kolom kiri: daftar belanja seperti nota */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE }}
          className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_1px_2px_rgba(63,23,7,0.06)]"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-subtle)]">
            Daftar belanja kamu
          </p>
          <hr className="nota-divider my-4" />
          <ul className="flex flex-col gap-3">
            {notaItems.map((it) => (
              <li key={it.name} className="flex items-baseline justify-between gap-3">
                <span className="tabular text-sm font-medium text-[var(--color-primary-press)]">
                  {it.qty}
                </span>
                <span className="flex-1 border-b border-dotted border-[var(--color-border-strong)]" />
                <span className="text-sm text-[var(--color-ink)]">{it.name}</span>
              </li>
            ))}
          </ul>
          <hr className="nota-divider my-4" />
          <p className="text-sm text-[var(--color-muted)]">
            Kirim ke: <span className="font-medium text-[var(--color-ink)]">Bekasi Timur</span>
          </p>
        </m.div>

        {/* Kolom kanan: penawaran masuk */}
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-subtle)]">
            Penawaran masuk (3)
          </p>
          <m.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            {offers.map((o) => (
              <m.div
                key={o.toko}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
                }}
                className={`rounded-[var(--radius-md)] border bg-[var(--color-surface)] p-4 shadow-[0_1px_2px_rgba(63,23,7,0.06)] ${
                  o.best ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-[var(--color-ink)]">{o.toko}</span>
                  <span className="tabular text-base font-semibold text-[var(--color-primary-press)]">
                    {o.harga}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-muted)]">
                  <span className="inline-flex items-center gap-1">
                    <IconTruck className="h-4 w-4 text-[var(--color-subtle)]" />
                    {o.kirim}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <IconStar className="h-4 w-4 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                    <span className="tabular">{o.rating}</span>
                  </span>
                  {o.best && (
                    <span className="ml-auto rounded-full bg-[var(--color-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-primary-press)]">
                      Termurah
                    </span>
                  )}
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
