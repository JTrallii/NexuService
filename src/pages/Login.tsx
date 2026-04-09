"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/layout/Logo";
import { ArrowLeft, Loader2 } from "lucide-react";
import { showError, showSuccess } from "@/utils/toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de login
    setTimeout(() => {
      const mockUser = {
        name: "Admin Master",
        email: "admin@operon.com",
        role: "ADMIN"
      };
      localStorage.setItem("user", JSON.stringify(mockUser));
      showSuccess("Bem-vindo à Operon!");
      navigate("/ordens");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para o Início
      </Link>

      <div className="w-full max-w-[400px] space-y-8">
        <div className="flex flex-col items-center text-center space-y-2">
          <Logo textSize="text-2xl" iconSize={24} />
          <p className="text-slate-500 font-medium text-sm">Acesse o portal de soluções técnicas</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</Label>
              <Input 
                type="email" 
                placeholder="exemplo@operon.com" 
                required 
                className="h-11 border-slate-200 focus-visible:ring-blue-500 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Senha</Label>
                <button type="button" className="text-[10px] font-bold text-blue-600 hover:underline">Esqueceu a senha?</button>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                required 
                className="h-11 border-slate-200 focus-visible:ring-blue-500 rounded-lg"
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/20"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Entrar no Sistema"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 font-medium">
          Ainda não tem acesso?{" "}
          <Link to="/register" className="text-blue-600 font-bold hover:underline">Solicitar Cadastro</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;