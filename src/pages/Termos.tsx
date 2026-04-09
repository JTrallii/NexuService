"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import { ArrowLeft, Scale, Gavel, AlertCircle, CheckCircle2 } from "lucide-react";

const Termos = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors h-9 px-4 gap-2">
              <ArrowLeft size={16} /> Voltar
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest">
              Contrato de Serviço
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">Termos de Uso</h1>
            <p className="text-slate-500 font-medium">Vigente desde: 01 de Janeiro de 2024</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Scale size={20} className="text-blue-600" /> 1. Aceitação dos Termos
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Ao acessar a plataforma Operon ou contratar nossos serviços técnicos, você concorda em cumprir estes termos, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Gavel size={20} className="text-blue-600" /> 2. Prestação de Serviços
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                A Operon compromete-se a realizar os serviços técnicos conforme descrito nas Ordens de Serviço (OS) aprovadas. Prazos e valores são estimativas baseadas no escopo inicial e podem sofrer alterações mediante aviso prévio e aprovação do cliente.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 font-bold">Garantia: Todos os nossos serviços possuem garantia legal de 90 dias para mão de obra.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle size={20} className="text-blue-600" /> 3. Responsabilidades do Cliente
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                O cliente deve garantir o acesso seguro dos técnicos ao local de trabalho no horário agendado. A falta de acesso ou condições inseguras de trabalho podem resultar em taxas de reagendamento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Scale size={20} className="text-blue-600" /> 4. Pagamentos e Cancelamentos
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Os pagamentos devem ser realizados conforme as condições estabelecidas no orçamento. Cancelamentos de visitas técnicas devem ser feitos com no mínimo 24 horas de antecedência para evitar cobrança de taxa de deslocamento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Scale size={20} className="text-blue-600" /> 5. Limitação de Responsabilidade
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                A Operon não se responsabiliza por danos pré-existentes em equipamentos ou infraestruturas que não foram objeto direto da manutenção contratada, nem por lucros cessantes decorrentes de paradas programadas.
              </p>
            </section>
          </div>

          <div className="pt-10 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Para questões jurídicas: <span className="text-blue-600 font-bold">juridico@operon.com</span>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} Operon Soluções Técnicas Ltda.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Termos;