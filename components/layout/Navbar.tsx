"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";
import { LinkButton } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { IconChevron } from "@/components/ui/icons";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(253,246,238,0.85)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[var(--container-site)] items-center justify-between px-[var(--gutter)]">
        <Link href="/" aria-label="Yuk Udin beranda">
          <BrandLogo size={50}/>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] transition-colors ${
                  active
                    ? "font-medium text-[var(--color-primary-press)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <LinkButton
            href={site.playStoreUrl}
            external
            size="md"
            onClick={() => track("hero_cta_click", { location: "navbar" })}
          >
            Download app
          </LinkButton>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg text-[var(--color-ink)] md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Overlay menu mobile */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-[99] bg-[var(--color-bg)] px-[var(--gutter)] py-8 md:hidden">
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-2xl font-medium text-[var(--color-ink)]"
                >
                  {item.label}
                  <IconChevron className="-rotate-90 text-[var(--color-subtle)]" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LinkButton
              href={site.playStoreUrl}
              external
              size="lg"
              className="w-full"
              onClick={() => track("hero_cta_click", { location: "mobile_menu" })}
            >
              Download app
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
