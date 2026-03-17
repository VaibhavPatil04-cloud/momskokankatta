import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero.png";
import hero1Img from "@/assets/hero1.png";
import hero2Img from "@/assets/hero2.png";
import { Star } from "lucide-react";

const slides = [
  { image: heroImg, title: "Great Food.\nGreat Company.", cta: "View Menu", href: "#menu" },
  { image: hero1Img, title: "Every Bite.\nA New Experience.", cta: "Book Your Experience", href: "#contact" },
  { image: hero2Img, title: "A Place to\nRelax & Enjoy.", cta: "Visit Us", href: "#contact" },
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
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Vrundavan Hotel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tighter leading-[1.1] whitespace-pre-line"
            >
              {slide.title}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={slide.href}
                className="inline-block mt-10 px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-body font-medium bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition-all duration-500"
              >
                {slide.cta}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Trust badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-12 flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.1)" }}
        >
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
            <Star className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs font-body tracking-wider text-muted-foreground">
            4.0 Rating &nbsp;|&nbsp; 800+ Customers
          </span>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
