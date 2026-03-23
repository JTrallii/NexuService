"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, User, DollarSign, Calendar, PlusCircle } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

interface NewBudgetModalProps {
  children: React.ReactNode;
}

const NewBudgetModal = ({ children }: NewBudgetModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Orçamento gerado com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-[#0F172A] border-white/10 text-white rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-2xl">
        <DialogHeader className="mb-8">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-indigo-500/20">
            <PlusCircle size={28} />
          </div>
          <DialogTitle className="text-3xl font-black tracking-tight">Novo Orçamento</DialogTitle>
          <DialogDescription className="text-[#9CA3AF] font-medium text-base">
            Gere uma nova proposta comercial detalhada para seu cliente.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="client" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <User size={14} className="text-[#6366F1]" /> Cliente / Empresa
              </Label>
              <Input 
                id="client" 
                placeholder="Nome do cliente ou razão social" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="value" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <DollarSign size={14} className="text-emerald-400" /> Valor Total
              </Label>
              <Input 
                id="value" 
                placeholder="R$ 0,00" 
                required
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expiry" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <Calendar size={14} className="text-[#22D3EE]" /> Validade da Proposta
              </Label>
              <Input 
                id="expiry" 
                type="date"
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12 [color-scheme:dark]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-[#8B5CF6]" /> Itens e Observações
              </Label>
              <Textarea 
                id="notes" 
                placeholder="Liste os produtos, serviços e condições de pagamento..." 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] min-h-[120px] resize-none"
              />
            </div>
          </div>

          <DialogFooter className="pt-6 border-t border-white/5">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setOpen(false)}
              className="rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/5 font-bold px-6 h-12"
            >
              Descartar
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-10 shadow-lg shadow-indigo-500/20 border-none transition-all hover:scale-[1.02]"
            >
              Gerar Orçamento PDF
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBudgetModal;