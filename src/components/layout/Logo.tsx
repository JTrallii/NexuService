"use client";

import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showText?: boolean;
}

const Logo = ({ className, iconSize = 18, textSize = "text-xl", showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2 md:gap-3 select-none group", className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/20 border border-blue-400/20">
          <Wrench size={iconSize} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform w-4 h-4 md:w-auto md:h-auto" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-400 border-2 border-white rounded-full" />
        </div>
      </div>

      {showText && (
        <div className={cn("flex items-baseline font-black tracking-tighter text-slate-900", textSize.replace('text-xl', 'text-base md:text-xl'))}>
          <span>Operon</span>
          <span className="text-blue-600">.</span>
        </div>
      )}
    </div>
  );
};

export default Logo;