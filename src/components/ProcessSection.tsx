const steps = [
  {
    number: "01",
    title: "Konsultasi Awal",
    description:
      "Sampaikan kronologi perkara melalui WhatsApp atau pertemuan langsung. Bersifat rahasia dan tanpa biaya untuk sesi pertama.",
  },
  {
    number: "02",
    title: "Analisa Berkas",
    description:
      "Tim kami menelaah dokumen, bukti, dan posisi hukum Anda. Hasilnya disampaikan dalam ringkasan tertulis yang jelas.",
  },
  {
    number: "03",
    title: "Strategi & Penawaran",
    description:
      "Kami menyusun strategi litigasi atau non-litigasi beserta estimasi durasi, biaya, dan risiko sebelum perjanjian kuasa ditandatangani.",
  },
  {
    number: "04",
    title: "Pendampingan",
    description:
      "Pendampingan penuh hingga putusan berkekuatan hukum tetap, mediasi tercapai, atau dokumen legalitas terbit.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proses"
      className="relative w-full bg-slate-950 px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-white/75">
            Alur Kerja
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Empat Tahap, Tanpa Kejutan.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Setiap perkara di DLC mengikuti alur kerja yang sama, sehingga Anda
            mengetahui posisi perkara dari hari pertama.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.number}
              className="flex flex-col border border-white/20 p-10 -ml-px -mt-px"
            >
              <span className="font-['Bookman_Old_Style',_serif] text-sm tracking-widest text-white/60">
                {s.number}
              </span>
              <h3 className="mt-6 font-['Bookman_Old_Style',_serif] font-semibold text-xl leading-snug text-white">
                {s.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-white/75">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
