import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy-50 rounded-full blur-[100px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Connect With Our Engineers
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Have questions about system specifications, AMC pricing, or scheduling a physical site survey? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-navy-950 text-xl tracking-tight">
                Corporate Contact Info
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                We design custom blueprints for corporate facilities, educational institutions, retail centers, and residential communities throughout Pakistan.
              </p>
            </div>

            {/* Connection Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Phone/WhatsApp */}
              <a
                id="contact-phone-card"
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-navy-50 border border-slate-100 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-navy-900 text-white rounded-xl group-hover:bg-accent transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone & WhatsApp</div>
                  <div className="text-navy-950 font-bold text-sm sm:text-base mt-0.5">{COMPANY_INFO.contact.phone}</div>
                </div>
              </a>

              {/* Email */}
              <a
                id="contact-email-card"
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-navy-50 border border-slate-100 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-navy-900 text-white rounded-xl group-hover:bg-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Address</div>
                  <div className="text-navy-950 font-bold text-sm sm:text-base mt-0.5">{COMPANY_INFO.contact.email}</div>
                </div>
              </a>

              {/* Web */}
              <a
                id="contact-web-card"
                href={`https://${COMPANY_INFO.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-navy-50 border border-slate-100 rounded-2xl transition-all group"
              >
                <div className="p-3 bg-navy-900 text-white rounded-xl group-hover:bg-accent transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Website</div>
                  <div className="text-navy-950 font-bold text-sm sm:text-base mt-0.5">{COMPANY_INFO.contact.website}</div>
                </div>
              </a>

              {/* Coverage */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="p-3 bg-navy-900 text-white rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Coverage Area</div>
                  <div className="text-navy-950 font-bold text-sm sm:text-base mt-0.5">{COMPANY_INFO.contact.address}</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-150 shadow-md">
            {!isSubmitted ? (
              <form id="contact-panel-form" onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-extrabold text-navy-950 text-xl tracking-tight mb-2">
                  Send a Quick Message
                </h3>
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="Muhammad Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      required
                      placeholder="+92 344 3733996"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    placeholder="Describe your surveillance request or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-slate-400" />
                  Your communication details are kept fully confidential.
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 hover:bg-accent text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                id="contact-form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-5"
              >
                <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-extrabold text-2xl text-navy-950">Message Dispatched!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Your message has been sent directly to the HUAN Surveillance desk. We will respond shortly.
                  </p>
                </div>
                
                <button
                  id="send-another-message-btn"
                  onClick={() => {
                    setFormData({ name: "", email: "", phone: "", message: "" });
                    setIsSubmitted(false);
                  }}
                  className="text-accent hover:text-accent-hover text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
