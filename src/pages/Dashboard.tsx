import { Users, Wrench, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    { title: "Total de Clientes", value: "124", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Serviços Ativos", value: "42", icon: Wrench, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Pendentes", value: "12", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Receita Mensal", value: "R$ 12.450", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Visão Geral</h1>
        <p className="text-slate-500 text-sm">Bem-vindo ao seu painel de controle.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
              <div className={`${stat.bg} ${stat.color} p-2 rounded-lg`}>
                <stat.icon size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <TrendingUp size={12} className="text-emerald-500" />
                <span className="text-emerald-500 font-medium">+12%</span> em relação ao mês passado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Users size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">Novo cliente cadastrado</p>
                    <p className="text-xs text-slate-500">Há 2 horas atrás</p>
                  </div>
                  <span className="text-xs font-medium text-indigo-600">Ver detalhes</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Próximos Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                    <Clock size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">Manutenção Preventiva #452</p>
                    <p className="text-xs text-slate-500">Agendado para amanhã, 09:00</p>
                  </div>
                  <div className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">
                    Pendente
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;