import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gudhiIcon from "@/assets/gudhi.png";

const GudhiPadwaCelebration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCelebrateClick = () => {
    setIsOpen(false);
    navigate("/reserve");
  };

  // Premium easing function
  const premiumEasing = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {/* Floating Action Button - Minimal SVG only */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open Gudhi Padwa Celebration"
        className="fixed bottom-8 right-8 z-50 p-2 cursor-pointer transition-all duration-500 ease-out"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <img
            src={gudhiIcon}
            alt="Gudhi"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(201,168,106,0.6)] active:drop-shadow-[0_0_30px_rgba(201,168,106,0.8)] transition-all duration-300"
          />
        </motion.div>
      </motion.button>



      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: premiumEasing
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 30,
                transition: { duration: 0.4 }
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-card border border-primary/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center overflow-hidden"
            >
              {/* Animated Light Rays Background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(201,168,106,0.05)_0%,transparent_70%)] pointer-events-none" />

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors z-20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="space-y-8 relative z-10">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: premiumEasing }}
                  className="mx-auto w-32 h-32 md:w-40 md:h-40"
                >
                  <img
                    src={gudhiIcon}
                    alt="Gudhi Padwa"
                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(201,168,106,0.4)]"
                  />
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display text-gold-gradient font-bold leading-tight">
                    Happy Gudhi Padwa
                  </h2>
                  <div className="w-20 h-0.5 bg-primary/30 mx-auto rounded-full" />
                </div>

                <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-sm mx-auto">
                  May this auspicious occasion bring joy, prosperity, and success to your life.
                  Wishing you a year filled with happiness and health!
                </p>

                <Button
                  onClick={handleCelebrateClick}
                  className="px-10 py-7 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gold-glow-strong transition-all duration-300 transform hover:scale-105"
                >
                  Celebrate with us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default GudhiPadwaCelebration;

