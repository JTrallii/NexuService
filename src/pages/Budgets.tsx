"use client";

import { Plus, FileText, Download, Check, X, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Budgets = () => {
  const budgets = [
    { id: "ORC-2023-001", client: "Construtora Alfa", value: "R$ 15.400,00", date: "20/10/2023", status: "Aprovado" },
    { id: "ORC-2023-002", client: "Condomínio Solar", value: "R$ 2.150,00", date: "21/10/2023", status: "Pendente" },
    { id: "ORC-2023-003", client: "Padaria Central", value: "R$ 890,00", date: "22/10/2023", status: "Rejeitado" },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "Aprovado": return { icon: <Check size={14} />, class: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", border: "bg-emerald-500" };
      case "Pendente": return { icon: <Clock size={14} />, class: "text-amber-400 bg-amber-500/10 border-amber-500/20", border: "bg-amber-500" };
      case "Rejeitado": return { icon: <X size={14} />, class: "text-rose-400 bg-rose-500/10 border-rose-500/20", border: "bg-rose-500" };
      default: return { icon: null, class: "text-[#9CA3AF] bg-white/5 border-white/10", border: "bg-white/10" };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Orçamentos</h1>
          <p className="text-[#9CA3AF] text-sm font-medium">Gerencie suas propostas comerciais enviadas.</p>
        </div>
        <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-6 shadow-lg shadow-indigo-500/20 border-none transition-all group">
          <Plus size={18} className="mr-2 group-hover:scale-110 transition-transform" /> Novo Orçamento
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => {
          const status = getStatusInfo(budget.status);
          return (
            <Card key={budget.id} className="bg-white/[0.03] border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 rounded-[2rem] overflow-hidden group">
              <div className={`h-1.5 w-full ${status.border}`} />
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-[#6366F1]">
                    <FileText size={24} />
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${status.class}`}>
                    {status.icon}
                    {budget.status}
                  </div>
                </div>
                
                <h3 className="font-bold text-white text-xl mb-1 tracking-tight group-hover:text-[#22D3EE] transition-colors">{budget.client}</h3>
                <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-widest mb-6">{budget.id}</p>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Valor do Projeto</p>
                    <p className="text-2xl font-black text-white">{budget.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-1">Expira em</p>
                    <p className="text-xs font-bold text-white">{budget.date}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 rounded-xl border-white/10 text-white hover:bg-white/5 h-10 text-[10px] font-bold gap-2">
                    <Download size={14} /> PDF
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/5 h-10 text-[10px] font-bold gap-1">
                    DETALHES <ChevronRight size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Budgets;