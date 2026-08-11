import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { WORK_PROCESS } from "../data";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-100 rounded-full blur-[100px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Our Methodology
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Our Work Process
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            We follow a structured 6-step roadmap to ensure pristine hardware deployment, maximum spatial coverage, and permanent technical stability.
          </p>
        </div>

        {/* Process Steps List - Alternating layout or continuous grid */}
        <div className="relative border-l border-slate-200/80 ml-4 sm:ml-8 md:ml-12 lg:ml-24 space-y-12">
          {WORK_PROCESS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Stepper Circle Number Indicator */}
              <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full bg-white border-2 border-slate-200 text-slate-500 font-display font-bold text-sm flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:text-white transition-all duration-300 shadow">
                {step.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Description Column */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display font-extrabold text-navy-950 text-xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Subtasks Detail Column */}
                <div className="lg:col-span-6 bg-slate-50/60 border border-slate-100 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {step.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex gap-2 items-start">
                      <div className="p-0.5 bg-accent/10 rounded-full text-accent mt-0.5 shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-slate-500 text-xs font-semibold leading-normal">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
