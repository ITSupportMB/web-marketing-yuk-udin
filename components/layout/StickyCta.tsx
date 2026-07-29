"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { track } from "@/lib/analytics";

/**
 * Sticky CTA bar mobile (blueprint §5.1): muncul setelah scroll melewati hero.
 * Satu-satunya elemen yang boleh pakai shadow.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[90] p-3 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-[120%]"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("sticky_cta_click")}
        className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-[var(--color-primary-press)] px-6 text-[16px] font-medium text-white shadow-[0_8px_24px_rgba(89,31,10,0.22)]"
      >
        Download aplikasi
      </a>
    </div>
  );
}
