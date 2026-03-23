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
      scrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 rounded-xl bg-blue-600 text-white group-hover:rotate-12 transition-transform">
              <Terminal size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Jason<span className="text-blue-400">Tralli</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-400 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-6 shadow-lg shadow-blue-600/20"
              onClick={() => scrollToSection("#contact")}
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-slate-800 py-8 px-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-400 hover:text-blue-400 transition-colors font-medium text-lg text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl w-full py-6"
                onClick={() => scrollToSection("#contact")}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;