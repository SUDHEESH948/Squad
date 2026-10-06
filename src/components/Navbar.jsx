
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* ================= DESKTOP / MAIN NAV ================= */}
        <nav className="relative flex h-[68px] items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">

          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            className="group flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-50">
              <ShieldCheck
                className="h-5 w-5 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-600"
                strokeWidth={1.7}
              />

              {/* Small accent */}
              <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            {/* Brand */}
            <div className="leading-none">
              <span className="block font-serif text-[22px] tracking-[-0.03em] text-blue-950">
                SQUAD
              </span>

              <span className="mt-1 block font-sans text-[7px] font-bold uppercase tracking-[0.28em] text-emerald-600">
                Security System
              </span>
            </div>
          </NavLink>

          {/* ================= DESKTOP LINKS ================= */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative px-4 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 ${
                    isActive
                      ? "text-blue-950"
                      : "text-slate-500 hover:text-blue-950"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    {/* Active / hover line */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-emerald-500 transition-all duration-300 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ================= CONTACT CTA ================= */}
        

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-950 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 md:hidden"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="mt-2 overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 p-3 shadow-[0_15px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl md:hidden">

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-950"
                      : "text-slate-500 hover:bg-slate-50 hover:text-blue-950"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-blue-950 px-4 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white"
            >
              Get Started
              <ArrowUpRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}