import type { SVGProps } from "react";

const s = (p: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const IconList = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M8 6h13M8 12h13M8 18h13" />
    <circle cx="3.5" cy="6" r="1" />
    <circle cx="3.5" cy="12" r="1" />
    <circle cx="3.5" cy="18" r="1" />
  </svg>
);

export const IconInbox = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M4 13h4l2 3h4l2-3h4" />
    <path d="M5 5h14l1 8v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
  </svg>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconStar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" />
  </svg>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconHeadset = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <path d="M4 13h3v5H5a1 1 0 0 1-1-1zM20 13h-3v5h2a1 1 0 0 0 1-1z" />
    <path d="M20 18v1a3 3 0 0 1-3 3h-3" />
  </svg>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconChevron = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconTag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M3 12V4h8l9 9-7 7z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);

export const IconTruck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const IconWallet = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s(p)}>
    <path d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3M3 7h16a1 1 0 0 1 1 1v3" />
    <circle cx="16" cy="13" r="1.2" />
  </svg>
);

export const IconWhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...s({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2m0 2a8 8 0 0 1 4.9 14.3l-.4.3-2.9.8.8-2.8.3-.4A8 8 0 0 1 12 4m-3.4 4c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5 0 1.6-.7 1.9-1.3.2-.7.2-1.2.1-1.3l-.7-.4-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4z" />
  </svg>
);
