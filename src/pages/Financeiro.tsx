"use client";

import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  Download
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Financeiro = () => {
  // Dados simulados baseados no sistema
  const stats = [
    { 
      label: "Total Faturado", 
      value: "R$ 42.850,00", 
      sub: "+12% vs mês anterior", 
      icon: DollarSign, 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      trend: "up"
    },
    { 
      label: "A Receber", 
      value: "R$ 8.400,00", 
      sub: "5 ordens pendentes", 
      icon: Clock, 
      color: "text-amber-600", 
      bg: "bg-amber-50",
      trend: "neutral"
    },
    { 
      label: "Ticket Médio", 
      value: "R$ 1.240,00", 
      sub: "Baseado em 34 serviços", 
      icon: TrendingUp, 
      color: "text-purple-600", 
      bg: "bg-purple-50",
      trend: "up"
    },
    { 
      label: "Serviços Concluídos", 
      value: "28", 
      sub: "Este mês", 
      icon: CheckCircle2, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50",
      trend: "up"
    },
  ];

  const completedServices = [
    { id: "OS-001", client: "Carlos Eduardo", service: "Reparo de Ar Condicionado", value: "R$ 350,00", date: "12/10/2023", status: "PAGO", method: "PIX" },
    { id: "OS-004", client: "Ana Paula", service: "Configuração de Rede", value: "R$ 450,00", date: "20/10/2023", status: "PAGO", method: "Cartão" },
    { id: "OS-007", client: "Construtora Alfa", service: "Manutenção Elétrica", value: "R$ 2.800,00", date: "22/10/2023", status: "CONCLUIDO", method: "Boleto" },
    { id: "OS-009", client: "Padaria Central", service: "Troca de Disjuntores", value: "R$ 890,00", date: "23/10/2023", status: "PAGO", method: "Dinheiro" },
    { id: "OS-012", client: "Condomínio Solar", service: "Instalação de Câmeras", value: "R$ 1.540,00", date: "24/10/2023", status: "CONCLUIDO", method: "PIX" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão Financeira</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Visão consolidada de receitas, recebíveis e fluxo de caixa.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-9 px-4 border-slate-200 text-slate-600 font-bold text-xs gap-2 rounded-lg">
            <Download size={14} /> Exportar Relatório
          </Button>
          <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2">
            <Filter size={14} /> Filtrar Período
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon size={20} />
              </div>
              {stat.trend === "up" && <ArrowUpRight size={16} className="text-emerald-500" />}
              {stat.trend === "down" && <ArrowDownRight size={16} className="text-rose-500" />}
            </div>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-[10px] font-bold text-slate-500">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Listagem de Serviços Concluídos */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 size={16} className="text-blue-600" /> Serviços Concluídos e Faturados
          </h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Últimos 30 dias</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="hover:bg-transparent border-b border-slate-200">
                <TableHead className="w-[100px] h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Protocolo</TableHead>
                <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Cliente</TableHead>
                <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Serviço Realizado</TableHead>
                <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Pagamento</TableHead>
                <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Valor</TableHead>
                <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pr-6 text-right">Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedServices.map((item) => (
                <TableRow key={item.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors">
                  <TableCell className="pl-6 py-4">
                    <span className="text-[11px] font-bold text-slate-400 font-mono tracking-tighter">{item.id}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-bold text-slate-900">{item.client}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs font-medium text-slate-500">{item.service}</span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className={cn(
                        "status-badge",
                        item.status === 'PAGO' ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-amber-50 text-amber-700 border-amber-200"
                      )}>
                        {item.status}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">{item.method}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <span className="text-sm font-black text-slate-900">{item.value}</span>
                  </TableCell>
                  <TableCell className="pr-6 py-4 text-right">
                    <span className="text-[11px] font-medium text-slate-400">{item.date}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="bg-slate-50/50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Total em serviços concluídos: <span className="text-slate-900">R$ 6.030,00</span>
            </p>
            <Button variant="link" className="text-blue-600 font-bold text-[11px] uppercase tracking-widest h-auto p-0">
              Ver histórico completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;