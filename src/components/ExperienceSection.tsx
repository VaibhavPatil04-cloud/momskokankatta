import { motion } from "framer-motion";
import { Play } from "lucide-react";
import experienceBg from "@/assets/experience-bg.jpg";

const ExperienceSection = () => (
  <section className="relative py-48 lg:py-64 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={experienceBg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Play button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full ring-1 ring-primary/40 flex items-center justify-center mx-auto mb-12 hover:bg-primary/10 transition-colors duration-300"
        >
          <Play className="w-8 h-8 text-primary ml-1" />
        </motion.button>

        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-8">The Experience</p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic font-medium text-foreground leading-[1.3] max-w-3xl mx-auto">
          "Where every meal becomes a memory, and every visit feels like coming home."
        </h2>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
