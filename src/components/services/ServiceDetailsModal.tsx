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
  XCircle
} from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";
import { cn } from "@/lib/utils";

interface OrderDetails {
  id: string;
  title: string;
  client: string;
  date: string;
  status: string;
  price: string;
  description: string;
}

interface ServiceDetailsModalProps {
  order: OrderDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateStatus: (id: string, newStatus: string) => void;
}

const ServiceDetailsModal = ({ order, open, onOpenChange, onUpdateStatus }: ServiceDetailsModalProps) => {
  if (!order) return null;

  const handlePay = () => {
    if (order.status !== "CONCLUIDO") {
      showError("A ordem deve estar CONCLUÍDA antes de ser paga.");
      return;
    }
    onUpdateStatus(order.id, "PAGO");
    showSuccess("Pagamento registrado com sucesso!");
    onOpenChange(false);
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "CONCLUIDO": return { color: "text-emerald-400", bg: "bg-emerald-500/10", icon: CheckCircle2 };
      case "EM_ANDAMENTO": return { color: "text-indigo-400", bg: "bg-indigo-500/10", icon: Clock };
      case "PAGO": return { color: "text-[#22D3EE]", bg: "bg-cyan-500/10", icon: CreditCard };
      case "PENDENTE": return { color: "text-amber-400", bg: "bg-amber-500/10", icon: AlertCircle };
      case "CANCELADO": return { color: "text-rose-400", bg: "bg-rose-500/10", icon: XCircle };
      default: return { color: "text-[#9CA3AF]", bg: "bg-white/5", icon: FileText };
    }
  };

  const config = getStatusConfig(order.status);
  const StatusIcon = config.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-[#0F172A] border-white/10 text-white rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-2xl">
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
          <DialogDescription className="text-[#9CA3AF] font-bold text-xs uppercase tracking-widest mt-2">
            Protocolo: {order.id}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
              <User size={12} className="text-[#6366F1]" /> Cliente
            </p>
            <p className="font-bold text-white">{order.client}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} className="text-[#22D3EE]" /> Criada em
            </p>
            <p className="font-bold text-white">{order.date}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
              <CreditCard size={12} className="text-emerald-400" /> Valor Total
            </p>
            <p className="text-2xl font-black text-white">{order.price}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest flex items-center gap-2">
              <Wrench size={12} className="text-indigo-400" /> Tipo OS
            </p>
            <p className="font-bold text-white">Serviço Especializado</p>
          </div>
        </div>

        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 mb-8">
          <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest mb-3">Descrição Operacional</p>
          <p className="text-sm text-[#E5E7EB] leading-relaxed">
            {order.description || "Nenhuma descrição detalhada fornecida para esta ordem de serviço."}
          </p>
        </div>

        <DialogFooter className="gap-3">
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="flex-1 rounded-xl text-[#9CA3AF] hover:text-white font-bold h-12"
          >
            Fechar
          </Button>
          
          {order.status !== "PAGO" && order.status !== "CANCELADO" && (
            <Button 
              onClick={handlePay}
              className={cn(
                "flex-1 rounded-xl font-black h-12 transition-all shadow-lg border-none",
                order.status === "CONCLUIDO" 
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-emerald-500/20"
                  : "bg-white/5 text-[#9CA3AF] cursor-not-allowed"
              )}
            >
              <CreditCard size={18} className="mr-2" />
              Marcar como Pago
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;