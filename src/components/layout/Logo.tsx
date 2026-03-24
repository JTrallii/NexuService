"use client";

import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showText?: boolean;
}

const Logo = ({ className, iconSize = 18, textSize = "text-lg", showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative">
        {/* Camada de profundidade discreta */}
        <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-lg group-hover:bg-blue-600/30 transition-all" />
        
        {/* Container do Ícone */}
        <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
          <Wrench size={iconSize} strokeWidth={2.5} />
        </div>
      </div>

      {showText && (
        <span className={cn("font-bold tracking-tighter text-slate-900 transition-colors", textSize)}>
          Nexu<span className="text-blue-600">Service</span>
        </span>
      )}
    </div>
  );
};

export default Logo;