import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import tableImg from "@/assets/table.png";
import table2Img from "@/assets/table2.png";

const images = [
  { src: gallery1, span: "col-span-2 row-span-1", title: "Live Seafood Kitchen" },
  { src: gallery2, span: "col-span-1 row-span-2", title: "Traditional Bamboo Interiors" },
  { src: tableImg, span: "col-span-1 row-span-1", title: "Signature Fish Thali" },
  { src: gallery4, span: "col-span-1 row-span-1", title: "Outdoor Dining under Palms" },
  { src: table2Img, span: "col-span-1 row-span-1", title: "Premium Family Seating" },
  { src: gallery3, span: "col-span-1 row-span-1", title: "Fresh Catch of the Day" },
];

const GallerySection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-[#080808] py-[140px] lg:py-[180px] px-6">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] text-primary mb-4 font-medium italic">Visual Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[250px] lg:auto-rows-[320px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className={`${img.span} rounded-[24px] overflow-hidden group cursor-pointer relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
            >
              {/* Image Layer */}
              <motion.img
                src={img.src}
                alt={img.title}
                variants={{
                  hover: {
                    scale: 1.08,
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="w-full h-full object-cover"
              />

              {/* Default Dark Overlay */}
              <div className={`absolute inset-0 transition-colors duration-700 ${isMobile ? 'bg-black/50' : 'bg-black/30 group-hover:bg-black/60'}`} />

              {/* Gradient Reveal */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-700 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                <motion.span
                  variants={{
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={isMobile ? { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] } : undefined}
                  className="font-body text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-1"
                >
                  Mom's Kokan Katta
                </motion.span>
                <motion.h3
                  variants={{
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={isMobile ? { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] } : undefined}
                  className="font-display text-xl lg:text-2xl text-white font-medium"
                >
                  {img.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <Link to="/gallery" className="group">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700"
            >
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                View All
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
