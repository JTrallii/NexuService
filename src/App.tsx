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
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Agilidade from "./pages/Agilidade";
import Seguranca from "./pages/Seguranca";
import Metricas from "./pages/Metricas";
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
          
          {/* Operational Routes (NexuService) */}
          <Route element={<DashboardLayout />}>
            <Route path="/painel-principal" element={<Dashboard />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/orcamentos" element={<Budgets />} />
            <Route path="/configuracoes" element={<Settings />} />
            
            {/* Feature Pages now integrated into the system layout */}
            <Route path="/agilidade" element={<Agilidade />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/metricas" element={<Metricas />} />
            
            {/* Redirect old dashboard to new panel */}
            <Route path="/dashboard" element={<Navigate to="/painel-principal" replace />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;