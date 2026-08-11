import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Play, ArrowRight, Eye, Server, Radio, Cpu } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-950 flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Gradient Background and Grids */}
      <div className="absolute inset-0 z-0">
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2e5915_1px,transparent_1px),linear-gradient(to_bottom,#0b2e5915_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Radiant Mesh Orbs */}
        <div className="absolute top-1/4 right-0 w-[45rem] h-[45rem] bg-accent/20 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-navy-800/40 rounded-full blur-[100px] -translate-x-1/2" />
        
        {/* Subtle decorative dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Information */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-navy-900/80 border border-navy-700/50 rounded-full py-1.5 px-4 text-xs font-semibold text-accent-light tracking-wide shadow-inner"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Elite Surveillance Engineering & Integration</span>
            </motion.div>

            {/* Headline and Subheading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight"
              >
                HUAN
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light mt-1">
                  Surveillance
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-2xl font-semibold tracking-wide text-slate-300 font-display"
              >
                &ldquo;{COMPANY_INFO.tagline}&rdquo;
              </motion.h2>
            </div>

            {/* Intro Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              {COMPANY_INFO.intro}
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-get-quote-btn"
                onClick={onOpenQuote}
                className="bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-accent/35 active:scale-98"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                id="hero-services-btn"
                href="#services"
                onClick={handleScrollToServices}
                className="bg-navy-900 hover:bg-navy-800 text-white border border-navy-700/60 font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all active:scale-98"
              >
                Our Services
              </a>
            </motion.div>

            {/* Feature stats summary ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-navy-800/60 pt-6 sm:pt-8 max-w-lg"
            >
              <div>
                <h4 className="font-display font-extrabold text-white text-2xl">3+ Years</h4>
                <p className="text-slate-400 text-xs mt-1">SLA Experience</p>
              </div>
              <div>
                <h4 className="font-display font-extrabold text-white text-2xl">90+</h4>
                <p className="text-slate-400 text-xs mt-1">Secure Deployments</p>
              </div>
              <div>
                <h4 className="font-display font-extrabold text-white text-2xl">100%</h4>
                <p className="text-slate-400 text-xs mt-1">Client Trust Rate</p>
              </div>
            </motion.div>

          </div>

          {/* Hero Custom Interactive Graphic Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-navy-900/60 border border-navy-700/40 p-6 shadow-2xl backdrop-blur-md overflow-hidden"
            >
              {/* Corner brackets simulating camera frame */}
              <div className="absolute top-4 left-4 h-5 w-5 border-t-2 border-l-2 border-accent rounded-tl-md z-20" />
              <div className="absolute top-4 right-4 h-5 w-5 border-t-2 border-r-2 border-accent rounded-tr-md z-20" />
              <div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-accent rounded-bl-md z-20" />
              <div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-accent rounded-br-md z-20" />

              {/* REC label with glowing pulsing animation */}
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 14px rgba(239,68,68,0.5)", "0 0 0px rgba(239,68,68,0)"],
                  scale: [1, 1.02, 1]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-6 left-6 flex items-center gap-1.5 bg-red-950/80 border border-red-500/40 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase z-20 shadow-md"
              >
                <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-ping shrink-0" />
                REC 1080P
              </motion.div>

              {/* Live telemetry data readouts in monospace near the bottom right */}
              <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1 text-[10px] font-mono tracking-wider text-sky-400 font-medium bg-navy-950/80 border border-navy-800/40 px-3 py-1.5 rounded-md z-20">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>MOTION: DETECTED</span>
                </div>
                <div>STORAGE: 82%</div>
                <div className="text-slate-400">FPS: 30.00</div>
              </div>

              {/* CH1 Label */}
              <div className="absolute bottom-6 left-6 text-[10px] font-mono tracking-widest text-slate-300 font-semibold uppercase bg-navy-950/80 border border-navy-800/40 px-2.5 py-1.5 rounded-md z-20">
                CAM_01_REAR_GATE
              </div>

              {/* Center Shield Graphic */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 z-10">
                <div className="relative h-44 w-44 rounded-full bg-navy-950/90 border border-navy-700/50 flex items-center justify-center shadow-2xl overflow-hidden">
                  
                  {/* Subtle animated radar sweep line rotating inside the circle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-transparent to-transparent origin-center z-0"
                  />

                  {/* High-tech sweep line */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    className="absolute w-[88px] h-[1.5px] bg-sky-400 origin-left left-1/2 top-1/2 z-10 opacity-70 shadow-[0_0_8px_#38bdf8]"
                  />

                  {/* Faint grid/crosshair overlay with concentric aperture rings */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 z-0 pointer-events-none">
                    <div className="w-[140px] h-[140px] rounded-full border border-sky-500/20 absolute" />
                    <div className="w-[100px] h-[100px] rounded-full border border-sky-500/30 absolute" />
                    <div className="w-[60px] h-[60px] rounded-full border border-sky-500/40 absolute" />
                    
                    {/* Viewfinder ticks */}
                    <div className="w-5 h-[1px] bg-sky-400 absolute left-2" />
                    <div className="w-5 h-[1px] bg-sky-400 absolute right-2" />
                    <div className="w-[1px] h-5 bg-sky-400 absolute top-2" />
                    <div className="w-[1px] h-5 bg-sky-400 absolute bottom-2" />
                    
                    {/* Center point */}
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
                  </div>

                  {/* Small moving "scanning" dot drifting around inside */}
                  <motion.div
                    animate={{ 
                      x: [-40, 40, 15, -30, -40], 
                      y: [-20, 30, -25, 20, -20] 
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] z-20"
                  />

                  {/* Rotating dashed sensor ring */}
                  <div className="absolute inset-1.5 border border-dashed border-accent/30 rounded-full animate-spin-slow z-0" />
                  
                  {/* Floating active sensor icons around the circle */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }} 
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-2 left-1/2 -translate-x-1/2 bg-accent/90 p-1.5 rounded-md text-white shadow-lg z-20"
                  >
                    <Radio className="h-3.5 w-3.5" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 4, 0] }} 
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-navy-850 p-1.5 rounded-md text-sky-300 border border-navy-700 shadow-lg z-20"
                  >
                    <Server className="h-3.5 w-3.5" />
                  </motion.div>

                  <motion.div 
                    animate={{ x: [0, -4, 0] }} 
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-navy-850 p-1.5 rounded-md text-sky-300 border border-navy-700 shadow-lg z-20"
                  >
                    <Cpu className="h-3.5 w-3.5" />
                  </motion.div>

                  {/* Shield silhouette inside */}
                  <div className="w-14 h-14 opacity-15 text-sky-400 flex items-center justify-center z-10">
                    <ShieldCheck className="w-12 h-12" />
                  </div>

                </div>
              </div>

              {/* Thin animated horizontal scan-line moving top to bottom */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl z-10">
                <motion.div
                  animate={{ y: [-20, 440] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "linear"
                  }}
                  className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                />
              </div>

              {/* Faint ambient scan background overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-0" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
