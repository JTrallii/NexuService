"use client";

import { useContext, useState } from "react";
import { Camera, Save, Trash2, User, MapPin, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";
import { RoleContext } from "@/components/layout/DashboardLayout";

const Configuracoes = () => {
  const { user, role } = useContext(RoleContext);
  const [loading, setLoading] = useState(false);
  
  // Estados locais para os campos de endereço
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    cep: user?.cep || "",
    address: user?.address || "",
    number: user?.number || "",
    neighborhood: user?.neighborhood || "",
    city: user?.city || "",
    state: user?.state || "SP"
  });

  const handleSave = () => {
    setLoading(true);
    
    // Simula o salvamento e atualiza o localStorage
    setTimeout(() => {
      const updatedUser = {
        ...user,
        ...formData,
        // Garante que a string 'address' principal exista para a validação simples
        address: formData.address || `${formData.city} - ${formData.state}`
      };
      
      localStorage.setItem("user", JSON.stringify(updatedUser));
      showSuccess("Configurações atualizadas! Recarregue a página para aplicar as mudanças.");
      setLoading(false);
      
      // Força um refresh para que o Contexto do DashboardLayout pegue os novos dados
      window.location.reload();
    }, 800);
  };

  const isClient = role === "CLIENT";

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          {isClient ? "Configurações da Conta" : "Configurações do Sistema"}
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Gerencie seu perfil e preferências de conta.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-200 bg-slate-50/30">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                {user?.name?.charAt(0) || "U"}
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm hover:text-blue-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-slate-900 font-bold text-lg">{user?.name || "Usuário"}</h4>
              <p className="text-xs text-slate-500 font-medium mb-3">{user?.email || "email@exemplo.com"}</p>
              <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider">
                Alterar Foto
              </Button>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-10">
          {/* Seção: Dados Pessoais */}
          <div className="space-y-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
              <User size={14} className="text-blue-500" /> Informações Pessoais
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</Label>
                <Input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  E-mail <span className="text-[9px] text-slate-400 font-normal">(Apenas leitura)</span>
                </Label>
                <Input value={user?.email} disabled className="h-10 bg-slate-50 border-slate-200 rounded-lg text-sm cursor-not-allowed" />
              </div>
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  CPF / CNPJ <span className="text-[9px] text-slate-400 font-normal">(Apenas leitura)</span>
                </Label>
                <Input value={user?.cpf || "123.456.789-00"} disabled className="h-10 bg-slate-50 border-slate-200 rounded-lg text-sm cursor-not-allowed" />
              </div>
              <div className="space-y-2">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefone de Contato</Label>
                <Input 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                />
              </div>
            </div>
          </div>

          {/* Seção: Endereço (Focada no Cliente) */}
          {isClient && (
            <div className="space-y-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2">
                <MapPin size={14} className="text-blue-500" /> Endereço de Atendimento
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">CEP</Label>
                  <Input 
                    value={formData.cep} 
                    onChange={(e) => setFormData({...formData, cep: e.target.value})}
                    className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Logradouro (Rua/Avenida)</Label>
                  <Input 
                    value={formData.address} 
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Número</Label>
                  <Input 
                    value={formData.number} 
                    onChange={(e) => setFormData({...formData, number: e.target.value})}
                    className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Bairro</Label>
                  <Input 
                    value={formData.neighborhood} 
                    onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                    className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Cidade</Label>
                  <Input 
                    value={formData.city} 
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" 
                  />
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
            <Button 
              onClick={handleSave} 
              disabled={loading}
              className="h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs gap-2 rounded-lg shadow-lg shadow-blue-500/20"
            >
              <Save size={16} /> {loading ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-rose-900 font-bold mb-1 flex items-center gap-2">
            <Trash2 size={16} /> Deletar Conta
          </h4>
          <p className="text-xs text-rose-700 font-medium max-w-md">Esta ação é permanente e removerá todos os seus dados do sistema.</p>
        </div>
        <Button variant="outline" className="h-10 px-6 border-rose-200 text-rose-600 hover:bg-rose-100 font-bold text-xs shrink-0">
          Deletar Permanentemente
        </Button>
      </div>
    </div>
  );
};

export default Configuracoes;