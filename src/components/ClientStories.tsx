const stories = [
  {
    image: "/klien-1.jpeg",
    caption: "Pendampingan sidang perkara keluarga, Pengadilan Agama, 2025.",
  },
  {
    image: "/klien-2.jpeg",
    caption: "Konsultasi pra-sidang dan mediasi klien, 2025.",
  },
];

export function ClientStories() {
  return (
    <section
      id="klien"
      className="relative w-full bg-white px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-slate-950/60">
            Kisah Klien
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            Pendampingan Nyata.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            Dokumentasi pendampingan perkara dan konsultasi yang telah kami
            tangani bersama klien.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {stories.map((s, i) => (
            <figure key={i} className="flex flex-col">
              <div className="aspect-[4/5] w-full overflow-hidden border border-slate-950 bg-slate-100">
                <img
                  src={s.image}
                  alt={s.caption}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-6 text-sm leading-[1.7] text-slate-700">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
