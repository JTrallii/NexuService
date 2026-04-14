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
import { UserPlus, MapPin, User, Phone, Mail, FileText, Edit2, Info } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface Client {
  id?: number;
  name: string;
  email: string;
  phone: string;
  status?: string;
  cpf?: string;
  cep?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  notes?: string;
}

interface ClientModalProps {
  children?: React.ReactNode;
  client?: Client;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ClientModal = ({ children, client, open: externalOpen, onOpenChange: externalOnOpenChange }: ClientModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange !== undefined ? externalOnOpenChange : setInternalOpen;

  const isEditing = !!client;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess(isEditing ? "Cadastro do cliente atualizado!" : "Cliente cadastrado com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[700px] w-[95vw] max-h-[90vh] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl flex flex-col">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              {isEditing ? <Edit2 size={18} /> : <UserPlus size={18} />}
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl font-bold text-slate-900">
                {isEditing ? "Editar Cliente" : "Novo Cliente"}
              </DialogTitle>
              <DialogDescription className="text-[10px] md:text-xs font-medium text-slate-500">
                {isEditing ? "Atualize os dados do cliente." : "Cadastre um novo cliente no sistema."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 no-scrollbar">
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">
            {/* Seção: Identificação */}
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <User size={12} className="text-blue-500" /> Identificação
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nome Completo *</Label>
                  <Input defaultValue={client?.name} placeholder="Ex: João da Silva" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">E-mail *</Label>
                  <Input defaultValue={client?.email} type="email" placeholder="cliente@email.com" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Telefone *</Label>
                  <Input defaultValue={client?.phone} placeholder="(00) 00000-0000" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
              </div>
            </div>

            {/* Seção: Endereço */}
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <MapPin size={12} className="text-blue-500" /> Endereço
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">CEP</Label>
                  <Input defaultValue={client?.cep} placeholder="01001-000" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-2 sm:col-span-3 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Logradouro / Rua</Label>
                  <Input defaultValue={client?.address} placeholder="Praça da Sé" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-1 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Número</Label>
                  <Input defaultValue={client?.number} placeholder="1" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-2 sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Complemento</Label>
                  <Input defaultValue={client?.complement} placeholder="Apto, Sala, Bloco..." className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-2 sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Bairro</Label>
                  <Input defaultValue={client?.neighborhood} placeholder="Sé" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-1 sm:col-span-1 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Cidade</Label>
                  <Input defaultValue={client?.city} placeholder="São Paulo" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="col-span-1 sm:col-span-1 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">UF</Label>
                  <Input defaultValue={client?.state} placeholder="SP" maxLength={2} className="h-10 border-slate-200 rounded-lg text-xs uppercase" />
                </div>
              </div>
            </div>

            {/* Seção: Informações Extras */}
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Info size={12} className="text-blue-500" /> Informações Extras
              </p>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Observações do Cliente</Label>
                <Textarea 
                  defaultValue={client?.notes}
                  placeholder="Detalhes importantes, referências de localização ou histórico..." 
                  className="min-h-[100px] border-slate-200 rounded-lg resize-none text-xs" 
                />
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 gap-2 flex-col sm:flex-row shrink-0">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6 w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto">
              Salvar Alterações
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;