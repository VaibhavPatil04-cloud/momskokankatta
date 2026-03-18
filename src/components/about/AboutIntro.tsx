import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="relative py-32 lg:py-48 px-6 bg-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-[1px] bg-primary/40 mx-auto mb-12" />
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gray-200 leading-relaxed font-light italic">
            "At Vrundavan, every dish carries a story — of tradition, passion, and timeless flavors."
          </p>
          <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
