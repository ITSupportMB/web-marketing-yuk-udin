"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

/**
 * Maskot Udin dengan animasi mengambang lembut. Bisa dipakai untuk pose
 * apa pun lewat prop `src` (mis. /brand/udin-list.png). Kalau file tidak ada,
 * komponen tidak merender apa pun (tanpa broken image). Hormati reduced-motion.
 */
export function Mascot({
  src = "/brand/maskot-udin.png",
  alt = "Maskot Udin melambai",
  width = 170,
  className = "",
  float = true,
  flip = false,
  delay = 0,
  glow = false,
}: {
  src?: string;
  alt?: string;
  width?: number;
  className?: string;
  float?: boolean;
  flip?: boolean;
  delay?: number;
  glow?: boolean;
}) {
  const [ok, setOk] = useState(true);
  const reduce = useReducedMotion();
  if (!ok) return null;

  const animate = float && !reduce ? { y: [0, -12, 0], rotate: [0, -1.5, 0] } : { y: 0, rotate: 0 };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`relative ${className}`}
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {glow && (
          <span
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,80,15,0.16), rgba(200,80,15,0.04) 60%, transparent 74%)",
            }}
          />
        )}
        <m.img
          src={src}
          alt={alt}
          width={width}
          style={{ width, height: "auto", transform: flip ? "scaleX(-1)" : undefined }}
          className="select-none drop-shadow-[0_16px_28px_rgba(63,23,7,0.18)]"
          draggable={false}
          onError={() => setOk(false)}
          animate={animate}
          transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </m.div>
    </LazyMotion>
  );
}
