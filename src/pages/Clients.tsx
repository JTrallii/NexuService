"use client";

import { Search, Plus, Mail, Phone, MoreHorizontal, UserPlus, Filter } from "lucide-react";
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
import NewClientModal from "@/components/clients/NewClientModal";
import { cn } from "@/lib/utils";

const Clients = () => {
  const clients = [
    { id: 1, name: "Carlos Eduardo", email: "carlos@email.com", phone: "(11) 98888-7777", status: "Ativo", lastOrder: "12/10/2023" },
    { id: 2, name: "Mariana Souza", email: "mariana@email.com", phone: "(11) 97777-6666", status: "Ativo", lastOrder: "15/10/2023" },
    { id: 3, name: "Roberto Lima", email: "roberto@email.com", phone: "(11) 96666-5555", status: "Inativo", lastOrder: "18/10/2023" },
    { id: 4, name: "Ana Paula", email: "ana@email.com", phone: "(11) 95555-4444", status: "Ativo", lastOrder: "20/10/2023" },
    { id: 5, name: "João Silva", email: "joao@email.com", phone: "(11) 94444-3333", status: "Ativo", lastOrder: "22/10/2023" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Clientes</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Gerencie sua base de contatos e histórico de atendimentos.</p>
        </div>
        
        <NewClientModal>
          <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2">
            <UserPlus size={16} /> Adicionar Cliente
          </Button>
        </NewClientModal>
      </div>

      <div className="flex flex-wrap items-center gap-3 py-2">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
          <Filter size={14} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filtros:</span>
        </div>
        
        <select className="h-9 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option>Todos os Status</option>
          <option>Ativos</option>
          <option>Inativos</option>
        </select>

        <Input 
          placeholder="Buscar por nome ou e-mail..." 
          className="h-9 w-64 bg-white border-slate-200 text-xs rounded-lg"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-b border-slate-200">
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Cliente</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">E-mail</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Telefone</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Última Ordem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors">
                <TableCell className="pl-6 py-4">
                  <span className="text-sm font-bold text-slate-900">{client.name}</span>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Mail size={12} className="text-slate-400" /> {client.email}
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Phone size={12} className="text-slate-400" /> {client.phone}
                  </div>
                </TableCell>
                <TableCell className="py-4 text-center">
                  <span className={cn(
                    "status-badge",
                    client.status === 'Ativo' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"
                  )}>
                    {client.status}
                  </span>
                </TableCell>
                <TableCell className="pr-6 py-4 text-right">
                  <span className="text-[11px] font-medium text-slate-400">{client.lastOrder}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="bg-slate-50/50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            {clients.length} clientes registrados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;