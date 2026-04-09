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
  SelectValue,
} from "@/components/ui/select";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ClipboardList, FileText, Clock, Check, ChevronsUpDown, User } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

interface NewServiceModalProps {
  children: React.ReactNode;
}

const serviceTypes = [
  { label: "Manutenção Preventiva AC", value: "manutencao-ac" },
  { label: "Instalação de Quadro Elétrico", value: "instalacao-quadro" },
  { label: "Reparo de Vazamento", value: "reparo-vazamento" },
  { label: "Configuração de Roteador", value: "config-roteador" },
  { label: "Troca de Disjuntor", value: "troca-disjuntor" },
];

const clients = [
  { label: "Carlos Eduardo", value: "carlos" },
  { label: "Mariana Souza", value: "mariana" },
  { label: "Roberto Lima", value: "roberto" },
  { label: "Ana Paula", value: "ana" },
  { label: "João Silva", value: "joao" },
  { label: "Beatriz Oliveira", value: "beatriz" },
  { label: "Fernando Costa", value: "fernando" },
];

const NewServiceModal = ({ children }: NewServiceModalProps) => {
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openClient, setOpenClient] = useState(false);
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedClient, setSelectedClient] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedClient) return;
    
    showSuccess("Ordem de serviço aberta e atribuída com sucesso!");
    setOpen(false);
    setSelectedService("");
    setSelectedClient("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] w-[95vw] max-h-[90vh] bg-white border-slate-200 rounded-xl p-0 overflow-hidden shadow-2xl flex flex-col">
        <DialogHeader className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ClipboardList size={18} />
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl font-bold text-slate-900">Nova Ordem de Serviço</DialogTitle>
              <DialogDescription className="text-[10px] md:text-xs font-medium text-slate-500">
                Abertura de chamado técnico.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 no-scrollbar">
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText size={12} className="text-blue-500" /> Detalhes da Operação
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Título do Serviço *</Label>
                  <Popover open={openService} onOpenChange={setOpenService}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openService}
                        className="w-full justify-between h-10 border-slate-200 rounded-lg text-xs font-normal"
                      >
                        {selectedService
                          ? serviceTypes.find((s) => s.value === selectedService)?.label
                          : "Selecione um serviço do catálogo..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[calc(100vw-40px)] sm:w-[686px] p-0">
                      <Command>
                        <CommandInput placeholder="Pesquisar serviço..." className="h-9 text-xs" />
                        <CommandList>
                          <CommandEmpty className="text-xs py-3 text-center text-slate-500">Nenhum serviço encontrado.</CommandEmpty>
                          <CommandGroup>
                            {serviceTypes.map((service) => (
                              <CommandItem
                                key={service.value}
                                value={service.value}
                                onSelect={(currentValue) => {
                                  setSelectedService(currentValue === selectedService ? "" : currentValue);
                                  setOpenService(false);
                                }}
                                className="text-xs"
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedService === service.value ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {service.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                    <User size={12} className="text-slate-400" /> Cliente *
                  </Label>
                  <Popover open={openClient} onOpenChange={setOpenClient}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openClient}
                        className="w-full justify-between h-10 border-slate-200 rounded-lg text-xs font-normal"
                      >
                        {selectedClient
                          ? clients.find((c) => c.value === selectedClient)?.label
                          : "Buscar cliente na base..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[calc(100vw-40px)] sm:w-[686px] p-0">
                      <Command>
                        <CommandInput placeholder="Pesquisar cliente..." className="h-9 text-xs" />
                        <CommandList>
                          <CommandEmpty className="text-xs py-3 text-center text-slate-500">Nenhum cliente encontrado.</CommandEmpty>
                          <CommandGroup>
                            {clients.map((client) => (
                              <CommandItem
                                key={client.value}
                                value={client.value}
                                onSelect={(currentValue) => {
                                  setSelectedClient(currentValue === selectedClient ? "" : currentValue);
                                  setOpenClient(false);
                                }}
                                className="text-xs"
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedClient === client.value ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {client.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock size={12} className="text-blue-500" /> Planejamento
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Técnico *</Label>
                  <Select required>
                    <SelectTrigger className="h-10 border-slate-200 rounded-lg text-xs">
                      <SelectValue placeholder="Atribuir para..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ricardo">Ricardo Silva</SelectItem>
                      <SelectItem value="andre">André Lucas</SelectItem>
                      <SelectItem value="paula">Paula Santos</SelectItem>
                      <SelectItem value="beatriz">Beatriz Souza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Data Prevista *</Label>
                  <Input type="date" required className="h-10 border-slate-200 rounded-lg text-xs" />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="bg-slate-50 border-t border-slate-200 p-4 md:p-6 gap-2 flex-col sm:flex-row shrink-0">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-10 text-slate-500 font-bold text-xs px-6 w-full sm:w-auto">
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={!selectedService || !selectedClient}
              className="h-10 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm w-full sm:w-auto disabled:opacity-50"
            >
              Abrir Ordem de Serviço
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewServiceModal;