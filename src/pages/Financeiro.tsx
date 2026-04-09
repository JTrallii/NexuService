"use client";

import { useContext, useMemo } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
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
import { RoleContext } from "@/components/layout/DashboardLayout";
import { cn } from "@/lib/utils";

const Financeiro = () => {
  const { role, user } = useContext(RoleContext);

  const allCompletedServices = [
    { id: "OS-001", client: "Carlos Eduardo", technician: "Ricardo Silva", service: "Reparo de Ar Condicionado", value: 350, date: "12/10/2023", status: "PAGO", method: "PIX" },
    { id: "OS-004", client: "Ana Paula", technician: "Paula Santos", service: "Configuração de Rede", value: 450, date: "20/10/2023", status: "PAGO", method: "Cartão" },
    { id: "OS-007", client: "Construtora Alfa", technician: "Fernando Costa", service: "Manutenção Elétrica", value: 2800, date: "22/10/2023", status: "CONCLUIDO", method: "Boleto" },
    { id: "OS-009", client: "Padaria Central", technician: "Gabriel Santos", service: "Troca de Disjuntores", value: 890, date: "23/10/2023", status: "PAGO", method: "Dinheiro" },
    { id: "OS-012", client: "Condomínio Solar", technician: "Beatriz Souza", service: "Instalação de Câmeras", value: 1540, date: "24/10/2023", status: "CONCLUIDO", method: "PIX" },
  ];

  const filteredServices = useMemo(() => {
    if (role === "ADMIN") return allCompletedServices;
    if (role === "CLIENT") return allCompletedServices.filter(s => s.client === user.name);
    if (role === "TECHNICIAN") return allCompletedServices.filter(s => s.technician === user.name);
    return [];
  }, [role, user]);

  const stats = useMemo(() => {
    const total = filteredServices.reduce((acc, curr) => acc + curr.value, 0);
    const count = filteredServices.length;
    const ticketMedio = count > 0 ? total / count : 0;

    return [
      { 
        label: role === "CLIENT" ? "Total Investido" : "Total Faturado", 
        value: `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 
        sub: "+12% vs mês anterior", 
        icon: DollarSign, 
        color: "text-blue-600", 
        bg: "bg-blue-50",
        trend: "up"
      },
      { 
        label: "A Receber", 
        value: role === "CLIENT" ? "R$ 0,00" : "R$ 8.400,00", 
        sub: "5 ordens pendentes", 
        icon: Clock, 
        color: "text-amber-600", 
        bg: "bg-amber-50",
        trend: "neutral"
      },
      { 
        label: "Ticket Médio", 
        value: `R$ ${ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 
        sub: `Baseado em ${count} serviços`, 
        icon: TrendingUp, 
        color: "text-purple-600", 
        bg: "bg-purple-50",
        trend: "up"
      },
      { 
        label: "Serviços Concluídos", 
        value: count.toString(), 
        sub: "Este mês", 
        icon: CheckCircle2, 
        color: "text-emerald-600", 
        bg: "bg-emerald-50",
        trend: "up"
      },
    ];
  }, [filteredServices, role]);

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Gestão Financeira</h1>
          <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
            {role === "ADMIN" ? "Visão consolidada de receitas e fluxo de caixa." : "Acompanhe seus gastos e pagamentos realizados."}
          </p>
        </div>
        
        <Button variant="outline" className="h-9 px-4 border-slate-200 text-slate-600 font-bold text-xs gap-2 rounded-lg w-full sm:w-auto">
          <Download size={14} /> Exportar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon size={18} />
              </div>
              {stat.trend === "up" && <ArrowUpRight size={16} className="text-emerald-500" />}
              {stat.trend === "down" && <ArrowDownRight size={16} className="text-rose-500" />}
            </div>
            <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-[9px] md:text-[10px] font-bold text-slate-500">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
          <CheckCircle2 size={16} className="text-blue-600" /> Histórico de Serviços
        </h2>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="hover:bg-transparent border-b border-slate-200">
                  <TableHead className="w-[100px] h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Protocolo</TableHead>
                  <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Cliente</TableHead>
                  <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Serviço</TableHead>
                  <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Pagamento</TableHead>
                  <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Valor</TableHead>
                  <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 pr-6 text-right">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((item) => (
                  <TableRow key={item.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors whitespace-nowrap">
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
                      <span className="text-sm font-black text-slate-900">R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </TableCell>
                    <TableCell className="pr-6 py-4 text-right">
                      <span className="text-[11px] font-medium text-slate-400">{item.date}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financeiro;