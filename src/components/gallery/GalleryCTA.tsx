import { motion } from "framer-motion";

const GalleryCTA = () => {
  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">
            Experience It Yourself
          </h2>
          <p className="font-body text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            The mood, the flavors, and the hospitality are best experienced in person. We look forward to welcoming you soon.
          </p>
          
          <motion.a
            href="/#contact"
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
          >
            {/* Fill Animation from bottom to top */}
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

export default GalleryCTA;
