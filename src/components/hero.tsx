"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D] pt-16">
      <div className="scanline"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00FF41]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00FF41]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-[#00FF41]/30 bg-[#00FF41]/5 text-[#00FF41] text-xs font-mono mb-8">
            <span className="animate-pulse">●</span>
            <span>SYSTEM_STATUS: ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            JASON <span className="text-[#00FF41] drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">TRALLI</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono mb-8 text-[#00FF41]/80">
            // FULLSTACK_ENGINEER & SOFTWARE_ARCHITECT
          </h2>
          
          <p className="text-base md:text-lg mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed font-mono">
            Construindo sistemas robustos com <span className="text-white">Java Spring Boot</span> & <span className="text-white">React</span>. 
            Focado em escalabilidade, segurança e performance de nível enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00FF41] hover:bg-[#00FF41]/80 text-black px-10 py-7 text-sm font-bold rounded-none btn-scan shadow-[0_0_20px_rgba(0,255,65,0.2)]"
            >
              VIEW_REPOSITORIES
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-[#00FF41]/30 text-[#00FF41] hover:bg-[#00FF41]/10 px-10 py-7 text-sm font-bold rounded-none transition-all"
            >
              <Code2 className="mr-2" size={18} />
              TECH_STACK.LOG
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center text-[10px] text-[#00FF41]/40 font-mono uppercase tracking-widest">
        <span>LATENCY: 12MS</span>
        <span className="hidden md:block">ENCRYPTION: AES-256</span>
        <span>LOC: 45.231 / -23.543</span>
      </div>
    </section>
  );
};

export default Hero;