"use client";

import { useState } from "react";
import { Search, Plus, Mail, Phone, Filter, Briefcase, Award, Edit2 } from "lucide-react";
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
import TechnicianModal from "@/components/technicians/TechnicianModal";
import { cn } from "@/lib/utils";

const Technicians = () => {
  const [selectedTech, setSelectedTech] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const technicians = [
    { id: 1, name: "Ricardo Silva", specialty: "Elétrica", level: "Sênior", phone: "(11) 98888-0001", status: "Ativo", email: "ricardo@empresa.com", cpf: "123.456.789-00", area: "São Paulo - Capital" },
    { id: 2, name: "André Lucas", specialty: "Climatização", level: "Pleno", phone: "(11) 98888-0002", status: "Ativo", email: "andre@empresa.com", cpf: "234.567.890-11", area: "ABCD" },
    { id: 3, name: "Paula Santos", specialty: "Infra de TI", level: "Especialista", phone: "(11) 98888-0003", status: "Ativo", email: "paula@empresa.com", cpf: "345.678.901-22", area: "Osasco/Barueri" },
    { id: 4, name: "Marcos Lima", specialty: "Obras Civis", level: "Júnior", phone: "(11) 98888-0004", status: "Inativo", email: "marcos@empresa.com", cpf: "456.789.012-33", area: "Interior" },
    { id: 5, name: "Beatriz Souza", specialty: "Segurança Eletrônica", level: "Sênior", phone: "(11) 98888-0005", status: "Ativo", email: "beatriz@empresa.com", cpf: "567.890.123-44", area: "São Paulo - Sul" },
    { id: 6, name: "Fernando Costa", specialty: "Hidráulica", level: "Pleno", phone: "(11) 98888-0006", status: "Ativo", email: "fernando@empresa.com", cpf: "678.901.234-55", area: "Guarulhos" },
    { id: 7, name: "Luciana Pereira", specialty: "Pintura Industrial", level: "Especialista", phone: "(11) 98888-0007", status: "Ativo", email: "luciana@empresa.com", cpf: "789.012.345-66", area: "São Paulo - Leste" },
    { id: 8, name: "Gabriel Santos", specialty: "Marcenaria", level: "Pleno", phone: "(11) 98888-0008", status: "Ativo", email: "gabriel@empresa.com", cpf: "890.123.456-77", area: "São Paulo - Oeste" },
  ];

  const handleEdit = (tech: any) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTech(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Equipe Técnica</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Gerencie os profissionais de campo e suas especialidades.</p>
        </div>
        
        <Button 
          onClick={handleAdd}
          className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2"
        >
          <Plus size={16} /> Novo Técnico
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 py-2">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5">
          <Filter size={14} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filtros:</span>
        </div>
        
        <select className="h-9 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option>Todas as Especialidades</option>
          <option>Elétrica</option>
          <option>Climatização</option>
          <option>Segurança</option>
        </select>

        <Input 
          placeholder="Buscar por nome ou técnico..." 
          className="h-9 w-64 bg-white border-slate-200 text-xs rounded-lg"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent border-b border-slate-200">
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Técnico</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Especialidade</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500">Nível</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
              <TableHead className="h-12 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {technicians.map((tech) => (
              <TableRow key={tech.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[10px] border border-blue-100">
                      {tech.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{tech.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{tech.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Briefcase size={12} className="text-blue-500" /> {tech.specialty}
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Award size={12} className="text-amber-500" /> {tech.level}
                  </div>
                </TableCell>
                <TableCell className="py-4 text-center">
                  <span className={cn(
                    "status-badge",
                    tech.status === 'Ativo' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"
                  )}>
                    {tech.status}
                  </span>
                </TableCell>
                <TableCell className="pr-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="text-[11px] font-bold text-slate-700 mr-2">{tech.phone}</div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleEdit(tech)}
                      className="h-8 w-8 text-slate-400 hover:text-blue-600"
                    >
                      <Edit2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="bg-slate-50/50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            {technicians.length} profissionais na base
          </p>
        </div>
      </div>

      <TechnicianModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        technician={selectedTech} 
      />
    </div>
  );
};

export default Technicians;