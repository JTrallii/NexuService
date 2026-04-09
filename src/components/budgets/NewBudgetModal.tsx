"use client";

import { useState, useContext, useEffect } from "react";
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
import { 
  FileText, 
  DollarSign, 
  Calendar, 
  User, 
  ClipboardCheck, 
  MapPin,
  Wrench,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { RoleContext } from "@/components/layout/DashboardLayout";
import { cn } from "@/lib/utils";

interface Budget {
  id?: string;
  client: string;
  address?: string;
  specialty: string;
  date: string;
  description: string;
  technician?: string;
  serviceType?: string;
value: string;
  status: "CRIADO" | "RESPONDIDO" | "ACEITO" | "RECUSADO";
}

interface NewBudgetModalProps {
  children?: React.ReactNode;
  budget?: Budget;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onUpdate?: (updatedBudget: Budget) => void;
}

const serviceTypesBySpecialty: Record<string, string[]> = {
  "Elétrica": ["Troca de Disjuntor", "Instalação de Quadro", "Reparo de Fiação"],
  "Hidráulica": ["Reparo de Vazamento", "Instalação de Torneira", "Limpeza de Caixa d'água"],
  "Climatização": ["Manutenção Preventiva AC", "Carga de Gás", "Instalação Split"],
  "Infra de TI": ["Configuração de Rede", "Cabeamento Estruturado", "Montagem de Rack"],
};

const NewBudgetModal = ({ children, budget: initialBudget, open: externalOpen, onOpenChange: externalOnOpenChange, onUpdate }: NewBudgetModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange !== undefined ? externalOnOpenChange : setInternalOpen;

  const { role, user } = useContext(RoleContext);
  
  // Estado local do formulário
  const [formData, setFormData] = useState<Budget>(initialBudget || {
    client: user?.name || "",
    address: user?.address || "Endereço não cadastrado",
    specialty: "",
    date: "",
    description: "",
    status: "CRIADO",
    value: ""
  });

  useEffect(() => {
    if (initialBudget) {
      setFormData(initialBudget);
    } else if (user) {
      setFormData(prev => ({
        ...prev,
        client: user.name,
        address: user.address || "Endereço não cadastrado"
      }));
    }
  }, [initialBudget, user, open]);

  const isClient = role === "CLIENT";
  const isTech = role === "TECHNICIAN";
  const status = formData.status;

  // Regras de Readonly
  const isFieldReadonly = (fieldName: string) => {
    if (status === "ACEITO" || status === "RECUSADO") return true;
    if (status === "RESPONDIDO" && isClient) return true;
    if (status === "CRIADO" && isTech) {
      return ["specialty", "date", "description"].includes(fieldName);
    }
    return false;
  };

  const handleAction = (newStatus?: Budget["status"]) => {
    let updatedBudget = { ...formData };

    if (isClient && status === "CRIADO") {
      showSuccess("Solicitação de orçamento enviada!");
    } else if (isTech && status === "CRIADO") {
      updatedBudget.status = "RESPONDIDO";
      updatedBudget.technician = user.name;
      showSuccess("Resposta do orçamento salva!");
    } else if (isClient && status === "RESPONDIDO" && newStatus) {
      updatedBudget.status = newStatus;
      if (newStatus === "ACEITO") {
        showSuccess("Orçamento aceito! Ordem de Serviço gerada automaticamente.");
        // Aqui simulamos a criação da OS
      } else {
        showSuccess("Orçamento recusado.");
      }
    }

    if (onUpdate) onUpdate(updatedBudget);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[700px] w-[95vw] max-h-[90vh] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl flex flex-col">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <FileText size={18} />
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl font-bold text-slate-900">
                {status === "CRIADO" && isClient ? "Solicitar Orçamento" : "Detalhes do Orçamento"}
              </DialogTitle>
              <DialogDescription className="text-[10px] md:text-xs font-medium text-slate-500">
                Status: <span className="font-bold text-blue-600">{status}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form className="overflow-y-auto flex-1 no-scrollbar">
          <div className="p-4 md:p-8 space-y-6">
            {/* Dados do Cliente (Readonly sempre) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <User size={12} className="text-slate-400" /> Cliente
                </Label>
                <Input value={formData.client} disabled className="h-10 bg-slate-50 border-slate-200 rounded-lg text-xs" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <MapPin size={12} className="text-slate-400" /> Endereço
                </Label>
                <Input value={formData.address} disabled className="h-10 bg-slate-50 border-slate-200 rounded-lg text-xs" />
              </div>
            </div>

            {/* Especialidade e Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <Wrench size={12} className="text-blue-500" /> Especialidade
                </Label>
                <Select 
                  disabled={isFieldReadonly("specialty")}
                  value={formData.specialty}
                  onValueChange={(v) => setFormData({...formData, specialty: v, serviceType: ""})}
                >
                  <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(serviceTypesBySpecialty).map(s => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                  <Calendar size={12} className="text-blue-500" /> Data do Serviço
                </Label>
                <Input 
                  type="date" 
                  readOnly={isFieldReadonly("date")}
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="h-10 border-slate-200 rounded-lg text-xs" 
                />
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Descrição do Serviço</Label>
              <Textarea 
                readOnly={isFieldReadonly("description")}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Descreva o que você precisa..." 
                className="min-h-[80px] border-slate-200 rounded-lg resize-none text-xs" 
              />
            </div>

            {/* Campos do Técnico (Visíveis apenas se status != CRIADO ou se for Técnico respondendo) */}
            {(status !== "CRIADO" || isTech) && (
              <div className="pt-4 border-t border-slate-100 space-y-6">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Resposta Técnica</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Técnico Responsável</Label>
                    <Input 
                      value={isTech && status === "CRIADO" ? user.name : formData.technician || ""} 
                      disabled 
                      className="h-10 bg-slate-50 border-slate-200 rounded-lg text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Tipo de Serviço</Label>
                    <Select 
                      disabled={isFieldReadonly("serviceType") || !formData.specialty}
                      value={formData.serviceType}
                      onValueChange={(v) => setFormData({...formData, serviceType: v})}
                    >
                      <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                        <SelectValue placeholder="Selecione o tipo..." />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.specialty && serviceTypesBySpecialty[formData.specialty]?.map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                      <DollarSign size={12} className="text-emerald-600" /> Valor Estimado
                    </Label>
                    <Input 
                      readOnly={isFieldReadonly("value")}
                      value={formData.value}
                      onChange={(e) => setFormData({...formData, value: e.target.value})}
                      placeholder="R$ 0,00" 
                      className="h-10 border-slate-200 rounded-lg text-xs" 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 gap-2 flex-col sm:flex-row shrink-0">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6 w-full sm:w-auto">
              Fechar
            </Button>

            {/* Ações Dinâmicas */}
            {isClient && status === "CRIADO" && (
              <Button onClick={() => handleAction()} className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto">
                Enviar Orçamento
              </Button>
            )}

            {isTech && status === "CRIADO" && (
              <Button onClick={() => handleAction()} className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto">
                Salvar Resposta
              </Button>
            )}

            {isClient && status === "RESPONDIDO" && (
              <>
                <Button onClick={() => handleAction("RECUSADO")} variant="outline" className="h-10 px-6 border-rose-200 text-rose-600 hover:bg-rose-50 font-bold text-xs rounded-lg w-full sm:w-auto gap-2">
                  <XCircle size={16} /> Recusar
                </Button>
                <Button onClick={() => handleAction("ACEITO")} className="h-10 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto gap-2">
                  <CheckCircle2 size={16} /> Aceitar Orçamento
                </Button>
              </>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewBudgetModal;