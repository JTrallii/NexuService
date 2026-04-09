"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Briefcase, 
  Award, 
  Trash2, 
  Edit2,
  Search,
  Filter
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewServiceTypeModal from "@/components/services/NewServiceTypeModal";
import NewSpecialtyModal from "@/components/services/NewSpecialtyModal";

const Servicos = () => {
  const [specialties] = useState([
    { id: 1, name: "Elétrica" },
    { id: 2, name: "Hidráulica" },
    { id: 3, name: "Climatização" },
    { id: 4, name: "Infra de TI" },
  ]);

  const [serviceTypes] = useState([
    { 
      id: 1, 
      name: "Manutenção Preventiva AC", 
      price: "R$ 150,00", 
      specialty: "Climatização",
      description: "Limpeza de filtros, verificação de dreno e higienização da evaporadora."
    },
    { 
      id: 2, 
      name: "Instalação de Quadro Elétrico", 
      price: "R$ 450,00", 
      specialty: "Elétrica",
      description: "Montagem completa de QDC com barramentos e identificação de circuitos."
    },
    { 
      id: 3, 
      name: "Reparo de Vazamento", 
      price: "R$ 200,00", 
      specialty: "Hidráulica",
      description: "Localização e conserto de vazamentos em tubulações de PVC ou cobre."
    },
    { 
      id: 4, 
      name: "Configuração de Roteador", 
      price: "R$ 120,00", 
      specialty: "Infra de TI",
      description: "Configuração de rede Wi-Fi, segurança WPA3 e controle parental."
    },
    { 
      id: 5, 
      name: "Troca de Disjuntor", 
      price: "R$ 80,00", 
      specialty: "Elétrica",
      description: "Substituição de disjuntor danificado por modelo compatível (DIN ou NEMA)."
    },
  ]);

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Catálogo de Serviços</h1>
        <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
          Gerencie os tipos de serviços e especialidades técnicas da plataforma.
        </p>
      </div>

      <Tabs defaultValue="tipos" className="w-full">
        <TabsList className="bg-slate-100 p-1 rounded-xl mb-6 w-full sm:w-auto flex">
          <TabsTrigger value="tipos" className="flex-1 sm:flex-none rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Briefcase size={16} className="mr-2" />
            Tipos
          </TabsTrigger>
          <TabsTrigger value="especialidades" className="flex-1 sm:flex-none rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Award size={16} className="mr-2" />
            Especialidades
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tipos" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Buscar serviços..." className="pl-10 h-10 bg-white border-slate-200 rounded-lg w-full" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-10 px-4 border-slate-200 text-slate-600 font-bold text-xs gap-2 rounded-lg flex-1 sm:flex-none">
                <Filter size={14} /> Filtros
              </Button>
              <NewServiceTypeModal>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg h-10 px-6 shadow-lg shadow-blue-500/20 flex-1 sm:flex-none">
                  <Plus size={18} className="mr-2" />
                  Novo
                </Button>
              </NewServiceTypeModal>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="hover:bg-transparent border-b border-slate-200">
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Serviço / Descrição</TableHead>
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500">Especialidade</TableHead>
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Preço</TableHead>
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceTypes.map((item) => (
                    <TableRow key={item.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors whitespace-nowrap">
                      <TableCell className="pl-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-900">{item.name}</p>
                          <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-relaxed max-w-xs md:max-w-md truncate">
                            {item.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <span className="text-[10px] md:text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {item.specialty}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 text-right">
                        <span className="text-sm font-black text-slate-900">{item.price}</span>
                      </TableCell>
                      <TableCell className="pr-6 py-4 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                            <Edit2 size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="especialidades" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Buscar especialidades..." className="pl-10 h-10 bg-white border-slate-200 rounded-lg w-full" />
            </div>
            <NewSpecialtyModal>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg h-10 px-6 shadow-lg shadow-amber-500/20 w-full sm:w-auto">
                <Plus size={18} className="mr-2" />
                Nova
              </Button>
            </NewSpecialtyModal>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="hover:bg-transparent border-b border-slate-200">
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 pl-6">Especialidade</TableHead>
                    <TableHead className="h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-500 text-right pr-6">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {specialties.map((item) => (
                    <TableRow key={item.id} className="table-row-hover border-b border-slate-100 last:border-0 transition-colors whitespace-nowrap">
                      <TableCell className="pl-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 border border-amber-100">
                            <Award size={16} />
                          </div>
                          <span className="text-sm font-bold text-slate-900">{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="pr-6 py-4 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                            <Edit2 size={14} />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Servicos;