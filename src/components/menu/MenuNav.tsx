import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const MenuNav = ({ categories, activeCategory, onCategoryClick }: MenuNavProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-0 relative z-40">
      <nav
        style={{
          top: isSticky ? "80px" : "110px",
          height: isSticky ? "80px" : "100px",
          transform: "translateZ(0)",
          willChange: "top, opacity, height, background-color, backdrop-filter"
        }}
        className={cn(
          "fixed left-0 w-full z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center",
          isSticky
            ? "opacity-100 pointer-events-auto bg-black/80 backdrop-blur-md border-b border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "opacity-0 pointer-events-none bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <div className="flex items-center justify-center overflow-x-auto no-scrollbar gap-4 md:gap-8 w-full">
            {categories.map((category) => (
              <button

                key={category}
                onClick={() => onCategoryClick(category)}
                className={cn(
                  "whitespace-nowrap font-body text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 relative py-2 px-1",
                  activeCategory === category
                    ? "text-primary font-bold"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuNav;
