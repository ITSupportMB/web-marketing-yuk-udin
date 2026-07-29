"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { hasConsentDecision, setConsent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasConsentDecision()) setShow(true);
  }, []);

  if (!show) return null;

  const decide = (granted: boolean) => {
    setConsent(granted);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[110] p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_8px_24px_rgba(89,31,10,0.12)] sm:flex-row sm:items-center">
        <p className="flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          Kami memakai cookie analitik untuk memahami cara halaman ini dipakai. Baca{" "}
          <Link href="/kebijakan-privasi" className="font-medium text-[var(--color-primary-press)] underline">
            kebijakan privasi
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="md" onClick={() => decide(false)}>
            Tolak
          </Button>
          <Button variant="primary" size="md" onClick={() => decide(true)}>
            Terima
          </Button>
        </div>
      </div>
    </div>
  );
}
