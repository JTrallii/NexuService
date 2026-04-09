"use client";

import { useContext, useMemo } from "react";
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

  const allBudgets = [
    { id: "ORC-23-001", client: "Construtora Alfa", technician: "Ricardo Silva", value: "R$ 15.400,00", date: "20/10/2023", status: "Aprovado" },
    { id: "ORC-23-002", client: "Condomínio Solar", technician: "André Lucas", value: "R$ 2.150,00", date: "21/10/2023", status: "Pendente" },
    { id: "ORC-23-003", client: "Padaria Central", technician: "Ricardo Silva", value: "R$ 890,00", date: "22/10/2023", status: "Rejeitado" },
    { id: "ORC-23-004", client: "Escola Objetivo", technician: "Paula Santos", value: "R$ 4.200,00", date: "23/10/2023", status: "Aprovado" },
    { id: "ORC-23-005", client: "Carlos Eduardo", technician: "Ricardo Silva", value: "R$ 1.200,00", date: "24/10/2023", status: "Pendente" },
  ];

  const filteredBudgets = useMemo(() => {
    if (role === "ADMIN") return allBudgets;
    if (role === "CLIENT") return allBudgets.filter(b => b.client === user.name);
    if (role === "TECHNICIAN") return allBudgets.filter(b => b.technician === user.name);
    return [];
  }, [role, user]);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "Aprovado": return { class: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "Pendente": return { class: "bg-amber-50 text-amber-700 border-amber-200" };
      case "Rejeitado": return { class: "bg-rose-50 text-rose-700 border-rose-200" };
      default: return { class: "bg-slate-100 text-slate-500 border-slate-200" };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Propostas e Orçamentos</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            {role === "ADMIN" ? "Acompanhe propostas comerciais enviadas e taxas de aprovação." : "Acompanhe suas propostas e orçamentos solicitados."}
          </p>
        </div>
        
        {(role === "ADMIN" || role === "CLIENT") && (
          <NewBudgetModal>
            <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2">
              <Plus size={16} /> {role === "CLIENT" ? "Solicitar Orçamento" : "Nova Proposta"}
            </Button>
          </NewBudgetModal>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 py-2">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
          <Filter size={14} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filtros:</span>
        </div>
        
        <select className="h-9 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option>Todos os Status</option>
          <option>Aprovados</option>
          <option>Pendentes</option>
        </select>

        <Input 
          placeholder="Buscar proposta..." 
          className="h-9 w-64 bg-white border-slate-200 text-xs rounded-lg"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-b border-slate-200">
              <TableHead className="w-[120px] h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">ID</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Cliente</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Valor</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pr-6 text-right">Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBudgets.map((budget) => {
              const status = getStatusInfo(budget.status);
              return (
                <TableRow key={budget.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors">
                  <TableCell className="pl-6 py-4">
                    <span className="text-[11px] font-bold text-slate-400 font-mono tracking-tighter">{budget.id}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-bold text-slate-900">{budget.client}</span>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className={cn("status-badge", status.class)}>
                      {budget.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <span className="text-sm font-black text-slate-900">{budget.value}</span>
                  </TableCell>
                  <TableCell className="pr-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <span className="text-[11px] font-medium text-slate-400">{budget.date}</span>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-blue-600">
                        <Download size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            {filteredBudgets.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-32 text-center text-slate-400 font-medium">
                  Nenhum orçamento encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Budgets;