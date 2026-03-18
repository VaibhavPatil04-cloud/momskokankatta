import { motion } from "framer-motion";
import ourstory5 from "@/assets/ourstory5.png";

const AboutStory = () => {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image with Zoom Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          >
            <motion.img
              src={ourstory5}
              alt="Where It All Began"
              className="w-full h-full object-cover aspect-[4/5]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            <p className="font-body text-sm uppercase tracking-[0.4em] text-primary mb-6 font-medium">Heritage</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-10 tracking-tight leading-tight">
              Where It All Began
            </h2>

            <div className="space-y-8">
              <p className="font-body text-gray-300 text-lg leading-relaxed font-light">
                Our legacy started as a small dream to serve authentic, soul-satisfying Indian flavors in an atmosphere that feels like home. Over generations, we have perfected the recipes that were passed down, ensuring every spice is measured with love.
              </p>
              <p className="font-body text-gray-400 text-base leading-relaxed font-light">
                Today, Vrundavan stands as a beacon of culinary excellence, blending traditional heritage with modern sophistication. Every corner of our space tells a story of perseverance, community, and the simple joy of a shared meal.
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-16 h-[1px] bg-primary/30 mt-12" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
