import { motion } from "framer-motion";
import { Play } from "lucide-react";
import experienceBg from "@/assets/experience-bg.jpg";

const ExperienceSection = () => (
  <section className="relative w-full py-48 lg:py-72 overflow-hidden bg-[#0a0a0a]">
    
    {/* Cinematic Background with Premium Overlays */}
    <div className="absolute inset-0">
      <img 
        src={experienceBg} 
        alt="Experience Ambience" 
        className="w-full h-full object-cover opacity-[0.18]" 
      />
      {/* Deep Black Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-black/40" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Play Button - Redesigned Circular Premium Style */}
        <motion.button
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-16 overflow-hidden transition-all duration-700 hover:border-primary/60"
        >
          {/* Hover Fill Animation */}
          <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          
          {/* Soft Glow Shadow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 blur-2xl transition-opacity duration-700" />

          <Play className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 text-primary ml-1 transition-colors duration-700 group-hover:text-black drop-shadow-[0_0_10px_rgba(201,168,106,0.3)]" />
        </motion.button>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-sm uppercase tracking-[0.5em] text-primary mb-10 font-medium italic"
        >
          The Experience
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl italic font-medium text-[#f5f5f5] tracking-tight leading-[1.2] max-w-5xl mx-auto drop-shadow-2xl mb-20"
        >
          "Where every meal becomes a memory, and every visit feels like coming home."
        </motion.h2>

        {/* Brand CTA Button - Premium Style Consistency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.a
            href="#"
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 50px rgba(201, 168, 106, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-14 py-5 rounded-full text-sm uppercase tracking-[0.3em] font-body font-semibold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
          >
            {/* Fill Animation Layer */}
            <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            
            <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
              Explore Our Story
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
