import Link from "next/link";
import { footerColumns, site } from "@/lib/content";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[var(--container-site)] px-[var(--gutter)] pb-8 pt-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              Satu daftar belanja, banyak penawaran dari toko material terverifikasi
              di sekitar lokasi proyekmu.
            </p>
            <StoreBadges className="mt-6" />
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-subtle)]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary-press)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="nota-divider my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-sm text-[var(--color-subtle)] sm:flex-row sm:items-center">
          <p>© 2026 {site.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <Link href="/kebijakan-privasi" className="hover:text-[var(--color-primary-press)]">
              Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-[var(--color-primary-press)]">
              Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
