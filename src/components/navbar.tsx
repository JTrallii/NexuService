"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#00FF41]/30 py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 rounded-sm bg-[#00FF41] text-black group-hover:shadow-[0_0_15px_#00FF41] transition-all">
              <Terminal size={20} />
            </div>
            <span className="text-xl font-bold text-[#00FF41] tracking-tighter">
              JASON_<span className="text-white">TRALLI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#00FF41]/60 hover:text-[#00FF41] transition-colors font-mono text-xs uppercase tracking-[0.2em]"
              >
                [{item.name}]
              </button>
            ))}
            <Button 
              className="bg-transparent border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black rounded-none px-6 btn-scan transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              EXECUTE_CONTACT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#00FF41]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0D0D0D] border-b border-[#00FF41]/30 py-8 px-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#00FF41]/60 hover:text-[#00FF41] transition-colors font-mono text-lg text-left"
                >
                  > {item.name}
                </button>
              ))}
              <Button 
                className="bg-[#00FF41] text-black rounded-none w-full py-6 font-bold"
                onClick={() => scrollToSection("#contact")}
              >
                INITIALIZE_CONTACT
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;