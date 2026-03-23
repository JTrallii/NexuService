"use client";

import { Users, Wrench, Clock, DollarSign, ArrowUpRight, Calendar, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    { title: "Total Clientes", value: "124", change: "+12%", icon: Users, color: "text-[#22D3EE]", bg: "bg-cyan-500/10" },
    { title: "Serviços Ativos", value: "42", change: "+5%", icon: Wrench, color: "text-[#6366F1]", bg: "bg-indigo-500/10" },
    { title: "Pendentes", value: "12", change: "-2%", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
    { title: "Receita", value: "R$ 12.4k", change: "+18%", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Visão Geral</h1>
          <p className="text-[#9CA3AF] text-sm font-medium">Controle total dos seus processos administrativos.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-white/10 text-[#E5E7EB] hover:bg-white/5 font-bold text-xs h-11 px-5">
            <Calendar className="mr-2" size={16} /> Relatórios
          </Button>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold text-xs h-11 px-5 shadow-lg shadow-indigo-500/20 border-none transition-all">
            Novo Serviço
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-white/[0.03] border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                  <stat.icon size={22} />
                </div>
                <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-lg bg-white/5 ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stat.change} <ArrowUpRight size={10} className="ml-1" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#9CA3AF] uppercase tracking-widest mb-1">{stat.title}</p>
                <h3 className="text-3xl font-black text-white">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white/[0.03] border-white/5 backdrop-blur-md rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-8 border-b border-white/5">
            <div>
              <CardTitle className="text-xl font-bold text-white">Atividades Recentes</CardTitle>
              <p className="text-xs text-[#9CA3AF] mt-1">Sincronizado há 2 min</p>
            </div>
            <Button variant="ghost" size="icon" className="text-[#9CA3AF] hover:bg-white/5 rounded-xl"><MoreVertical size={20} /></Button>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {[
                { name: "Carlos Eduardo", action: "Novo cadastro", time: "Há 2h", color: "text-blue-400" },
                { name: "Manutenção Elétrica", action: "Orçamento aprovado", time: "Há 4h", color: "text-emerald-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white group-hover:text-[#22D3EE] transition-colors">{item.action}</p>
                    <p className="text-xs text-[#9CA3AF] font-medium">{item.name} • {item.time}</p>
                  </div>
                  <Button variant="ghost" className="text-xs font-bold text-[#9CA3AF] hover:text-white hover:bg-white/5">Detalhes</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 border-indigo-500/20 backdrop-blur-xl rounded-3xl overflow-hidden text-white relative">
          <CardHeader className="p-8">
            <CardTitle className="text-xl font-bold">Acesso Rápido</CardTitle>
            <p className="text-indigo-200 text-xs mt-1">Ferramentas de produtividade</p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="space-y-4">
              <Button className="w-full bg-white/5 hover:bg-white/10 border-white/5 text-white h-12 rounded-xl justify-start gap-3">
                <Users size={18} className="text-[#22D3EE]" /> Gerenciar Equipe
              </Button>
              <Button className="w-full bg-white/5 hover:bg-white/10 border-white/5 text-white h-12 rounded-xl justify-start gap-3">
                <FileText size={18} className="text-[#6366F1]" /> Modelos de Proposta
              </Button>
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-indigo-500/20 border border-indigo-500/20">
              <p className="text-xs font-bold uppercase text-indigo-200 mb-2 tracking-widest">Dica do Sistema</p>
              <p className="text-sm text-white/80 leading-relaxed">Personalize seus orçamentos com a nova ferramenta de edição visual.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;