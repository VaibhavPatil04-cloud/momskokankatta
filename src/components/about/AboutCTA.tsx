import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section className="relative py-32 lg:py-48 px-6 bg-gradient-to-t from-[#000] to-[#0a0a0a] text-center overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-white mb-16 tracking-tight">
            Come Experience <br /> Mom's Kokan Katta
          </h2>

          <motion.a
            href="#contact"
            whileHover={{
              y: -5,
              boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
          >
            {/* Fill Animation Layer */}
            <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

            <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
              Reserve Table
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
