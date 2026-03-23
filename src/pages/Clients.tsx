"use client";

import { Search, MoreHorizontal, Mail, Phone, UserPlus } from "lucide-react";
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

const Clients = () => {
  const clients = [
    { id: 1, name: "Carlos Eduardo", email: "carlos@email.com", phone: "(11) 98888-7777", status: "Ativo" },
    { id: 2, name: "Mariana Souza", email: "mariana@email.com", phone: "(11) 97777-6666", status: "Ativo" },
    { id: 3, name: "Roberto Lima", email: "roberto@email.com", phone: "(11) 96666-5555", status: "Inativo" },
    { id: 4, name: "Ana Paula", email: "ana@email.com", phone: "(11) 95555-4444", status: "Ativo" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Clientes</h1>
          <p className="text-[#9CA3AF] text-sm font-medium">Gerencie sua base de contatos com facilidade.</p>
        </div>
        
        <NewClientModal>
          <Button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-xl font-bold h-12 px-6 shadow-lg shadow-indigo-500/20 border-none transition-all group">
            <UserPlus size={18} className="mr-2 group-hover:scale-110 transition-transform" /> 
            Novo Cliente
          </Button>
        </NewClientModal>
      </div>

      {/* Table Container */}
      <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
        {/* Search Bar */}
        <div className="p-6 border-b border-white/5 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={18} />
            <Input 
              className="pl-12 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-[#9CA3AF]/40 focus-visible:ring-[#6366F1] h-12" 
              placeholder="Buscar por nome ou e-mail..." 
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-white/5 hover:bg-transparent">
                <TableHead className="text-[#E5E7EB] font-bold h-14 px-6">Nome</TableHead>
                <TableHead className="text-[#E5E7EB] font-bold h-14 px-6">Contato</TableHead>
                <TableHead className="text-[#E5E7EB] font-bold h-14 px-6">Status</TableHead>
                <TableHead className="text-[#E5E7EB] font-bold h-14 px-6 text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366F1]/20 to-[#8B5CF6]/20 text-[#22D3EE] flex items-center justify-center font-bold border border-white/5">
                        {client.name.charAt(0)}
                      </div>
                      <span className="font-bold text-white text-base">{client.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors">
                        <Mail size={14} className="text-[#6366F1]" /> {client.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors">
                        <Phone size={14} className="text-[#22D3EE]" /> {client.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      client.status === 'Ativo' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-white/5 text-[#9CA3AF] border border-white/10'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${client.status === 'Ativo' ? 'bg-emerald-400' : 'bg-[#9CA3AF]'}`} />
                      {client.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6 text-right">
                    <Button variant="ghost" size="icon" className="text-[#9CA3AF] hover:text-white hover:bg-white/5 rounded-xl">
                      <MoreHorizontal size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer/Pagination Placeholder */}
        <div className="p-6 bg-white/[0.01] border-t border-white/5 flex justify-center">
          <p className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.2em]">Exibindo {clients.length} registros</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;