import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Syarat & ketentuan",
  description: "Ketentuan penggunaan layanan dan website Yuk Udin.",
  alternates: { canonical: "/syarat-ketentuan" },
};

export default function SyaratKetentuanPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Syarat & ketentuan">
        Terakhir diperbarui: 28 Juli 2026. Dokumen ini masih draf dan akan
        difinalkan setelah ditinjau oleh tim hukum.
      </PageHeader>

      <Section>
        <Container>
          <Prose>
            <p>
              Dengan memakai website dan aplikasi {site.name}, kamu setuju dengan
              ketentuan berikut. Bacalah dengan saksama.
            </p>

            <h2>Layanan</h2>
            <p>
              {site.name} adalah penghubung antara pembeli material bangunan dan toko
              penjual. Transaksi jual beli terjadi antara kamu dan vendor; kami
              memfasilitasi permintaan, penawaran, dan pencatatannya.
            </p>

            <h2>Akun dan verifikasi</h2>
            <ul>
              <li>Vendor wajib melewati verifikasi KYB dengan dokumen yang sah.</li>
              <li>Kamu bertanggung jawab menjaga kerahasiaan akunmu di aplikasi.</li>
              <li>Data yang kamu berikan harus benar dan terkini.</li>
            </ul>

            <h2>Kewajiban pengguna</h2>
            <ul>
              <li>Tidak menyalahgunakan layanan untuk penipuan atau tindakan melanggar hukum.</li>
              <li>Memberikan informasi permintaan atau penawaran yang jujur.</li>
              <li>Menghormati kesepakatan harga dan pengiriman yang dibuat.</li>
            </ul>

            <h2>Batasan tanggung jawab</h2>
            <p>
              Kami berupaya menjaga kualitas layanan, namun tidak menjamin setiap
              transaksi bebas dari kendala. Sengketa antara pembeli dan vendor
              diselesaikan dengan bantuan tim kami sejauh yang wajar.
            </p>

            <h2>Perubahan ketentuan</h2>
            <p>
              Ketentuan ini dapat diperbarui sewaktu-waktu. Perubahan penting akan
              kami informasikan melalui website atau aplikasi.
            </p>

            <h2>Kontak</h2>
            <p>
              Pertanyaan soal ketentuan ini bisa dikirim ke{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
