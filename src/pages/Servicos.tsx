"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Briefcase, 
  Award, 
  Trash2, 
  Edit2,
  Search
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

const Servicos = () => {
  const [specialties, setSpecialties] = useState([
    { id: 1, name: "Elétrica", description: "Instalações e reparos elétricos" },
    { id: 2, name: "Hidráulica", description: "Manutenção de redes de água e esgoto" },
    { id: 3, name: "Climatização", description: "Ar condicionado e ventilação" },
  ]);

  const [serviceTypes, setServiceTypes] = useState([
    { id: 1, name: "Manutenção Preventiva", price: "R$ 150,00", specialty: "Climatização" },
    { id: 2, name: "Instalação de Quadro", price: "R$ 450,00", specialty: "Elétrica" },
    { id: 3, name: "Reparo de Vazamento", price: "R$ 200,00", specialty: "Hidráulica" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Serviços</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Configure as especialidades e os tipos de serviços oferecidos pela plataforma.
        </p>
      </div>

      <Tabs defaultValue="tipos" className="w-full">
        <TabsList className="bg-slate-100 p-1 rounded-xl mb-6">
          <TabsTrigger value="tipos" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Briefcase size={16} className="mr-2" />
            Tipos de Serviços
          </TabsTrigger>
          <TabsTrigger value="especialidades" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Award size={16} className="mr-2" />
            Especialidades
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tipos" className="space-y-6">
          <div className="flex justify-between items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Buscar serviços..." className="pl-10 h-11 bg-white border-slate-200 rounded-xl" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-11 px-6 shadow-lg shadow-blue-500/20">
              <Plus size={18} className="mr-2" />
              Novo Serviço
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceTypes.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                      <Edit2 size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-md mb-3">
                  {item.specialty}
                </p>
                <div className="pt-3 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Preço Base</span>
                  <span className="text-sm font-black text-slate-900">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="especialidades" className="space-y-6">
          <div className="flex justify-between items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Buscar especialidades..." className="pl-10 h-11 bg-white border-slate-200 rounded-xl" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-11 px-6 shadow-lg shadow-blue-500/20">
              <Plus size={18} className="mr-2" />
              Nova Especialidade
            </Button>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Especialidade</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Descrição</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {specialties.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                          <Award size={16} />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">{item.description}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                          <Edit2 size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Servicos;