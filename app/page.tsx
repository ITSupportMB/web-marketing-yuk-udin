import { Hero } from "@/components/home/Hero";
import {
  ValueStrip,
  HowItWorks,
  Categories,
  Trust,
  Testimonials,
  VendorStrip,
} from "@/components/home/Sections";
import { NotaSection } from "@/components/home/NotaSection";
import { Comparison } from "@/components/home/Comparison";
import { Coverage } from "@/components/home/Coverage";
import { SeoContent } from "@/components/home/SeoContent";
import { HomeFaq } from "@/components/home/HomeFaq";
import { DownloadCta } from "@/components/home/DownloadCta";
import { StickyCta } from "@/components/layout/StickyCta";
import { ScrollDepth } from "@/components/home/ScrollDepth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <NotaSection />
      <Comparison />
      <HowItWorks />
      <Categories />
      <Coverage />
      <Trust />
      <Testimonials />
      <VendorStrip />
      <HomeFaq />
      <SeoContent />
      <DownloadCta />
      <StickyCta />
      <ScrollDepth />
    </>
  );
}
