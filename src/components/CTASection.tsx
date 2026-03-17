import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-32 lg:py-48 px-6">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto mb-12">
          Book Your Perfect<br />
          <span className="text-gold-gradient">Dining Experience</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-body font-medium bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition-all duration-500"
          >
            Reserve Table
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-body font-medium text-primary ring-1 ring-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
