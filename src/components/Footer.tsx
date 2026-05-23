const quickLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Area Praktik", href: "#praktik" },
  { label: "Alur Kerja", href: "#proses" },
  { label: "Tim", href: "#tim" },
  { label: "Klien", href: "#klien" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/desain_DLC_-removebg-preview.png"
              alt="Dilema Law Consultant"
              className="h-20 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/80">
              Advocate &amp; Legal Consultant. Menangani perkara dengan
              integritas, presisi, dan tanggung jawab profesional.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
              Navigasi
            </span>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial */}
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
              Sosial
            </span>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://instagram.com/dilema.lc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Instagram: @dilema.lc
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281947053513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  WhatsApp: +62 819-4705-3513
                </a>
              </li>
            </ul>
          </div>

          {/* Jam Layanan & Kontak */}
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
              Jam Layanan
            </span>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Senin – Jumat
              <br />
              09.00 – 18.00 WIB
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>dilemalawconsultant@gmail.com</p>
              <p>+62 819-4705-3513</p>
            </div>
          </div>
        </div>

        {/* Legal disclaimer & privacy */}
        <div
          id="privasi"
          className="mt-16 border-t border-white/10 pt-10"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                Disclaimer Hukum
              </span>
              <p className="mt-4 text-xs leading-[1.85] text-white/75">
                Seluruh informasi yang dipublikasikan pada situs ini bersifat
                edukatif dan umum, bukan merupakan nasihat hukum atas perkara
                tertentu. Hubungan advokat–klien hanya terbentuk setelah
                perjanjian kuasa ditandatangani kedua belah pihak.
              </p>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/75">
                Kebijakan Privasi
              </span>
              <p className="mt-4 text-xs leading-[1.85] text-white/75">
                Data yang Anda sampaikan melalui formulir kontak hanya digunakan
                untuk keperluan konsultasi awal dan tidak dibagikan kepada
                pihak ketiga. Komunikasi Anda dengan advokat dilindungi oleh
                kerahasiaan profesi advokat sesuai UU No. 18 Tahun 2003.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/75">
            &copy; {new Date().getFullYear()} Dilema Law Consultant. All rights
            reserved.
          </p>
          <p className="font-['Bookman_Old_Style',_serif] text-sm italic text-white/80">
            Audi et alteram partem.
          </p>
        </div>
      </div>
    </footer>
  );
}
