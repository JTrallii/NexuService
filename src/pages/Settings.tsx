"use client";

import { User, Bell, Shield, CreditCard, Camera, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

const Settings = () => {
  const handleSave = () => {
    showSuccess("Alterações salvas com sucesso!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Configurações da Conta</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Gerencie suas informações pessoais e preferências do sistema.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-200 bg-slate-50/30">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                AD
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-slate-200 rounded-lg text-slate-600 shadow-sm hover:text-blue-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-slate-900 font-bold text-lg">Admin Master</h4>
              <p className="text-xs text-slate-500 font-medium mb-3">admin@serviceflow.com</p>
              <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider">
                Alterar Foto
              </Button>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</Label>
              <Input defaultValue="Admin User" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" />
            </div>
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail Corporativo</Label>
              <Input defaultValue="admin@serviceflow.com" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" />
            </div>
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Empresa</Label>
              <Input defaultValue="NexuService Enterprise" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" />
            </div>
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefone</Label>
              <Input defaultValue="(11) 99999-9999" className="h-10 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-sm" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
            <Button variant="ghost" className="h-10 px-6 text-slate-500 font-bold text-xs">Descartar</Button>
            <Button onClick={handleSave} className="h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs gap-2 rounded-lg">
              <Save size={16} /> Salvar Alterações
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-rose-900 font-bold mb-1 flex items-center gap-2">
            <Trash2 size={16} /> Deletar Conta
          </h4>
          <p className="text-xs text-rose-700 font-medium max-w-md">Uma vez que você deletar sua conta, todos os dados serão permanentemente removidos. Esta ação não pode ser desfeita.</p>
        </div>
        <Button variant="outline" className="h-10 px-6 border-rose-200 text-rose-600 hover:bg-rose-100 font-bold text-xs shrink-0">
          Deletar Permanentemente
        </Button>
      </div>
    </div>
  );
};

export default Settings;