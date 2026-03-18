import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Fill Out the Form", desc: "Provide your details and preferences in our secure booking form." },
  { id: 2, title: "Confirmation Call", desc: "Our team will reach out to confirm your slot and special requests." },
  { id: 3, title: "Pay Token Amount", desc: "Secure your reservation by paying a small token amount online." },
  { id: 4, title: "Table Reserved", desc: "Receive your final confirmation and get ready for a fine dining experience." }
];

const ReservationHowItWorks = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold text-white mb-4 uppercase tracking-wider">
            How It Works
          </h2>
          <div className="w-20 h-[1px] bg-primary/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="bg-[#151515] p-8 rounded-[24px] border border-white/5 relative group hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                {step.id}
              </div>
              <h3 className="font-display text-xl text-white mb-4 tracking-wide">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReservationHowItWorks;
