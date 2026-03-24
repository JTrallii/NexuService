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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClipboardList, User, DollarSign, FileText, Calendar } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

interface NewServiceModalProps {
  children: React.ReactNode;
}

const NewServiceModal = ({ children }: NewServiceModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Ordem de serviço gerada com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[650px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ClipboardList size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Nova Ordem de Serviço</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Inicie um novo fluxo operacional para um cliente.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <FileText size={12} className="text-blue-500" /> Título do Serviço
                </Label>
                <Input placeholder="Ex: Manutenção Preventiva de TI" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <User size={12} className="text-blue-500" /> Cliente
                </Label>
                <Select required>
                  <SelectTrigger className="h-10 border-slate-200 rounded-lg text-sm">
                    <SelectValue placeholder="Selecionar cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="carlos">Carlos Eduardo</SelectItem>
                    <SelectItem value="mariana">Mariana Souza</SelectItem>
                    <SelectItem value="roberto">Roberto Lima</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <DollarSign size={12} className="text-emerald-600" /> Valor Previsto
                </Label>
                <Input placeholder="R$ 0,00" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Descrição do Escopo</Label>
                <Textarea placeholder="Descreva detalhadamente as atividades..." className="min-h-[100px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg">
              Gerar Ordem
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;