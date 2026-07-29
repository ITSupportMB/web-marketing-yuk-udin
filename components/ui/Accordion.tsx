"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { IconChevron } from "@/components/ui/icons";
import { track } from "@/lib/analytics";

export type QA = { q: string; a: string };

export function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => {
                  const next = isOpen ? null : i;
                  setOpen(next);
                  if (next !== null) track("faq_open", { question: item.q });
                }}
              >
                <span className="text-[17px] font-medium text-[var(--color-ink)]">{item.q}</span>
                <IconChevron
                  className={`h-5 w-5 shrink-0 text-[var(--color-primary-press)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[62ch] pb-5 text-[16px] leading-relaxed text-[var(--color-muted)]">
                      {item.a}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </LazyMotion>
  );
}
