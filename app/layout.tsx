import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yukudin.id"),
  title: {
    default: "Yuk Udin — Aplikasi pesan material bangunan",
    template: "%s — Yuk Udin",
  },
  description:
    "Tulis satu daftar belanja material, terima banyak penawaran dari toko terverifikasi di sekitar lokasi proyek. Bandingkan harga, stok, dan ongkos kirim di satu layar.",
  keywords: [
    "aplikasi pesan material bangunan",
    "cari supplier material bangunan",
    "harga semen besi bata",
    "penawaran material bangunan",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Yuk Udin",
    title: "Yuk Udin — Aplikasi pesan material bangunan",
    description:
      "Satu daftar belanja, banyak penawaran dari toko material terverifikasi.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FDF6EE",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Yuk Udin",
      url: "https://yukudin.id",
      email: site.email,
      address: { "@type": "PostalAddress", addressLocality: site.address, addressCountry: "ID" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Yuk Udin",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-[var(--color-surface)] focus:px-4 focus:py-2 focus:text-[var(--color-ink)] focus:shadow"
        >
          Lompat ke konten
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
