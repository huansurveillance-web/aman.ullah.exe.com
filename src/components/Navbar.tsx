import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Sectors", href: "#sectors", id: "sectors" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Why Us", href: "#why-us", id: "why-us" },
    { label: "Reviews", href: "#reviews", id: "reviews" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-navy-950/40 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            id="logo-nav-link"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 select-none"
          >
            <Logo 
              variant="full" 
              dark={!isScrolled}
            />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors tracking-wide relative py-1.5 ${
                  isScrolled
                    ? activeSection === link.id
                      ? "text-accent font-semibold"
                      : "text-slate-600 hover:text-navy-900"
                    : activeSection === link.id
                    ? "text-accent-light font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? "bg-accent" : "bg-accent-light"
                    }`}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="nav-phone-link"
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
              className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md border transition-all ${
                isScrolled
                  ? "text-slate-700 border-slate-200 hover:bg-slate-50"
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>
            <button
              id="nav-quote-btn"
              onClick={onOpenQuote}
              className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md active:scale-98 ${
                isScrolled
                  ? "bg-navy-900 text-white hover:bg-accent"
                  : "bg-white text-navy-950 hover:bg-accent hover:text-white"
              }`}
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-phone-shortcut-btn"
              onClick={onOpenQuote}
              className={`p-2 rounded-lg transition-colors border ${
                isScrolled
                  ? "text-navy-900 border-slate-200 hover:bg-slate-50"
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
            >
              <span className="sr-only">Quote Form</span>
              <span className="text-xs font-semibold px-1">Get Quote</span>
            </button>
            <button
              id="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-navy-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl overflow-hidden py-4 px-4 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? "bg-navy-50 text-accent font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-100 pt-4 px-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
              <Phone className="h-3.5 w-3.5" />
              <span>Call us: <strong className="text-slate-800">{COMPANY_INFO.contact.phone}</strong></span>
            </div>
            <button
              id="mobile-nav-quote-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-navy-900 hover:bg-accent text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
