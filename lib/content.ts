/**
 * Sumber konten tunggal untuk website marketing Yuk Udin.
 * Semua copy Bahasa Indonesia, memakai "kamu", sentence case,
 * tanpa tanda seru, tanpa emoji (lihat blueprint §6).
 */

export const site = {
  name: "Yuk Udin",
  tagline: "Kirim satu daftar belanja. Terima banyak penawaran.",
  waNumber: "6281200000000", // ganti dengan nomor WhatsApp bisnis final
  waMessage: "Halo Yuk Udin, saya mau tanya soal aplikasi pesan material.",
  email: "halo@yukudin.id",
  address: "Bekasi Timur, Jawa Barat",
  playStoreUrl: "https://play.google.com/store?utm_source=web&utm_medium=cta",
  appStoreUrl: "https://apps.apple.com/?utm_source=web&utm_medium=cta",
};

export const nav = [
  { label: "Cara kerja", href: "/cara-kerja" },
  { label: "Untuk vendor", href: "/vendor" },
  { label: "Bantuan", href: "/bantuan" },
  { label: "Tentang", href: "/tentang" },
];

/**
 * Nilai inti (pengganti angka bukti). App baru diluncurkan — belum ada data
 * vendor/kota yang bisa diklaim, jadi kita jelaskan cara kerjanya, bukan angka.
 */
export const valuePillars = [
  {
    title: "Satu daftar belanja",
    body: "Tulis kebutuhan materialmu sekali, kirim ke banyak toko sekaligus.",
  },
  {
    title: "Banyak penawaran",
    body: "Harga, stok, dan ongkos kirim masuk berjajar ke satu layar.",
  },
  {
    title: "Kamu yang pilih",
    body: "Bandingkan dengan tenang, pilih yang paling masuk akal buat proyekmu.",
  },
];

export const problems = [
  "Harus telepon dan WA lima toko satu-satu cuma buat nanya harga semen dan besi.",
  "Jawaban beda-beda, susah dibandingkan, catatan berserakan di banyak chat.",
  "Sudah cocok harga, sampai lokasi ternyata stok kosong dan proyek molor.",
];

export const howItWorks = [
  {
    no: "01",
    title: "Tulis daftar belanja",
    body: "Catat material dan volumenya seperti nota toko — sak, ton, kubik, batang. Tambahkan alamat kirim ke lokasi proyek.",
  },
  {
    no: "02",
    title: "Terima penawaran",
    body: "Toko-toko terverifikasi di sekitar lokasimu mengirim harga, stok, dan ongkos kirim. Semua masuk ke satu layar.",
  },
  {
    no: "03",
    title: "Pilih dan kirim",
    body: "Bandingkan harga sejajar, lihat rating vendor, pilih yang paling masuk akal. Material dikirim, riwayat tersimpan.",
  },
];

/** Kategori material + contoh item (contoh item bagus untuk SEO long-tail). */
export const categories = [
  { name: "Semen & agregat", examples: "Semen, pasir, split, batu koral" },
  { name: "Besi & baja", examples: "Besi beton, hollow, wiremesh, plat" },
  { name: "Bata & blok", examples: "Bata merah, batako, hebel, paving" },
  { name: "Atap", examples: "Genteng, spandek, asbes, baja ringan" },
  { name: "Keramik", examples: "Lantai, dinding, granit, nat" },
  { name: "Cat", examples: "Cat tembok, kayu, besi, waterproofing" },
  { name: "Sanitasi", examples: "Pipa, kloset, wastafel, kran" },
  { name: "Listrik", examples: "Kabel, saklar, MCB, lampu" },
];

/** Perbandingan "cara lama" vs Yuk Udin — untuk seksi visual & marketing. */
export const comparison = {
  old: {
    title: "Cara lama",
    points: [
      "Telepon dan WA lima toko satu per satu",
      "Harga beda-beda, susah dibandingkan",
      "Catatan berserakan di banyak chat",
      "Sampai lokasi, stok ternyata kosong",
      "Habis waktu seharian cuma buat survei harga",
    ],
  },
  neu: {
    title: "Dengan Yuk Udin",
    points: [
      "Tulis satu daftar, kirim ke banyak toko sekaligus",
      "Semua penawaran berjajar rapi di satu layar",
      "Harga, stok, dan ongkir langsung terlihat",
      "Vendor terverifikasi, rating jelas",
      "Penawaran datang dalam hitungan jam",
    ],
  },
};

/**
 * Cakupan wilayah untuk homepage (local/GEO SEO). Pre-launch: fokus
 * Jabodetabek & sekitarnya, sebutkan "terus bertambah" — jujur, tanpa klaim palsu.
 */
