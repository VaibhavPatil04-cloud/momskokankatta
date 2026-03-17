import { motion } from "framer-motion";
import featureMenu from "@/assets/feature-menu.jpg";
import featureDining from "@/assets/feature-dining.jpg";
import featureExperience from "@/assets/feature-experience.jpg";

const features = [
  { image: featureMenu, title: "Curated Menu", desc: "Handcrafted dishes by our master chefs" },
  { image: featureDining, title: "Family Dining", desc: "Warm spaces for unforgettable gatherings" },
  { image: featureExperience, title: "Premium Experience", desc: "Every detail, meticulously designed" },
];

const FeatureGrid = () => (
  <section className="py-32 lg:py-48 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Offer</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          The Vrundavan Experience
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer card-shadow"
          >
            <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
