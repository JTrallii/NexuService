import { Plus, Search, MoreHorizontal, Mail, Phone } from "lucide-react";
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

const Clients = () => {
  const clients = [
    { id: 1, name: "Carlos Eduardo", email: "carlos@email.com", phone: "(11) 98888-7777", status: "Ativo" },
    { id: 2, name: "Mariana Souza", email: "mariana@email.com", phone: "(11) 97777-6666", status: "Ativo" },
    { id: 3, name: "Roberto Lima", email: "roberto@email.com", phone: "(11) 96666-5555", status: "Inativo" },
    { id: 4, name: "Ana Paula", email: "ana@email.com", phone: "(11) 95555-4444", status: "Ativo" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Clientes</h1>
          <p className="text-slate-500 text-sm">Gerencie sua base de contatos.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus size={18} /> Novo Cliente
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input className="pl-10 bg-slate-50 border-none" placeholder="Buscar por nome ou e-mail..." />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50">
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                      {client.name.charAt(0)}
                    </div>
                    {client.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Mail size={12} /> {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Phone size={12} /> {client.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    client.status === 'Ativo' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {client.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Clients;