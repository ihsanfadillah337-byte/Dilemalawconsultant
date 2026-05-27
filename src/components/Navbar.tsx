const links = [
  { label: "Tentang", href: "#tentang" },
  { label: "Area Praktik", href: "#praktik" },
  { label: "Alur Kerja", href: "#proses" },
  { label: "Tim", href: "#tim" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200 z-50 relative">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#hero" className="flex items-center relative z-50">
          <img
            src="/desain_DLC_-removebg-preview.png"
            alt="Dilema Law Consultant"
            className="h-32 md:h-40 w-auto object-contain -mb-16 md:-mb-24"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs uppercase font-semibold tracking-[0.2em] text-slate-800 transition-colors hover:text-blue-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
