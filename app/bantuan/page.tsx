import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { customerFaq, vendorFaq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bantuan — pertanyaan yang sering diajukan",
  description:
    "Jawaban singkat untuk pertanyaan customer dan vendor Yuk Udin seputar cara pesan material, verifikasi, dan biaya.",
  alternates: { canonical: "/bantuan" },
};

export default function BantuanPage() {
  return (
    <>
      <PageHeader eyebrow="Bantuan" title="Pertanyaan yang sering ditanyakan.">
        Jawaban singkat untuk hal-hal yang paling sering ditanyakan. Kalau belum
        terjawab, hubungi kami lewat halaman kontak.
      </PageHeader>

      <Section>
        <Container>
          <div className="max-w-[820px]">
            <Tabs
              tabs={[
                { id: "customer", label: "Untuk customer", content: <Accordion items={customerFaq} /> },
                { id: "vendor", label: "Untuk vendor", content: <Accordion items={vendorFaq} /> },
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
