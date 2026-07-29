import type { ReactNode } from "react";

/**
 * Wadah ikon yang tenang: lingkaran ber-hairline di atas surface, ikon oranye.
 * Menggantikan lingkaran penuh oranye yang tadinya terasa terlalu ramai.
 */
export function IconBadge({
  children,
  size = 44,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)]"
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
