import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-16 px-6">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-primary mb-4">Vrundavan</h3>
          <p className="font-body text-sm text-muted-foreground leading-[1.8] max-w-sm">
            A culinary destination where tradition meets excellence. Experience the finest Indian cuisine in an atmosphere of warmth and sophistication.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-foreground mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Menu", "About", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase() === "home" ? "" : l.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-foreground mb-6">Follow Us</h4>
          <div className="flex flex-col gap-3">
            {["Instagram", "Facebook", "Twitter"].map((s) => (
              <a key={s} href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Vrundavan Hotel. All rights reserved.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 md:mt-0 inline-block px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-body font-medium text-primary ring-1 ring-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Reserve Table
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
