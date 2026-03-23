"use client";

import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Terminal size={18} />
              </div>
              <span className="text-xl font-bold text-white">Jason<span className="text-blue-400">Tralli</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Construindo o futuro da web com arquiteturas robustas e experiências digitais memoráveis.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex space-x-6">
              <a href="#" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300">
                <Github size={20} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
            >
              Voltar ao topo <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            &copy; {currentYear} Jason Tralli. Desenvolvido com precisão técnica.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;