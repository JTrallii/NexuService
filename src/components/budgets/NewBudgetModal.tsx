"use client";

import { useState } from "react";
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { FileText, DollarSign, Calendar, User, ClipboardCheck, AlertCircle } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface NewBudgetModalProps {
  children: React.ReactNode;
}

const NewBudgetModal = ({ children }: NewBudgetModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Orçamento gerado e pronto para envio!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <FileText size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Novo Orçamento</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Gere propostas comerciais profissionais para conversão de vendas.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto no-scrollbar">
          <div className="p-8 space-y-8">
            {/* Seção: Dados da Proposta */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <ClipboardCheck size={12} className="text-blue-500" /> Informações da Proposta
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <User size={12} className="text-slate-400" /> Cliente / Empresa *
                  </Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue placeholder="Selecione o cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carlos">Carlos Eduardo</SelectItem>
                      <SelectItem value="mariana">Mariana Souza</SelectItem>
                      <SelectItem value="construtora">Construtora Alfa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Serviço / Projeto *</Label>
                  <Input placeholder="Ex: Reforma Elétrica Predial" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <DollarSign size={12} className="text-emerald-600" /> Valor Estimado *
                  </Label>
                  <Input placeholder="R$ 0,00" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <AlertCircle size={12} className="text-amber-500" /> Status Inicial
                  </Label>
                  <Select defaultValue="PENDENTE">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDENTE">Aguardando Aprovação</SelectItem>
                      <SelectItem value="APROVADO">Aprovado pelo Cliente</SelectItem>
                      <SelectItem value="REJEITADO">Rejeitado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Seção: Prazos */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Calendar size={12} className="text-blue-500" /> Datas e Validade
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Data de Emissão</Label>
                  <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Validade da Proposta *</Label>
                  <Input type="date" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Seção: Descrição */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText size={12} className="text-blue-500" /> Detalhamento do Escopo
              </p>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Descrição Detalhada</Label>
                  <Textarea placeholder="Liste os itens, materiais e serviços inclusos nesta proposta..." className="min-h-[120px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Condições de Pagamento / Notas</Label>
                  <Textarea placeholder="Ex: 50% entrada + 50% na conclusão..." className="min-h-[80px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Descartar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm">
              Gerar Orçamento
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBudgetModal;