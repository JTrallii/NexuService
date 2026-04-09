"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Wrench, 
  Calendar, 
  FileText, 
  Clock, 
  MapPin,
  Send
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

const RequestService = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const services = [
    { id: "1", name: "Manutenção Preventiva AC" },
    { id: "2", name: "Instalação de Quadro Elétrico" },
    { id: "3", name: "Reparo de Vazamento" },
    { id: "4", name: "Configuração de Rede" },
    { id: "5", name: "Consultoria Técnica" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      showSuccess("Solicitação enviada com sucesso! Analisaremos e entraremos em contato.");
      navigate("/ordens");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Solicitar Novo Serviço</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Preencha os detalhes abaixo para que possamos agendar seu atendimento técnico.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm overflow-hidden">
        <CardHeader className="bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm">
              <Wrench size={20} />
            </div>
            <div>
              <CardTitle className="text-lg">Formulário de Solicitação</CardTitle>
              <CardDescription className="text-xs">Nossa equipe técnica avaliará seu pedido em breve.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Wrench size={14} className="text-blue-500" /> Tipo de Serviço *
                </Label>
                <Select required>
                  <SelectTrigger className="h-11 border-slate-200 rounded-lg text-sm">
                    <SelectValue placeholder="Selecione o serviço..." />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Calendar size={14} className="text-blue-500" /> Data Preferencial *
                </Label>
                <Input 
                  type="date" 
                  required 
                  min={new Date().toISOString().split('T')[0]}
                  className="h-11 border-slate-200 rounded-lg text-sm" 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Clock size={14} className="text-blue-500" /> Período de Preferência
                </Label>
                <Select defaultValue="manha">
                  <SelectTrigger className="h-11 border-slate-200 rounded-lg text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manha">Manhã (08:00 - 12:00)</SelectItem>
                    <SelectItem value="tarde">Tarde (13:00 - 18:00)</SelectItem>
                    <SelectItem value="noite">Noite (Emergencial)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <MapPin size={14} className="text-blue-500" /> Local do Serviço
                </Label>
                <Input 
                  placeholder="Ex: Escritório Central / Sala 202" 
                  className="h-11 border-slate-200 rounded-lg text-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-blue-500" /> Descrição do Problema / Necessidade *
              </Label>
              <Textarea 
                placeholder="Descreva detalhadamente o que está acontecendo ou o que você precisa..." 
                required 
                className="min-h-[120px] border-slate-200 rounded-lg text-sm resize-none" 
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => navigate("/ordens")}
                className="flex-1 h-12 font-bold text-slate-500"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={loading}
                className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20 gap-2"
              >
                {loading ? "Enviando..." : (
                  <>
                    <Send size={18} /> Enviar Solicitação
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestService;