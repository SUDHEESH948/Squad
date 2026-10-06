import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { companyInfo } from "../data/companyData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-blue-950 to-indigo-950 border-t border-blue-900/50 pt-14 pb-6">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[130px]" />

        <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 w-[400px] h-[250px] rounded-full bg-indigo-500/10 blur-[120px]" />

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">


          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >

              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_8px_30px_rgba(14,165,233,0.12)] group-hover:bg-sky-400/10 transition-all duration-300">

                <ShieldCheck className="h-6 w-6 text-sky-300" />

              </div>

              <span className="text-lg font-bold tracking-[0.16em] text-white">
                SQUAD
              </span>

            </Link>


            <p className="mt-5 text-sm leading-7 text-blue-100/65 max-w-xs">
              {companyInfo.tagline} High-performance CCTV, home automation,
              and clean solar setups.
            </p>


            {/* Small accent */}

            <div className="mt-6 flex items-center gap-2">

              <span className="w-8 h-px bg-sky-400" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                Smart • Secure • Connected
              </span>

            </div>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>

            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-blue-100/60 hover:text-sky-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-blue-100/60 hover:text-sky-300 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-blue-100/60 hover:text-sky-300 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-blue-100/60 hover:text-sky-300 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-blue-100/60 hover:text-sky-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              CORE SOLUTIONS
          ================================================== */}

          <div>

            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Core Solutions
            </h4>

            <ul className="space-y-3 text-sm">

              <li className="text-blue-100/60 hover:text-sky-300 transition-colors cursor-default">
                CCTV Surveillance
              </li>

              <li className="text-blue-100/60 hover:text-sky-300 transition-colors cursor-default">
                Smart Automation
              </li>

              <li className="text-blue-100/60 hover:text-sky-300 transition-colors cursor-default">
                Remote Gate & Shutter
              </li>

              <li className="text-blue-100/60 hover:text-sky-300 transition-colors cursor-default">
                Solar Systems
              </li>

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Contact
            </h4>

            <div className="space-y-3">

              <p className="text-sm text-blue-100/70">
                {companyInfo.contactPerson}
              </p>

              <p className="text-sm text-blue-100/70">
                {companyInfo.phones.join(", ")}
              </p>

              <p className="text-xs leading-6 text-blue-100/45">
                {companyInfo.address}
              </p>

            </div>


            {/* Contact link */}

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-6 text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors"
            >
              Start a conversation

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

            </Link>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="border-t border-white/10 mt-12 pt-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-xs text-blue-100/40 text-center sm:text-left">
              © {new Date().getFullYear()} Squad Security System. All rights reserved.
            </p>

            <p className="text-[11px] uppercase tracking-[0.16em] text-blue-100/30">
              Security • Automation • Solar
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}