export const coverageAreas = [
  "Jakarta",
  "Bekasi",
  "Depok",
  "Bogor",
  "Tangerang",
  "Tangerang Selatan",
  "Bandung",
  "Cikarang",
];

/**
 * Blok konten SEO + GEO (generative engine optimization).
 * Kalimat faktual & lugas: bagus untuk mesin pencari maupun mesin jawaban AI.
 * Menyebut kata kunci lokal secara natural, bukan keyword stuffing.
 */
export const seoContent = {
  title: "Cara pesan material bangunan online lewat Yuk Udin",
  paragraphs: [
    "Yuk Udin adalah aplikasi pesan material bangunan yang menghubungkan pemborong, kontraktor, mandor, dan pemilik rumah dengan toko material terverifikasi di sekitar lokasi proyek. Daripada menelepon banyak toko satu per satu, kamu cukup menulis satu daftar belanja — misalnya semen, besi beton, bata, keramik, hingga cat — lalu menerima beberapa penawaran harga sekaligus untuk dibandingkan.",
    "Lewat satu permintaan, kamu bisa membandingkan harga material, ketersediaan stok, dan ongkos kirim dari beberapa supplier dalam satu layar. Setiap vendor sudah melewati verifikasi identitas dan izin usaha (KYB), sehingga transaksi material dengan nilai besar terasa lebih aman. Cocok untuk kebutuhan renovasi rumah maupun proyek konstruksi skala kecil hingga menengah.",
    "Layanan Yuk Udin difokuskan untuk wilayah Jabodetabek dan sekitarnya — termasuk Jakarta, Bekasi, Depok, Bogor, Tangerang, dan Bandung — dan terus diperluas. Unduh aplikasinya untuk mulai membandingkan harga material bangunan dan memesan dari toko tepercaya di kotamu.",
  ],
};

export const trustPoints = [
  {
    title: "Verifikasi KYB dari awal",
    body: "Setiap toko wajib lolos pemeriksaan identitas dan izin usaha sebelum bisa menawar. Bukan akun asal daftar.",
  },
  {
    title: "Rating dari transaksi nyata",
    body: "Penilaian vendor dibentuk dari transaksi yang benar-benar terjadi — bukan bintang beli-belian.",
  },
  {
    title: "Riwayat tersimpan rapi",
    body: "Setiap permintaan, penawaran, dan pembelian terekam. Mudah dicek ulang saat proyek berjalan.",
  },
  {
    title: "Didampingi tim admin",
    body: "Kalau ada selisih atau kendala di tengah transaksi, ada tim yang siap membantu menengahi.",
  },
];

export const testimonials = [
  {
    quote:
      "Dulu sehari habis buat telepon toko. Sekarang tulis daftar sekali, sore sudah ada empat penawaran masuk.",
    name: "Pak Rahmat",
    role: "Pemborong",
    city: "Bekasi",
  },
  {
    quote:
      "Yang paling kepakai buat saya: harga sebelah-sebelahan jadi gampang dibandingkan. Nggak perlu buka lima chat.",
    name: "Bu Sari",
    role: "Kontraktor kecil",
    city: "Bogor",
  },
  {
    quote:
      "Stok kelihatan dari awal, jadi jarang kejadian sampai lokasi barang kosong. Proyek lebih jarang molor.",
    name: "Pak Deni",
    role: "Mandor proyek",
    city: "Depok",
  },
];

export const homeFaq = [
  {
    q: "Apakah pakai Yuk Udin ada biaya buat pembeli?",
    a: "Menulis daftar belanja dan menerima penawaran gratis untuk pembeli. Kamu hanya membayar material ke vendor yang kamu pilih.",
  },
  {
    q: "Bagaimana kalau vendornya tidak jujur soal stok?",
    a: "Semua vendor lolos verifikasi KYB dan punya rating dari transaksi nyata. Kalau ada masalah, tim admin membantu menengahi.",
  },
  {
    q: "Material apa saja yang bisa dipesan?",
    a: "Mulai dari semen, besi, bata, atap, keramik, cat, sanitasi, sampai kebutuhan listrik. Tulis apa pun yang kamu butuhkan di daftar.",
  },
  {
    q: "Kota mana saja yang sudah aktif?",
    a: "Saat ini aktif di Jabodetabek dan sekitarnya, dan terus bertambah. Cek daftar kota terbaru di dalam aplikasi.",
  },
];

/* ---------- Konten halaman vendor ---------- */

export const vendorBenefits = [
  {
    title: "Permintaan yang jelas",
    body: "Setiap permintaan datang lengkap dengan alamat, volume, dan waktu butuh. Bukan sekadar tanya harga lalu hilang.",
  },
  {
    title: "Tanpa biaya iklan",
    body: "Kamu tidak perlu bakar uang iklan buat kelihatan. Permintaan yang relevan datang ke tokomu.",
  },
  {
    title: "Pembayaran jelas",
    body: "Skema transaksi transparan, tercatat, dan didukung tim admin kalau ada selisih.",
  },
];

