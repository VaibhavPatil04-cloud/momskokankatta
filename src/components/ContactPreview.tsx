import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const cards = [
  { icon: MapPin, title: "Address", lines: ["123 Heritage Road", "Mumbai, Maharashtra 400001"] },
  { icon: Phone, title: "Phone", lines: ["+91 98765 43210", "info@vrundavan.com"] },
  { icon: Clock, title: "Timing", lines: ["Mon – Sun: 11 AM – 11 PM", "Kitchen closes at 10:30 PM"] },
];

const ContactPreview = () => (
  <section id="contact" className="py-32 lg:py-48 px-6 bg-surface/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Visit Vrundavan
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="p-10 rounded-[24px] bg-background card-shadow text-center"
          >
            <c.icon className="w-8 h-8 text-primary mx-auto mb-6" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">{c.title}</h3>
            {c.lines.map((line) => (
              <p key={line} className="font-body text-sm text-muted-foreground leading-relaxed">{line}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactPreview;
