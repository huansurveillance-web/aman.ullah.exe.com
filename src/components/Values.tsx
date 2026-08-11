import React from "react";
import { motion } from "motion/react";
import { CORE_VALUES } from "../data";

export const Values: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0b2e5903_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Our Core Principles
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            We operate on a foundation of trust, quality workmanship, and forward-thinking technical architecture.
          </p>
        </div>

        {/* 5 Card Bento/Flex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {CORE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-navy-50 text-navy-900 rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <h3 className="font-display font-bold text-navy-950 text-base sm:text-lg tracking-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-5 pt-3.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-accent transition-colors">
                  0{index + 1} // VALUE
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
