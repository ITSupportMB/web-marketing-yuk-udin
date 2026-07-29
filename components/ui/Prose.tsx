import type { ReactNode } from "react";

/** Wadah teks panjang: lebar 62ch, ritme heading & paragraf konsisten. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-legal max-w-[68ch] text-[17px] leading-relaxed text-[var(--color-muted)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:font-medium [&_h2]:tracking-[-0.015em] [&_h2]:text-[var(--color-ink)] [&_li]:mt-1.5 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:font-medium [&_a]:text-[var(--color-primary-press)] [&_a]:underline">
      {children}
    </div>
  );
}
