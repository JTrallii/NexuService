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
  Briefcase,
  FileText, 
  Play,
} from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";
import PaymentModal from "./PaymentModal";
import { RoleContext } from "@/components/layout/DashboardLayout";

interface OrderDetails {
  id: string;
  title: string;
  client: string;
  technician?: string;
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
      default: return "text-slate-500 bg-slate-50 border-slate-100";
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[700px] w-[95vw] max-h-[90vh] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] md:text-[10px] font-black text-slate-400 font-mono tracking-tight uppercase">Protocolo {order.id}</span>
                <span className={cn("status-badge text-[9px] md:text-[11px]", getStatusColor(order.status))}>
                  {order.status.replace('_', ' ')}
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{order.title}</h2>
            </div>
            <div className="sm:text-right">
              <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Valor Total</p>
              <p className="text-xl md:text-2xl font-black text-slate-900">{order.price}</p>
            </div>
          </div>

          <div className="p-4 md:p-8 overflow-y-auto flex-1 no-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <div className="md:col-span-2 space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5">
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <User size={12} className="text-blue-500" /> Cliente
                    </p>
                    <p className="text-xs md:text-sm font-bold text-slate-900">{order.client}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Briefcase size={12} className="text-blue-500" /> Técnico
                    </p>
                    <p className="text-xs md:text-sm font-bold text-slate-900">{order.technician || "Não atribuído"}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Escopo Técnico</p>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {order.description || "Descrição não preenchida."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Logs</p>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-900">Abertura</p>
                      <p className="text-[10px] text-slate-500">{order.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 flex flex-col sm:flex-row gap-2 shrink-0">
            <div className="flex-1 flex flex-col sm:flex-row gap-2">
              {order.status === "PENDENTE" && (
                <Button 
                  onClick={() => handleStatusUpdate("EM_ANDAMENTO")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                >
                  <Play size={14} fill="currentColor" /> Iniciar
                </Button>
              )}
              
              {order.status === "EM_ANDAMENTO" && (
                <Button 
                  onClick={() => handleStatusUpdate("CONCLUIDO")}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                >
                  <CheckCircle2 size={16} /> Concluir
                </Button>
              )}

              {order.status === "CONCLUIDO" && role === "ADMIN" && (
                <Button 
                  onClick={() => setIsPaymentOpen(true)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold h-10 rounded-lg gap-2 text-xs"
                >
                  <CreditCard size={16} /> Receber
                </Button>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => onOpenChange(false)}
              className="h-10 text-slate-500 hover:bg-slate-100 font-bold px-6 text-xs rounded-lg w-full sm:w-auto"
            >
              Fechar
            </Button>
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