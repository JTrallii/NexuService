"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Lock, Fingerprint, CheckCircle2, ShieldCheck } from "lucide-react";

const Seguranca = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <Link to="/painel-principal">
            <Button variant="ghost" className="pl-0 text-slate-500 hover:text-blue-600 mb-4 h-auto p-0 font-bold text-xs gap-1.5">
              <ArrowLeft size={14} /> Voltar ao Painel
            </Button>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Recurso: Segurança de Dados</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Proteção de nível corporativo para seus ativos e dados de clientes.</p>
        </div>
        
        <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
          <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest flex items-center gap-2">
            <Shield size={14} fill="currentColor" /> Proteção: Nível Máximo
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-10 shadow-sm">
        <section className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Compromisso com a Privacidade</h3>
          <p className="text-slate-600 leading-relaxed font-medium">
            Seus dados e os de seus clientes são o seu maior ativo. O NexuService utiliza tecnologia de segurança de nível bancário para garantir que tudo permaneça sob seu controle total.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600 border border-slate-100">
              <Lock size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Criptografia AES-256</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Dados protegidos com criptografia de ponta a ponta durante o armazenamento e trânsito.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600 border border-slate-100">
              <Fingerprint size={20} />
            </div>
            <h4 className="font-bold text-slate-900">Conformidade LGPD</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Total conformidade com as leis de proteção de dados vigentes, garantindo privacidade e controle.
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Camadas de Proteção</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Backups automáticos a cada 60 minutos",
              "Autenticação de dois fatores (2FA)",
              "Auditoria de logs de acesso detalhada",
              "Servidores hospedados em infraestrutura Tier IV",
              "Monitoramento de ameaças 24/7",
              "Gestão de permissões por nível de acesso"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm font-bold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguranca;