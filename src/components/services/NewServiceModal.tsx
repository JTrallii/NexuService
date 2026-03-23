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
import { ClipboardList, User, DollarSign, FileText, Settings2 } from "lucide-react";
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
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-[#0F172A] border-white/10 text-white rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-2xl">
        <DialogHeader className="mb-8">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg shadow-indigo-500/20">
            <ClipboardList size={28} />
          </div>
          <DialogTitle className="text-3xl font-black tracking-tight">Nova Ordem</DialogTitle>
          <DialogDescription className="text-[#9CA3AF] font-medium text-base">
            Inicie um novo fluxo operacional para um cliente.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title" className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-[#6366F1]" /> Título do Serviço
              </Label>
              <Input 
                id="title" 
                placeholder="Ex: Instalação de Painéis Solares" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="client" className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <User size={14} className="text-[#22D3EE]" /> Cliente
              </Label>
              <Select required>
                <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 text-white">
                  <SelectValue placeholder="Selecionar cliente" />
                </SelectTrigger>
                <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                  <SelectItem value="carlos">Carlos Eduardo</SelectItem>
                  <SelectItem value="mariana">Mariana Souza</SelectItem>
                  <SelectItem value="roberto">Roberto Lima</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status" className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <Settings2 size={14} className="text-amber-400" /> Status Inicial
              </Label>
              <Select defaultValue="PENDENTE">
                <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-[#0F172A] border-white/10 text-white">
                  <SelectItem value="PENDENTE">Pendente</SelectItem>
                  <SelectItem value="EM_ANDAMENTO">Em Andamento</SelectItem>
                  <SelectItem value="CONCLUIDO">Concluído</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="price" className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <DollarSign size={14} className="text-emerald-400" /> Valor Previsto
              </Label>
              <Input 
                id="price" 
                placeholder="R$ 0,00" 
                required
                className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description" className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest ml-1">
                Escopo do Trabalho
              </Label>
              <Textarea 
                id="description" 
                placeholder="Descreva detalhadamente o que será executado..." 
                className="bg-white/5 border-white/10 rounded-xl text-white min-h-[100px] resize-none focus-visible:ring-[#6366F1]"
              />
            </div>
          </div>

          <DialogFooter className="pt-6 border-t border-white/5">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setOpen(false)}
              className="rounded-xl text-[#9CA3AF] hover:text-white font-bold px-6 h-12"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-black h-12 px-10 shadow-lg shadow-indigo-500/20 border-none transition-all"
            >
              Gerar OS
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;