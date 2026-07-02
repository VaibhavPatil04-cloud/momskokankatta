import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Desai",
    role: "Local Foodie",
    text: "The Fish Thali here is the best I've ever had in Nashik. The Solkadhi is incredibly authentic and reminds me of my grandmother's recipe in Konkan!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Patil",
    role: "Family Dinner",
    text: "Unbelievable Crab Masala and Crispy Prawns! A perfect spot for a weekend family dinner. The outdoor seating under the palm trees creates a wonderful coastal vibe.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Joshi",
    role: "Seafood Lover",
    text: "Authentic Malvani spices that hit just right. The Pomfret Fry was crispy on the outside and perfectly juicy inside. Highly recommended for any seafood lover!",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            Guest Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold"
          >
            What Our Family Says
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-background/50 border border-white/5 p-8 rounded-2xl relative group hover:border-primary/30 transition-colors duration-500"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-foreground font-semibold">{testimonial.name}</h4>
                  <p className="font-body text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
