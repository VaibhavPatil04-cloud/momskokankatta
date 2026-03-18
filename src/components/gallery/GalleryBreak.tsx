import { motion } from "framer-motion";

interface GalleryBreakProps {
  image: string;
  title: string;
}

const GalleryBreak = ({ image, title }: GalleryBreakProps) => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center my-12">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl md:text-6xl text-white font-medium tracking-tight uppercase"
        >
          {title}
        </motion.h3>
      </div>
    </section>
  );
};

export default GalleryBreak;
