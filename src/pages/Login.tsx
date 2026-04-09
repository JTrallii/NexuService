"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/layout/Logo";
import { ArrowRight } from "lucide-react";
import { showError } from "@/utils/toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock de usuários
    const users = [
      { email: "admin@gmail.com", password: "123456", role: "ADMIN", name: "Admin Master" },
      { email: "carlos@gmail.com", password: "123456", role: "CLIENT", name: "Carlos Eduardo" },
      { email: "ricardo@gmail.com", password: "123456", role: "TECHNICIAN", name: "Ricardo Silva" },
    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/painel-principal");
    } else {
      showError("Credenciais inválidas. Tente admin@gmail.com / 123456");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex mb-8">
            <Logo textSize="text-2xl" iconSize={20} />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Bem-vindo de volta</h1>
          <p className="text-slate-500 text-sm font-medium mt-1">Acesse sua conta operacional</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail de acesso</Label>
              <Input 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="h-11 border-slate-200 rounded-lg focus-visible:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Senha</Label>
                <a href="#" className="text-[10px] text-blue-600 hover:underline font-bold uppercase tracking-widest">Esqueceu?</a>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="h-11 border-slate-200 rounded-lg focus-visible:ring-blue-500"
              />
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-lg transition-all group">
              Entrar no sistema <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-[10px] text-blue-700 font-bold uppercase tracking-wider space-y-1">
            <p>Admin: admin@gmail.com / 123456</p>
            <p>Cliente: carlos@gmail.com / 123456</p>
            <p>Técnico: ricardo@gmail.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;