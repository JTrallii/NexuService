import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Budgets from "./pages/Budgets";
import Technicians from "./pages/Technicians";
import Financeiro from "./pages/Financeiro";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Agilidade from "./pages/Agilidade";
import Seguranca from "./pages/Seguranca";
import Metricas from "./pages/Metricas";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import DashboardLayout from "./components/layout/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          
          {/* Operational Routes (NexuService) */}
          <Route element={<DashboardLayout />}>
            <Route path="/painel-principal" element={<Dashboard />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/tecnicos" element={<Technicians />} />
            <Route path="/orcamentos" element={<Budgets />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/configuracoes" element={<Settings />} />
            
            <Route path="/agilidade" element={<Agilidade />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/metricas" element={<Metricas />} />
            
            <Route path="/dashboard" element={<Navigate to="/painel-principal" replace />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;