import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav h-24" : "h-32 bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Vrundavan Logo" 
            className={`transition-all duration-500 object-contain ${
              scrolled ? "h-[75px]" : "h-[100px]"
            }`} 
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/reserve"
            className="inline-block px-6 py-2.5 rounded-full text-sm uppercase tracking-[0.15em] font-body font-medium text-primary ring-1 ring-primary/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Reserve Table
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-nav py-8 px-6"
        >
          {links.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-body text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 font-body text-sm uppercase tracking-[0.15em] transition-colors ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            to="/reserve"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-4 px-6 py-2.5 rounded-full text-sm uppercase tracking-[0.15em] font-body font-medium text-primary ring-1 ring-primary/40"
          >
            Reserve Table
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
