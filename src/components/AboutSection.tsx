import { motion } from "framer-motion";
import story6 from "@/assets/ourstory6.png";
import story1 from "@/assets/ourstory1.png";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#080808] py-[140px] lg:py-[200px]">
      
      {/* Cinematic Visual Depth: Radial Glow & Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-[140px] items-center">
          
          {/* Left Column: Visual Storytelling with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer"
          >
            {/* Main Image Block */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] aspect-[4/5] lg:aspect-[4/5.5]">
              <motion.img 
                src={story6} 
                alt="Restaurant Ambience" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08, x: 5 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Refined Image Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Secondary Floating Image with slow breathing animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -15, 0] }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { delay: 0.6, duration: 1 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-12 -right-12 w-1/2 hidden md:block"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="rounded-[20px] overflow-hidden border-[6px] border-[#080808] shadow-[0_30px_70px_rgba(0,0,0,0.8)] aspect-[3/4]"
              >
                <img src={story1} alt="Dining Detail" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            {/* Delicate Corner Marker */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-primary/20 rounded-tl-[40px] pointer-events-none" />
          </motion.div>

          {/* Right Column: Narrative Content with Staggered Fade-up */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start"
          >
            <motion.span 
              variants={itemVariants}
              className="font-body text-sm uppercase tracking-[0.5em] text-primary/80 mb-8 font-medium block"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-10 leading-[1.1] "
            >
              A Dining Experience <br className="hidden lg:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/40">Like No Other</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-8 mb-12">
              <p className="font-body text-xl lg:text-2xl text-gray-200 leading-relaxed font-light font-display italic">
                Crafting moments of culinary magic through generations of tradition and a passion for modern Indian excellence.
              </p>
              <p className="font-body text-base lg:text-lg text-gray-400 leading-[1.9] font-light max-w-xl">
                Every dish we serve is a chapter in our legacy, blending the warmth of traditional spices with the elegance of contemporary fine dining. We invite you to lose yourself in the textures, aromas, and stories of Vrundavan.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#story"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 40px rgba(201, 168, 106, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-6 px-12 py-6 bg-transparent border border-primary/20 rounded-full overflow-hidden transition-all duration-700 hover:border-primary/60"
              >
                {/* Smooth Fill Background */}
                <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                
                {/* Button Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 blur-xl transition-opacity duration-700" />

                <span className="relative z-10 font-body text-sm uppercase tracking-[0.3em] font-semibold text-primary transition-all duration-700 group-hover:text-black group-hover:tracking-[0.35em]">
                  Explore More
                </span>
                <span className="relative z-10 text-primary transition-colors duration-700 group-hover:text-black transform group-hover:translate-x-1">
                  →
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
