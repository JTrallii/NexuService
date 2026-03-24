"use client";

import { Plus, Search, ClipboardList, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import NewServiceModal from "@/components/services/NewServiceModal";
import ServiceDetailsModal from "@/components/services/ServiceDetailsModal";
import { cn } from "@/lib/utils";

const Services = () => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [filter, setFilter] = useState("TODOS");

  const [services, setServices] = useState([
    { id: "OS-001", title: "Reparo de Ar Condicionado", client: "Carlos Eduardo", date: "12/10/2023", status: "CONCLUIDO", price: "R$ 350,00", description: "Limpeza de filtros e carga de gás refrigerante R410A." },
    { id: "OS-002", title: "Instalação Elétrica", client: "Mariana Souza", date: "15/10/2023", status: "EM_ANDAMENTO", price: "R$ 1.200,00", description: "Instalação de novo quadro de energia e 15 pontos de luz." },
    { id: "OS-003", title: "Manutenção de Servidor", client: "Roberto Lima", date: "18/10/2023", status: "PENDENTE", price: "R$ 800,00", description: "Atualização de firmware e verificação de redundância de storage." },
    { id: "OS-004", title: "Configuração de Rede", client: "Ana Paula", date: "20/10/2023", status: "PAGO", price: "R$ 450,00", description: "Configuração de roteadores mesh e balanceamento de carga.", paidAt: "21/10/2023" },
  ]);

  const updateOrderStatus = (id: string, newStatus: string, extraData?: any) => {
    setServices(prev => prev.map(s => s.id === id ? { 
      ...s, 
      status: newStatus,
      ...(newStatus === "CONCLUIDO" && { completedAt: new Date().toLocaleDateString('pt-BR') }),
      ...(newStatus === "PAGO" && { paidAt: extraData?.paidAt || new Date().toLocaleDateString('pt-BR') })
    } : s));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONCLUIDO": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "EM_ANDAMENTO": return "bg-indigo-500/10 text-[#6366F1] border-indigo-500/20";
      case "PAGO": return "bg-purple-500/10 text-[#8B5CF6] border-purple-500/20";
      case "PENDENTE": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "CANCELADO": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default: return "bg-white/5 text-[#9CA3AF] border-white/10";
    }
  };

  const filteredServices = services.filter(s => filter === "TODOS" || s.status === filter);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Ordens de Serviço</h1>
          <p className="text-[#9CA3AF] text-sm font-medium">Gestão operacional de fluxo e pagamentos.</p>
        </div>
        
        <NewServiceModal>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-6 shadow-lg shadow-indigo-500/20 border-none transition-all group">
            <Plus size={18} className="mr-2 group-hover:scale-110 transition-transform" /> Nova Ordem
          </Button>
        </NewServiceModal>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={18} />
          <Input className="pl-12 bg-white/5 border-white/10 rounded-xl text-white focus-visible:ring-[#6366F1] h-12" placeholder="Buscar por protocolo, cliente ou título..." />
        </div>
        <div className="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto no-scrollbar">
          {["TODOS", "PENDENTE", "EM_ANDAMENTO", "CONCLUIDO", "PAGO", "CANCELADO"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                filter === s ? "bg-[#6366F1] text-white shadow-lg" : "text-[#9CA3AF] hover:text-white"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredServices.map((service) => (
          <Card 
            key={service.id} 
            onClick={() => { setSelectedOrder(service); setIsDetailsOpen(true); }}
            className={cn(
              "bg-white/[0.03] border-white/5 backdrop-blur-md hover:border-[#6366F1]/50 transition-all duration-300 rounded-[1.5rem] overflow-hidden group cursor-pointer",
              service.status === "PAGO" && "bg-purple-500/5 border-purple-500/10",
              service.status === "CANCELADO" && "opacity-60 grayscale-[0.5]"
            )}
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "p-3 border rounded-xl transition-colors",
                    service.status === "PAGO" ? "bg-purple-500/10 border-purple-500/20 text-[#8B5CF6]" : "bg-white/5 border-white/10 text-[#6366F1]"
                  )}>
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-black text-[#6366F1] uppercase tracking-widest">{service.id}</span>
                      <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-[#22D3EE] transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-sm text-[#9CA3AF]">Cliente: <span className="text-white font-bold">{service.client}</span></p>
                    <div className="flex gap-4 mt-2">
                      <p className="text-[9px] text-[#9CA3AF] uppercase font-bold tracking-widest flex items-center gap-1">
                        Abertura: <span className="text-white">{service.date}</span>
                      </p>
                      {service.paidAt && (
                        <p className="text-[9px] text-[#8B5CF6] uppercase font-black tracking-widest flex items-center gap-1">
                          Pago em: <span>{service.paidAt}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-10">
                  <div className="text-right">
                    <p className="text-xl font-black text-white">{service.price}</p>
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest">Valor do Projeto</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border shadow-sm ${getStatusColor(service.status)}`}>
                      {service.status}
                    </div>
                    <ChevronRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredServices.length === 0 && (
          <div className="p-20 text-center bg-white/5 border border-dashed border-white/10 rounded-[2rem]">
            <p className="text-[#9CA3AF] font-bold">Nenhuma ordem encontrada com este status.</p>
          </div>
        )}
      </div>

      <ServiceDetailsModal 
        order={selectedOrder} 
        open={isDetailsOpen} 
        onOpenChange={setIsDetailsOpen}
        onUpdateStatus={updateOrderStatus}
      />
    </div>
  );
};

export default Services;