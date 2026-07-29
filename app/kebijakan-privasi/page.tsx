import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kebijakan privasi",
  description: "Bagaimana Yuk Udin mengumpulkan, memakai, dan melindungi data kamu.",
  alternates: { canonical: "/kebijakan-privasi" },
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Kebijakan privasi">
        Terakhir diperbarui: 28 Juli 2026. Dokumen ini masih draf dan akan
        difinalkan setelah ditinjau oleh tim hukum.
      </PageHeader>

      <Section>
        <Container>
          <Prose>
            <p>
              Kebijakan ini menjelaskan bagaimana {site.name} mengumpulkan, memakai,
              dan melindungi data pribadi kamu saat memakai website dan aplikasi kami.
            </p>

            <h2>Data yang kami kumpulkan</h2>
            <ul>
              <li>Data yang kamu berikan: nama, nomor WhatsApp, kota, dan informasi toko saat mendaftar sebagai vendor.</li>
              <li>Data penggunaan website: halaman yang dikunjungi dan interaksi, hanya jika kamu menyetujui cookie analitik.</li>
              <li>Data teknis: jenis perangkat dan peramban untuk menjaga layanan tetap aman dan stabil.</li>
            </ul>

            <h2>Cara kami memakai data</h2>
            <ul>
              <li>Menghubungkan permintaan material dengan vendor yang relevan.</li>
              <li>Menghubungi vendor yang mendaftar untuk proses verifikasi.</li>
              <li>Memahami dan memperbaiki pengalaman pemakaian website.</li>
            </ul>

            <h2>Cookie analitik</h2>
            <p>
              Website ini hanya menyalakan cookie analitik setelah kamu menekan
              &ldquo;Terima&rdquo; pada banner persetujuan. Kamu bisa menolak tanpa
              kehilangan fungsi apa pun. Preferensimu disimpan di perangkatmu.
            </p>

            <h2>Berbagi data</h2>
            <p>
              Kami tidak menjual data pribadimu. Data hanya dibagikan seperlunya
              kepada penyedia layanan yang membantu operasi kami, dengan kewajiban
              menjaga kerahasiaan.
            </p>

            <h2>Hak kamu</h2>
            <p>
              Kamu berhak meminta akses, koreksi, atau penghapusan data pribadimu.
              Ajukan lewat <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Kontak</h2>
            <p>
              Pertanyaan soal privasi bisa dikirim ke{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
