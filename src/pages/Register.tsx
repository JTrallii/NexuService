"use client";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wrench, CheckCircle2 } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4 relative overflow-hidden py-20">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Info */}
        <div className="hidden lg:block space-y-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Wrench size={20} />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">ServiceFlow</span>
          </Link>
          
          <h2 className="text-5xl font-black text-white leading-tight">
            A revolução na sua <br />
            <span className="text-gradient">gestão de serviços.</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "Gestão de clientes simplificada",
              "Orçamentos profissionais em PDF",
              "Controle financeiro em tempo real",
              "Suporte prioritário 24/7"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-[#22D3EE]">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-[#E5E7EB] font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="w-full">
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Crie sua conta</h1>
              <p className="text-[#9CA3AF] text-sm">Comece a transformar seu negócio hoje mesmo.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-[#E5E7EB] ml-1">Nome completo</Label>
                <Input 
                  id="name" 
                  placeholder="Ex: João Silva" 
                  required 
                  className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-[#E5E7EB] ml-1">E-mail profissional</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="joao@empresa.com" 
                  required 
                  className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" name="password" className="text-sm font-medium text-[#E5E7EB] ml-1">Defina uma senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Mínimo 8 caracteres" 
                  required 
                  className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/30 focus-visible:ring-[#6366F1] h-12"
                />
              </div>

              <div className="flex items-center space-x-2 px-1 py-2">
                <input type="checkbox" id="terms" className="rounded border-white/10 bg-white/5 text-[#6366F1] focus:ring-[#6366F1]" required />
                <label htmlFor="terms" className="text-xs text-[#9CA3AF]">
                  Eu concordo com os <a href="#" className="text-[#22D3EE] hover:underline">Termos de Serviço</a> e <a href="#" className="text-[#22D3EE] hover:underline">Privacidade</a>.
                </label>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-white font-bold h-14 rounded-xl border-none transition-all mt-4">
                Finalizar Cadastro
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-[#9CA3AF]">Já possui conta?</span>{" "}
              <Link to="/login" className="text-[#22D3EE] font-bold hover:underline">
                Fazer login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;