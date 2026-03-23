"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Clock, Rocket, CheckCircle2 } from "lucide-react";
import Footer from "@/components/layout/Footer";

const Agilidade = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex flex-col">
      <div className="flex-1 p-6 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-12 text-[#9CA3AF] hover:text-white hover:bg-white/5 gap-2 rounded-xl">
              <ArrowLeft size={18} /> Voltar para Home
            </Button>
          </Link>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8">
            <Zap size={20} fill="currentColor" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Recurso: Agilidade</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Processos na <br />
            <span className="text-gradient">velocidade da luz.</span>
          </h1>

          <p className="text-xl text-[#9CA3AF] mb-16 leading-relaxed max-w-2xl font-medium">
            O ServiceFlow foi desenhado para eliminar a fricção operacional. Automatize tarefas repetitivas e foque no que realmente importa: a execução do serviço.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              { icon: Clock, title: "Time-to-Budget", desc: "Reduza o tempo de criação de orçamentos de horas para apenas 2 minutos." },
              { icon: Rocket, title: "Fluxo Otimizado", desc: "Interface intuitiva que exige 60% menos cliques que os sistemas tradicionais." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] backdrop-blur-md">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#6366F1] uppercase tracking-widest mb-6">Vantagens Operacionais</h3>
            {[
              "Geração instantânea de PDFs para clientes",
              "Sincronização em tempo real entre dispositivos",
              "Atalhos de teclado para usuários avançados",
              "Autopreenchimento inteligente de dados recorrentes"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-[#E5E7EB]">
                <CheckCircle2 size={18} className="text-[#22D3EE]" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agilidade;