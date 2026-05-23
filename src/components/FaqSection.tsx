import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Berapa biaya konsultasi awal di DLC?",
    a: "Sesi konsultasi awal melalui WhatsApp atau pertemuan singkat tidak dipungut biaya. Biaya jasa hukum baru disepakati tertulis setelah analisa berkas dan sebelum perjanjian kuasa ditandatangani.",
  },
  {
    q: "Berapa lama proses perceraian biasanya berlangsung?",
    a: "Untuk perkara yang tidak diperdebatkan (cerai gugat/talak tanpa sengketa), umumnya 3 sampai 6 bulan di Pengadilan Agama atau Pengadilan Negeri. Perkara dengan sengketa hak asuh atau harta bersama dapat lebih lama tergantung kompleksitas bukti.",
  },
  {
    q: "Apa saja syarat dokumen untuk mengajukan gugatan cerai?",
    a: "Umumnya: buku nikah asli, KTP, kartu keluarga, akta kelahiran anak (jika ada), serta surat keterangan domisili. Dokumen tambahan dapat diminta tergantung jenis gugatan (cerai gugat, cerai talak, atau khulu').",
  },
  {
    q: "Bagaimana penentuan hak asuh anak setelah perceraian?",
    a: "Untuk anak di bawah usia 12 tahun (mumayyiz), hak asuh umumnya jatuh pada ibu kecuali terbukti tidak layak. Di atas 12 tahun, anak diberikan hak memilih. Putusan akhir tetap di tangan Majelis Hakim berdasarkan kepentingan terbaik anak.",
  },
  {
    q: "Apakah komunikasi dengan DLC bersifat rahasia?",
    a: "Ya. Seluruh informasi yang Anda sampaikan kepada advokat DLC dilindungi oleh kerahasiaan profesi advokat sesuai UU No. 18 Tahun 2003 tentang Advokat.",
  },
  {
    q: "Berapa biaya jasa pengurusan pendirian PT?",
    a: "Biaya pendirian PT bervariasi tergantung modal dasar, jenis usaha, dan jumlah perizinan turunan yang dibutuhkan (NIB, izin operasional, izin lokasi). Estimasi tertulis diberikan setelah sesi konsultasi awal.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full bg-white px-6 py-12 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-slate-600">
            Pertanyaan Umum
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] font-semibold text-3xl leading-tight text-slate-800 sm:text-4xl">
            Yang Sering Ditanyakan.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            Jawaban singkat untuk pertanyaan yang paling sering masuk ke meja
            konsultasi kami. Pertanyaan lain dapat disampaikan langsung via
            WhatsApp.
          </p>
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-slate-300">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-slate-300"
              >
                <AccordionTrigger className="py-6 text-left font-['Bookman_Old_Style',_serif] text-lg font-semibold text-slate-800 hover:no-underline sm:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-[1.85] text-slate-700">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
