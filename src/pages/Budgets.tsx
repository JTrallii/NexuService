import { Plus, FileText, Download, Check, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Budgets = () => {
  const budgets = [
    { id: "ORC-2023-001", client: "Construtora Alfa", value: "R$ 15.400,00", date: "20/10/2023", status: "Aprovado" },
    { id: "ORC-2023-002", client: "Condomínio Solar", value: "R$ 2.150,00", date: "21/10/2023", status: "Pendente" },
    { id: "ORC-2023-003", client: "Padaria Central", value: "R$ 890,00", date: "22/10/2023", status: "Rejeitado" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aprovado": return <Check size={14} className="text-emerald-600" />;
      case "Pendente": return <Clock size={14} className="text-amber-600" />;
      case "Rejeitado": return <X size={14} className="text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Orçamentos</h1>
          <p className="text-slate-500 text-sm">Gerencie suas propostas comerciais.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus size={18} /> Novo Orçamento
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => (
          <Card key={budget.id} className="border-none shadow-sm overflow-hidden group">
            <div className={`h-1 w-full ${
              budget.status === 'Aprovado' ? 'bg-emerald-500' : 
              budget.status === 'Pendente' ? 'bg-amber-500' : 'bg-red-500'
            }`} />
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                  <FileText size={20} />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 text-[10px] font-bold uppercase text-slate-500">
                  {getStatusIcon(budget.status)}
                  {budget.status}
                </div>
              </div>
              
              <h3 className="font-bold text-slate-900 mb-1">{budget.client}</h3>
              <p className="text-xs text-slate-400 mb-4">{budget.id}</p>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">Valor</p>
                  <p className="text-lg font-bold text-indigo-600">{budget.value}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Data</p>
                  <p className="text-xs font-medium text-slate-600">{budget.date}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs gap-1">
                  <Download size={14} /> PDF
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 text-xs">
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Budgets;