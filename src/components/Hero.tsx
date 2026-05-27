import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-slate-950 px-6 pt-20 pb-24 lg:px-12 lg:pt-28 lg:pb-28"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-slate-950 z-0"></div>
      <img
        src="image_4.png"
        className="absolute inset-0 w-full h-full object-cover object-right z-0"
        alt="background"
      />
      <div className="absolute inset-0 bg-slate-950/85 z-0"></div>

      <div className="relative mx-auto w-full max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-white/75 mb-2">
              Advocate &amp; Legal Consultant
            </span>
            <h1 className="font-['Bookman_Old_Style',_serif] font-semibold text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Dialog, Litigasi <br />
              untuk Masyarakat.
            </h1>
          </div>

          <div>
            <p className="font-['Bookman_Old_Style',_serif] text-xl italic text-white/80 sm:text-2xl mb-3">
              “Audi et alteram partem.”
            </p>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Advocate &amp; Legal Consultant. Kami hadir memberikan solusi hukum
              yang presisi dengan selalu mendengarkan setiap sisi.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-colors hover:bg-white/90"
            >
              Pendampingan Hukum &amp; Perceraian
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-slate-950"
            >
              Urus Legalitas Bisnis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

