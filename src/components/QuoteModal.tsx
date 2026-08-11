import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ShieldCheck, Mail, Phone, Building, User, Send } from "lucide-react";
import { COMPANY_INFO, SECTORS } from "../data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const QUOTE_BACKEND_URL = "https://script.google.com/macros/s/AKfycbwFwleTUDdjxsBgh_-IuJPMMM3LIWb2KY94OWFgcSrL1fSBTVn4LVg71eWxuwcWTBid/exec";

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: "",
    service: initialService,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formattedMsg = `Hello HUAN Surveillance,\n\nI have submitted a Quote Request on your website.\n\n*Name:* ${formData.name}\n*Sector:* ${formData.sector}\n*Contact:* ${formData.phone} / ${formData.email}\n*Requirements:* ${formData.message || "N/A"}`;
    const whatsappUrl = `https://wa.me/923443733996?text=${encodeURIComponent(formattedMsg)}`;

    try {
      // Note: Google Apps Script web apps don't return readable CORS headers
      // for cross-origin fetch in every browser, so we send with text/plain
      // (avoids a CORS preflight) and treat a completed request as success
      // as long as fetch itself doesn't throw a network error.
      await fetch(QUOTE_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          sector: formData.sector,
          service: formData.service || "General Surveillance Consultation",
          message: formData.message
        })
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp automatically
      try {
        window.open(whatsappUrl, "_blank");
      } catch (err) {
        console.warn("WhatsApp pop-up blocked", err);
      }
    } catch (err: any) {
      console.error("Submission failed:", err);
      setIsSubmitting(false);
      setErrorMsg(err.message || "A network error occurred. Please try again or submit via WhatsApp.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      sector: "",
      service: initialService,
      message: ""
    });
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation closes
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-10"
          >
            {/* Header */}
            <div className="bg-navy-900 text-white p-6 flex justify-between items-center relative">
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight">Request a Free Quote</h3>
                <p className="text-navy-200 text-xs mt-1">Get custom-designed surveillance blueprints within 24 hours.</p>
              </div>
              <button 
                id="close-quote-modal-btn"
                onClick={handleClose} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-navy-200 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!isSubmitted ? (
                <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        id="quote-name-input"
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          id="quote-email-input"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          id="quote-phone-input"
                          type="tel"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sector We Serve */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Your Sector / Facility Type *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 font-medium">
                        <Building className="h-4 w-4" />
                      </span>
                      <select
                        id="quote-sector-select"
                        required
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                      >
                        <option value="">Select a Sector</option>
                        {SECTORS.map((sector) => (
                          <option key={sector.name} value={sector.name}>
                            {sector.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Describe Security Requirements
                    </label>
                    <textarea
                      id="quote-message-textarea"
                      rows={3}
                      placeholder="Specify number of cameras, access points, or any specific solutions required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  {/* Policy */}
                  <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <ShieldCheck className="h-5 w-5 text-navy-700 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Your business and security layout are safe with us. We handle all site audits and configuration details with absolute corporate confidentiality.
                    </p>
                  </div>

                  {/* Error Message and Fallback */}
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-sm space-y-3">
                      <p className="font-semibold text-xs">{errorMsg}</p>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          type="button"
                          onClick={() => setErrorMsg(null)}
                          className="bg-red-100 hover:bg-red-200 text-red-800 font-semibold py-1 px-2.5 rounded text-xs transition-colors"
                        >
                          Try Again
                        </button>
                        <a
                          id="quote-error-whatsapp-fallback"
                          href={`https://wa.me/923443733996?text=${encodeURIComponent(
                            `Hello HUAN Surveillance,\n\nI tried to submit a Quote Request on your website but faced a network issue.\n\n*Name:* ${formData.name}\n*Sector:* ${formData.sector}\n*Contact:* ${formData.phone} / ${formData.email}\n*Requirements:* ${formData.message || "N/A"}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1 px-2.5 rounded text-xs transition-colors"
                        >
                          Submit via WhatsApp Instead
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="submit-quote-request-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover text-white py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Reviewing Blueprint...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Consultation Request
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  id="quote-success-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 px-4 text-center space-y-5"
                >
                  <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-2xl text-navy-950">Inquiry Received</h4>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Our security engineering team has been notified.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                    <div className="flex justify-between"><span className="text-slate-500">Inquiry ID:</span> <span className="font-mono font-semibold text-slate-700">HUAN-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Selected Sector:</span> <span className="font-semibold text-slate-700">{formData.sector}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Response Window:</span> <span className="font-semibold text-emerald-600">Within 12-24 Hours</span></div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-slate-500">Need immediate emergency consultation?</p>
                    <a
                      id="quote-whatsapp-shortcut"
                      href={`https://wa.me/923443733996?text=${encodeURIComponent(
                        `Hello HUAN Surveillance,\n\nI have submitted a Quote Request on your website.\n\n*Name:* ${formData.name}\n*Sector:* ${formData.sector}\n*Contact:* ${formData.phone} / ${formData.email}\n*Requirements:* ${formData.message || "N/A"}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg text-sm transition-colors shadow"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.12 .949 11.493.949c-5.44 0-9.864 4.372-9.868 9.802a9.69 9.69 0 0 0 1.493 5.048l-.987 3.606 3.738-.971zm11.51-6.195c-.302-.15-1.78-.867-2.056-.967-.275-.1-.475-.15-.675.15-.2.3-.775.967-.95 1.166-.175.2-.35.225-.65.075-.302-.15-1.272-.464-2.423-1.485-.896-.792-1.5-1.77-1.275-2.07.224-.3.224-.483.075-.63-.135-.133-.3-.35-.45-.524-.15-.175-.2-.3-.3-.5s-.05-.375-.025-.524c.025-.15.2-.35.3-.5.1-.15.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.625-.925-2.225-.244-.583-.49-.5-.675-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.495 1.704.63.717.227 1.37.195 1.885.118.574-.085 1.78-.724 2.03-1.424.25-.7.25-1.3.175-1.424-.075-.125-.275-.2-.575-.35z" />
                      </svg>
                      Instant WhatsApp Connect
                    </a>
                  </div>

                  <button
                    id="success-close-btn"
                    onClick={handleClose}
                    className="text-slate-400 hover:text-slate-600 text-xs font-semibold uppercase tracking-wider block mx-auto pt-4"
                  >
                    Close Panel
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
