"use client";

import { useState, useContext } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  User, 
  Calendar, 
  FileText, 
  AlertCircle,
  XCircle,
  Play,
  Phone,
  ArrowRight
} from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";
import PaymentModal from "./PaymentModal";
import { RoleContext } from "@/components/layout/DashboardLayout";

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
  const { role } = useContext(RoleContext);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONCLUIDO": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      case "EM_ANDAMENTO": return "text-blue-600 bg-blue-50 border-blue-100";
      case "PAGO": return "text-purple-600 bg-purple-50 border-purple-100";
      case "PENDENTE": return "text-slate-600 bg-slate-50 border-slate-200";
      case "AGUARDANDO_PECA": return "text-amber-600 bg-amber-50 border-amber-100";
      case "ATRASADA": return "text-rose-600 bg-rose-50 border-rose-100";
      default: return "text-slate-500 bg-slate-50 border-slate-100";
    }
  };

  const timelineEvents = [
    { label: "Abertura da Ordem", date: order.date, active: true },
    { label: "Execução Iniciada", date: order.status === "PENDENTE" ? "Pendente" : "Processado", active: order.status !== "PENDENTE" },
    { label: "Conclusão Técnica", date: order.completedAt || "Aguardando", active: ["CONCLUIDO", "PAGO"].includes(order.status) },
    { label: "Liquidação Financeira", date: order.paidAt || "Aberto", active: order.status === "PAGO" },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[700px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
          <div className="flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-400 font-mono tracking-tight uppercase">Protocolo {order.id}</span>
                  <span className={cn("status-badge", getStatusColor(order.status))}>
                    {order.status.replace('_', ' ')}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight">{order.title}</h2>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Valor Total</p>
                <p className="text-2xl font-black text-slate-900">{order.price}</p>
              </div>
            </div>

            <div className="p-8 overflow-y-auto no-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={12} className="text-blue-500" /> Cliente
                      </p>
                      <p className="text-sm font-bold text-slate-900">{order.client}</p>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Phone size={12} className="text-slate-400" /> Contato
                      </p>
                      <p className="text-sm font-semibold text-slate-600">(11) 98888-7777</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Escopo do Serviço</p>
                    <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {order.description || "Descrição operacional não preenchida para esta ordem."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Linha do Tempo</p>
                  <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                    {timelineEvents.map((event, i) => (
                      <div key={i} className="flex gap-4 relative">
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2 border-white z-10 mt-1 shadow-sm",
                          event.active ? "bg-blue-600" : "bg-slate-200"
                        )} />
                        <div className="flex-1">
                          <p className={cn("text-xs font-bold", event.active ? "text-slate-900" : "text-slate-400")}>{event.label}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-200 p-6 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex gap-2">
                {order.status === "PENDENTE" && (
                  <Button 
                    onClick={() => handleStatusUpdate("EM_ANDAMENTO")}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                  >
                    <Play size={14} fill="currentColor" /> Iniciar Execução
                  </Button>
                )}
                
                {order.status === "EM_ANDAMENTO" && (
                  <Button 
                    onClick={() => handleStatusUpdate("CONCLUIDO")}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                  >
                    <CheckCircle2 size={16} /> Concluir Serviço
                  </Button>
                )}

                {order.status === "CONCLUIDO" && role === "ADMIN" && (
                  <Button 
                    onClick={() => setIsPaymentOpen(true)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                  >
                    <CreditCard size={16} /> Confirmar Recebimento
                  </Button>
                )}

                {role === "ADMIN" && ["PENDENTE", "EM_ANDAMENTO", "AGUARDANDO_PECA"].includes(order.status) && (
                  <Button 
                    variant="outline" 
                    onClick={() => handleStatusUpdate("CANCELADO")}
                    className="h-10 text-rose-600 hover:bg-rose-50 border-rose-200 rounded-lg text-xs font-bold px-4"
                  >
                    <XCircle size={16} className="mr-2" /> Cancelar
                  </Button>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                onClick={() => onOpenChange(false)}
                className="h-10 text-slate-500 hover:bg-slate-100 font-bold px-6 text-xs rounded-lg"
              >
                Fechar Painel
              </Button>
            </div>
          </div>
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