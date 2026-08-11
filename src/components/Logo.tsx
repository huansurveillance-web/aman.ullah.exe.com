import React from "react";
// @ts-ignore
import logoImg from "../assets/images/input_file_0.png";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string; // Tailwind classes for the outer flex container
  dark?: boolean; // If true, styles the text for a dark background (white/accent). Otherwise, styles for light background (navy).
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = "full", 
  className = "flex items-center gap-2.5 select-none",
  dark = false
}) => {
  return (
    <div className={className}>
      <img 
        src={logoImg} 
        alt="HUAN Surveillance Logo" 
        className="h-[42px] w-auto object-contain shrink-0"
        referrerPolicy="no-referrer"
      />
      {variant === "full" && (
        <div className="flex flex-col leading-tight">
          <span className={`font-display font-black text-xl sm:text-2xl tracking-tight uppercase leading-none transition-colors duration-300 ${
            dark ? "text-white" : "text-slate-900"
          }`}>
            HUAN
          </span>
          <span className={`font-sans font-extrabold text-[9px] sm:text-[11px] tracking-widest uppercase transition-colors duration-300 ${
            dark ? "text-sky-400" : "text-navy-600"
          }`}>
            SURVEILLANCE
          </span>
        </div>
      )}
    </div>
  );
};