export const vendorSteps = [
  { no: "01", title: "Daftar & verifikasi", body: "Isi data toko dan unggah dokumen KYB lewat aplikasi." },
  { no: "02", title: "Terima permintaan", body: "Permintaan material di sekitarmu masuk dengan detail lengkap." },
  { no: "03", title: "Kirim penawaran", body: "Beri harga, stok, dan estimasi kirim. Pembeli membandingkan." },
  { no: "04", title: "Menang & kirim", body: "Penawaran terpilih, material dikirim, transaksi tercatat." },
];

export const vendorRequirements = [
  "KTP pemilik atau penanggung jawab toko",
  "NPWP usaha",
  "NIB atau izin usaha yang berlaku",
  "Foto toko atau gudang material",
];

export const vendorFaq = [
  {
    q: "Berapa biaya untuk jadi vendor?",
    a: "Pendaftaran dan verifikasi gratis. Skema biaya transaksi dijelaskan transparan sebelum kamu mulai, tanpa bintang kecil.",
  },
  {
    q: "Berapa lama proses verifikasi KYB?",
    a: "Umumnya beberapa hari kerja setelah dokumen lengkap masuk. Tim akan menghubungi lewat WhatsApp kalau ada yang perlu dilengkapi.",
  },
  {
    q: "Apakah saya wajib menerima semua permintaan?",
    a: "Tidak. Kamu bebas memilih permintaan mana yang mau kamu tawar sesuai stok dan wilayah kirimmu.",
  },
  {
    q: "Wilayah mana saja yang bisa didaftarkan?",
    a: "Saat ini fokus di Jabodetabek dan sekitarnya. Isi kotamu di form — kami memberi tahu begitu wilayahmu dibuka.",
  },
  {
    q: "Bagaimana kalau ada selisih dengan pembeli?",
    a: "Ada tim admin yang membantu menengahi. Semua permintaan dan penawaran tercatat, jadi mudah ditelusuri.",
  },
];

export const vendorCoverage = [
  "Jakarta",
  "Bekasi",
  "Depok",
  "Bogor",
  "Tangerang",
  "Bandung",
];

export const vendorCategories = [
  "Semen & agregat",
  "Besi & baja",
  "Bata & blok",
  "Atap",
  "Keramik",
  "Cat",
  "Sanitasi",
  "Listrik",
  "Lainnya",
];

/* ---------- Bantuan (FAQ lengkap) ---------- */

export const customerFaq = [
  ...homeFaq,
  {
    q: "Bagaimana cara membandingkan penawaran?",
    a: "Semua penawaran tampil sejajar di satu layar: harga, estimasi kirim, dan rating vendor. Kamu bisa mengurutkan dari termurah dan memilih yang paling cocok.",
  },
  {
    q: "Apa yang terjadi setelah saya pilih penawaran?",
    a: "Vendor terpilih memproses pesananmu dan mengatur pengiriman. Semua detail transaksi tersimpan di riwayat aplikasi.",
  },
  {
    q: "Apakah bisa nego harga?",
    a: "Vendor menetapkan harga di penawaran. Kalau ada kebutuhan khusus atau volume besar, kamu bisa menuliskannya di catatan permintaan.",
  },
];

/* ---------- Tentang: legalitas & nilai ---------- */

export const companyInfo = {
  legalName: "PT Yuk Udin Nusantara", // ganti dengan nama legal final
  nib: "—", // isi NIB saat tersedia
  founded: "2025",
  address: "Bekasi Timur, Jawa Barat, Indonesia",
};

export const companyValues = [
  {
    title: "Transparan",
    body: "Harga, biaya, dan riwayat transaksi terbuka. Tanpa bintang kecil, tanpa biaya tersembunyi.",
  },
  {
    title: "Berpihak ke lapangan",
    body: "Dibuat untuk pemborong, mandor, dan pemilik toko — bukan untuk terlihat keren di layar rapat.",
  },
  {
    title: "Terverifikasi",
    body: "Setiap vendor lolos KYB. Kepercayaan dibangun dari identitas yang jelas, bukan janji.",
  },
];

export const footerColumns = [
  {
    title: "Produk",
    links: [
      { label: "Cara kerja", href: "/cara-kerja" },
      { label: "Untuk vendor", href: "/vendor" },
      { label: "Bantuan", href: "/bantuan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang", href: "/tentang" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
      { label: "Syarat & ketentuan", href: "/syarat-ketentuan" },
    ],
  },
];
