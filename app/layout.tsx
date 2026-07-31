import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { site, homeFaq, coverageAreas } from "@/lib/content";

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
    "Yuk Udin — aplikasi pesan material bangunan online. Tulis satu daftar belanja, terima banyak penawaran dari toko terverifikasi di Jabodetabek, Bandung, dan sekitarnya. Bandingkan harga semen, besi, bata, keramik, stok, dan ongkos kirim di satu layar.",
  keywords: [
    "aplikasi pesan material bangunan",
    "cari supplier material bangunan",
    "beli material bangunan online",
    "harga semen besi bata",
    "penawaran material bangunan",
    "material bangunan Jabodetabek",
    "supplier bahan bangunan Jakarta Bekasi Depok Bogor Tangerang Bandung",
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
      "@id": "https://yukudin.id/#organization",
      name: "Yuk Udin",
      url: "https://yukudin.id",
      email: site.email,
      description:
        "Aplikasi pesan material bangunan yang menghubungkan pembeli dengan toko material terverifikasi.",
      address: { "@type": "PostalAddress", addressLocality: site.address, addressCountry: "ID" },
      areaServed: coverageAreas.map((city) => ({ "@type": "City", name: city })),
    },
    {
      "@type": "SoftwareApplication",
      name: "Yuk Udin",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
    },
    {
      "@type": "Service",
      name: "Pemesanan material bangunan online",
      serviceType: "Marketplace material bangunan",
      provider: { "@id": "https://yukudin.id/#organization" },
      areaServed: coverageAreas.map((city) => ({ "@type": "City", name: city })),
      description:
        "Kirim satu daftar belanja material bangunan dan terima banyak penawaran dari toko terverifikasi untuk dibandingkan.",
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
