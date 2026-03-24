"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { UserPlus, MapPin, User } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

const clientSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().min(11, "CPF inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  city: z.string().min(2, "Cidade obrigatória"),
  state: z.string().length(2, "UF obrigatória"),
});

type ClientFormData = z.infer<typeof clientSchema>;

interface NewClientModalProps {
  children: React.ReactNode;
}

const NewClientModal = ({ children }: NewClientModalProps) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ClientFormData) => {
    showSuccess("Cliente cadastrado com sucesso!");
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <UserPlus size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Novo Cliente</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Cadastre informações pessoais e de localização do cliente.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-8 space-y-8">
            <div className="space-y-5">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <User size={12} className="text-blue-500" /> Identificação
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nome Completo</Label>
                  <Input {...register("name")} placeholder="Ex: João Silva" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">E-mail</Label>
                  <Input {...register("email")} type="email" placeholder="cliente@email.com" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Telefone</Label>
                  <Input {...register("phone")} placeholder="(00) 00000-0000" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <MapPin size={12} className="text-slate-400" /> Localização
              </p>
              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-3 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Cidade</Label>
                  <Input {...register("city")} placeholder="Sua Cidade" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">UF</Label>
                  <Input {...register("state")} placeholder="SP" maxLength={2} className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg uppercase text-center" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Cancelar
            </Button>
            <Button type="submit" disabled={!isValid} className="h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg">
              Salvar Registro
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;