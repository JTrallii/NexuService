"use client";

import { Plus, Search, Filter, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { id: "OS-001", title: "Reparo de Ar Condicionado", client: "Carlos Eduardo", date: "12/10/2023", status: "Concluído", price: "R$ 350,00" },
    { id: "OS-002", title: "Instalação Elétrica", client: "Mariana Souza", date: "15/10/2023", status: "Em Andamento", price: "R$ 1.200,00" },
    { id: "OS-003", title: "Manutenção de Servidor", client: "Tech Solutions", date: "18/10/2023", status: "Pendente", price: "R$ 800,00" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Em Andamento": return "bg-indigo-500/10 text-[#22D3EE] border-indigo-500/20";
      case "Pendente": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default: return "bg-white/5 text-[#9CA3AF] border-white/10";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Serviços</h1>
          <p className="text-[#9CA3AF] text-sm font-medium">Acompanhe suas ordens de serviço ativas.</p>
        </div>
        <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-6 shadow-lg shadow-indigo-500/20 border-none transition-all group">
          <Plus size={18} className="mr-2 group-hover:scale-110 transition-transform" /> Novo Serviço
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={18} />
          <Input className="pl-12 bg-white/5 border-white/10 rounded-xl text-white focus-visible:ring-[#6366F1] h-12" placeholder="Buscar serviço ou cliente..." />
        </div>
        <Button variant="outline" className="h-12 rounded-xl border-white/10 text-white hover:bg-white/5 gap-2 px-6">
          <Filter size={18} /> Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="bg-white/[0.03] border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 rounded-[1.5rem] overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#22D3EE]">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-black text-[#6366F1] uppercase tracking-widest">{service.id}</span>
                      <h3 className="font-bold text-white text-lg tracking-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm text-[#9CA3AF]">Cliente: <span className="text-white font-bold">{service.client}</span></p>
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold mt-2 tracking-widest">Data: {service.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-10">
                  <div className="text-right">
                    <p className="text-lg font-black text-white">{service.price}</p>
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest">Valor Total</p>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;