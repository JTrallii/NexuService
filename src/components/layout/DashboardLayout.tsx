"use client";

import { useState, createContext, useEffect } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Wrench, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  ChevronDown,
  FileText,
  DollarSign,
  ClipboardList,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "./Logo";

export const RoleContext = createContext<any>(null);

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  const navigation = [
    { name: "Ordens", href: "/ordens", icon: LayoutDashboard, roles: ["ADMIN", "TECHNICIAN", "CLIENT"] },
    { name: "Solicitar Serviço", href: "/solicitar-servico", icon: PlusCircle, roles: ["CLIENT"] },
    { name: "Clientes", href: "/clientes", icon: Users, roles: ["ADMIN"] },
    { name: "Técnicos", href: "/tecnicos", icon: Wrench, roles: ["ADMIN"] },
    { name: "Orçamentos", href: "/orcamentos", icon: FileText, roles: ["ADMIN", "CLIENT"] },
    { name: "Serviços", href: "/servicos", icon: ClipboardList, roles: ["ADMIN"] },
    { name: "Financeiro", href: "/financeiro", icon: DollarSign, roles: ["ADMIN", "TECHNICIAN"] },
  ].filter(item => item.roles.includes(user.role));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <RoleContext.Provider value={{ role: user.role, user }}>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Logo textSize="text-lg md:text-xl" iconSize={20} />
            
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                      isActive 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600 relative hidden sm:flex">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>

            <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden lg:block"></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 md:gap-3 pl-2 pr-1 py-1 h-auto hover:bg-slate-50 rounded-full transition-all group">
                  <Avatar className="h-8 w-8 border-2 border-white shadow-sm group-hover:border-blue-100 transition-colors">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-600 text-white text-[10px] font-black">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:flex flex-col items-start mr-1">
                    <span className="text-sm font-bold text-slate-900 leading-none">{user.name}</span>
                  </div>
                  <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 p-2 rounded-xl border-slate-200 shadow-xl">
                <DropdownMenuLabel className="px-2 py-1.5">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Minha Conta</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-100" />
                <DropdownMenuItem onClick={() => navigate("/configuracoes")} className="rounded-lg cursor-pointer py-2.5 font-bold text-slate-600 focus:bg-blue-50 focus:text-blue-600">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="rounded-lg cursor-pointer py-2.5 font-bold text-red-600 focus:bg-red-50 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair do Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </RoleContext.Provider>
  );
};

export default DashboardLayout;