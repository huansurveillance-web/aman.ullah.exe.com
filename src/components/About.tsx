import React from "react";
import { motion } from "motion/react";
import { Target, Compass, ShieldAlert, Award, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-50 rounded-full blur-[100px] opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-[100px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                Who We Are
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
                About HUAN Surveillance
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
              {COMPANY_INFO.aboutText}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="flex gap-3">
                <div className="p-2.5 bg-navy-50 rounded-xl text-navy-900 h-10 w-10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-950 text-sm">Certified Tech</h4>
                  <p className="text-slate-500 text-xs mt-0.5">High-grade configuration standards</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 bg-navy-50 rounded-xl text-navy-900 h-10 w-10 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-950 text-sm">Reputable Profile</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Highly critical security delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-navy-800/80 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-2xl group-hover:bg-accent/25 transition-all duration-500" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex p-3.5 bg-white/10 rounded-xl text-accent-light mb-2">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight">Our Vision</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div className="border-t border-white/10 mt-6 pt-4 text-[11px] uppercase tracking-wider font-semibold text-accent-light relative z-10 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Future-Focused Surveillance
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy-100 rounded-full blur-2xl group-hover:bg-navy-200/50 transition-all duration-500" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex p-3.5 bg-navy-900 rounded-xl text-white mb-2">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-navy-950 tracking-tight">Our Mission</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {COMPANY_INFO.mission}
                </p>
              </div>

              <div className="border-t border-slate-200/60 mt-6 pt-4 text-[11px] uppercase tracking-wider font-semibold text-navy-600 relative z-10 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Client-Centered Care
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
