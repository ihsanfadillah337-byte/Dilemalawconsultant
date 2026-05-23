import { useState } from "react";

const caseTypes = [
  "Perceraian",
  "Hak Asuh Anak",
  "Pembagian Harta",
  "Legalitas Bisnis / Pendirian Usaha",
  "Kontrak & Legal Drafting",
  "Perdata / Pidana Umum",
  "Lainnya",
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    caseType: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const value =
      target.type === "checkbox" ? target.checked : target.value;
    setForm((f) => ({ ...f, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    alert("Pesan terkirim. Kami akan merespons paling lambat 1x24 jam.");
    setForm({
      name: "",
      email: "",
      caseType: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section
      id="kontak"
      className="relative w-full bg-slate-950 px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-white/75">
            Kontak & Konsultasi
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Jadwalkan Konsultasi.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Sampaikan ringkasan perkara Anda melalui formulir, atau hubungi kami
            langsung via WhatsApp untuk respon yang lebih cepat.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/75"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white focus:border-white focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/75"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white focus:border-white focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="caseType"
                className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/75"
              >
                Jenis Perkara
              </label>
              <select
                id="caseType"
                name="caseType"
                required
                value={form.caseType}
                onChange={handleChange}
                className="w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white focus:border-white focus:outline-none"
              >
                <option value="" className="bg-slate-950 text-white">
                  Pilih jenis perkara
                </option>
                {caseTypes.map((t) => (
                  <option key={t} value={t} className="bg-slate-950 text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/75"
              >
                Ringkasan Perkara
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={1000}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none border-b border-white/40 bg-transparent px-0 py-3 text-base text-white focus:border-white focus:outline-none"
              />
            </div>

            <label className="flex items-start gap-3 text-sm leading-[1.7] text-white/80">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 flex-shrink-0 accent-white"
              />
              <span>
                Saya menyetujui informasi yang saya sampaikan diproses oleh
                Dilema Law Consultant untuk keperluan konsultasi awal sesuai{" "}
                <a
                  href="#privasi"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Kebijakan Privasi
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!form.consent}
              className="mt-4 inline-flex w-full items-center justify-center bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Direct contact */}
          <div className="flex flex-col gap-12 lg:border-l lg:border-white/15 lg:pl-16">
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                Konsultasi Langsung
              </span>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Untuk perkara yang memerlukan penanganan segera, hubungi
                konsultan kami melalui WhatsApp. Semua komunikasi bersifat
                rahasia.
              </p>
              <a
                href="https://wa.me/6281947053513"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center bg-white px-8 py-5 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-colors hover:bg-white/90 sm:w-auto"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            <div className="border-t border-white/15 pt-10">
              <ul className="space-y-8">
                <li>
                  <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                    Email
                  </span>
                  <span className="mt-2 block text-base text-white">
                    dilemalawconsultant@gmail.com
                  </span>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                    Telepon / WhatsApp
                  </span>
                  <span className="mt-2 block text-base text-white">
                    +62 819-4705-3513
                  </span>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                    Jam Layanan
                  </span>
                  <span className="mt-2 block text-base leading-[1.7] text-white">
                    Senin – Jumat, 09.00 – 18.00 WIB
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
