import { NextResponse } from "next/server";

/**
 * Route handler form lead vendor (blueprint §5.2 & §7.1).
 * Validasi server-side + anti-spam honeypot. Lead siap dialirkan ke
 * Supabase tabel `vendor_leads` (service-role, server-side saja) — lihat TODO.
 */

type LeadPayload = {
  namaToko?: string;
  namaPic?: string;
  whatsapp?: string;
  kota?: string;
  kategori?: string;
  website?: string; // honeypot — harus kosong
};

const waPattern = /^(?:\+?62|0)8[1-9][0-9]{6,11}$/;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Format tidak valid." }, { status: 400 });
  }

  // Honeypot: bot mengisi field tersembunyi -> tolak diam-diam.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  const namaToko = (body.namaToko ?? "").trim();
  const namaPic = (body.namaPic ?? "").trim();
  const whatsapp = (body.whatsapp ?? "").replace(/[\s-]/g, "");
  const kota = (body.kota ?? "").trim();
  const kategori = (body.kategori ?? "").trim();

  if (namaToko.length < 2) errors.namaToko = "Isi nama toko.";
  if (namaPic.length < 2) errors.namaPic = "Isi nama penanggung jawab.";
  if (!waPattern.test(whatsapp)) errors.whatsapp = "Nomor WhatsApp belum valid.";
  if (kota.length < 2) errors.kota = "Isi kota.";
  if (!kategori) errors.kategori = "Pilih kategori material.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const lead = { namaToko, namaPic, whatsapp, kota, kategori, createdAt: new Date().toISOString() };

  // TODO(integrasi): simpan ke Supabase `vendor_leads` + notifikasi tim sales.
  // const supabase = createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  // await supabase.from("vendor_leads").insert(lead);
  console.info("[vendor-lead]", lead);

  return NextResponse.json({ ok: true });
}
