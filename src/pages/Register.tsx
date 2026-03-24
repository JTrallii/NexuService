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
    navigate("/painel-principal");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 py-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Wrench size={20} />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">NexuService</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Criar nova conta</h1>
          <p className="text-slate-500 text-sm font-medium mt-1">Comece a gerenciar seus serviços hoje</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome completo</Label>
              <Input required className="h-11 border-slate-200 rounded-lg focus-visible:ring-blue-500" placeholder="Ex: João Silva" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail profissional</Label>
              <Input type="email" required className="h-11 border-slate-200 rounded-lg focus-visible:ring-blue-500" placeholder="joao@empresa.com" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Senha de acesso</Label>
              <Input type="password" required className="h-11 border-slate-200 rounded-lg focus-visible:ring-blue-500" placeholder="Mínimo 8 caracteres" />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <input type="checkbox" id="terms" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
              <label htmlFor="terms" className="text-[11px] text-slate-500 font-medium leading-tight">
                Aceito os <a href="#" className="text-blue-600 font-bold hover:underline">Termos de Serviço</a> e as diretrizes de privacidade do sistema.
              </label>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-lg mt-4 transition-all">
              Concluir Cadastro
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm">
          <span className="text-slate-500 font-medium">Já possui acesso?</span>{" "}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;