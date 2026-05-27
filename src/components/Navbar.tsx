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
    <header className="bg-white sticky top-0 w-full z-50 border-b border-slate-200 shadow-sm">
      <nav className="flex justify-between items-center h-20 px-4 md:px-8 max-w-7xl mx-auto">
        <a href="#hero" className="flex items-center">
          <img
            src="/logo-dlc.png"
            alt="Logo DLC"
            className="h-10 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 font-sans transition-colors hover:text-blue-900"
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

