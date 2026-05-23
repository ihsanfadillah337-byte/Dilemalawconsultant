import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Menghadapi proses perceraian di pengadilan adalah fase yang menguras emosi. Namun, kehadiran tim advokat DLC di setiap jadwal sidang memberikan ketenangan luar biasa. Mereka tidak sekadar mengurus tumpukan berkas legal, tetapi mendengarkan dari dua sisi dengan empati, menjaga privasi saya dengan ketat, dan memperjuangkan hak asuh anak secara taktis.",
    name: "Klien Hukum Keluarga",
    designation: "Penyelesaian Sengketa Hak Asuh & Harta Bersama, 2026",
    src: "/foto-sidang-1.jpeg",
  },
  {
    quote:
      "Saya datang ke DLC dalam keadaan bingung dan tertekan. Tim mereka menjelaskan setiap tahapan perkara dengan bahasa yang mudah dipahami, dari mediasi hingga putusan. Pendampingan langsung di ruang sidang membuat saya merasa tidak sendirian, dan strategi mereka terbukti melindungi kepentingan saya serta anak-anak.",
    name: "Klien Hukum Keluarga",
    designation: "Pendampingan Mediasi & Putusan Pengadilan Agama, 2026",
    src: "/foto-sidang-2.jpeg",
  },
];

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(testimonials.length - 1);
    }
  };

  return (
    <div
      className="mx-auto max-w-5xl px-4 py-12 font-sans antialiased md:px-8 lg:px-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimoni klien"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Image Section */}
        <div aria-live="polite" aria-atomic="true">
          <div className="relative h-80 w-full md:h-[28rem]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} dari ${testimonials.length}`}
                  aria-hidden={!isActive(index)}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.96,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index) ? 40 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.96, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-sm border border-slate-700 object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="font-['Bookman_Old_Style',_serif] text-xl font-semibold text-white">
              {testimonials[active].name}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
              {testimonials[active].designation}
            </p>
            <p className="mt-8 text-base leading-relaxed text-white/80">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
          </motion.div>

          <div className="mt-12 flex items-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Testimoni sebelumnya"
              className="group flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Testimoni berikutnya"
              className="group flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span
              aria-live="polite"
              className="ml-2 text-xs uppercase tracking-[0.25em] text-white/60"
            >
              {active + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Component() {
  return (
    <section
      id="klien"
      className="relative w-full bg-slate-950 px-6 py-12 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.3em] text-white/60">
            Kisah Klien
          </span>
          <h2 className="font-['Bookman_Old_Style',_serif] text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Pendampingan Nyata.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Testimoni klien yang telah kami dampingi dalam perkara hukum
            keluarga dan perceraian di pengadilan.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}

export default Component;
