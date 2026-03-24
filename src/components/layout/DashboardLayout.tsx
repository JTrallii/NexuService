"use client";

import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Wrench, 
  Search, 
  Bell, 
  User as UserIcon,
  RefreshCw,
  LogOut,
  ChevronDown,
  Plus
} from "lucide-react";
import { useState, createContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const RoleContext = createContext({
  role: "ADMIN",
  toggleRole: () => {},
});

const DashboardLayout = () => {
  const [role, setRole] = useState("ADMIN");
  const location = useLocation();

  const toggleRole = () => {
    setRole(role === "ADMIN" ? "USER" : "ADMIN");
  };

  const navItems = [
    { label: "Ordens", path: "/dashboard", roles: ["ADMIN", "USER"] },
    { label: "Clientes", path: "/clients", roles: ["ADMIN"] },
    { label: "Orçamentos", path: "/budgets", roles: ["ADMIN"] },
    { label: "Configurações", path: "/settings", roles: ["ADMIN"] },
  ];

  const visibleNav = navItems.filter(item => item.roles.includes(role));

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Header */}
        <header className="fixed top-0 w-full h-16 bg-white border-b border-slate-200 z-50 px-6">
          <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between gap-8">
            {/* Brand */}
            <Link to="/dashboard" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Wrench size={18} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">NexuService</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1 shrink-0">
              {visibleNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
                    location.pathname === item.path 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl relative group hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
              <Input 
                placeholder="Buscar cliente, serviço, ordem ou pagamento..." 
                className="pl-10 h-10 bg-slate-100 border-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded-lg text-sm"
              />
            </div>

            {/* Actions & User */}
            <div className="flex items-center gap-3 shrink-0">
              {role === "ADMIN" && (
                <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2 hidden sm:flex">
                  <Plus size={16} /> Nova Ordem
                </Button>
              )}
              
              <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block" />

              <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-50 rounded-lg">
                <Bell size={20} />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2.5 pl-2 py-1.5 pr-1.5 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      {role === "ADMIN" ? "AD" : "US"}
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="text-xs font-bold text-slate-900 leading-none mb-1">
                        {role === "ADMIN" ? "Admin Master" : "Técnico Operacional"}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{role}</p>
                    </div>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-1">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleRole} className="cursor-pointer gap-2">
                    <RefreshCw size={14} /> Alternar para {role === "ADMIN" ? "Usuário" : "Admin"}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <UserIcon size={14} /> Meu Perfil
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 gap-2">
                    <LogOut size={14} /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16 flex flex-col">
          <div className="flex-1 max-w-[1600px] w-full mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
          
          {/* Functional Footer */}
          <footer className="w-full bg-white border-t border-slate-200 py-3 px-6 shrink-0">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              <div className="flex gap-4">
                <span>Última atualização: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span className="text-slate-300">|</span>
                <span className="text-amber-600">2 pagamentos em atraso</span>
              </div>
              <div className="flex gap-4">
                <span>Sistema V1.0.4</span>
                <span className="text-slate-300">|</span>
                <span>NexuService &copy; {new Date().getFullYear()}</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </RoleContext.Provider>
  );
};

export default DashboardLayout;