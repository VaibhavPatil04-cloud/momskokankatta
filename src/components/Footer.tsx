import { motion } from "framer-motion";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/footer-bg-premium.png";

const Footer = () => (
  <footer className="relative w-full pt-20 pb-10 px-6 overflow-hidden">

    {/* Cinematic Background with Deep Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={footerBg}
        alt="Footer Background"
        className="w-full h-full object-cover blur-[2px] opacity-70"
      />
      <div className="absolute inset-0 bg-[#000]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </div>

    <div className="container relative z-10 mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0b0b0b]/90 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* LEFT: Quick Links */}
          <div className="p-10 lg:p-14 lg:border-r border-white/5">
            <h4 className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-10 font-medium">Navigation</h4>
            <div className="flex flex-col gap-6">
              {[
                { name: "About Story", href: "/about" },
                { name: "Menu Selections", href: "/menu" },
                { name: "Visual Gallery", href: "/gallery" },
                { name: "Support & Help", href: "/contact" },
                { name: "Location", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group flex items-center gap-3 font-body text-gray-400 hover:text-white transition-all duration-500"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-500" />
                  <span className="text-sm tracking-wider uppercase font-light">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CENTER: Brand Identity */}
          <div className="p-10 lg:p-14 text-center flex flex-col items-center justify-center bg-white/[0.02]">
            <img src={logo} alt="Mom's Kokan Katta Logo" className="h-20 sm:h-24 w-auto mb-8 drop-shadow-[0_0_15px_rgba(201,168,106,0.2)]" />
            <p className="font-body text-xs lg:text-sm text-primary uppercase tracking-[0.5em] mb-8 font-medium italic">Authentic Seafood</p>

            <div className="space-y-4 mb-10">
              <p className="font-body text-sm text-gray-300 tracking-wide max-w-xs mx-auto">Gat No. 95, Nandur Link Road, Nashik, MH</p>
              <div className="w-8 h-[1px] bg-white/10 mx-auto" />
              <p className="font-body text-xs text-gray-400 tracking-widest uppercase">Mon – Sun: 11 AM – 11 PM</p>
            </div>

            <Link to="/reserve">
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 rounded-full text-xs uppercase tracking-[0.3em] font-bold border border-primary/30 text-primary overflow-hidden transition-all duration-700"
            >
              <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
                Reserve a Table
              </span>
            </motion.button>
          </Link>
          </div>

          {/* RIGHT: Contact Actions */}
          <div className="p-10 lg:p-14 lg:border-l border-white/5">
            <h4 className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-10 font-medium lg:text-right">Get In Touch</h4>
            <div className="flex flex-col gap-6 lg:items-end">
              {[
                { icon: MessageCircle, name: "WhatsApp Chat", href: "#", color: "hover:text-green-400" },
                { icon: Instagram, name: "Our Instagram", href: "#", color: "hover:text-pink-400" },
                { icon: Phone, name: "+91 98220 98340", href: "#", color: "hover:text-primary" },
                { icon: Mail, name: "Send an Email", href: "#", color: "hover:text-primary" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-4 font-body text-gray-400 ${item.color} transition-all duration-500`}
                >
                  <span className="text-xs tracking-widest uppercase font-light order-2 lg:order-1">{item.name}</span>
                  <item.icon className="w-5 h-5 order-1 lg:order-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

      {/* BOTTOM STRIP */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <p className="font-body text-[10px] uppercase tracking-[0.4em] text-gray-500">
          © 2026 Mom's Kokan Katta. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-gray-400">
            Made with <span className="text-primary mx-1">❤️</span> in Nashik by{" "}
            <a href="https://veloradev.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Velora Dev
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
