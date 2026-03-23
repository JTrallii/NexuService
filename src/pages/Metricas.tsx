"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowLeft, TrendingUp, PieChart, CheckCircle2 } from "lucide-react";

const Metricas = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-6 lg:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-12 text-[#9CA3AF] hover:text-white hover:bg-white/5 gap-2 rounded-xl">
            <ArrowLeft size={18} /> Voltar para Home
          </Button>
        </Link>

        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-8">
          <BarChart3 size={20} fill="currentColor" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Recurso: Métricas</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
          Dados que viram <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">estratégia pura.</span>
        </h1>

        <p className="text-xl text-[#9CA3AF] mb-16 leading-relaxed max-w-2xl font-medium">
          O que não é medido, não é gerenciado. Tenha uma visão clara da saúde financeira e produtiva do seu negócio com dashboards analíticos de última geração.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: TrendingUp, title: "Análise de Crescimento", desc: "Compare seu faturamento mensal e identifique tendências de mercado." },
            { icon: PieChart, title: "Conversão de Orçamentos", desc: "Saiba exatamente qual a sua taxa de aprovação e onde melhorar suas propostas." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] backdrop-blur-md">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black text-purple-400 uppercase tracking-widest mb-6">Painéis Analíticos</h3>
          {[
            "Relatórios de lucratividade por tipo de serviço",
            "Tempo médio de conclusão de ordens de serviço",
            "Ranking de clientes mais rentáveis",
            "Projeção de caixa para os próximos 30 dias"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-[#E5E7EB]">
              <CheckCircle2 size={18} className="text-purple-400" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metricas;