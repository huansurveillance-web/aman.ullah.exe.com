import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Services } from "./components/Services";
import { Sectors } from "./components/Sectors";
import { Process } from "./components/Process";
import { WhyUs } from "./components/WhyUs";
import { Experience } from "./components/Experience";
import { Safety } from "./components/Safety";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { QuoteModal } from "./components/QuoteModal";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenQuote = () => {
    setSelectedService("");
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen text-slate-800 bg-slate-50 antialiased font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Single-Page Sections */}
      <main className="relative">
        {/* Hero Landing */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Corporate Profile Section */}
        <About />

        {/* Company Core Values */}
        <Values />

        {/* Specialized Surveillance Services */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Operational Sectors served */}
        <Sectors />

        {/* Deployment Process Timeline */}
        <Process />

        {/* Statistical Experience & Strengths */}
        <WhyUs />

        {/* High-priority defense highlight case study */}
        <Experience />

        {/* Compliance, HSE standards and wiring regulations */}
        <Safety />

        {/* Customer Feedback & Reviews (shared across all visitors) */}
        <Reviews />

        {/* Communications Channels & message forms */}
        <Contact />
      </main>

      {/* Corporate footer */}
      <Footer />

      {/* Floating Call triggers */}
      <WhatsAppButton />

      {/* Request-a-quote Interactive Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
