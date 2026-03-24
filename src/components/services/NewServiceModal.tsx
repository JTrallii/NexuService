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
  SelectValue,
} from "@/components/ui/select";
import { ClipboardList, User, DollarSign, FileText, Calendar, Clock, ShieldAlert, CreditCard } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface NewServiceModalProps {
  children: React.ReactNode;
}

const NewServiceModal = ({ children }: NewServiceModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Ordem de serviço aberta e atribuída com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ClipboardList size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Nova Ordem de Serviço</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Abertura de chamado técnico e alocação de recursos.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto no-scrollbar">
          <div className="p-8 space-y-8">
            {/* Seção: Identificação do Serviço */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText size={12} className="text-blue-500" /> Informações do Serviço
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Título da Ordem (Assunto) *</Label>
                  <Input placeholder="Ex: Manutenção de Ar Condicionado Central" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <User size={12} className="text-slate-400" /> Selecionar Cliente *
                  </Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue placeholder="Buscar cliente..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carlos">Carlos Eduardo</SelectItem>
                      <SelectItem value="mariana">Mariana Souza</SelectItem>
                      <SelectItem value="empresa">Empresa NEXU S.A.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <ShieldAlert size={12} className="text-rose-500" /> Nível de Prioridade
                  </Label>
                  <Select defaultValue="MEDIA">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BAIXA">Baixa (Rotina)</SelectItem>
                      <SelectItem value="MEDIA">Média (Normal)</SelectItem>
                      <SelectItem value="ALTA">Alta (Urgente)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Seção: Execução e Responsável */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock size={12} className="text-blue-500" /> Planejamento e Execução
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Responsável Técnico</Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue placeholder="Atribuir para..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin Master</SelectItem>
                      <SelectItem value="tecnico1">Ricardo Silva (Técnico 01)</SelectItem>
                      <SelectItem value="tecnico2">André Lucas (Técnico 02)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <Calendar size={12} className="text-slate-400" /> Previsão de Conclusão *
                  </Label>
                  <Input type="date" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Seção: Financeiro e Descrição */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <CreditCard size={12} className="text-emerald-600" /> Detalhes Financeiros e Técnicos
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <DollarSign size={12} className="text-emerald-600" /> Valor Total (R$) *
                  </Label>
                  <Input placeholder="0,00" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Forma de Recebimento</Label>
                  <Select defaultValue="PIX">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PIX">PIX</SelectItem>
                      <SelectItem value="DINHEIRO">Dinheiro</SelectItem>
                      <SelectItem value="BOLETO">Boleto Bancário</SelectItem>
                      <SelectItem value="CARTAO">Cartão de Crédito</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Descrição Detalhada do Chamado</Label>
                  <Textarea placeholder="Descreva o problema relatado pelo cliente e as ações previstas..." className="min-h-[100px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Observações Internas (Não visíveis ao cliente)</Label>
                  <Textarea placeholder="Anotações de segurança, senhas de acesso, etc..." className="min-h-[80px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm">
              Gerar Ordem de Serviço
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;