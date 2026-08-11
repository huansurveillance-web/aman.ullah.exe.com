import React from "react";
import { motion } from "motion/react";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { SECTORS } from "../data";

export const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2e5910_1px,transparent_1px),linear-gradient(to_bottom,#0b2e5910_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Accent glow mesh */}
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-accent/15 rounded-full blur-[120px] translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-accent-light rounded-full" />
              Sectors We Serve
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
              Tailored Architecture for Every Environment
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              We recognize that an industrial manufacturing plant requires an entirely different perimeter defense architecture compared to a commercial office or an educational campus. Our systems are engineered to map to your daily operations without causing friction or security blind spots.
            </p>

            <div className="bg-navy-900 border border-navy-800 p-5 rounded-2xl flex gap-4">
              <ShieldAlert className="h-6 w-6 text-accent-light shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-sm">Operation-Specific Engineering</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  We match cameras with light-intensity filters, thermal optics, and automatic visual alarm lines specifically suited to your environment's footprint.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Grid Checklist */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECTORS.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3.5 bg-navy-900/60 border border-navy-800/80 rounded-xl p-4 hover:border-accent hover:bg-navy-900 transition-all group"
                  >
                    <div className="p-2 bg-navy-800 rounded-lg text-accent-light group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    
                    <span className="text-slate-100 font-medium text-xs sm:text-sm tracking-wide">
                      {sector.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
