"use client";

import { useState, type ReactNode } from "react";

export function Tabs({
  tabs,
}: {
  tabs: { id: string; label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Pilih tampilan"
        className="inline-flex gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
      >
        {tabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.id)}
              className={`min-h-[44px] rounded-full px-5 text-[15px] font-medium transition-colors ${
                on
                  ? "bg-[var(--color-primary-press)] text-white"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="mt-10">
        {tabs.map((t) => (
          <div key={t.id} role="tabpanel" hidden={t.id !== active}>
            {t.id === active && t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
