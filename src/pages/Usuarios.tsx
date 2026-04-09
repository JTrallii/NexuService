"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Briefcase } from "lucide-react";
import Clients from "./Clients";
import Technicians from "./Technicians";

const Usuarios = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Usuários</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Administre o cadastro de clientes e a equipe técnica da plataforma.
        </p>
      </div>

      <Tabs defaultValue="clientes" className="w-full">
        <TabsList className="bg-slate-100 p-1 rounded-xl mb-6">
          <TabsTrigger value="clientes" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Users size={16} className="mr-2" />
            Clientes
          </TabsTrigger>
          <TabsTrigger value="tecnicos" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
            <Briefcase size={16} className="mr-2" />
            Técnicos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clientes" className="mt-0">
          <Clients />
        </TabsContent>

        <TabsContent value="tecnicos" className="mt-0">
          <Technicians />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Usuarios;