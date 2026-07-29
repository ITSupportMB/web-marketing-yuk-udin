import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/daftar-vendor", destination: "/vendor", permanent: true },
      { source: "/faq", destination: "/bantuan", permanent: true },
      { source: "/privacy", destination: "/kebijakan-privasi", permanent: true },
    ];
  },
};

export default nextConfig;
