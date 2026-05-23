const stats = [
  { value: "2021", label: "Tahun Berdiri" },
  { value: "150+", label: "Perkara Ditangani" },
  { value: "3", label: "Advokat Tersertifikasi PERADI" },
  { value: "24/7", label: "Respon WhatsApp" },
];

export function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative w-full bg-slate-50 px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-slate-600">
              Tentang Kami
            </span>
            <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-slate-800 sm:text-4xl">
              Dialog sebelum Litigasi.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-slate-700">
              Dilema Law Consultant (DLC) adalah firma advokat yang berfokus
              pada hukum keluarga, perceraian, litigasi umum, serta legalitas
              usaha di Indonesia. Kami percaya setiap perkara memiliki dua sisi
              yang harus didengar — sebuah prinsip yang kami pegang melalui
              motto{" "}
              <em className="font-['Bookman_Old_Style',_serif]">
                Audi et alteram partem
              </em>
              .
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Kami menangani setiap perkara dengan ketelitian dokumen, strategi
              hukum yang terukur, dan komunikasi yang jujur kepada klien.
              Seluruh advokat kami terdaftar pada Perhimpunan Advokat Indonesia
              (PERADI) dan tunduk pada kode etik profesi.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-px border border-slate-300 bg-slate-300 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-50 p-6">
                  <div className="font-['Bookman_Old_Style',_serif] font-semibold text-2xl text-slate-800 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-500">
              Terdaftar pada PERADI · IKADIN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
