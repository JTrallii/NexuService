import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-xl text-slate-900">ServiceFlow</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Começar Agora</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Gestão de serviços <br />
            <span className="text-indigo-600">sem complicações.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Organize seus clientes, serviços e orçamentos em uma única plataforma moderna e intuitiva. Aumente sua produtividade hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-lg">
                Criar conta gratuita <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Ver demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Agilidade Total</h3>
              <p className="text-slate-600">Crie orçamentos e ordens de serviço em segundos com nossa interface otimizada.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança de Dados</h3>
              <p className="text-slate-600">Seus dados e de seus clientes protegidos com criptografia de ponta a ponta.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Relatórios Detalhados</h3>
              <p className="text-slate-600">Acompanhe o crescimento do seu negócio com dashboards em tempo real.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;