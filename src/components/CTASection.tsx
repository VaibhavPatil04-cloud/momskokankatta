import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  const highlights = ["Family Friendly", "Authentic Malvani", "Fresh Seafood", "Coastal Ambience"];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#111111] to-[#0b0b0b] py-[140px] lg:py-[180px] px-6">

      {/* Soft Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-0" />

      {/* Floating Decorative Shapes INSIDE Section Background (Middle Layer) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* Top Left: Small Abstract Curve */}
        <motion.svg
          initial={{ y: 0, rotate: -10 }}
          animate={{ y: [-15, 15, -15], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-24 h-24 text-primary opacity-20"
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"
        >
          <path d="M10 50 Q30 20 70 40 T90 90" strokeLinecap="round" />
          <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.5" />
        </motion.svg>

        {/* Top Right: Medium Pizza Slice */}
        <motion.svg
          initial={{ y: 0, rotate: -20 }}
          animate={{ y: [-10, 10, -10], rotate: [-20, -10, -20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] right-[8%] w-32 h-32 text-white opacity-10"
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2"
        >
          <path d="M20 20 L80 50 L20 80 Z" strokeLinejoin="round" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <circle cx="35" cy="55" r="4" fill="currentColor" />
          <circle cx="55" cy="50" r="2.5" fill="currentColor" />
        </motion.svg>

        {/* Bottom Left: Large Faded Roti Shape */}
        <motion.svg
          initial={{ y: 0, rotate: 15 }}
          animate={{ y: [20, -20, 20], rotate: [10, 25, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-5%] left-[2%] w-80 h-80 text-primary opacity-15"
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"
        >
          <circle cx="50" cy="50" r="40" strokeDasharray="10 6" />
          <path d="M50 10 Q60 50 90 50" strokeLinecap="round" />
          <circle cx="70" cy="70" r="3" fill="currentColor" opacity="0.6" />
        </motion.svg>

        {/* Bottom Right: Subtle Sparkle */}
        <motion.svg
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [10, -10, 10], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[15%] right-[10%] w-16 h-16 text-white opacity-20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        </motion.svg>
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Highlights / Why Choose Us */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-10">
            {highlights.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="font-body text-xs lg:text-sm uppercase tracking-[0.3em] text-white">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto mb-16">
            Book Your Perfect<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary/60">
              Dining Experience
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button */}
            <Link to="/reserve" className="group">
              <motion.button
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="relative px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
              >
                <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                  Reserve Table
                </span>
              </motion.button>
            </Link>

            {/* Secondary Button */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
            >
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                Contact Us
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
