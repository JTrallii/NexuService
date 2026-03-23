import { Plus, Search, Filter, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { id: "OS-001", title: "Reparo de Ar Condicionado", client: "Carlos Eduardo", date: "12/10/2023", status: "Concluído", price: "R$ 350,00" },
    { id: "OS-002", title: "Instalação Elétrica", client: "Mariana Souza", date: "15/10/2023", status: "Em Andamento", price: "R$ 1.200,00" },
    { id: "OS-003", title: "Manutenção de Servidor", client: "Tech Solutions", date: "18/10/2023", status: "Pendente", price: "R$ 800,00" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-emerald-100 text-emerald-700";
      case "Em Andamento": return "bg-blue-100 text-blue-700";
      case "Pendente": return "bg-amber-100 text-amber-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Serviços</h1>
          <p className="text-slate-500 text-sm">Acompanhe suas ordens de serviço.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus size={18} /> Novo Serviço
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input className="pl-10 bg-white" placeholder="Buscar serviço ou cliente..." />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter size={18} /> Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-indigo-600">{service.id}</span>
                      <h3 className="font-bold text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500">Cliente: <span className="text-slate-700 font-medium">{service.client}</span></p>
                    <p className="text-xs text-slate-400 mt-1">Data: {service.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{service.price}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Valor Total</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(service.status)}`}>
                    {service.status}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;