import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ReservationCTAStrip = () => {
  return (
    <section className="py-20 bg-[#070707] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-white mb-10 tracking-tight"
        >
          Ready to Reserve Your Table?
        </motion.h3>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/menu" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              View Menu
            </motion.button>
          </Link>
          
          <Link to="/#contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold bg-primary text-black hover:bg-white transition-all duration-500"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTAStrip;
