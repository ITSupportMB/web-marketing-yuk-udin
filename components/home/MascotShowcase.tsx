"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { IconInbox, IconShield, IconTag, IconTruck } from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pill = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  pos: string;
  delay: number;
  hideOnMobile?: boolean;
};

const pills: Pill[] = [
  { icon: IconInbox, label: "Banyak penawaran", pos: "left-0 top-6 sm:-left-4", delay: 0.25 },
  { icon: IconShield, label: "Vendor terverifikasi", pos: "right-0 top-20 sm:-right-6", delay: 0.4 },
  { icon: IconTag, label: "Harga transparan", pos: "left-1 bottom-28 sm:-left-6", delay: 0.55, hideOnMobile: true },
  { icon: IconTruck, label: "Kirim cepat", pos: "right-2 bottom-14 sm:-right-2", delay: 0.7 },
];

/**
 * Panggung maskot Udin — maskot besar di atas cahaya lembut, dikelilingi
 * pill fitur yang mengambang. Terinspirasi komposisi hero referensi,
 * tetap memakai tema oranye/krem.
 */
export function MascotShowcase() {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto aspect-square w-full max-w-[480px]">
        {/* Cahaya lembut di belakang maskot */}
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(closest-side, rgba(200,80,15,0.16), rgba(200,80,15,0.05) 60%, transparent 72%)",
          }}
        />
        {/* Cincin dekoratif tipis */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 z-0 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border-strong)]/60"
        />

        {/* Maskot */}
        <m.div
          className="absolute inset-0 z-10 grid place-items-end justify-items-center pb-[8%]"
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <m.img
            src="/brand/maskot-udin.png"
            alt="Maskot Udin melambai, memakai helm dan rompi proyek"
            width={440}
            className="h-auto w-[90%] select-none drop-shadow-[0_24px_36px_rgba(63,23,7,0.22)]"
            draggable={false}
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={reduce ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </m.div>

        {/* Bayangan podium */}
        <div
          aria-hidden
          className="absolute bottom-[6%] left-1/2 z-0 h-4 w-[46%] -translate-x-1/2 rounded-[50%] bg-[rgba(63,23,7,0.14)] blur-md"
        />

        {/* Pill fitur mengambang */}
        {pills.map(({ icon: Icon, label, pos, delay, hideOnMobile }) => (
          <m.div
            key={label}
            className={`absolute z-20 ${pos} ${hideOnMobile ? "hidden sm:block" : ""}`}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay }}
          >
            <m.div
              className="flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-2 pr-4 shadow-[0_8px_20px_rgba(63,23,7,0.10)]"
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={
                reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
              }
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="whitespace-nowrap text-[13px] font-medium text-[var(--color-ink)]">
                {label}
              </span>
            </m.div>
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}
