"use client";

import { site } from "@/lib/content";
import { track } from "@/lib/analytics";

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3 13.4 12 3.6 21.7a1.6 1.6 0 0 1-.6-1.3V3.6c0-.5.2-1 .6-1.3z" fill="#EFA00B" />
      <path d="M16.7 8.7 13.4 12l3.3 3.3 3.5-2a1.5 1.5 0 0 0 0-2.6z" fill="#D65108" />
      <path d="M3.6 2.3c.3-.2.8-.2 1.2 0l11.9 6.4-3.3 3.3z" fill="#0075C4" />
      <path d="M13.4 12l3.3 3.3-11.9 6.4c-.4.2-.9.2-1.2 0z" fill="#0267C1" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8zM14.2 5.9c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3z" />
    </svg>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("store_redirect", { store: "play" })}
        className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 transition-colors hover:border-[var(--color-primary)]"
      >
        <GooglePlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-[var(--color-subtle)]">Unduh di</span>
          <span className="block text-sm font-medium text-[var(--color-ink)]">Google Play</span>
        </span>
      </a>
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("store_redirect", { store: "appstore" })}
        className="inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2.5 text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)]"
      >
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-[var(--color-subtle)]">Unduh di</span>
          <span className="block text-sm font-medium">App Store</span>
        </span>
      </a>
    </div>
  );
}
