import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteWithService }) => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-navy-50 rounded-full blur-[100px] opacity-60 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-[120px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Enterprise Solutions
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Providing premium end-to-end low-voltage cabling, high-definition camera installations, access control systems, and routine SLA maintenance contracts.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Service Icon */}
                  <div className="inline-flex p-3 bg-navy-900 rounded-xl text-white group-hover:bg-accent transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-navy-950 text-lg sm:text-xl tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Request CTA */}
                <div className="border-t border-slate-100 mt-6 pt-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                    HUAN SURVEILLANCE
                  </span>
                  
                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 group-hover:text-accent transition-colors py-1 hover:underline"
                  >
                    Get Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
