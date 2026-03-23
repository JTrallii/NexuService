import { User, Bell, Shield, CreditCard, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Configurações</h1>
        <p className="text-slate-500 text-sm">Gerencie sua conta e preferências do sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-indigo-50 text-indigo-700">
            <User size={18} /> Perfil
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600">
            <Bell size={18} /> Notificações
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600">
            <Shield size={18} /> Segurança
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-600">
            <CreditCard size={18} /> Assinatura
          </Button>
        </aside>

        <div className="md:col-span-3 space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Informações do Perfil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-400">
                  <User size={32} />
                </div>
                <Button variant="outline" size="sm">Alterar Foto</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" defaultValue="admin@serviceflow.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" defaultValue="ServiceFlow Ltda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm border-red-100">
            <CardHeader>
              <CardTitle className="text-lg text-red-600">Zona de Perigo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">Uma vez que você deletar sua conta, não há volta. Por favor, tenha certeza.</p>
              <Button variant="destructive">Deletar minha conta</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;