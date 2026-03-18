import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="pb-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[450px] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Mock Google Map - In real app, replace with an iframe or Google Maps SDK component */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.125!2d73.76!3d20.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0000000000%3A0x0000000000000000!2sCollege%20Road%20Nashik!5e0!3m2!1sen!2sin!4v1234567890" 
            className="w-full h-full grayscale-[0.8] invert-[0.9] contrast-[1.2] opacity-80"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {/* Overlay to blend with theme */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[32px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
