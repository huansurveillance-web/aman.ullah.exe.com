import React from "react";
import { ShieldCheck, Heart, FileCheck2, ZapOff } from "lucide-react";
import { SAFETY_QUALITY } from "../data";

export const Safety: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0b2e5902_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Compliance & Standards
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Health, Safety & Quality Assurance
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            We adhere to strict engineering regulations, prioritizing high quality workmanship alongside structural and human safety.
          </p>
        </div>

        {/* 3 Columns Grid of commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Zero Harm */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm space-y-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl inline-flex">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-navy-950 text-lg tracking-tight">
              Zero-Harm Safety Policy
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              {SAFETY_QUALITY.safety}
            </p>
          </div>

          {/* Standards */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm space-y-4">
            <div className="p-3 bg-navy-50 text-accent rounded-xl inline-flex">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-navy-950 text-lg tracking-tight">
              International Engineering
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              {SAFETY_QUALITY.standards}
            </p>
          </div>

          {/* Off peak */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm space-y-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl inline-flex">
              <ZapOff className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-navy-950 text-lg tracking-tight">
              Zero-Disruption Deployments
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              {SAFETY_QUALITY.disruption}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
