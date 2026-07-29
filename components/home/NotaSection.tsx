import { Container, Section, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { NotaShowcase } from "./NotaShowcase";
import { IconCheck } from "@/components/ui/icons";

const points = [
  "Harga, stok, dan ongkos kirim berjajar rapi",
  "Rating vendor terlihat sebelum kamu pilih",
  "Tidak perlu buka lima chat yang berbeda",
];

export function NotaSection() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Nota jadi penawaran</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-[var(--color-ink)] sm:text-[48px]">
              Semua penawaran dalam satu layar.
            </h2>
            <p className="mt-5 max-w-[520px] text-[18px] leading-relaxed text-[var(--color-muted)]">
              Tulis daftar belanjamu seperti nota toko. Dalam sekejap, penawaran dari
              beberapa vendor masuk berdampingan — tinggal bandingkan dan pilih.
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[16px] text-[var(--color-ink)]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <NotaShowcase />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
