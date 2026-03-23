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
import { UserPlus, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

interface NewClientModalProps {
  children: React.ReactNode;
}

const NewClientModal = ({ children }: NewClientModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de salvamento
    showSuccess("Cliente cadastrado com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#0F172A] border-white/10 text-white rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
        <DialogHeader className="mb-6">
          <div className="w-12 h-12 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20">
            <UserPlus size={24} />
          </div>
          <DialogTitle className="text-2xl font-black tracking-tight">Novo Cliente</DialogTitle>
          <DialogDescription className="text-[#9CA3AF] font-medium">
            Preencha os dados abaixo para adicionar um novo cliente à sua base.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <User size={14} className="text-[#6366F1]" /> Nome Completo
              </Label>
              <Input 
                id="name" 
                placeholder="Ex: João Silva" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <Mail size={14} className="text-[#22D3EE]" /> E-mail
              </Label>
              <Input 
                id="email" 
                type="email"
                placeholder="email@exemplo.com" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1 flex items-center gap-2">
                <Phone size={14} className="text-[#8B5CF6]" /> Telefone
              </Label>
              <Input 
                id="phone" 
                placeholder="(11) 99999-9999" 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>
          </div>

          <DialogFooter className="pt-4">
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
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-8 shadow-lg shadow-indigo-500/20 border-none transition-all"
            >
              Salvar Cliente
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;