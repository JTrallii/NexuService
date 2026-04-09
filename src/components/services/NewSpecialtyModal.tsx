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
import { Award } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface NewSpecialtyModalProps {
  children: React.ReactNode;
}

const NewSpecialtyModal = ({ children }: NewSpecialtyModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Especialidade cadastrada com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white shadow-sm">
              <Award size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Nova Especialidade</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Adicione uma nova categoria técnica para organizar seus serviços.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nome da Especialidade *</Label>
              <Input placeholder="Ex: Segurança Eletrônica" required className="h-10 border-slate-200 rounded-lg" />
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg shadow-sm">
              Cadastrar Especialidade
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewSpecialtyModal;