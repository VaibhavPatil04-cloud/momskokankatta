import { motion } from "framer-motion";
import { Utensils, Flame, Users, CheckCircle2 } from "lucide-react";

interface DishInfoProps {
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  tasteProfile: string;
  servingSize: string;
  tags: string[];
  image: string;
}

const DishInfo = ({ 
  name, 
  description, 
  price, 
  ingredients, 
  tasteProfile, 
  servingSize, 
  tags,
  image 
}: DishInfoProps) => {
  return (
    <section className="py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5 aspect-square lg:aspect-[4/5]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-primary/20 rounded-bl-[40px] pointer-events-none" />
          </motion.div>

          {/* Right: Detailed Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-tight">
              {name}
            </h2>

            <p className="font-body text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-light italic opacity-90">
              {description}
            </p>

            <div className="flex items-center gap-4 mb-12">
              <span className="text-3xl font-display text-primary font-semibold">₹{price}</span>
              <div className="h-6 w-[1px] bg-white/10" />
              <span className="text-gray-500 font-body text-sm uppercase tracking-widest">Inclusive of taxes</span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Flame size={18} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Taste Profile</span>
                </div>
                <p className="text-white font-body text-sm">{tasteProfile}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Users size={18} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Portion Size</span>
                </div>
                <p className="text-white font-body text-sm">{servingSize}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-12">
              <div className="flex items-center gap-3 text-primary mb-6">
                <Utensils size={18} />
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Main Ingredients</h4>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {ingredients.map(ing => (
                  <div key={ing} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 size={14} className="text-primary/60" />
                    <span className="text-sm font-body tracking-wide">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DishInfo;
