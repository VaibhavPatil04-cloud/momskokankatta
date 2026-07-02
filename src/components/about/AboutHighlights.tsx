import { motion } from "framer-motion";
import { Star, Heart, Coffee, Shield } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Authentic Recipes", desc: "Generational Konkan secrets preserved in every dish." },
  { icon: Heart, title: "Family Friendly", desc: "A warm atmosphere where memories are made." },
  { icon: Star, title: "Premium Ambience", desc: "Nature-inspired outdoor seating and bamboo decor." },
  { icon: Coffee, title: "Fresh Ingredients", desc: "Only the freshest catch and hand-ground Malvani spices." }
];

const AboutHighlights = () => {
  return (
    <section className="relative py-24 lg:py-32 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-8 transition-colors duration-500 group-hover:border-primary/60 group-hover:bg-primary/5">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-white mb-4 tracking-wide group-hover:text-primary transition-colors duration-500">
                {h.title}
              </h4>
              <p className="font-body text-sm text-gray-400 font-light leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHighlights;
