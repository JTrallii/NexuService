"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Lock, Fingerprint, CheckCircle2 } from "lucide-react";

const Seguranca = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-6 lg:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-12 text-[#9CA3AF] hover:text-white hover:bg-white/5 gap-2 rounded-xl">
            <ArrowLeft size={18} /> Voltar para Home
          </Button>
        </Link>

        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8">
          <Shield size={20} fill="currentColor" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Recurso: Segurança</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
          Sua paz de espírito <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">é inegociável.</span>
        </h1>

        <p className="text-xl text-[#9CA3AF] mb-16 leading-relaxed max-w-2xl font-medium">
          Seus dados e os de seus clientes são o seu maior ativo. Utilizamos tecnologia de nível bancário para garantir que tudo permaneça sob seu controle total.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Lock, title: "Criptografia Ponta-a-Ponta", desc: "Dados protegidos com AES-256 durante o armazenamento e trânsito." },
            { icon: Fingerprint, title: "Privacidade GDPR", desc: "Conformidade total com as leis de proteção de dados mais rígidas do mundo." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] backdrop-blur-md">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">Camadas de Proteção</h3>
          {[
            "Backups automáticos a cada 60 minutos",
            "Autenticação de dois fatores (2FA)",
            "Auditoria de logs de acesso detalhada",
            "Infraestrutura hospedada em servidores Tier IV"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-[#E5E7EB]">
              <CheckCircle2 size={18} className="text-emerald-400" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seguranca;