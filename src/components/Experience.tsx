import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Anchor, Award, CheckCircle } from "lucide-react";
import { NOTABLE_EXPERIENCE } from "../data";

export const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-navy-50 rounded-full blur-[100px] opacity-60 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Notable Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-navy-900 shadow-2xl"
        >
          {/* Subtle blueprint grid line on card overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60" />
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

          <div className="relative z-10 space-y-6">
            
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-accent/25 border border-accent/40 rounded-full py-1 px-3 text-[10px] font-bold uppercase tracking-widest text-accent-light">
                <ShieldCheck className="h-3.5 w-3.5" />
                Defense Sector Clearances
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full py-1 px-3 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                100% Commissioned
              </span>
            </div>

            {/* Title / Case study identifier */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Project Showcase
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Notable Experience
              </h2>
            </div>

            {/* Main content body with Anchor visual */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10">
              
              {/* Client Profile */}
              <div className="md:col-span-4 flex items-center gap-4">
                <div className="p-4 bg-navy-900 rounded-2xl text-accent-light border border-navy-800/80 shadow-inner">
                  <Anchor className="h-10 w-10 text-accent-light" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl tracking-tight">
                    {NOTABLE_EXPERIENCE.client}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">Pakistan Navy Division</p>
                </div>
              </div>

              {/* Case description */}
              <div className="md:col-span-8">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light italic">
                  &ldquo;{NOTABLE_EXPERIENCE.description}&rdquo;
                </p>
              </div>

            </div>

            {/* Technical Highlights / Engineering Rigor */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-300 border-t border-white/5">
              <div className="bg-navy-900/40 p-4 rounded-xl border border-white/5">
                <strong className="block text-white mb-1">Critical Zones:</strong>
                Perimeter thermal analytics with automated tripwire radar.
              </div>
              <div className="bg-navy-900/40 p-4 rounded-xl border border-white/5">
                <strong className="block text-white mb-1">Redundancy:</strong>
                Fibre backhaul configurations with automatic network failsafes.
              </div>
              <div className="bg-navy-900/40 p-4 rounded-xl border border-white/5">
                <strong className="block text-white mb-1">SLA Standard:</strong>
                High-priority military-tier maintenance response contract.
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
