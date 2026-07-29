import { Hero } from "@/components/home/Hero";
import {
  ValueStrip,
  Problem,
  HowItWorks,
  Categories,
  Trust,
  Testimonials,
  VendorStrip,
} from "@/components/home/Sections";
import { NotaSection } from "@/components/home/NotaSection";
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
      <Problem />
      <HowItWorks />
      <Categories />
      <Trust />
      <Testimonials />
      <VendorStrip />
      <HomeFaq />
      <DownloadCta />
      <StickyCta />
      <ScrollDepth />
    </>
  );
}
