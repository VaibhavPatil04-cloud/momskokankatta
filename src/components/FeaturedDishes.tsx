import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";

const dishes = [
  { id: "fish-thali", image: dish1, name: "Fish Thali", desc: "Authentic Kokan style complete meal with fresh catch" },
  { id: "prawns-crispy", image: dish2, name: "Prawns Crispy", desc: "Golden fried juicy prawns with our signature spice blend" },
  { id: "surmai-fry", image: dish3, name: "Surmai Fry", desc: "Classic Malvani style shallow fried fresh Kingfish" },
];

const FeaturedDishes = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#111111] to-[#0b0b0b] py-[140px]">

      {/* Soft Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-0" />

      {/* Floating Decorative Shapes INSIDE Section Background (Middle Layer) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* Top Left: Small Abstract Curve */}
        <motion.svg
          initial={{ y: 0, rotate: -10 }}
          animate={{ y: [-15, 15, -15], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[4%] w-24 h-24 text-primary opacity-30"
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
          className="absolute top-[12%] right-[6%] w-32 h-32 text-white opacity-20"
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
          className="absolute bottom-[2%] -left-[4%] w-96 h-96 text-primary opacity-20"
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
          className="absolute bottom-[10%] right-[8%] w-16 h-16 text-white opacity-20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        </motion.svg>

      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm lg:text-base uppercase tracking-[0.25em] text-primary mb-4 font-medium">
            Our Specialties
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg">
            A Taste of Mom's Kokan Katta
          </h2>
        </motion.div>

        {/* Cards Grid/Flex */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[40px] w-full">
          {dishes.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -10,
                  scale: 1.02,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              className="relative cursor-pointer w-full max-w-sm aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_rgba(201,168,106,0.2)]"
            >
              <Link to={`/dish/${d.id}`} className="block w-full h-full">
                {/* Background Image Content... */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[24px]">
                  <motion.img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: {
                        scale: 1.08,
                        transition: {
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }
                    }}
                  />
                </div>

                {/* Overlays... */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                  initial={{ opacity: 1 }}
                  animate={isMobile ? { opacity: 0 } : { opacity: 1 }}
                  variants={{
                    hover: {
                      opacity: 0,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/30"
                  initial={{ opacity: 0 }}
                  animate={isMobile ? { opacity: 0.85 } : { opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }
                  }}
                />

                {/* Content... */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 pointer-events-none">
                  <motion.h3
                    className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2"
                    variants={{
                      hover: {
                        y: -8,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                  >
                    {d.name}
                  </motion.h3>

                  <motion.div
                    className="overflow-hidden"
                    initial={isMobile ? { height: "auto" } : { height: 0 }}
                    animate={isMobile ? { height: "auto" } : undefined}
                    variants={{
                      hover: {
                        height: "auto",
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={isMobile ? { y: 0, opacity: 1 } : undefined}
                      animate={isMobile ? { y: 0, opacity: 1 } : undefined}
                      viewport={{ once: true, margin: "-50px" }}
                      variants={{
                        hover: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                          }
                        }
                      }}
                      className="pb-1"
                    >
                      <p className="font-body text-base text-gray-300 leading-relaxed mb-6 font-light">
                        {d.desc}
                      </p>
                      <span className="inline-flex items-center text-sm uppercase tracking-[0.2em] font-body text-primary font-medium pointer-events-auto">
                        Explore Dish
                        <motion.span
                          variants={{
                            hover: {
                              x: 5,
                              transition: { duration: 0.4, ease: "easeOut" }
                            }
                          }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
