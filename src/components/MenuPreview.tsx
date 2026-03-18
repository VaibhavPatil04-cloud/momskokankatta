import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { UtensilsCrossed, Flame, Soup, Wheat } from "lucide-react";

const categories = [
  {
    icon: Soup,
    label: "Soups",
    count: "8 Items",
    desc: "Warm and comforting starters made with fresh, locally sourced ingredients."
  },
  {
    icon: Flame,
    label: "Starters",
    count: "14 Items",
    desc: "Crispy, spicy, and perfectly seasoned bites to kickstart your meal."
  },
  {
    icon: UtensilsCrossed,
    label: "Main Course",
    count: "22 Items",
    desc: "Authentic Indian curries and specialties slow-cooked to perfection."
  },
  {
    icon: Wheat,
    label: "Biryani",
    count: "6 Items",
    desc: "Fragrant basmati rice layered with aromatic spices and tender choice of meat or veg."
  },
];

const MenuPreview = () => {
  const isMobile = useIsMobile();
  return (
    <section id="menu" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#0d0d0d] to-[#0b0b0b] py-[140px] lg:py-[180px] px-6">

      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] text-primary mb-4 font-medium italic">Our Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Explore Our Cuisine
          </h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -12,
                  scale: 1.02,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              className="group relative h-[320px] rounded-[32px] bg-[#111] border border-white/5 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Soft Gradient Overlay (Bottom Fade) - reveals on hover/visible on mobile */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 pointer-events-none z-10 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

              {/* Default Content (Icon + Title) */}
              <div className={`relative z-0 flex flex-col items-center transition-transform duration-700 ${isMobile ? '-translate-y-12' : 'group-hover:-translate-y-12'}`}>
                {/* Icon with glow */}
                <div className="relative mb-6">
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.1,
                        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                    className="relative z-10"
                  >
                    <c.icon className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(201,168,106,0.3)]" />
                  </motion.div>
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-2 tracking-wide">
                  {c.label}
                </h3>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary/60 font-medium">
                  {c.count}
                </p>
              </div>

              {/* Hover Content Overlay (Absolute positioned, no layout shift) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pointer-events-none text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  variants={{
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  transition={isMobile ? { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } : undefined}
                  className="space-y-4"
                >
                  <p className="font-body text-sm text-gray-300 leading-relaxed max-w-[220px] mx-auto">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-body text-primary font-semibold">
                    Explore Menu
                    <motion.span
                      variants={{
                        hover: { x: 5, transition: { duration: 0.4 } }
                      }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/menu" className="group">
            <motion.button
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
            >
              {/* Fill Animation */}
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                View Full Menu
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
