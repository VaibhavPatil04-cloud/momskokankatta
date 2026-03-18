import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";

const relatedDishes = [
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 345, image: dish1, tags: ["Veg", "Bestseller"] },
  { id: "veg-kolhapuri", name: "Veg Kolhapuri", price: 345, image: dish2, tags: ["Veg", "Spicy"] },
  { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", price: 375, image: dish3, tags: ["Veg", "Smoky"] },
];

const RelatedDishes = ({ currentId }: { currentId?: string }) => {
  const filtered = relatedDishes.filter(d => d.id !== currentId).slice(0, 3);

  return (
    <section className="py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary mb-4 font-bold">Discover More</p>
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">You May Also Like</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link to={`/dish/${d.id}`}>
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-6 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="font-display text-xl text-white mb-2 tracking-wide group-hover:text-primary transition-colors">{d.name}</h4>
                <p className="text-primary font-body text-sm font-semibold tracking-wider">₹{d.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedDishes;
