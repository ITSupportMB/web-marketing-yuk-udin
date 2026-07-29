"use client";

import { useState } from "react";

/**
 * Logo brand. Memakai /brand/logo-udin.png (ikon app "udin apk.png").
 * Kalau file belum ada, jatuh ke tile "YU" agar layout tetap rapi.
 */
export function BrandLogo({
  size = 34,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  const [ok, setOk] = useState(true);
  return (
    <span className="inline-flex items-center gap-2.5">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/logo-udin.png"
          alt="Yuk Udin"
          width={size}
          height={size}
          className="rounded-[9px]"
          style={{ width: size, height: size }}
          onError={() => setOk(false)}
        />
      ) : (
        <span
          aria-hidden
          className="grid place-items-center rounded-[9px] bg-[var(--color-primary)] font-semibold text-white"
          style={{ width: size, height: size, fontSize: size * 0.42 }}
        >
          YU
        </span>
      )}
      {showText && (
        <span className="text-lg font-semibold tracking-[-0.01em] text-[var(--color-ink)]">
          Yuk Udin
        </span>
      )}
    </span>
  );
}
