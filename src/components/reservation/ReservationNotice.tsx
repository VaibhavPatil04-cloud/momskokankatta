import { motion } from "framer-motion";
import { Info } from "lucide-react";

const ReservationNotice = () => {
  return (
    <section className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px] mx-auto bg-primary/[0.03] border border-primary/20 rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-start gap-8"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Info className="text-primary w-8 h-8" />
          </div>
          
          <div>
            <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-wide">
              Need to Cancel or Reschedule?
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold">Cancellation Policy</h4>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  Cancellations must be made at least 4 hours prior to your reservation time. You can cancel through your confirmation link or by calling us directly.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-body text-xs uppercase tracking-[0.2em] text-primary font-bold">Token Deduction Info</h4>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  The token amount is fully refundable if cancelled within the window. Late cancellations or no-shows may lead to a deduction from the token amount to cover the table holding costs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationNotice;
