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
  SelectValue 
} from "@/components/ui/select";
import { UserPlus, Briefcase, Award, Edit2, MapPin, ShieldCheck, FileText } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface Technician {
  id?: number;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  level: string;
  status: string;
  cpf?: string;
  area?: string;
}

interface TechnicianModalProps {
  children?: React.ReactNode;
  technician?: Technician;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const TechnicianModal = ({ children, technician, open: externalOpen, onOpenChange: externalOnOpenChange }: TechnicianModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange !== undefined ? externalOnOpenChange : setInternalOpen;

  const isEditing = !!technician;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess(isEditing ? "Alterações salvas!" : "Técnico cadastrado!");
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
                {isEditing ? "Editar Técnico" : "Novo Técnico"}
              </DialogTitle>
              <DialogDescription className="text-[10px] md:text-xs font-medium text-slate-500">
                Gestão de equipe técnica e especialidades.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 no-scrollbar">
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">
            {/* Seção: Identificação */}
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Briefcase size={12} className="text-blue-500" /> Identificação e Contato
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nome Completo *</Label>
                  <Input defaultValue={technician?.name} placeholder="Ex: Ricardo Silva" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">E-mail *</Label>
                  <Input defaultValue={technician?.email} type="email" placeholder="ricardo@empresa.com" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Telefone *</Label>
                  <Input defaultValue={technician?.phone} placeholder="(00) 00000-0000" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <FileText size={12} className="text-slate-400" /> CNPJ *
                  </Label>
                  <Input 
                    defaultValue={technician?.cpf} 
                    placeholder="00.000.000/0000-00" 
                    required 
                    pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}"
                    title="Digite um CNPJ válido: 00.000.000/0000-00"
                    className="h-10 border-slate-200 rounded-lg text-xs" 
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <ShieldCheck size={12} className="text-slate-400" /> Status
                  </Label>
                  <Select defaultValue={technician?.status || "Ativo"}>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ativo">Ativo</SelectItem>
                      <SelectItem value="Inativo">Inativo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Seção: Perfil Profissional */}
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Award size={12} className="text-blue-500" /> Perfil Profissional
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Especialidade *</Label>
                  <Select defaultValue={technician?.specialty?.toLowerCase()}>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elétrica">Elétrica</SelectItem>
                      <SelectItem value="climatização">Climatização</SelectItem>
                      <SelectItem value="infra de ti">Infra de TI</SelectItem>
                      <SelectItem value="obras civis">Obras Civis</SelectItem>
                      <SelectItem value="segurança eletrônica">Segurança Eletrônica</SelectItem>
                      <SelectItem value="hidráulica">Hidráulica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nível</Label>
                  <Select defaultValue={technician?.level?.toUpperCase() || "PLENO"}>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="JUNIOR">Júnior</SelectItem>
                      <SelectItem value="PLENO">Pleno</SelectItem>
                      <SelectItem value="SÊNIOR">Sênior</SelectItem>
                      <SelectItem value="ESPECIALISTA">Especialista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <MapPin size={12} className="text-slate-400" /> Área de Atuação
                  </Label>
                  <Input defaultValue={technician?.area} placeholder="Ex: São Paulo - Capital e ABCD" className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 gap-2 flex-col sm:flex-row shrink-0">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6 w-full sm:w-auto">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto">
              {isEditing ? "Salvar Alterações" : "Concluir Cadastro"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TechnicianModal;