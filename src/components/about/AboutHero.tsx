import { motion } from "framer-motion";
import hero2 from "@/assets/hero2.png";

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-ready structure */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero2}
          alt="Restaurant Ambience"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold text-white mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="font-body text-lg sm:text-xl text-primary uppercase tracking-[0.4em] font-medium italic">
            A Journey of Taste & Tradition
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient for transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default AboutHero;
