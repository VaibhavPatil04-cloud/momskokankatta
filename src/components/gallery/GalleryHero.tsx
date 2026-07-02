import { motion } from "framer-motion";
import hero1 from "@/assets/hero1.png";

const GalleryHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={hero1}
          alt="Gallery Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-6 font-medium italic">
            Visual Journey
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight">
            Gallery
          </h1>
          <div className="w-32 h-[1px] bg-primary/40 mx-auto mb-8" />
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            A Journey of Flavors, Ambience, and Unforgettable Moments
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default GalleryHero;
