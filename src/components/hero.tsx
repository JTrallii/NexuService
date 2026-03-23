"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Terminal size={16} />
            <span>Disponível para novos projetos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Jason <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tralli</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-300">
            Arquiteto de Software & Desenvolvedor Fullstack
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Especialista em construir ecossistemas digitais de alta performance com <span className="text-white font-medium">Java Spring Boot</span> e <span className="text-white font-medium">React/Next.js</span>. Focado em escalabilidade, segurança e UX excepcional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-xl group transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Explorar Projetos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              <Code2 className="mr-2" size={20} />
              Ver Stack Técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;