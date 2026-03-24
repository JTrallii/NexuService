"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  User, 
  Calendar, 
  FileText, 
  Wrench,
  AlertCircle,
  XCircle,
  Play,
  ArrowRight
} from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";
import { cn } from "@/lib/utils";
import PaymentModal from "./PaymentModal";

interface OrderDetails {
  id: string;
  title: string;
  client: string;
  date: string;
  status: string;
  price: string;
  description: string;
  completedAt?: string;
  paidAt?: string;
}

interface ServiceDetailsModalProps {
  order: OrderDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateStatus: (id: string, newStatus: string, extraData?: any) => void;
}

const ServiceDetailsModal = ({ order, open, onOpenChange, onUpdateStatus }: ServiceDetailsModalProps) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  if (!order) return null;

  const handleStatusUpdate = (newStatus: string) => {
    onUpdateStatus(order.id, newStatus);
    showSuccess(`Status da ordem atualizado para ${newStatus}`);
  };

  const handleConfirmPayment = (paymentData: any) => {
    onUpdateStatus(order.id, "PAGO", { paidAt: paymentData.date });
    onOpenChange(false);
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "CONCLUIDO": return { color: "text-emerald-400", bg: "bg-emerald-500/10", icon: CheckCircle2 };
      case "EM_ANDAMENTO": return { color: "text-[#6366F1]", bg: "bg-indigo-500/10", icon: Clock };
      case "PAGO": return { color: "text-[#8B5CF6]", bg: "bg-purple-500/10", icon: CreditCard };
      case "PENDENTE": return { color: "text-amber-400", bg: "bg-amber-500/10", icon: AlertCircle };
      case "CANCELADO": return { color: "text-rose-400", bg: "bg-rose-500/10", icon: XCircle };
      default: return { color: "text-[#9CA3AF]", bg: "bg-white/5", icon: FileText };
    }
  };

  const config = getStatusConfig(order.status);
  const StatusIcon = config.icon;

  const timelineEvents = [
    { label: "Ordem Criada", date: order.date, active: true },
    { label: "Início da Execução", date: "Pendente", active: order.status !== "PENDENTE" },
    { label: "Conclusão Técnica", date: order.completedAt || "Pendente", active: ["CONCLUIDO", "PAGO"].includes(order.status) },
    { label: "Pagamento Confirmado", date: order.paidAt || "Aguardando", active: order.status === "PAGO" },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[700px] bg-[#0F172A] border-white/10 text-white rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
          <DialogHeader className="mb-6">
            <div className="flex justify-between items-start">
              <div className={`p-4 rounded-2xl ${config.bg} ${config.color} mb-4`}>
                <StatusIcon size={32} />
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${config.bg.replace('/10', '/20')} ${config.color}`}>
                {order.status}
              </div>
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight">{order.title}</DialogTitle>
            <div className="flex gap-4 mt-2">
              <span className="text-[#9CA3AF] font-bold text-[10px] uppercase tracking-widest">Protocolo: {order.id}</span>
              <span className="text-[#9CA3AF] font-bold text-[10px] uppercase tracking-widest">•</span>
              <span className="text-[#9CA3AF] font-bold text-[10px] uppercase tracking-widest">Abertura: {order.date}</span>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md:col-span-2 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
                    <User size={12} className="text-[#6366F1]" /> Cliente Solicitante
                  </p>
                  <p className="font-bold text-white text-lg">{order.client}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
                    <CreditCard size={12} className="text-emerald-400" /> Valor do Serviço
                  </p>
                  <p className="text-2xl font-black text-white">{order.price}</p>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-3">Escopo e Descrição</p>
                <p className="text-sm text-[#E5E7EB] leading-relaxed">
                  {order.description || "Nenhuma descrição detalhada fornecida para esta ordem de serviço."}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-4">Histórico do Fluxo</p>
              <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 border-[#0F172A] z-10 mt-1",
                      event.active ? "bg-[#22D3EE]" : "bg-white/10"
                    )} />
                    <div>
                      <p className={cn("text-xs font-bold", event.active ? "text-white" : "text-[#9CA3AF]")}>{event.label}</p>
                      <p className="text-[10px] text-[#9CA3AF] font-medium">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="gap-3 pt-6 border-t border-white/5">
            <div className="flex-1 flex gap-3">
              {order.status === "PENDENTE" && (
                <Button 
                  onClick={() => handleStatusUpdate("EM_ANDAMENTO")}
                  className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-black h-12 transition-all gap-2"
                >
                  <Play size={16} fill="currentColor" /> Iniciar Execução
                </Button>
              )}
              
              {order.status === "EM_ANDAMENTO" && (
                <Button 
                  onClick={() => handleStatusUpdate("CONCLUIDO")}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black h-12 transition-all gap-2"
                >
                  <CheckCircle2 size={18} /> Concluir Trabalho
                </Button>
              )}

              {order.status === "CONCLUIDO" && (
                <Button 
                  onClick={() => setIsPaymentOpen(true)}
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl font-black h-12 transition-all gap-2 shadow-lg shadow-purple-500/20"
                >
                  <CreditCard size={18} /> Marcar como Pago
                </Button>
              )}

              {["PENDENTE", "EM_ANDAMENTO"].includes(order.status) && (
                <Button 
                  variant="ghost" 
                  onClick={() => handleStatusUpdate("CANCELADO")}
                  className="rounded-xl text-rose-400 hover:bg-rose-500/10 font-bold h-12 px-6"
                >
                  <XCircle size={18} className="mr-2" /> Cancelar
                </Button>
              )}
              
              {["PAGO", "CANCELADO"].includes(order.status) && (
                <div className="flex-1 flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Fluxo Finalizado • {order.status}
                </div>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => onOpenChange(false)}
              className="rounded-xl text-[#9CA3AF] hover:text-white font-bold h-12 px-8"
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <PaymentModal 
        order={order} 
        open={isPaymentOpen} 
        onOpenChange={setIsPaymentOpen}
        onConfirm={handleConfirmPayment}
      />
    </>
  );
};

export default ServiceDetailsModal;