import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Gat No. 95, Dasak Shiwar, Jatra, Nandur Link Road, Nashik",
    action: "Get Directions",
    link: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Phone & Email",
    content: "+91 98220 98340\ninfo@momskokankatta.com",
    action: "Call Now",
    link: "tel:+919822098340"
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Monday – Sunday\n11:00 AM – 11:00 PM",
    action: "Reserve Table",
    link: "/reserve"
  }
];

const ContactCards = () => {
  return (
    <section className="py-24 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[32px] bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Glow Behind Icon */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <item.icon className="w-10 h-10 text-primary mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110" />
              
              <h3 className="font-display text-2xl text-white mb-4 tracking-wide relative z-10">
                {item.title}
              </h3>
              
              <p className="font-body text-gray-400 text-sm leading-relaxed mb-8 whitespace-pre-line relative z-10">
                {item.content}
              </p>
              
              <a 
                href={item.link}
                className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold hover:text-white transition-colors duration-300 relative z-10"
              >
                {item.action} ➔
              </a>

              {/* Decorative Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
