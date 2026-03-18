import { motion } from "framer-motion";
import bg from "@/assets/experience-bg.jpg";

const ReservationHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Reservation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-4 font-medium italic">
            Book Your Moment
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Reserve Your Table
          </h1>
          <div className="w-24 h-[1px] bg-primary/40 mx-auto mb-6" />
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            An elevated dining experience awaits
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationHero;
