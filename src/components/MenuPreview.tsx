import { motion } from "framer-motion";
import { UtensilsCrossed, Flame, Soup, Wheat } from "lucide-react";

const categories = [
  { icon: Soup, label: "Soups", count: "8 Items" },
  { icon: Flame, label: "Starters", count: "14 Items" },
  { icon: UtensilsCrossed, label: "Main Course", count: "22 Items" },
  { icon: Wheat, label: "Biryani", count: "6 Items" },
];

const MenuPreview = () => (
  <section id="menu" className="py-32 lg:py-48 px-6 bg-surface/50">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Menu</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Explore Our Cuisine
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="p-10 rounded-[24px] bg-background card-shadow cursor-pointer group transition-all duration-300"
          >
            <c.icon className="w-10 h-10 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{c.label}</h3>
            <p className="font-body text-sm text-muted-foreground">{c.count}</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="#"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-body font-medium bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(201,168,106,0.4)] transition-all duration-500"
      >
        View Full Menu
      </motion.a>
    </div>
  </section>
);

export default MenuPreview;
