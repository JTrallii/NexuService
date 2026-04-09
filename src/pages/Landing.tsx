"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import { ArrowRight, Shield, Zap, BarChart3, ChevronRight, Users, Wrench, CheckCircle2 } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Área do Cliente</Link>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-5 h-9 text-xs">
                Acessar Portal
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section Operon */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest">
            Excelência em Manutenção e Infraestrutura
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-slate-900">
            Sua infraestrutura em boas mãos com a <br />
            <span className="text-blue-600">Operon Soluções Técnicas.</span>
          </h1>
          
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Unimos tecnologia e mão de obra especializada para garantir que sua empresa ou residência nunca pare. De elétrica a TI, nossos especialistas resolvem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-sm rounded-xl font-bold shadow-xl shadow-blue-500/20">
                Solicitar Serviço <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="#servicos">
              <Button size="lg" variant="outline" className="px-10 h-14 text-sm rounded-xl font-bold border-slate-200 text-slate-600 hover:bg-slate-50">
                Nossas Especialidades
              </Button>
            </a>
          </div>

          <div className="pt-16 max-w-5xl mx-auto">
            <div className="p-4 bg-slate-100 rounded-[2rem] border border-slate-200">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2400&auto=format&fit=crop" 
                  alt="Técnico Operon em campo" 
                  className="w-full h-[500px] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-10">
                  <div className="text-left text-white">
                    <p className="text-xs font-black uppercase tracking-widest mb-2">Equipe Certificada</p>
                    <h3 className="text-2xl font-bold">Técnicos especialistas em cada área de atuação.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Operon */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Nossas Áreas de Atuação</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Oferecemos um ecossistema completo de serviços técnicos para atender todas as suas necessidades em um só lugar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: "Elétrica & Energia", desc: "Manutenção predial, industrial e instalação de quadros elétricos com técnicos NR10." },
              { icon: Shield, title: "Segurança Eletrônica", desc: "Monitoramento IP, controle de acesso e sistemas de alarme de última geração." },
              { icon: BarChart3, title: "Infraestrutura de TI", desc: "Cabeamento estruturado, redes mesh e manutenção crítica de servidores." },
              { icon: Wrench, title: "Climatização", desc: "Instalação e PMOC para sistemas de ar condicionado central e split." },
              { icon: Users, title: "Gestão de Facilties", desc: "Pintura, hidráulica e reformas civis com cronograma rigoroso de execução." },
              { icon: CheckCircle2, title: "Consultoria Técnica", desc: "Laudos, vistorias e projetos de engenharia para conformidade legal." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Operon */}
      <footer className="py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <Logo textSize="text-sm" />
          </Link>
          <p className="text-slate-400 text-xs font-medium">
            &copy; {new Date().getFullYear()} Operon Soluções Técnicas Ltda. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Trabalhe Conosco</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;