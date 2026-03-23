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
import { UserPlus, Mail, Phone, User, CreditCard, MapPin, Hash } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

// Esquema de validação com Zod
const clientSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (000.000.000-00)"),
  phone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido ((00) 00000-0000)"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido (00000-000)"),
  street: z.string().min(1, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().length(2, "UF deve ter 2 caracteres"),
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
    setValue,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    mode: "onChange",
  });

  // Funções de máscara
  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const maskCEP = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };

  const onSubmit = (data: ClientFormData) => {
    console.log("Novo cliente:", data);
    showSuccess("Cliente cadastrado com sucesso!");
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#0F172A] border-white/10 text-white rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl custom-scrollbar">
        <DialogHeader className="mb-8">
          <div className="w-12 h-12 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20">
            <UserPlus size={24} />
          </div>
          <DialogTitle className="text-2xl font-black tracking-tight">Novo Cliente</DialogTitle>
          <DialogDescription className="text-[#9CA3AF] font-medium">
            Preencha os dados pessoais e de endereço para o novo registro.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Seção 1: Dados Pessoais */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <User size={16} className="text-[#6366F1]" />
              <h3 className="text-xs font-black uppercase tracking-widest text-white">Dados Pessoais</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Nome Completo</Label>
                <Input 
                  {...register("name")}
                  placeholder="Ex: João Silva" 
                  className={cn(
                    "bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]",
                    errors.name && "border-rose-500/50 focus-visible:ring-rose-500"
                  )}
                />
                {errors.name && <p className="text-[10px] text-rose-400 font-bold ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">E-mail Corporativo</Label>
                <Input 
                  {...register("email")}
                  type="email"
                  placeholder="email@exemplo.com" 
                  className={cn(
                    "bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]",
                    errors.email && "border-rose-500/50 focus-visible:ring-rose-500"
                  )}
                />
                {errors.email && <p className="text-[10px] text-rose-400 font-bold ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">CPF</Label>
                <Input 
                  {...register("cpf")}
                  placeholder="000.000.000-00" 
                  onChange={(e) => setValue("cpf", maskCPF(e.target.value), { shouldValidate: true })}
                  className={cn(
                    "bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]",
                    errors.cpf && "border-rose-500/50 focus-visible:ring-rose-500"
                  )}
                />
                {errors.cpf && <p className="text-[10px] text-rose-400 font-bold ml-1">{errors.cpf.message}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Telefone / WhatsApp</Label>
                <Input 
                  {...register("phone")}
                  placeholder="(00) 00000-0000" 
                  onChange={(e) => setValue("phone", maskPhone(e.target.value), { shouldValidate: true })}
                  className={cn(
                    "bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]",
                    errors.phone && "border-rose-500/50 focus-visible:ring-rose-500"
                  )}
                />
                {errors.phone && <p className="text-[10px] text-rose-400 font-bold ml-1">{errors.phone.message}</p>}
              </div>
            </div>
          </div>

          {/* Seção 2: Endereço */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <MapPin size={16} className="text-[#22D3EE]" />
              <h3 className="text-xs font-black uppercase tracking-widest text-white">Endereço de Faturamento</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
              <div className="md:col-span-2 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">CEP</Label>
                <Input 
                  {...register("cep")}
                  placeholder="00000-000" 
                  onChange={(e) => setValue("cep", maskCEP(e.target.value), { shouldValidate: true })}
                  className={cn(
                    "bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]",
                    errors.cep && "border-rose-500/50 focus-visible:ring-rose-500"
                  )}
                />
              </div>

              <div className="md:col-span-4 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Logradouro / Rua</Label>
                <Input 
                  {...register("street")}
                  placeholder="Rua, Avenida..." 
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Número</Label>
                <Input 
                  {...register("number")}
                  placeholder="123" 
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
                />
              </div>

              <div className="md:col-span-4 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Complemento</Label>
                <Input 
                  {...register("complement")}
                  placeholder="Apto, Bloco, Sala..." 
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Bairro</Label>
                <Input 
                  {...register("neighborhood")}
                  placeholder="Bairro" 
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
                />
              </div>

              <div className="md:col-span-3 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Cidade</Label>
                <Input 
                  {...register("city")}
                  placeholder="Sua Cidade" 
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]"
                />
              </div>

              <div className="md:col-span-1 space-y-2">
                <Label className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">UF</Label>
                <Input 
                  {...register("state")}
                  placeholder="SP" 
                  maxLength={2}
                  className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1] uppercase text-center"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="pt-8 border-t border-white/5">
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
              disabled={!isValid}
              className={cn(
                "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-8 shadow-lg shadow-indigo-500/20 border-none transition-all",
                !isValid && "opacity-50 grayscale cursor-not-allowed"
              )}
            >
              Finalizar Cadastro
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModal;