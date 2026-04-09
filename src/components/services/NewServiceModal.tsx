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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClipboardList, FileText, Clock } from "lucide-react";
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
      <DialogContent className="sm:max-w-[750px] w-[95vw] max-h-[90vh] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl flex flex-col">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ClipboardList size={18} />
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl font-bold text-slate-900">Nova Ordem de Serviço</DialogTitle>
              <DialogDescription className="text-[10px] md:text-xs font-medium text-slate-500">
                Abertura de chamado técnico.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 no-scrollbar">
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText size={12} className="text-blue-500" /> Detalhes da Operação
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Título do Serviço *</Label>
                  <Input placeholder="Ex: Reparo Crítico no Servidor" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Cliente *</Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue placeholder="Buscar cliente..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carlos">Carlos Eduardo</SelectItem>
                      <SelectItem value="mariana">Mariana Souza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Urgência</Label>
                  <Select defaultValue="MEDIA">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BAIXA">Baixa</SelectItem>
                      <SelectItem value="MEDIA">Média</SelectItem>
                      <SelectItem value="ALTA">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock size={12} className="text-blue-500" /> Planejamento
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Técnico *</Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue placeholder="Atribuir para..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ricardo">Ricardo Silva</SelectItem>
                      <SelectItem value="andre">André Lucas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Data Prevista *</Label>
                  <Input type="date" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 gap-2 flex-col sm:flex-row shrink-0">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6 w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto">
              Abrir Ordem de Serviço
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;