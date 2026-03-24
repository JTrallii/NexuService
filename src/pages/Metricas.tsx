"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowLeft, TrendingUp, PieChart, CheckCircle2, Target } from "lucide-react";

const Metricas = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <Link to="/painel-principal">
            <Button variant="ghost" className="pl-0 text-slate-500 hover:text-blue-600 mb-4 h-auto p-0 font-bold text-xs gap-1.5">
              <ArrowLeft size={14} /> Voltar ao Painel
            </Button>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Recurso: Inteligência de Dados</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Acompanhe a saúde financeira e produtividade do seu negócio.</p>
        </div>
        
        <div className="px-4 py-2 bg-purple-50 border border-purple-100 rounded-lg">
          <span className="text-[11px] font-black text-purple-700 uppercase tracking-widest flex items-center gap-2">
            <BarChart3 size={14} fill="currentColor" /> Status: Premium
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-10 shadow-sm">
        <section className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Análise Estratégica</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            O que não é medido, não é gerenciado. Tenha uma visão clara da lucratividade e do desempenho da sua equipe com dashboards analíticos de última geração.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-purple-600 border border-slate-100">
              <TrendingUp size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Análise de Crescimento</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Compare seu faturamento mensal e identifique tendências de mercado para expansão do negócio.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-purple-600 border border-slate-100">
              <Target size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Taxa de Conversão</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Saiba exatamente qual a sua taxa de aprovação de orçamentos e onde melhorar suas propostas comerciais.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Métricas Disponíveis</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Relatórios de lucratividade por serviço",
              "Tempo médio de conclusão de ordens",
              "Ranking de clientes mais rentáveis",
              "Projeção de caixa para os próximos 30 dias",
              "Taxa de inadimplência em tempo real",
              "Produtividade individual por técnico"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <CheckCircle2 size={16} className="text-purple-500 shrink-0" />
                <span className="text-sm font-bold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metricas;