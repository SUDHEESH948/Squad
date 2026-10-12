import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { companyInfo } from "../data/companyData";

// Official WhatsApp icon SVG
function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.957.564 3.782 1.543 5.334L2.094 22l4.808-1.424a9.98 9.98 0 0 0 5.129 1.455h.004c5.531 0 10.031-4.5 10.031-10.031C22.066 6.5 17.562 2 12.031 2zm5.887 14.281c-.246.691-1.223 1.289-1.996 1.457-.527.113-1.215.203-3.535-.758-2.969-1.227-4.887-4.242-5.035-4.441-.145-.195-1.2-1.594-1.2-3.043 0-1.449.762-2.16 1.031-2.457.273-.297.598-.371.797-.371.199 0 .402.004.578.012.188.008.438-.07.684.523.254.613.867 2.117.945 2.27.078.156.133.336.027.543-.105.207-.156.336-.312.516-.152.18-.324.402-.461.543-.156.152-.32.316-.137.629.184.312.816 1.348 1.746 2.176 1.199 1.07 2.207 1.402 2.52 1.555.312.152.496.133.68-.078.188-.215.797-.93 1.012-1.246.211-.316.426-.266.715-.156.293.113 1.84.867 2.156 1.027.316.156.527.234.605.371.078.133.078.781-.168 1.472z" />
    </svg>
  );
}

// Official Instagram icon SVG
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function FloatingContact() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappMessage = encodeURIComponent(
    "Hello Squad Security System, I would like to know more about your CCTV and home automation services."
  );

  const contactButtons = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/squad_security_system?stkn=MWdlZHl4NmdldXl3eA==",
      isExternal: true,
      icon: InstagramIcon,
      // Official Instagram multi-stop gradient
      gradient:
        "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      shadow: "shadow-[0_4px_22px_rgba(238,42,123,0.45)]",
      hoverRing: "hover:ring-pink-400/50",
      delay: 0.1,
      floatDuration: 3.8,
    },
    {
      id: "whatsapp",
      label: "Message on WhatsApp",
      href: `https://wa.me/${companyInfo.whatsappNumber}?text=${whatsappMessage}`,
      isExternal: true,
      icon: WhatsAppIcon,
      // Official WhatsApp green
      gradient: "bg-[#25D366]",
      shadow: "shadow-[0_4px_22px_rgba(37,211,102,0.45)]",
      hoverRing: "hover:ring-emerald-400/50",
      delay: 0.2,
      floatDuration: 4.2,
    },
    {
      id: "phone",
      label: "Call Us (+91 92077 36929)",
      href: `tel:${companyInfo.mobilePhone || "+919207736929"}`,
      isExternal: false,
      icon: Phone,
      // Professional electric blue gradient matching brand identity
      gradient: "bg-gradient-to-tr from-[#0284c7] via-[#0ea5e9] to-[#38bdf8]",
      shadow: "shadow-[0_4px_22px_rgba(14,165,233,0.45)]",
      hoverRing: "hover:ring-sky-400/50",
      delay: 0.3,
      floatDuration: 4.6,
    },
  ];

  return (
    <aside
      aria-label="Quick Contact Shortcuts"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3.5 pointer-events-auto"
    >
      {contactButtons.map((btn) => {
        const IconComponent = btn.icon;

        return (
          <motion.div
            key={btn.id}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: shouldReduceMotion ? 0 : [0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.4, delay: btn.delay },
              scale: { duration: 0.4, delay: btn.delay },
              y: shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: btn.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
            }}
            className="relative group"
          >
            {/* Tooltip on desktop */}
            <div
              role="tooltip"
              className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            >
              <div className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/15 bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <span>{btn.label}</span>
                {/* Micro chevron arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-slate-950/90" />
              </div>
            </div>

            {/* Action Button */}
            <motion.a
              href={btn.href}
              target={btn.isExternal ? "_blank" : undefined}
              rel={btn.isExternal ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
              aria-label={btn.label}
              className={`relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full text-white border border-white/25 backdrop-blur-md transition-all duration-300 hover:ring-4 ${btn.gradient} ${btn.shadow} ${btn.hoverRing} focus:outline-none focus:ring-4 focus:ring-cyan-400`}
            >
              {/* Inner glass gloss highlight */}
              <div className="pointer-events-none absolute inset-x-1 top-1 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent" />

              <IconComponent className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
            </motion.a>
          </motion.div>
        );
      })}
    </aside>
  );
}

