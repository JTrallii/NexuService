import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Technicians from "./pages/Technicians";
import Budgets from "./pages/Budgets";
import Financeiro from "./pages/Financeiro";
import Configuracoes from "./pages/Configuracoes";
import Servicos from "./pages/Servicos";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <Toaster position="top-right" expand={false} richColors />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        
        <Route element={<DashboardLayout />}>
          <Route path="/ordens" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/tecnicos" element={<Technicians />} />
          <Route path="/orcamentos" element={<Budgets />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          {/* Redireciona o painel antigo para a nova rota de ordens */}
          <Route path="/painel-principal" element={<Navigate to="/ordens" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;