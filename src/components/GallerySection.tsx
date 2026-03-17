import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import hero2 from "@/assets/hero2.png";
import featureDining from "@/assets/feature-dining.jpg";

const images = [
  { src: gallery1, span: "col-span-2 row-span-1" },
  { src: gallery2, span: "col-span-1 row-span-2" },
  { src: gallery3, span: "col-span-1 row-span-1" },
  { src: gallery4, span: "col-span-1 row-span-1" },
  { src: hero2, span: "col-span-1 row-span-1" },
  { src: featureDining, span: "col-span-1 row-span-1" },
];

const GallerySection = () => (
  <section id="gallery" className="py-32 lg:py-48 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Visual Journey</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Our Gallery
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`${img.span} rounded-[20px] overflow-hidden group cursor-pointer relative`}
          >
            <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
