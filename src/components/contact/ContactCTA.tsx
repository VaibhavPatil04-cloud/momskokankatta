import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-[#0b0b0b] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-white mb-8 tracking-tight font-medium">
            Visit Mom's Kokan Katta Today
          </h2>
          <p className="font-body text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the culinary heritage of Nashik in an ambience of luxury.
          </p>
          
          <Link to="/reserve">
            <motion.button
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
            >
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                Reserve a Table
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
