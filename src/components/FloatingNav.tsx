import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Area Praktik", href: "#praktik" },
  { label: "Alur Kerja", href: "#proses" },
  { label: "Tim", href: "#tim" },
  { label: "Klien", href: "#klien" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
      const ids = links.map((l) => l.href.slice(1));
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <button
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center bg-slate-950 text-white shadow-lg ring-1 ring-white/10 transition-colors hover:bg-slate-950"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="flex w-80 max-w-[85vw] flex-col bg-slate-950 p-8 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-white/75">
                Navigasi
              </span>
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-12 flex flex-col gap-1">
              {links.map((l) => {
                const id = l.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 border-l-2 py-3 pl-4 font-['Bookman_Old_Style',_serif] text-lg transition-colors ${
                        isActive
                          ? "border-white text-white"
                          : "border-transparent text-white/60 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
