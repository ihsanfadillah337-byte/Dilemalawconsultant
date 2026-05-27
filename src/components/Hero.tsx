import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-6 pt-32 pb-16 lg:px-12"
    >
      {/* Watermark image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat bg-contain opacity-100 grayscale"
        style={{ backgroundImage: "url('/lady-justice.webp')" }}
      />
      {/* Solid navy overlay */}
      <div aria-hidden className="absolute inset-0 bg-slate-950/90" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/75">
            Advocate &amp; Legal Consultant
          </span>

          <h1 className="font-['Bookman_Old_Style',_serif] font-semibold text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Dialog, Litigasi <br />
            untuk Masyarakat.
          </h1>

          <p className="mt-8 font-['Bookman_Old_Style',_serif] text-xl italic text-white/80 sm:text-2xl">
            “Audi et alteram partem.”
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Advocate &amp; Legal Consultant. Kami hadir memberikan solusi hukum
            yang presisi dengan selalu mendengarkan setiap sisi.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
