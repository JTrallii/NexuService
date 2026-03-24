"use client";

import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Wrench, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  Bell,
  ClipboardList,
  ShieldCheck,
  User as UserIcon,
  RefreshCw
} from "lucide-react";
import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Contexto simples para simulação de Role (apenas visual)
export const RoleContext = createContext({
  role: "ADMIN",
  toggleRole: () => {},
});

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [role, setRole] = useState("ADMIN");
  const location = useLocation();

  const toggleRole = () => {
    const newRole = role === "ADMIN" ? "USER" : "ADMIN";
    setRole(newRole);
  };

  const allMenuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", roles: ["ADMIN", "USER"] },
    { icon: Users, label: "Clientes", path: "/clients", roles: ["ADMIN"] },
    { icon: ClipboardList, label: "Ordens de Serviço", path: "/services", roles: ["ADMIN", "USER"] },
    { icon: FileText, label: "Orçamentos", path: "/budgets", roles: ["ADMIN"] },
    { icon: Settings, label: "Configurações", path: "/settings", roles: ["ADMIN"] },
  ];

  const menuItems = allMenuItems.filter(item => item.roles.includes(role));

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      <div className="min-h-screen bg-[#0B0F1A] flex">
        <aside className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] border-r border-white/5 transition-all duration-300 lg:translate-x-0 lg:static lg:inset-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full flex flex-col">
            <div className="p-8">
              <Link to="/dashboard" className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <Wrench size={22} />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">ServiceFlow</span>
              </Link>

              {/* Simulador de Role */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-widest">Perfil Atual</span>
                  <div className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest",
                    role === "ADMIN" ? "bg-indigo-500/20 text-indigo-400" : "bg-amber-500/20 text-amber-400"
                  )}>
                    {role}
                  </div>
                </div>
                <Button 
                  onClick={toggleRole}
                  variant="outline" 
                  size="sm" 
                  className="w-full h-8 text-[10px] font-bold border-white/10 hover:bg-white/5 text-white gap-2"
                >
                  <RefreshCw size={12} /> Alternar Acesso
                </Button>
              </div>
            </div>

            <nav className="flex-1 px-4 space-y-1.5">
              <p className="px-4 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-4">Módulos</p>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                      isActive 
                        ? "bg-white/5 text-[#22D3EE] border border-white/5" 
                        : "text-[#9CA3AF] hover:bg-white/[0.02] hover:text-white"
                    )}
                  >
                    <item.icon size={18} className={cn("transition-colors", isActive ? "text-[#22D3EE]" : "group-hover:text-white")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="p-6 border-t border-white/5">
              <div className="flex items-center gap-3 mb-6 px-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {role === "ADMIN" ? "AD" : "US"}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none mb-1">
                    {role === "ADMIN" ? "Admin Master" : "Técnico Operacional"}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] font-medium">Equipe ServiceFlow</p>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#9CA3AF] hover:text-rose-400 hover:bg-rose-500/10 rounded-xl">
                <LogOut size={18} />
                Sair
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <header className="h-20 bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
              <button 
                className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 mr-4">
                {role === "ADMIN" ? <ShieldCheck size={16} className="text-indigo-400" /> : <UserIcon size={16} className="text-amber-400" />}
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{role} MODE</span>
              </div>
              <Button variant="ghost" size="icon" className="text-[#9CA3AF] hover:bg-white/5 rounded-xl">
                <Bell size={20} />
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </RoleContext.Provider>
  );
};

export default DashboardLayout;