const litigasi = {
  label: "Litigasi",
  title: "Layanan Litigasi",
  caption: "Penyelesaian di Dalam Pengadilan",
  items: [
    {
      name: "Hukum Keluarga & Perceraian",
      desc: "Gugatan cerai, sengketa hak asuh anak, dan pembagian harta bersama pada Pengadilan Agama maupun Pengadilan Negeri.",
    },
    {
      name: "Advokasi & Persidangan Umum",
      desc: "Penanganan kasus perdata, pidana umum, ketenagakerjaan, dan sengketa pengadilan pada tingkat pertama hingga kasasi.",
    },
  ],
};

const nonLitigasi = {
  label: "Non-Litigasi",
  title: "Layanan Non-Litigasi",
  caption: "Penyelesaian di Luar Pengadilan",
  items: [
    {
      name: "Legalitas & Pendirian Usaha",
      desc: "Pembuatan akta pendirian dan izin untuk CV, PT, Yayasan, serta pengurusan NIB dan perizinan operasional.",
    },
    {
      name: "Legal Drafting & Mediasi",
      desc: "Pembuatan draf kontrak bisnis, perjanjian hukum, konsultasi regulasi, dan penyelesaian sengketa melalui jalur negosiasi.",
    },
  ],
};

function Column({ data }: { data: typeof litigasi }) {
  return (
    <div className="flex h-full flex-col bg-slate-50 border border-slate-800 p-6 lg:p-8">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
        {data.caption}
      </span>
      <h3 className="mt-4 font-['Bookman_Old_Style',_serif] font-semibold text-2xl leading-tight text-slate-800 sm:text-3xl">
        {data.title}
      </h3>

      <div className="mt-8 flex-1 border-t border-slate-300">
        {data.items.map((it) => (
          <div
            key={it.name}
            className="border-b border-slate-300 py-5 last:border-b-0"
          >
            <h4 className="font-['Bookman_Old_Style',_serif] font-semibold text-xl text-slate-800 sm:text-xl">
              {it.name}
            </h4>
            <p className="mt-4 text-sm leading-[1.85] text-slate-700">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PracticeAreas() {
  return (
    <section
      id="praktik"
      className="relative w-full bg-white px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-slate-600">
            Area Praktik
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-slate-800 sm:text-4xl md:text-5xl">
            Lingkup Layanan Hukum.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            Dua jalur pendekatan — di dalam dan di luar pengadilan — ditangani
            langsung oleh advokat kami sesuai kebutuhan perkara Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Column data={litigasi} />
          <Column data={nonLitigasi} />
        </div>
      </div>
    </section>
  );
}
