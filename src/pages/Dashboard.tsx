"use client";

import { useState, useContext, useMemo } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Search,
  Filter
} from "lucide-react";
import ServiceDetailsModal from "@/components/services/ServiceDetailsModal";
import { RoleContext } from "@/components/layout/DashboardLayout";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const { role, user } = useContext(RoleContext);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [services, setServices] = useState([
    { id: "OS-001", title: "Reparo de Ar Condicionado", client: "Carlos Eduardo", technician: "Ricardo Silva", date: "12/10/2023", status: "CONCLUIDO", price: "R$ 350,00", description: "Limpeza de filtros e carga de gás refrigerante R410A." },
    { id: "OS-002", title: "Instalação Elétrica", client: "Mariana Souza", technician: "André Lucas", date: "15/10/2023", status: "EM_ANDAMENTO", price: "R$ 1.200,00", description: "Instalação de novo quadro de energia e 15 pontos de luz." },
    { id: "OS-003", title: "Manutenção de Servidor", client: "Roberto Lima", technician: "Paula Santos", date: "18/10/2023", status: "PENDENTE", price: "R$ 800,00", description: "Atualização de firmware e verificação de redundância de storage." },
    { id: "OS-004", title: "Configuração de Rede", client: "Ana Paula", technician: "Paula Santos", date: "20/10/2023", status: "PAGO", price: "R$ 450,00", description: "Configuração de roteadores mesh.", paidAt: "21/10/2023" },
    { id: "OS-005", title: "Aguardando Peça", client: "João Silva", technician: "Ricardo Silva", date: "22/10/2023", status: "AGUARDANDO_PECA", price: "R$ 2.100,00", description: "Troca de placa-mãe de servidor Dell." },
    { id: "OS-006", title: "Instalação de Câmeras", client: "Beatriz Oliveira", technician: "Beatriz Souza", date: "24/10/2023", status: "EM_ANDAMENTO", price: "R$ 1.500,00", description: "Instalação de 4 câmeras IP e DVR." },
    { id: "OS-007", title: "Reparo Hidráulico", client: "Fernando Costa", technician: "Fernando Costa", date: "25/10/2023", status: "PENDENTE", price: "R$ 250,00", description: "Troca de reparo de válvula de descarga." },
    { id: "OS-008", title: "Pintura de Fachada", client: "Luciana Pereira", technician: "Luciana Pereira", date: "26/10/2023", status: "EM_ANDAMENTO", price: "R$ 3.200,00", description: "Pintura externa com tinta emborrachada." },
    { id: "OS-009", title: "Montagem de Móveis", client: "Gabriel Santos", technician: "Gabriel Santos", date: "27/10/2023", status: "CONCLUIDO", price: "R$ 600,00", description: "Montagem de estação de trabalho corporativa." },
  ]);

  const filteredServices = useMemo(() => {
    let result = services;
    if (role === "CLIENT") result = result.filter(s => s.client === user.name);
    if (role === "TECHNICIAN") result = result.filter(s => s.technician === user.name);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.id.toLowerCase().includes(query) || 
        s.client.toLowerCase().includes(query) || 
        s.title.toLowerCase().includes(query)
      );
    }
    return result;
  }, [services, role, user, searchQuery]);

  const stats = useMemo(() => {
    const total = filteredServices.length;
    const pending = filteredServices.filter(s => s.status === "PENDENTE").length;
    const inProgress = filteredServices.filter(s => s.status === "EM_ANDAMENTO").length;
    const completed = filteredServices.filter(s => s.status === "CONCLUIDO" || s.status === "PAGO").length;

    return [
      { label: "Total de Ordens", value: total, icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-50" },
      { label: "Aguardando", value: pending, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
      { label: "Em Execução", value: inProgress, icon: AlertCircle, color: "text-indigo-600", bg: "bg-indigo-50" },
      { label: "Concluídas", value: completed, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
    ];
  }, [filteredServices]);

  const updateOrderStatus = (id: string, newStatus: string, extraData?: any) => {
    setServices(prev => prev.map(s => s.id === id ? { 
      ...s, 
      status: newStatus,
      ...(newStatus === "CONCLUIDO" && { completedAt: new Date().toLocaleDateString('pt-BR') }),
      ...(newStatus === "PAGO" && { paidAt: extraData?.paidAt || new Date().toLocaleDateString('pt-BR') })
    } : s));
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "CONCLUIDO": return { label: "Concluída", class: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "EM_ANDAMENTO": return { label: "Em Andamento", class: "bg-blue-50 text-blue-700 border-blue-200" };
      case "PAGO": return { label: "Paga", class: "bg-purple-50 text-purple-700 border-purple-200" };
      case "PENDENTE": return { label: "Aberta", class: "bg-slate-100 text-slate-700 border-slate-200" };
      case "AGUARDANDO_PECA": return { label: "Aguardando Peça", class: "bg-amber-50 text-amber-700 border-amber-200" };
      default: return { label: status, class: "bg-slate-50 text-slate-500 border-slate-200" };
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            {role === "ADMIN" ? "Gestão de Ordens" : role === "CLIENT" ? "Meus Chamados" : "Minhas Tarefas"}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
            {role === "ADMIN" ? "Acompanhe ordens, clientes e técnicos alocados." : "Acompanhe o status dos seus serviços em tempo real."}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon size={18} />
              </div>
            </div>
            <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-xl md:text-2xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 py-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <Input 
            placeholder="Buscar por protocolo, cliente ou serviço..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 pl-10 bg-white border-slate-200 text-sm rounded-lg focus-visible:ring-blue-500 w-full"
          />
        </div>
        <Button variant="outline" className="h-10 bg-white border-slate-200 rounded-lg px-4 flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Filter size={14} />
          Filtros
        </Button>
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="hover:bg-transparent border-b border-slate-200">
                <TableHead className="w-[100px] h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Protocolo</TableHead>
                <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Cliente</TableHead>
                <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Técnico</TableHead>
                <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Serviço</TableHead>
                <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
                <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Abertura</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => {
                const status = getStatusInfo(service.status);
                return (
                  <TableRow 
                    key={service.id} 
                    className="table-row-hover border-b border-slate-100 last:border-0 transition-colors whitespace-nowrap"
                    onClick={() => { setSelectedOrder(service); setIsDetailsOpen(true); }}
                  >
                    <TableCell className="pl-6 py-4">
                      <span className="text-[11px] font-bold text-slate-400 font-mono tracking-tighter">{service.id}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-sm font-bold text-slate-900">{service.client}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-xs font-semibold text-slate-600">{service.technician}</span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-xs font-medium text-slate-500">{service.title}</span>
                    </TableCell>
                    <TableCell className="py-4 text-center">
                      <span className={cn("status-badge", status.class)}>
                        {status.label}
                      </span>
                    </TableCell>
                    <TableCell className="pr-6 py-4 text-right">
                      <span className="text-[11px] font-medium text-slate-400">{service.date}</span>
                    </TableCell>
                  </TableRow>
                );
              })}
              {filteredServices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-slate-400 font-medium">
                    Nenhuma ordem de serviço encontrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
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

export default Dashboard;