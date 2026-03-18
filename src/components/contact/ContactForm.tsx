import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const inputClasses = (field: string) => cn(
    "w-full bg-[#111] border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white outline-none transition-all duration-300",
    focusedField === field ? "border-primary/50 ring-1 ring-primary/20" : "hover:border-white/20"
  );

  const labelClasses = (field: string, value: string) => cn(
    "absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-widest text-[10px] font-bold",
    (focusedField === field || value) ? "top-2 text-primary" : "top-1/2 -translate-y-1/2 text-gray-500 text-xs"
  );

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-semibold text-white mb-4 uppercase tracking-wider">
              Send Us a Message
            </h2>
            <p className="font-body text-gray-400 text-sm tracking-wide">
              We usually respond within a few hours.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className={labelClasses("name", formData.name)}>Your Name</label>
                <input 
                  type="text" 
                  className={inputClasses("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="relative">
                <label className={labelClasses("email", formData.email)}>Email Address</label>
                <input 
                  type="email" 
                  className={inputClasses("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className={labelClasses("phone", formData.phone)}>Phone Number</label>
              <input 
                type="tel" 
                className={inputClasses("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="relative">
              <label className={labelClasses("message", formData.message)}>Your Message</label>
              <textarea 
                className={cn(inputClasses("message"), "min-h-[150px] resize-none")}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            <motion.button
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(201, 168, 106, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full inline-flex items-center justify-center px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-body font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700 hover:border-primary"
            >
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                Send Message
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
