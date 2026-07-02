import { motion } from "framer-motion";
import hero1 from "@/assets/hero1.png";

const MenuHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero1}
          alt="Menu Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-4 font-medium italic">
            Taste of Excellence
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Our Menu
          </h1>
          <div className="w-24 h-[1px] bg-primary/40 mx-auto mb-6" />
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            Explore the Flavors of Mom's Kokan Katta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
