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
import { FileText, DollarSign, Calendar, PlusCircle } from "lucide-react";
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
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <FileText size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Novo Orçamento</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Gere uma proposta comercial detalhada para seu cliente.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="p-8 space-y-6">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                Cliente / Empresa
              </Label>
              <Input placeholder="Nome do cliente ou razão social" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <DollarSign size={12} className="text-emerald-600" /> Valor Total
                </Label>
                <Input placeholder="R$ 0,00" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <Calendar size={12} className="text-blue-500" /> Validade
                </Label>
                <Input type="date" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Observações e Itens</Label>
              <Textarea placeholder="Descreva os produtos e condições..." className="min-h-[120px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Descartar
            </Button>
            <Button type="submit" className="h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg">
              Gerar PDF
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBudgetModal;