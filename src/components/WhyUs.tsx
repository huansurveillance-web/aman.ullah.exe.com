import React from "react";
import { motion } from "motion/react";
import { Check, ShieldCheck, MapPin, Zap, Hammer, PhoneCall, HelpCircle, Award } from "lucide-react";
import { COMPANY_INFO, WHY_US_BULLETS } from "../data";

export const WhyUs: React.FC = () => {
  const iconMap = [
    MapPin,     // Nationwide
    Zap,        // Customized
    Hammer,     // Professional
    PhoneCall,  // Support
    Award,      // Cost-Effective
    ShieldCheck // Cross-Sector
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0b2e5902_1px,transparent_1px)] bg-[size:15px_15px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Stats Boxes Left side */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                Why Partner With Us
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight leading-tight">
                Why Choose HUAN Surveillance
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-light">
                We combine industry expertise with high-grade components to construct permanent safety shields around your operational environments.
              </p>
            </div>

            {/* Stat Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-md">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-accent">
                  {COMPANY_INFO.stats.experience}
                </div>
                <div className="text-navy-950 font-bold text-sm mt-1">SLA Experience</div>
                <p className="text-slate-400 text-xs mt-1 font-light">Routine deployment experience</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-md">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900">
                  {COMPANY_INFO.stats.projects}
                </div>
                <div className="text-navy-950 font-bold text-sm mt-1">Secure Installations</div>
                <p className="text-slate-400 text-xs mt-1 font-light font-sans">Pakistan-wide deployments</p>
              </div>

            </div>
          </div>

          {/* Bullet List Right side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_US_BULLETS.map((bullet, index) => {
                const IconComponent = iconMap[index] || Check;
                return (
                  <motion.div
                    key={bullet.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 15 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200/40 hover:border-slate-300 transition-all shadow-sm hover:shadow group"
                  >
                    <div className="p-2.5 bg-navy-50 text-navy-900 rounded-xl h-10 w-10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-navy-950 text-sm sm:text-base tracking-tight">
                        {bullet.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                        {bullet.desc}
                      </p>
                    </div>
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
