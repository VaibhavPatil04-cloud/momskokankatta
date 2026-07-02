import { motion } from "framer-motion";
import about1 from "@/assets/about1.png";

const AboutExperience = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-[#080808]">
      {/* Background Texture/Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src={about1}
          alt="Texture"
          className="w-full h-full object-cover grayscale blur-sm"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1000px] mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold text-white mb-10 tracking-tight italic">
            A Dining Experience Like No Other
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            We believe that fine dining is an art form. From the first greeting to the final bite, every moment is choreographed to provide you with sensory delight and effortless luxury.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExperience;
