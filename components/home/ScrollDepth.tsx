"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/** Tembak scroll_75 sekali saat pengguna melewati 75% halaman. */
export function ScrollDepth() {
  const fired = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (fired.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.75) {
        fired.current = true;
        track("scroll_75");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
