"use client";

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  MapPin,
  Send,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { RoleContext } from "@/components/layout/DashboardLayout";

const RequestService = () => {
  const navigate = useNavigate();
  const { user } = useContext(RoleContext);
  const [loading, setLoading] = useState(false);

  // Especialidades cadastradas no sistema
  const specialties = [
    { id: "1", name: "Elétrica" },
    { id: "2", name: "Hidráulica" },
    { id: "3", name: "Climatização" },
    { id: "4", name: "Infra de TI" },
    { id: "5", name: "Segurança Eletrônica" },
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

  // Validação robusta de endereço: verifica se existe a string principal ou os campos individuais
  const hasAddress = !!(user?.address || (user?.city && user?.neighborhood));

  if (!hasAddress) {
    return (
      <div className="max-w-2xl mx-auto pt-10 animate-in fade-in duration-500">
        <Card className="border-amber-200 bg-amber-50/50 shadow-sm">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900">Endereço não localizado</h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Você não pode solicitar um serviço enquanto não cadastrar seu endereço completo no sistema. 
                Precisamos saber onde o técnico deverá comparecer.
              </p>
            </div>
            <Link to="/configuracoes">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg gap-2 mt-4">
                Cadastrar Endereço Agora <ArrowRight size={16} />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <CardDescription className="text-xs">O serviço será realizado no seu endereço cadastrado.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Wrench size={14} className="text-blue-500" /> Especialidade *
                </Label>
                <Select required>
                  <SelectTrigger className="h-11 border-slate-200 rounded-lg text-sm">
                    <SelectValue placeholder="Selecione a especialidade..." />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name}
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
            </div>

            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl flex items-start gap-3">
              <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest mb-1">Local de Atendimento</p>
                <p className="text-xs font-bold text-slate-700">
                  {user?.address || `${user?.city} - ${user?.neighborhood}`}
                </p>
                <p className="text-[10px] text-slate-500 font-medium mt-1">O técnico utilizará o endereço salvo em seu perfil.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={14} className="text-blue-500" /> Descrição do Problema / Necessidade *
              </Label>
              <Textarea 
                placeholder="Descreva detalhadamente o que você precisa..." 
                required 
                className="min-h-[150px] border-slate-200 rounded-lg text-sm resize-none" 
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