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
  X,
  Bell,
  Search
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Clientes", path: "/clients" },
    { icon: Wrench, label: "Serviços", path: "/services" },
    { icon: FileText, label: "Orçamentos", path: "/budgets" },
    { icon: Settings, label: "Configurações", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200/60 transition-all duration-300 lg:translate-x-0 lg:static lg:inset-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-8">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <Wrench size={22} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">ServiceFlow</span>
            </Link>
          </div>

          <nav className="flex-1 px-4 space-y-1.5">
            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Menu Principal</p>
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
                      ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon size={18} className={cn("transition-colors", isActive ? "text-indigo-600" : "group-hover:text-slate-900")} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-2xl p-4 mb-4">
              <p className="text-xs font-bold text-slate-900 mb-1">Plano Pro</p>
              <p className="text-[10px] text-slate-500 mb-3">Sua conta expira em 12 dias.</p>
              <Button size="sm" className="w-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-100 text-[10px] h-8 shadow-none">Renovar Agora</Button>
            </div>
            <Button variant="ghost" className="w-full justify-start gap-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl">
              <LogOut size={18} />
              Sair da Conta
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            
            <div className="hidden md:flex relative max-w-md w-full ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input 
                className="pl-10 bg-slate-100/50 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-indigo-500 h-10 w-full" 
                placeholder="Pesquisar em tudo..." 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 rounded-xl relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </Button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-tight">Admin User</p>
                <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-tighter">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 font-bold shadow-sm transition-transform group-hover:scale-105">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;