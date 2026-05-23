const team = [
  {
    name: "Fikri Raihan Purnama, S.H.",
    role: "Advocate & Legal Consultant",
    description:
      "Menangani perkara hukum keluarga, perceraian, dan mediasi. Berpraktik dengan pendekatan dokumentasi yang rapi dan komunikasi langsung kepada klien.",
    image: "/team-fikri.png",
    wa: "https://wa.me/6285159921298",
  },
  {
    name: "Aziz Malik Rachmatulloh, S.H.",
    role: "Advocate & Legal Consultant",
    description:
      "Fokus pada litigasi perdata, sengketa kontrak, dan pendampingan korporasi. Menyusun strategi berbasis berkas perkara dan ketentuan yang berlaku.",
    image: "/team-aziz.png",
    wa: "https://wa.me/6281947053513",
  },
  {
    name: "Quynna Zenobia, S.H., M.Kn.",
    role: "Advocate & Notarial Consultant",
    description:
      "Menangani aspek kenotariatan, legalitas korporasi, dan penyusunan akta. Memastikan setiap dokumen klien memenuhi syarat formal dan material yang berlaku.",
    image: "/team-quynna.jpeg",
    wa: "https://wa.me/6282115379181",
  },
];

export function TeamSection() {
  return (
    <section
      id="tim"
      className="relative w-full bg-slate-950 px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-white/60">
            Tim Profesional Kami
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Konsultan Penanggung Jawab.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Advokat yang menangani perkara secara langsung dari konsultasi awal
            hingga putusan.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col border border-white/20 p-6"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-8 font-['Bookman_Old_Style',_serif] font-semibold text-xl text-white">
                {member.name}
              </h3>
              <span className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
                {member.role}
              </span>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                {member.description}
              </p>

              <a
                href={member.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-colors hover:bg-white/90"
              >
                Hubungi via WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-12 text-center">
          <p className="font-['Bookman_Old_Style',_serif] text-xl italic text-white/80 sm:text-2xl">
            “Audi et alteram partem.”
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            Setiap perkara kami tangani dengan mendengarkan kedua belah pihak.
            Komitmen ini menjadi dasar setiap langkah litigasi maupun mediasi
            yang kami jalankan.
          </p>
        </div>
      </div>
    </section>
  );
}
