import React from "react";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../data";

export const WhatsAppButton: React.FC = () => {
  const messageText = encodeURIComponent(
    `Hello HUAN Surveillance, I would like to inquire about your security solutions and surveillance hardware.`
  );

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        id="whatsapp-floating-trigger"
        href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${messageText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all active:scale-95 duration-300"
      >
        {/* Glow pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10" />

        {/* Floating Label displayed on hover */}
        <span className="absolute right-full mr-3 bg-navy-950 text-white font-semibold text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-navy-900">
          WhatsApp Support Desk
        </span>

        {/* WhatsApp Icon */}
        <svg 
          className="h-6 w-6 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.12 .949 11.493.949c-5.44 0-9.864 4.372-9.868 9.802a9.69 9.69 0 0 0 1.493 5.048l-.987 3.606 3.738-.971zm11.51-6.195c-.302-.15-1.78-.867-2.056-.967-.275-.1-.475-.15-.675.15-.2.3-.775.967-.95 1.166-.175.2-.35.225-.65.075-.302-.15-1.272-.464-2.423-1.485-.896-.792-1.5-1.77-1.275-2.07.224-.3.224-.483.075-.63-.135-.133-.3-.35-.45-.524-.15-.175-.2-.3-.3-.5s-.05-.375-.025-.524c.025-.15.2-.35.3-.5.1-.15.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.625-.925-2.225-.244-.583-.49-.5-.675-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.495 1.704.63.717.227 1.37.195 1.885.118.574-.085 1.78-.724 2.03-1.424.25-.7.25-1.3.175-1.424-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>
    </motion.div>
  );
};
