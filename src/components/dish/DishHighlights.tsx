import { motion } from "framer-motion";
import { Sparkles, Leaf, Award } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Eco-Conscious Sourcing",
    desc: "We exclusively use farm-fresh, seasonal vegetables sourced from local Nashik farmers."
  },
  {
    icon: Sparkles,
    title: "Traditional Preparation",
    desc: "Each dish is prepared following age-old recipes using hand-ground masala blends."
  },
  {
    icon: Award,
    title: "Signature Excellence",
    desc: "A Chef's masterpiece refined through years of culinary passion and heritage."
  }
];

const DishHighlights = () => {
  return (
    <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/10">
                <h.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-display text-xl text-white mb-4 tracking-wide uppercase">{h.title}</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs mx-auto font-light">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishHighlights;
