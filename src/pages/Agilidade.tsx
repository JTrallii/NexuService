"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Clock, Rocket, CheckCircle2 } from "lucide-react";

const Agilidade = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <Link to="/painel-principal">
            <Button variant="ghost" className="pl-0 text-slate-500 hover:text-blue-600 mb-4 h-auto p-0 font-bold text-xs gap-1.5">
              <ArrowLeft size={14} /> Voltar ao Painel
            </Button>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Recurso: Agilidade Operacional</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Otimize o tempo de resposta e execução dos seus serviços técnicos.</p>
        </div>
        
        <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg">
          <span className="text-[11px] font-black text-blue-700 uppercase tracking-widest flex items-center gap-2">
            <Zap size={14} fill="currentColor" /> Status: Ativo
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-10 shadow-sm">
        <section className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Visão Geral</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            O NexuService foi desenhado para eliminar a fricção operacional. Automatize tarefas repetitivas e foque no que realmente importa: a execução do serviço com qualidade e rapidez.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100">
              <Clock size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Time-to-Budget</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Reduza o tempo de criação de orçamentos de horas para apenas 2 minutos com nossos templates inteligentes.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100">
              <Rocket size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Fluxo Otimizado</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Interface intuitiva que exige 60% menos cliques que os sistemas tradicionais de gestão.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Vantagens Operacionais</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Geração instantânea de PDFs para clientes",
              "Sincronização em tempo real entre dispositivos",
              "Atalhos de teclado para usuários avançados",
              "Autopreenchimento inteligente de dados"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm font-bold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agilidade;