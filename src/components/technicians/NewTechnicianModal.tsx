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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { UserPlus, MapPin, Briefcase, Phone, Mail, FileText, Award, Fingerprint } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface NewTechnicianModalProps {
  children: React.ReactNode;
}

const NewTechnicianModal = ({ children }: NewTechnicianModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Técnico cadastrado e disponível para escalas!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <UserPlus size={20} />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900">Novo Técnico</DialogTitle>
              <DialogDescription className="text-xs font-medium text-slate-500">
                Gestão de equipe: cadastre profissionais e suas competências técnicas.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto no-scrollbar">
          <div className="p-8 space-y-8">
            {/* Seção: Dados Pessoais */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Briefcase size={12} className="text-blue-500" /> Identificação e Contato
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nome Completo *</Label>
                  <Input placeholder="Ex: Ricardo Silva Oliveira" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">E-mail Profissional *</Label>
                  <Input type="email" placeholder="ricardo.silva@empresa.com" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Telefone / WhatsApp *</Label>
                  <Input placeholder="(00) 00000-0000" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <Fingerprint size={12} className="text-slate-400" /> CPF do Técnico *
                  </Label>
                  <Input placeholder="000.000.000-00" required className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Seção: Perfil Profissional */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Award size={12} className="text-blue-500" /> Perfil Profissional
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Especialidade Principal *</Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eletrica">Elétrica Predial/Industrial</SelectItem>
                      <SelectItem value="climatizacao">Climatização e Ar Condicionado</SelectItem>
                      <SelectItem value="ti">Infraestrutura de TI e Redes</SelectItem>
                      <SelectItem value="civil">Obras e Reformas Civis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Área de Atuação</Label>
                  <Input placeholder="Ex: Grande São Paulo, Interior" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Nível de Senioridade</Label>
                  <Select defaultValue="PLENO">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="JUNIOR">Técnico Júnior</SelectItem>
                      <SelectItem value="PLENO">Técnico Pleno</SelectItem>
                      <SelectItem value="SENIOR">Técnico Sênior</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Disponibilidade</Label>
                  <Select defaultValue="ATIVO">
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ATIVO">Ativo (Disponível)</SelectItem>
                      <SelectItem value="INATIVO">Inativo (Afastado)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Seção: Localização */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <MapPin size={12} className="text-blue-500" /> Endereço Residencial
              </p>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">CEP</Label>
                  <Input placeholder="00000-000" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="col-span-4 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Rua / Logradouro</Label>
                  <Input placeholder="Ex: Rua das Flores" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Número</Label>
                  <Input placeholder="123" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="col-span-4 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Bairro</Label>
                  <Input placeholder="Centro" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="col-span-4 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Cidade</Label>
                  <Input placeholder="São Paulo" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg" />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">UF</Label>
                  <Input placeholder="SP" maxLength={2} className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg uppercase text-center" />
                </div>
              </div>
            </div>

            {/* Seção: Observações */}
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText size={12} className="text-blue-500" /> Notas Técnicas
              </p>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Observações / Certificações</Label>
                <Textarea placeholder="Liste certificações (NR10, NR35) ou detalhes sobre a experiência..." className="min-h-[100px] border-slate-200 focus-visible:ring-blue-500 rounded-lg resize-none" />
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-6 gap-3">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6">
              Cancelar
            </Button>
            <Button type="submit" className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm">
              Concluir Cadastro
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTechnicianModal;