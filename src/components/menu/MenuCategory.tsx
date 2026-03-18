import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price: number;
  desc?: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
  id: string;
}

const MenuCategory = ({ title, items, id }: MenuCategoryProps) => {
  return (
    <section id={id} className="py-20 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 uppercase tracking-wider">
            {title}
          </h2>
          <div className="w-20 h-[1px] bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl mx-auto px-4">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index % 2 * 0.1, duration: 0.5 }}
              className="group relative flex flex-col pb-6 border-b border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="font-body text-primary font-semibold text-lg ml-4">
                  ₹{item.price}
                </span>
              </div>
              {item.desc && (
                <p className="font-body text-sm text-gray-400 italic font-light max-w-[85%]">
                  {item.desc}
                </p>
              )}
              {/* Subtle hover background lift */}
              <div className="absolute -inset-x-4 -inset-y-2 bg-primary/0 group-hover:bg-primary/[0.02] rounded-lg -z-10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MenuCategory;
