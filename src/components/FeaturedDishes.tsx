import { motion } from "framer-motion";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import dish4 from "@/assets/dish4.jpg";

const dishes = [
  { image: dish1, name: "Paneer Butter Masala", desc: "Rich, creamy tomato gravy with soft paneer cubes", special: true },
  { image: dish2, name: "Hyderabadi Biryani", desc: "Fragrant basmati rice layered with aromatic spices", special: true },
  { image: dish3, name: "Tandoori Paneer Tikka", desc: "Smoky, chargrilled paneer with mint chutney", special: false },
  { image: dish4, name: "Gulab Jamun", desc: "Golden dumplings soaked in rose-scented syrup", special: false },
];

const FeaturedDishes = () => (
  <section className="py-32 lg:py-48 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Signature Creations</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Featured Dishes
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dishes.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group rounded-[24px] overflow-hidden bg-surface card-shadow"
          >
            <div className="relative overflow-hidden aspect-square">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              {d.special && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-body font-medium text-primary rounded-full ring-1 ring-primary/40 backdrop-blur-sm bg-background/50">
                  Chef's Special
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{d.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDishes;
