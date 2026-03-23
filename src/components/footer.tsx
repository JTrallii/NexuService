"use client";

import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#00FF41]/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="p-1.5 bg-[#00FF41] text-black">
                <Terminal size={16} />
              </div>
              <span className="text-lg font-bold text-[#00FF41] tracking-tighter">JASON_<span className="text-white">TRALLI</span></span>
            </div>
            <p className="text-[#00FF41]/40 text-[10px] font-mono uppercase tracking-widest">
              ENGINEERING_THE_FUTURE_OF_WEB_SYSTEMS
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-[#00FF41]/10 text-[#00FF41]/40 hover:text-[#00FF41] hover:border-[#00FF41]/40 transition-all">
                <Mail size={18} />
              </a>
              <a href="#" className="p-2 border border-[#00FF41]/10 text-[#00FF41]/40 hover:text-[#00FF41] hover:border-[#00FF41]/40 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-[#00FF41]/10 text-[#00FF41]/40 hover:text-[#00FF41] hover:border-[#00FF41]/40 transition-all">
                <Github size={18} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#00FF41]/30 hover:text-[#00FF41] transition-colors text-[10px] font-mono uppercase tracking-[0.3em]"
            >
              RETURN_TO_TOP <ArrowUp size={12} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#00FF41]/5 text-center">
          <p className="text-[#00FF41]/20 text-[9px] font-mono uppercase tracking-[0.5em]">
            &copy; {currentYear} JASON_TRALLI // ALL_RIGHTS_RESERVED // SYSTEM_V1.0.4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;