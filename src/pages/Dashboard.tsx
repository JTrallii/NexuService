"use client";

import { Users, Wrench, Clock, DollarSign, ArrowUpRight, Calendar, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    { title: "Total de Clientes", value: "124", change: "+12.5%", icon: Users, color: "text-blue-600", bg: "bg-blue-500/10" },
    { title: "Serviços Ativos", value: "42", change: "+3.2%", icon: Wrench, color: "text-indigo-600", bg: "bg-indigo-500/10" },
    { title: "Pendentes", value: "12", change: "-2.4%", icon: Clock, color: "text-amber-600", bg: "bg-amber-500/10" },
    { title: "Faturamento", value: "R$ 12.4k", change: "+18.3%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-500/10" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-1">Olá, Administrador! 👋</h1>
          <p className="text-slate-500 text-sm font-medium">Aqui está o resumo do seu negócio hoje, 24 de Outubro.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600 font-bold text-xs h-11 px-5">
            <Calendar className="mr-2" size={16} /> Exportar Relatório
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs h-11 px-5 shadow-lg shadow-indigo-200">
            Novo Serviço
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden bg-white rounded-2xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl transition-transform group-hover:scale-110 duration-300`}>
                  <stat.icon size={22} />
                </div>
                <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                  {stat.change} <ArrowUpRight size={10} className="ml-1" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.title}</p>
                <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm bg-white rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-8 border-b border-slate-50">
            <div>
              <CardTitle className="text-xl font-bold text-slate-900">Atividades Recentes</CardTitle>
              <p className="text-xs text-slate-400 mt-1">Últimas movimentações do sistema</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical size={20} /></Button>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {[
                { name: "Carlos Eduardo", action: "Novo cliente cadastrado", time: "Há 2 horas", color: "bg-blue-500" },
                { name: "Instalação Elétrica", action: "Orçamento aprovado", time: "Há 4 horas", color: "bg-emerald-500" },
                { name: "Mariana Souza", action: "Solicitação de suporte", time: "Há 5 horas", color: "bg-amber-500" },
                { name: "Reparo AC", action: "Serviço concluído", time: "Ontem, 18:45", color: "bg-indigo-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center font-bold shadow-lg shadow-inner`}>
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.action}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.name} • {item.time}</p>
                  </div>
                  <Button variant="ghost" className="text-xs font-bold text-slate-400 hover:text-indigo-600 hover:bg-transparent">Detalhes</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-8 rounded-xl border-slate-100 text-slate-400 hover:text-indigo-600 font-bold text-xs h-12">Ver Todo o Histórico</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-indigo-600 rounded-3xl overflow-hidden text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Wrench size={120} strokeWidth={1} />
          </div>
          <CardHeader className="p-8 relative z-10">
            <CardTitle className="text-xl font-bold">Resumo de Hoje</CardTitle>
            <p className="text-indigo-100 text-xs mt-1">Status rápido dos serviços</p>
          </CardHeader>
          <CardContent className="p-8 pt-0 relative z-10">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mb-1">Pendente</p>
                <p className="text-lg font-bold">5 Serviços</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mb-1">Em Andamento</p>
                <p className="text-lg font-bold">8 Serviços</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mb-1">Concluído</p>
                <p className="text-lg font-bold">12 Serviços</p>
              </div>
            </div>
            <Button className="w-full mt-8 bg-white text-indigo-600 hover:bg-indigo-50 rounded-2xl font-bold text-xs h-14">
              Ir para Ordens de Serviço
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;