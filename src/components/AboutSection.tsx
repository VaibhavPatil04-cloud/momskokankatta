import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => (
  <section id="about" className="py-32 lg:py-48 px-6">
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]">
          A Legacy of<br />Culinary Excellence
        </h2>
        <p className="font-body text-muted-foreground leading-[1.8] mb-6">
          Nestled in the heart of the city, Vrundavan Hotel has been a beacon of exceptional Indian cuisine for over a decade. Our chefs bring generations of culinary wisdom to every dish, blending traditional recipes with contemporary presentation.
        </p>
        <p className="font-body text-muted-foreground leading-[1.8] mb-10">
          From the warmth of our tandoor to the delicate spices in every curry, we craft experiences that linger long after the last bite. Every ingredient is sourced with care, every dish prepared with passion.
        </p>
        <motion.a
          href="#menu"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-3.5 rounded-full text-sm uppercase tracking-[0.15em] font-body font-medium text-primary ring-1 ring-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Explore More
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="rounded-[32px] overflow-hidden card-shadow">
          <img src={aboutImg} alt="Vrundavan ambience" className="w-full h-[500px] lg:h-[600px] object-cover" />
        </div>
        {/* Decorative gold accent */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-[24px] bg-primary/10 -z-10" />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
