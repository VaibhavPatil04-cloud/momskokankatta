import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, PhoneCall } from "lucide-react";

const ContactPreview = () => (
  <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#0d0d0d] to-[#0b0b0b] py-[140px] lg:py-[180px] px-6">
    
    {/* Subtle Glow & Background Map Texture */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 select-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="container relative z-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <p className="font-body text-sm uppercase tracking-[0.4em] text-primary mb-4 font-medium italic">Get In Touch</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
          Visit Vrundavan
        </h2>
        <div className="w-24 h-[1px] bg-primary/30 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-12 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
        
        {/* Large Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
          className="col-span-12 md:col-span-6 group relative p-10 lg:p-12 rounded-[32px] bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
        >
          <div className="flex flex-col h-full">
            <div className="relative mb-8 w-fit">
              <MapPin className="relative z-10 w-10 h-10 text-primary transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white mb-4">Location</h3>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-1">123 Heritage Road</p>
            <p className="font-body text-gray-400 mb-10">Mumbai, Maharashtra 400001</p>
            
            <div className="mt-auto">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/20 text-xs uppercase tracking-[0.2em] font-body text-primary font-bold overflow-hidden transition-all duration-500 hover:border-primary"
              >
                <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0" />
                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">Get Directions</span>
                <ExternalLink className="relative z-10 w-3 h-3 group-hover/btn:text-black transition-colors" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Smaller Phone Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
          className="col-span-12 md:col-span-3 group relative p-10 rounded-[32px] bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
        >
          <div className="flex flex-col h-full text-center items-center">
            <div className="relative mb-8">
              <Phone className="relative z-10 w-10 h-10 text-primary transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">Phone</h3>
            <p className="font-body text-gray-300 mb-1">+91 98765 43210</p>
            <p className="font-body text-gray-400 text-sm mb-10">info@vrundavan.com</p>
            
            <div className="mt-auto">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="group/btn relative inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 text-primary overflow-hidden transition-all duration-500 hover:border-primary"
              >
                <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0" />
                <PhoneCall className="relative z-10 w-4 h-4 group-hover/btn:text-black transition-colors" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Smaller Timing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
          className="col-span-12 md:col-span-3 group relative p-10 rounded-[32px] bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
        >
          <div className="flex flex-col h-full text-center items-center">
            <div className="relative mb-8">
              <Clock className="relative z-10 w-10 h-10 text-primary transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">Timing</h3>
            <p className="font-body text-gray-300 text-sm mb-1 font-medium">Mon – Sun</p>
            <p className="font-body text-gray-400 text-sm mb-10 leading-relaxed">11 AM – 11 PM<br/>Kitchen closes 10:30</p>
            
            <div className="mt-auto w-12 h-12 flex items-center justify-center border border-white/5 rounded-full text-white/20">
              <span className="text-[10px] uppercase tracking-widest font-bold">Closed</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default ContactPreview;
