"use client";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wrench, ArrowRight, Github } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Wrench size={24} />
            </div>
            <span className="font-bold text-3xl text-white tracking-tight">ServiceFlow</span>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">Bem-vindo de volta</h1>
          <p className="text-[#9CA3AF] mt-2">Acesse sua conta para gerenciar seus serviços</p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#E5E7EB] ml-1">E-mail corporativo</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@exemplo.com" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <Label htmlFor="password" name="password" className="text-sm font-medium text-[#E5E7EB]">Senha de acesso</Label>
                <a href="#" className="text-xs text-[#22D3EE] hover:underline font-medium">Esqueceu a senha?</a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
              />
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-white font-bold h-12 rounded-xl border-none transition-all group">
              Entrar no sistema <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0B0F1A]/50 px-2 text-[#9CA3AF] tracking-widest">Ou continue com</span>
            </div>
          </div>

          <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-12 rounded-xl flex items-center justify-center gap-2">
            <Github size={18} /> GitHub
          </Button>
        </div>

        <div className="mt-10 text-center text-sm">
          <span className="text-[#9CA3AF]">Ainda não tem acesso?</span>{" "}
          <Link to="/register" className="text-[#22D3EE] font-bold hover:underline">
            Cadastre-se gratuitamente
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;