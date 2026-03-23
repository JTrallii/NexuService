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
import { Wrench, User, DollarSign, Calendar, FileText } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

interface NewServiceModalProps {
  children: React.ReactNode;
}

const NewServiceModal = ({ children }: NewServiceModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Ordem de serviço criada com sucesso!");
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
            <Wrench size={28} />
          </div>
          <DialogTitle className="text-3xl font-black tracking-tight">Novo Serviço</DialogTitle>
          <DialogDescription className="text-[#9CA3AF] font-medium text-base">
            Inicie uma nova ordem de serviço preenchendo os detalhes abaixo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-[#6366F1]" /> Título do Serviço
              </Label>
              <Input 
                id="title" 
                placeholder="Ex: Manutenção Preventiva de Ar" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="client" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <User size={14} className="text-[#22D3EE]" /> Cliente
              </Label>
              <Input 
                id="client" 
                placeholder="Nome do cliente" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <DollarSign size={14} className="text-emerald-400" /> Valor Estimado
              </Label>
              <Input 
                id="price" 
                placeholder="R$ 0,00" 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">
                Descrição Detalhada
              </Label>
              <Textarea 
                id="description" 
                placeholder="Descreva as atividades que serão realizadas..." 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] min-h-[100px] resize-none"
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
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-10 shadow-lg shadow-indigo-500/20 border-none transition-all hover:scale-[1.02]"
            >
              Criar Ordem de Serviço
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;