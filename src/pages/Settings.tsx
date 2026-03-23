"use client";

import { User, Bell, Shield, CreditCard, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Settings = () => {
  const sections = [
    { icon: User, label: "Perfil", active: true },
    { icon: Bell, label: "Notificações", active: false },
    { icon: Shield, label: "Segurança", active: false },
    { icon: CreditCard, label: "Assinatura", active: false },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight mb-1">Configurações</h1>
        <p className="text-[#9CA3AF] text-sm font-medium">Gerencie sua conta e preferências do sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside className="md:col-span-1 space-y-2">
          {sections.map((item) => (
            <Button 
              key={item.label}
              variant="ghost" 
              className={cn(
                "w-full justify-start gap-4 h-12 rounded-xl text-sm font-bold transition-all",
                item.active 
                  ? "bg-white/5 text-[#22D3EE] border border-white/5" 
                  : "text-[#9CA3AF] hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={18} /> {item.label}
            </Button>
          ))}
        </aside>

        <div className="md:col-span-3 space-y-8">
          <Card className="bg-white/[0.03] border-white/5 backdrop-blur-md rounded-[2rem] overflow-hidden">
            <CardHeader className="p-8 border-b border-white/5">
              <CardTitle className="text-xl font-bold text-white tracking-tight">Informações do Perfil</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-3xl font-black shadow-xl">
                    AD
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl text-[#0B0F1A] shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Foto do Perfil</h4>
                  <p className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest mb-3">JPG ou PNG. Max 2MB.</p>
                  <Button variant="outline" size="sm" className="rounded-xl border-white/10 text-white hover:bg-white/5 h-9 text-xs px-4">
                    Alterar Foto
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Nome Completo</Label>
                  <Input id="name" defaultValue="Admin User" className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">E-mail</Label>
                  <Input id="email" defaultValue="admin@serviceflow.com" className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Empresa</Label>
                  <Input id="company" defaultValue="ServiceFlow Enterprise" className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest ml-1">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" className="bg-white/5 border-white/10 rounded-xl text-white h-12 focus-visible:ring-[#6366F1]" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-8 shadow-lg shadow-indigo-500/20 border-none transition-all">
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-rose-500/5 border-rose-500/20 rounded-[2rem] overflow-hidden">
            <CardHeader className="p-8">
              <CardTitle className="text-lg font-bold text-rose-400 tracking-tight">Zona Crítica</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-sm text-[#9CA3AF] mb-6">Uma vez que você deletar sua conta, todos os dados serão permanentemente removidos. Esta ação não pode ser desfeita.</p>
              <Button variant="ghost" className="text-rose-400 hover:bg-rose-500/10 hover:text-rose-400 rounded-xl h-12 px-6 font-bold text-xs uppercase tracking-widest border border-rose-500/20">
                Deletar minha conta permanentemente
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;