import { Container } from "@/components/ui/layout";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.08em] text-[var(--color-primary-press)]">
          404
        </p>
        <h1 className="mt-4 font-display text-[40px] font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[56px]">
          Halaman tidak ditemukan.
        </h1>
        <p className="mt-4 max-w-md text-[17px] leading-relaxed text-[var(--color-muted)]">
          Tautan mungkin salah atau halaman sudah dipindahkan. Kembali ke beranda
          dan mulai dari daftar belanja.
        </p>
        <LinkButton href="/" size="lg" className="mt-8">
          Kembali ke beranda
        </LinkButton>
      </div>
    </Container>
  );
}
