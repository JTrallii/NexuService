"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3, Wrench, ChevronRight, Star } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F1A]/50 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Wrench size={22} />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">ServiceFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {["Recursos", "Preços", "Sobre"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-[#9CA3AF] hover:text-[#22D3EE] transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-[#E5E7EB] hover:bg-white/5 rounded-lg px-6">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] text-white font-bold rounded-lg px-6 h-11 border-none transition-all">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#22D3EE] text-xs font-bold mb-10">
            <Star size={14} fill="currentColor" />
            <span>SISTEMA DE GESTÃO INTELIGENTE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Gerencie serviços <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">com maestria.</span>
          </h1>
          
          <p className="text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            A plataforma definitiva para profissionais que buscam elevar o nível de sua gestão. Organize clientes, serviços e orçamentos em segundos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] text-white px-10 h-16 text-lg rounded-xl font-bold transition-all border-none">
                Criar minha conta <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-10 h-16 text-lg rounded-xl font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-sm transition-all">
              Ver Demonstração
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-[2.5rem] blur opacity-20"></div>
            <div className="relative bg-[#0F172A] rounded-[2.5rem] p-4 shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Dashboard Mockup" 
                className="w-full rounded-2xl opacity-90 brightness-75 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-700 shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Tecnologia ao seu favor.</h2>
            <p className="text-[#9CA3AF] font-medium">Recursos pensados para a escala do seu negócio.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Agilidade", desc: "Processos rápidos que economizam seu tempo valioso todos os dias." },
              { icon: Shield, title: "Segurança", desc: "Seus dados protegidos com os mais altos padrões de criptografia." },
              { icon: BarChart3, title: "Métricas", desc: "Insights poderosos sobre o seu faturamento e crescimento mensal." }
            ].map((f, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-tr from-[#6366F1]/10 to-[#8B5CF6]/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                  <f.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
                <p className="text-[#9CA3AF] leading-relaxed font-medium">{f.desc}</p>
                <div className="mt-8 flex items-center text-[#22D3EE] font-bold text-sm cursor-pointer group-hover:translate-x-2 transition-transform">
                  Detalhes <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center text-white">
              <Wrench size={18} />
            </div>
            <span className="font-bold text-xl text-white">ServiceFlow</span>
          </div>
          <p className="text-[#9CA3AF] text-sm font-medium">© 2024 ServiceFlow Enterprise. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors"><Zap size={20} /></a>
            <a href="#" className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors"><Shield size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;