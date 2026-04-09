"use client";

import { useContext, useMemo, useState } from "react";
import { Plus, Download, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewBudgetModal from "@/components/budgets/NewBudgetModal";
import { RoleContext } from "@/components/layout/DashboardLayout";
import { cn } from "@/lib/utils";

const Budgets = () => {
  const { role, user } = useContext(RoleContext);
  const [selectedBudget, setSelectedBudget] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados mockados com os novos status
  const [budgets, setBudgets] = useState<any[]>([
    { id: "ORC-001", client: "Carlos Eduardo", address: "Rua das Flores, 123", specialty: "Elétrica", date: "2023-10-20", description: "Troca de fiação do chuveiro", status: "CRIADO", value: "" },
    { id: "ORC-002", client: "Mariana Souza", address: "Av. Paulista, 1000", specialty: "Climatização", date: "2023-10-21", description: "Manutenção de ar condicionado", status: "RESPONDIDO", technician: "Ricardo Silva", serviceType: "Manutenção Preventiva AC", value: "R$ 250,00" },
    { id: "ORC-003", client: "Carlos Eduardo", address: "Rua das Flores, 123", specialty: "Hidráulica", date: "2023-10-22", description: "Vazamento na pia da cozinha", status: "ACEITO", technician: "Fernando Costa", serviceType: "Reparo de Vazamento", value: "R$ 180,00" },
  ]);

  const filteredBudgets = useMemo(() => {
    let result = budgets;
    
    if (role === "CLIENT") {
      result = result.filter(b => b.client === user.name);
    } else if (role === "TECHNICIAN") {
      // Técnico vê apenas orçamentos da sua especialidade (simulado aqui como 'Elétrica' para o Ricardo)
      const techSpecialty = user.name === "Ricardo Silva" ? "Elétrica" : "Climatização";
      result = result.filter(b => b.specialty === techSpecialty);
    }
    
    return result;
  }, [budgets, role, user]);

  const handleUpdateBudget = (updatedBudget: any) => {
    if (updatedBudget.id) {
      setBudgets(prev => prev.map(b => b.id === updatedBudget.id ? updatedBudget : b));
    } else {
      const newBudget = {
        ...updatedBudget,
        id: `ORC-00${budgets.length + 1}`
      };
      setBudgets(prev => [...prev, newBudget]);
    }
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "ACEITO": return { label: "Aceito", class: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "RESPONDIDO": return { label: "Respondido", class: "bg-blue-50 text-blue-700 border-blue-200" };
      case "RECUSADO": return { label: "Recusado", class: "bg-rose-50 text-rose-700 border-rose-200" };
      case "CRIADO": return { label: "Pendente", class: "bg-amber-50 text-amber-700 border-amber-200" };
      default: return { label: status, class: "bg-slate-100 text-slate-500 border-slate-200" };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Propostas e Orçamentos</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            {role === "ADMIN" ? "Gerencie todas as propostas comerciais." : "Acompanhe suas solicitações e orçamentos."}
          </p>
        </div>
        
        {role === "CLIENT" && (
          <NewBudgetModal onUpdate={handleUpdateBudget}>
            <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2">
              <Plus size={16} /> Solicitar Orçamento
            </Button>
          </NewBudgetModal>
        )}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-b border-slate-200">
              <TableHead className="w-[120px] h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">ID</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Cliente</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Especialidade</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBudgets.map((budget) => {
              const status = getStatusInfo(budget.status);
              return (
                <TableRow 
                  key={budget.id} 
                  className="table-row-hover border-b border-slate-100 last:border-0 transition-colors cursor-pointer"
                  onClick={() => { setSelectedBudget(budget); setIsModalOpen(true); }}
                >
                  <TableCell className="pl-6 py-4">
                    <span className="text-[11px] font-bold text-slate-400 font-mono tracking-tighter">{budget.id}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-bold text-slate-900">{budget.client}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs font-medium text-slate-600">{budget.specialty}</span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className={cn("status-badge", status.class)}>
                      {status.label}
                    </span>
                  </TableCell>
                  <TableCell className="pr-6 py-4 text-right">
                    <span className="text-sm font-black text-slate-900">{budget.value || "---"}</span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <NewBudgetModal 
        budget={selectedBudget} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        onUpdate={handleUpdateBudget}
      />
    </div>
  );
};

export default Budgets;