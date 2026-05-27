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
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#hero" className="flex items-center">
          <img
            src="/desain_DLC_-removebg-preview.png"
            alt="Dilema Law Consultant"
            className="h-16 w-auto md:h-20"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
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
