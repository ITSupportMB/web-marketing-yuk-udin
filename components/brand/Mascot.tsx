"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

/**
 * Maskot Udin (karakter bata melambai) dengan animasi mengambang lembut.
 * Memakai /brand/maskot-udin.png. Kalau file belum ada, komponen tidak
 * merender apa pun (tanpa broken image). Hormati prefers-reduced-motion.
 */
export function Mascot({
  width = 170,
  className = "",
  float = true,
  delay = 0,
}: {
  width?: number;
  className?: string;
  float?: boolean;
  delay?: number;
}) {
  const [ok, setOk] = useState(true);
  const reduce = useReducedMotion();
  if (!ok) return null;

  const animate =
    float && !reduce
      ? { y: [0, -12, 0], rotate: [0, -1.5, 0] }
      : { y: 0, rotate: 0 };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      >
        <m.img
          src="/brand/maskot-udin.png"
          alt="Maskot Udin melambai"
          width={width}
          style={{ width, height: "auto" }}
          className="select-none drop-shadow-[0_16px_28px_rgba(89,31,10,0.18)]"
          draggable={false}
          onError={() => setOk(false)}
          animate={animate}
          transition={
            reduce
              ? undefined
              : { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
          }
        />
      </m.div>
    </LazyMotion>
  );
}
