"use client";

import { Outlet, Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { 
  User as UserIcon,
  LogOut,
  ChevronDown,
  Plus
} from "lucide-react";
import { useState, createContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import NewServiceModal from "@/components/services/NewServiceModal";
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
  user: null as any,
});

const DashboardLayout = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;

  const navItems = [
    { label: "Ordens", path: "/painel-principal", roles: ["ADMIN", "USER", "CLIENT", "TECHNICIAN"] },
    { label: "Clientes", path: "/clientes", roles: ["ADMIN"] },
    { label: "Técnicos", path: "/tecnicos", roles: ["ADMIN"] },
    { label: "Orçamentos", path: "/orcamentos", roles: ["ADMIN", "CLIENT"] },
    { label: "Financeiro", path: "/financeiro", roles: ["ADMIN"] },
    { label: "Configurações", path: "/configuracoes", roles: ["ADMIN", "CLIENT", "TECHNICIAN"] },
  ];

  const visibleNav = navItems.filter(item => item.roles.includes(user.role));

  return (
    <RoleContext.Provider value={{ role: user.role, user }}>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <header className="fixed top-0 w-full h-16 bg-white border-b border-slate-200 z-50 px-6">
          <div className="max-w-[1600px] mx-auto h-full flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Link to="/painel-principal" className="shrink-0 hover:opacity-90 transition-opacity">
                <Logo textSize="text-lg" iconSize={16} />
              </Link>

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
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {user.role === "ADMIN" && (
                <NewServiceModal>
                  <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs gap-2 hidden sm:flex">
                    <Plus size={16} /> Nova Ordem
                  </Button>
                </NewServiceModal>
              )}
              
              <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2.5 pl-2 py-1.5 pr-1.5 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      {user.name[0]}
                    </div>
                    <div className="text-left hidden lg:block">
                      <p className="text-xs font-bold text-slate-900 leading-none mb-1">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{user.role}</p>
                    </div>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-1">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/configuracoes")} className="gap-2 cursor-pointer">
                    <UserIcon size={14} /> Meu Perfil
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 gap-2 cursor-pointer">
                    <LogOut size={14} /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 pt-16 flex flex-col">
          <div className="flex-1 max-w-[1600px] w-full mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
          
          <footer className="w-full bg-white border-t border-slate-200 py-3 px-6 shrink-0 mt-auto">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              <div className="flex gap-4">
                <span>Sessão ativa como: <span className="text-blue-600 font-bold">{user.role}</span></span>
              </div>
              <div className="flex gap-4">
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