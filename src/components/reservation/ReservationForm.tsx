import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ReservationForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClasses = (field: string) => cn(
    "w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white outline-none transition-all duration-300",
    focusedField === field ? "border-primary/50 ring-1 ring-primary/20 shadow-[0_0_15px_rgba(201,168,106,0.1)]" : "hover:border-white/20"
  );

  const labelClasses = (field: string, value: string) => cn(
    "absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-widest text-[10px] font-bold",
    (focusedField === field || value) ? "top-2 text-primary" : "top-1/2 -translate-y-1/2 text-gray-500 text-xs"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: "2",
    date: "",
    time: "",
    occasion: "Family Dinner",
    requests: ""
  });

  return (
    <section className="py-20 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[900px] mx-auto bg-[#111] rounded-[32px] overflow-hidden shadow-2xl border border-white/5 p-8 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Full Name */}
            <div className="relative">
              <label className={labelClasses("name", formData.name)}>Full Name</label>
              <input
                type="text"
                className={inputClasses("name")}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className={labelClasses("email", formData.email)}>Email Address</label>
              <input
                type="email"
                className={inputClasses("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className={labelClasses("phone", formData.phone)}>Phone Number</label>
              <input
                type="tel"
                className={inputClasses("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Persons */}
            <div className="relative">
              <label className={labelClasses("persons", "selected")}>Number of Persons</label>
              <select
                className={cn(inputClasses("persons"), "appearance-none cursor-pointer")}
                onFocus={() => setFocusedField("persons")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <option key={n} value={n} className="bg-[#111]">{n} {n === 1 ? 'Person' : 'Persons'}</option>
                ))}
                <option value="10+" className="bg-[#111]">10+ Persons</option>
              </select>
            </div>

            {/* Date */}
            <div className="relative">
              <label className={labelClasses("date", formData.date)}>Reservation Date</label>
              <input
                type="date"
                className={inputClasses("date")}
                onFocus={() => setFocusedField("date")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            {/* Time */}
            <div className="relative">
              <label className={labelClasses("time", formData.time)}>Reservation Time</label>
              <input
                type="time"
                className={inputClasses("time")}
                onFocus={() => setFocusedField("time")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
            {/* Occasion */}
            <div className="relative">
              <label className={labelClasses("occasion", "selected")}>Booking Reason</label>
              <select
                className={cn(inputClasses("occasion"), "appearance-none cursor-pointer")}
                onFocus={() => setFocusedField("occasion")}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              >
                {["Family Dinner", "Birthday", "Corporate", "Kitty Party", "Seafood Night", "Weekend Dinner", "Private Dining"].map(reason => (
                  <option key={reason} value={reason} className="bg-[#111]">{reason}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="relative mb-12">
            <label className={labelClasses("requests", formData.requests)}>Special Requests (Optional)</label>
            <textarea
              className={cn(inputClasses("requests"), "min-h-[120px] resize-none")}
              onFocus={() => setFocusedField("requests")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
            />
          </div>

          {/* Submit Button */}
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
              Book a Table
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationForm;
