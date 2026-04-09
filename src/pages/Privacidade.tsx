"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import { ArrowLeft, ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

const Privacidade = () => {
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
              Segurança de Dados
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900">Política de Privacidade</h1>
            <p className="text-slate-500 font-medium">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Criptografia", desc: "Dados protegidos de ponta a ponta." },
              { icon: EyeOff, title: "Privacidade", desc: "Seus dados nunca são vendidos." },
              { icon: ShieldCheck, title: "Conformidade", desc: "Totalmente alinhado à LGPD." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <item.icon size={24} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> 1. Coleta de Informações
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                A Operon Soluções Técnicas coleta informações necessárias para a prestação de serviços de manutenção e infraestrutura. Isso inclui dados de contato, endereço de atendimento e detalhes técnicos dos ativos sob nossa responsabilidade.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> 2. Uso dos Dados
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Utilizamos seus dados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 text-slate-600 font-medium space-y-2">
                <li>Agendamento e execução de visitas técnicas;</li>
                <li>Emissão de orçamentos e notas fiscais;</li>
                <li>Comunicação sobre o status de ordens de serviço;</li>
                <li>Melhoria contínua de nossos processos operacionais.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> 3. Compartilhamento
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Não compartilhamos informações pessoais com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou para a execução de serviços específicos solicitados pelo cliente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> 4. Seus Direitos
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Em conformidade com a LGPD, você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento através do nosso portal de configurações ou entrando em contato com nosso DPO.
              </p>
            </section>
          </div>

          <div className="pt-10 border-t border-slate-100">
            <p className="text-sm text-slate-500 font-medium text-center">
              Dúvidas sobre nossa política? Entre em contato: <span className="text-blue-600 font-bold">privacidade@operon.com</span>
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

export default Privacidade;