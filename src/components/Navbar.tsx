import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "works", label: "Works" },
    { id: "process", label: "Process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow/white bg after scrolled a bit
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ["hero", "about", "works", "process", "contact"];
      const scrollPos = window.scrollY + 120; // offset for navbar height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-brand-violet/10 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
              isScrolled ? "text-brand-violet" : "text-white"
            }`}>
              PLANKIT <span className="text-brand-pink">Studio</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id || (item.id === "about" && activeSection === "why-plankit");
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 font-mono text-sm font-bold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                    isActive 
                      ? "text-brand-pink" 
                      : isScrolled 
                      ? "text-brand-violet hover:text-brand-pink" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-pink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                isScrolled
                  ? "border-brand-violet text-brand-violet hover:bg-brand-violet hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-brand-violet"
              }`}
            >
              프로젝트 문의
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 md:hidden transition-colors duration-300 cursor-pointer ${
              isScrolled ? "text-brand-violet" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-brand-violet border-t border-white/10 px-6 py-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id || (item.id === "about" && activeSection === "why-plankit");
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-4xl font-black tracking-tight ${
                      isActive ? "text-brand-pink" : "text-white hover:text-brand-pink"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-white/20 pt-8"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-brand-pink text-white py-4 font-bold text-center hover:bg-white hover:text-brand-violet transition-all duration-300"
              >
                프로젝트 문의
              </button>
              <div className="flex justify-between items-center mt-6 font-mono text-xs text-white/50">
                <span>plankitplanning@gmail.com</span>
                <span>@aiforwardplanner</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
