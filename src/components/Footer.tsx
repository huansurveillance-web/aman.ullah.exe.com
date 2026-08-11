import React from "react";
import { Mail, Phone, MapPin, ArrowUp, Clock } from "lucide-react";
import { COMPANY_INFO } from "../data";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <footer className="bg-navy-950 text-white pt-20 pb-8 border-t border-navy-900 relative overflow-hidden">
      {/* Subtle blueprint grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-navy-900">
          
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-5">
            <Logo 
              variant="full" 
              dark={true}
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light mt-3">
              &ldquo;{COMPANY_INFO.tagline}&rdquo; — Pakistan-based certified systems design and deployment specialists. Empowering operations with impenetrable safety barriers.
            </p>
            <div className="flex gap-2 items-center text-xs text-slate-400 font-medium">
              <Clock className="h-4 w-4 text-accent-light shrink-0" />
              <span>Office hours: {COMPANY_INFO.contact.hours}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-accent-light">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                id="footer-nav-about"
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                About Company
              </a>
              <a
                id="footer-nav-services"
                href="#services"
                onClick={(e) => handleLinkClick(e, "services")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                Our Services
              </a>
              <a
                id="footer-nav-sectors"
                href="#sectors"
                onClick={(e) => handleLinkClick(e, "sectors")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                Sectors We Serve
              </a>
              <a
                id="footer-nav-process"
                href="#process"
                onClick={(e) => handleLinkClick(e, "process")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                Our Work Process
              </a>
              <a
                id="footer-nav-why-us"
                href="#why-us"
                onClick={(e) => handleLinkClick(e, "why-us")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                Why Choose Us
              </a>
              <a
                id="footer-nav-contact"
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-accent-light">
              Contact Desk
            </h4>
            <div className="flex flex-col gap-3">
              <a
                id="footer-contact-phone"
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>
              
              <a
                id="footer-contact-email"
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              <a
                id="footer-contact-web"
                href={`https://${COMPANY_INFO.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                <Globe className="h-4 w-4 text-accent shrink-0" />
                <span>{COMPANY_INFO.contact.website}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span>{COMPANY_INFO.contact.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </p>
          
          {/* Scroll to Top */}
          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="p-3 bg-navy-900 border border-navy-800 rounded-xl hover:bg-accent text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-1.5 text-xs font-semibold"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

// Reusable globe icon if needed
const Globe: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
