import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Mascot } from "@/components/brand/Mascot";

/**
 * 10 — Penutup. Satu-satunya blok gelap di halaman (design-spec §06).
 * QR untuk desktop: sisipkan SVG QR hasil generate ke slot `.qr-slot`
 * yang mengarah ke site.playStoreUrl saat aset final tersedia.
 */
export function DownloadCta() {
  return (
    <section className="bg-[var(--color-bg)] px-[var(--gutter)] pb-[var(--space-section)] pt-10">
      <Container>
        <Reveal>
          <div className="relative mx-auto  rounded-[var(--radius-lg)] bg-[var(--color-surface-ink)] px-6 pb-24 pt-28 text-center text-[var(--color-on-dark)] sm:px-12 sm:pt-24">
            {/* Cahaya hangat di dalam kartu gelap supaya tidak datar */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 70% at 50% -10%, rgba(239,160,11,0.22), transparent 60%), radial-gradient(50% 60% at 100% 100%, rgba(200,80,15,0.20), transparent 65%)",
              }}
            />
            {/* Maskot Udin melambai di atas kartu gelap */}
            <div className="pointer-events-none absolute -top-10 max-[450px]:-top-20 sm:-top-30 md:-top-40 left-1/2 z-10 -translate-x-1/2">
              <Mascot width={300} />
            </div>
            <h2 className="relative z-10 mx-auto max-w-[16ch] font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] sm:text-[48px]">
              Berhenti telepon lima toko cuma buat nanya harga.
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[rgba(253,246,238,0.82)]">
              Unduh Yuk Udin, tulis daftar belanja pertamamu, dan biarkan penawaran
              yang datang ke kamu.
            </p>

            <div className="relative z-10 mt-10 flex flex-col items-center gap-8">
              <a
                href="https://play.google.com/store?utm_source=web&utm_medium=cta_closing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--color-amber)] px-9 py-4 text-[17px] font-medium text-[var(--color-amber-fg)] transition-colors hover:bg-[var(--color-amber-strong)]"
              >
                Download aplikasi
              </a>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
                {/* Slot QR desktop — ganti dengan SVG QR yang scannable */}
                <div
                  className="qr-slot grid h-28 w-28 place-items-center rounded-[var(--radius-md)] border border-dashed border-[rgba(253,246,238,0.35)] bg-[rgba(253,246,238,0.06)] text-center font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(253,246,238,0.6)]"
                  aria-hidden
                >
                  QR<br />yukudin.id/app
                </div>
                <div className="text-left">
                  <p className="text-sm text-[rgba(253,246,238,0.7)]">Buka di HP kamu</p>
                  <StoreBadges className="mt-3 justify-center sm:justify-start" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
