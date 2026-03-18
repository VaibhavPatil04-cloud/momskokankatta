import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero.png";
import hero1Img from "@/assets/hero1.png";
import hero2Img from "@/assets/hero2.png";
import { Star } from "lucide-react";

const slides = [
  { image: heroImg, title: "Every Bite.\nA New Experience.", subtitle: "Indulge your senses with our carefully curated menu.", cta: "Book Your Experience", href: "#contact" },
  { image: hero1Img, title: "A Place to\nRelax & Enjoy.", subtitle: "Unwind in an atmosphere of unparalleled elegance and warmth.", cta: "Visit Us", href: "#contact" },
  { image: hero2Img, title: "Great Food.\nGreat Company.", subtitle: "Experience authentic flavors in a premium setting.", cta: "View Menu", href: "#menu" }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Preloaded Background Images Stack */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        {slides.map((s, index) => (
          <motion.div
            key={`slide-img-${index}`}
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.1 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              zIndex: current === index ? 1 : 0,
              pointerEvents: current === index ? "auto" : "none"
            }}
          >
            <img
              src={s.image}
              alt={`Vrundavan Hotel - Background ${index + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle bottom gradient overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto flex flex-col justify-end items-start px-8 sm:px-12 lg:px-16 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left w-full max-w-3xl"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-[1.1] whitespace-pre-line"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg sm:text-xl font-body text-foreground/80 font-light max-w-lg"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <a
                href={slide.href}
                className="inline-block px-10 py-4 text-sm uppercase tracking-[0.2em] font-body font-medium bg-primary text-primary-foreground hover:shadow-[0_0_25px_rgba(201,168,106,0.6)] transition-all duration-500 pointer-events-auto"
              >
                {slide.cta}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current ? "bg-primary w-8" : "bg-foreground/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
