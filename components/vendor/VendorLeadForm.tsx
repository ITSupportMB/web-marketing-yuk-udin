"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { vendorCategories } from "@/lib/content";
import { track } from "@/lib/analytics";
import { IconCheck } from "@/components/ui/icons";

type Errors = Partial<Record<"namaToko" | "namaPic" | "whatsapp" | "kota" | "kategori", string>>;

const fieldBase =
  "w-full rounded-[var(--radius-sm)] border bg-[var(--color-surface)] px-4 py-3 text-[16px] text-[var(--color-ink)] " +
  "placeholder:text-[var(--color-subtle)] transition-colors focus:border-[var(--color-primary)] focus:outline-none";

export function VendorLeadForm({ id }: { id?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/vendor-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        track("vendor_lead_submit", { kota: data.kota });
        setStatus("done");
        form.reset();
        return;
      }
      const json = await res.json().catch(() => ({}));
      setErrors(json.errors ?? {});
      setStatus("idle");
    } catch {
      setErrors({ namaToko: "Gagal mengirim. Coba lagi sebentar." });
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div
        id={id}
        className="rounded-[var(--radius-md)] border border-[var(--color-primary)] bg-[var(--color-primary-soft)] p-8 text-center"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--color-primary)] text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-[24px] font-medium text-[var(--color-ink)]">
          Terima kasih, datamu masuk.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-[16px] leading-relaxed text-[var(--color-muted)]">
          Tim kami akan menghubungi lewat WhatsApp. Langkah berikutnya: unduh aplikasi
          dan lengkapi dokumen KYB (KTP, NPWP, NIB, foto toko) untuk verifikasi.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_1px_2px_rgba(89,31,10,0.06)] sm:p-8"
    >
      {/* Honeypot anti-spam — disembunyikan dari pengguna & pembaca layar */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <Field label="Nama toko" name="namaToko" placeholder="Toko Berkah Material" error={errors.namaToko} />
        <Field label="Nama penanggung jawab" name="namaPic" placeholder="Nama kamu" error={errors.namaPic} />
        <Field
          label="Nomor WhatsApp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          placeholder="08xxxxxxxxxx"
          error={errors.whatsapp}
        />
        <Field label="Kota" name="kota" placeholder="Bekasi" error={errors.kota} />

        <div>
          <label htmlFor="kategori" className="mb-1.5 block text-[15px] font-medium text-[var(--color-ink)]">
            Kategori material utama
          </label>
          <select
            id="kategori"
            name="kategori"
            defaultValue=""
            className={`${fieldBase} ${errors.kategori ? "border-[var(--color-primary)]" : "border-[var(--color-border-strong)]"}`}
          >
            <option value="" disabled>
              Pilih kategori
            </option>
            {vendorCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.kategori && <FieldError>{errors.kategori}</FieldError>}
        </div>

        <Button type="submit" size="lg" className="mt-1 w-full" disabled={status === "loading"}>
          {status === "loading" ? "Mengirim…" : "Daftar jadi vendor"}
        </Button>
        <p className="text-center text-[13px] text-[var(--color-subtle)]">
          Dengan mendaftar, kamu setuju dihubungi tim kami lewat WhatsApp.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[15px] font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`${fieldBase} ${error ? "border-[var(--color-primary)]" : "border-[var(--color-border-strong)]"}`}
        {...rest}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-[13px] text-[var(--color-primary-press)]">{children}</p>;
}
