"use client";

import { Wrench, Zap, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center text-white">
            <Wrench size={18} />
          </div>
          <span className="font-bold text-xl text-white">ServiceFlow</span>
        </div>
        <p className="text-[#9CA3AF] text-sm font-medium">
          © {new Date().getFullYear()} ServiceFlow Enterprise. Todos os direitos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors" title="Agilidade">
            <Zap size={20} />
          </a>
          <a href="#" className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors" title="Segurança">
            <Shield size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;