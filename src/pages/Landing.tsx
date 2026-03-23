"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BarChart3, Wrench, ChevronRight, Star } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Wrench size={22} />
            </div>
            <span className="font-bold text-2xl text-slate-900 tracking-tight">ServiceFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {["Recursos", "Preços", "Sobre", "Blog"].map((item) => (
              <a key={item} href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-600 font-bold text-sm rounded-xl">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 h-11 rounded-xl shadow-lg">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-10 animate-bounce">
            <Star size={14} fill="currentColor" />
            <span>LANÇAMENTO: V2.0 JÁ DISPONÍVEL</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Gerencie seus serviços <br />
            <span className="text-indigo-600">com excelência.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            A plataforma completa para profissionais que buscam organizar clientes, serviços e orçamentos em um só lugar. Simples, rápido e potente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
            <Link to="/register">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 h-16 text-lg rounded-2xl font-black shadow-xl shadow-indigo-200">
                Criar minha conta <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-10 h-16 text-lg rounded-2xl font-bold border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
              Ver Demonstração
            </Button>
          </div>

          {/* Visual Placeholder for Dashboard Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-indigo-600/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border border-slate-800 animate-float">
              <div className="bg-slate-800 h-8 w-full rounded-t-2xl flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Dashboard Mockup" 
                className="w-full rounded-b-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Confiado por mais de 10.000 profissionais</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 grayscale opacity-40">
            <div className="font-bold text-2xl text-center">ACME</div>
            <div className="font-bold text-2xl text-center">GLOBAL</div>
            <div className="font-bold text-2xl text-center">SERVICE</div>
            <div className="font-bold text-2xl text-center">TECH</div>
            <div className="font-bold text-2xl text-center">LOGIC</div>
            <div className="font-bold text-2xl text-center">CORE</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Tudo o que você precisa.</h2>
            <p className="text-slate-500 font-medium">Ferramentas poderosas para escalar seu negócio de prestação de serviços.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: "Velocidade Extrema", desc: "Crie orçamentos em segundos e envie diretamente para o WhatsApp do seu cliente." },
              { icon: Shield, title: "Segurança Total", desc: "Seus dados criptografados e backups diários para você nunca perder uma informação." },
              { icon: BarChart3, title: "Análise Profunda", desc: "Visualize seu lucro, despesas e crescimento mensal com gráficos intuitivos." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <f.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                <div className="mt-8 flex items-center text-indigo-600 font-bold text-sm cursor-pointer group-hover:translate-x-2 transition-transform">
                  Saiba mais <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Wrench size={18} />
            </div>
            <span className="font-bold text-xl text-slate-900">ServiceFlow</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© 2024 ServiceFlow. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Star size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Zap size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Shield size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;