import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Cable,
  ArrowRight,
  CheckCircle,
  Building2,
  Cpu,
  Radio,
  Mic,
  Zap,
  Sliders,
  Smartphone,
  Eye,
  Lock,
} from "lucide-react";

// ================= BROCHURE DATA =================
const companyInfo = {
  name: "Squad Security System",
  established: "2018",
  tagline: "We make homes safer and smarter.",
  description:
    "Founded on the belief that security shouldn't be complicated, Squad bridges the gap between advanced technology and everyday living. We understand that your space is more than just four walls—it's where life happens.",

  // Brands directly extracted from the top brochure banner
  brands: [
    {
      name: "LUMI",
      subtitle: "Smart Living",
      svg: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto fill-current">
          <text x="5" y="28" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="4">
            LUMI
          </text>
        </svg>
      ),
    },
    {
      name: "DomoGenie",
      subtitle: "Simple and Smart",
      svg: (
        <svg viewBox="0 0 160 45" className="h-7 w-auto fill-current">
          <path d="M125 15 C132 8, 142 8, 148 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M129 19 C133 15, 140 15, 144 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="0.5">
            Dom<tspan fill="#0284c7">@</tspan>Genie
          </text>
          <text x="6" y="38" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="8" letterSpacing="1.5" fill="#64748b">
            Simple and Smart
          </text>
        </svg>
      ),
    },
    {
      name: "TREMBLAY",
      subtitle: "Sound Matters",
      svg: (
        <svg viewBox="0 0 150 40" className="h-7 w-auto fill-current">
          <text x="2" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" letterSpacing="2.5">
            TREMBLAY
          </text>
          <text x="4" y="34" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="7" letterSpacing="3" fill="#64748b">
            SOUND MATTERS
          </text>
        </svg>
      ),
    },
    {
      name: "ESCULT",
      subtitle: "Smart Systems",
      svg: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto fill-current">
          <rect x="5" y="8" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" rx="2" />
          <path d="M10 13 H19 M10 17 H15" stroke="currentColor" strokeWidth="2" />
          <text x="32" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">
            ESCULT
          </text>
        </svg>
      ),
    },
    {
      name: "ZMOTE",
      subtitle: "Universal IoT",
      svg: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto fill-current">
          <rect x="2" y="8" width="85" height="24" rx="12" fill="#0B3B66" />
          <text x="14" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" letterSpacing="2.5" fill="#ffffff">
            zmote
          </text>
        </svg>
      ),
    },
    {
      name: "OZONE",
      subtitle: "Architectural & Locks",
      svg: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto fill-current">
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="21" letterSpacing="3">
            OZONE
          </text>
        </svg>
      ),
    },
  ],

  // Connectivity protocols listed in the brochure
  protocols: [
    {
      name: "KNX",
      type: "Wired Automation",
      desc: "Industrial-grade stability with zero latency.",
      color: "from-blue-600 to-sky-500",
    },
    {
      name: "Z-WAVE",
      type: "Hybrid Solutions",
      desc: "Robust mesh networking with dedicated frequency.",
      color: "from-cyan-600 to-teal-500",
    },
    {
      name: "ZIGBEE & WI-FI",
      type: "Wireless Solutions",
      desc: "Flexible, ultra-responsive smart device mesh.",
      color: "from-rose-500 to-amber-500",
    },
  ],

  // Voice & Ecosystem Compatibility
  platforms: [
    { name: "Google Assistant", category: "Voice Control" },
    { name: "Amazon Alexa", category: "Voice Control" },
    { name: "Apple Siri", category: "Voice Control" },
    { name: "Apple Shortcuts", category: "Automation" },
    { name: "Google HOME", category: "Smart Platform" },
    { name: "Apple HomeKit Ready", category: "Smart Platform" },
  ],

  // Key Benefits from page 3 of the brochure
  keyBenefits: [
    {
      title: "Security & Safety",
      description: "Monitor and protect your space with automated alerts and controls.",
      icon: ShieldCheck,
    },
    {
      title: "Energy Saving",
      description: "Control and schedule electrical appliances to reduce everyday power use.",
      icon: Zap,
    },
    {
      title: "Easy to Use",
      description: "Simple, clean interface that’s straightforward for every family member.",
      icon: Sliders,
    },
    {
      title: "Simple Installation",
      description: "Retrofits cleanly with your existing electrical conduit and wiring.",
      icon: Cpu,
    },
    {
      title: "Custom Scenarios",
      description: "One-touch scenes to automatically orchestrate lights, gate, and security.",
      icon: Sparkles,
    },
    {
      title: "Remote Monitoring",
      description: "Full real-time visibility and control right from your smartphone.",
      icon: Smartphone,
    },
  ],

  cablePartners: ["Finolex", "D-Link", "Polycab", "Schneider Electric"],
};

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6FAFF] text-[#102A43]">
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-sky-200/30 blur-[140px]" />
        <div className="absolute -right-40 top-[25%] h-[550px] w-[550px] rounded-full bg-blue-100/40 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-100/30 blur-[130px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[65vh] items-center justify-center px-5 pt-20 pb-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            </div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
              About {companyInfo.name}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-[#102A43] sm:text-6xl lg:text-7xl"
          >
            Security that is <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text italic text-transparent">
              smart & effortless.
            </span>
          </motion.h1>

          {/* Story intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            {companyInfo.tagline} {companyInfo.description}
          </motion.p>
        </motion.div>
      </section>

      {/* ================= GLOBAL PARTNERS WITH LOGOS ================= */}
      <section className="relative px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-blue-100 bg-white/95 p-7 shadow-[0_20px_70px_rgba(37,99,235,0.06)] backdrop-blur-xl sm:p-10">
            {/* Header */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Leading Global Brands
                </p>
                <h2 className="font-serif text-2xl font-normal text-[#102A43] sm:text-3xl">
                  Technology Brands We Work With
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
                We partner directly with leading manufacturers to provide reliable, certified, and future-ready automation hardware.
              </p>
            </div>

            {/* Brand Logo Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {companyInfo.brands.map((brand, idx) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/60 p-5 text-slate-700 transition-all hover:border-blue-200 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="flex h-12 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {brand.svg}
                  </div>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600">
                    {brand.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROTOCOLS & VOICE INTEGRATIONS ================= */}
      <section className="relative px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            
            {/* PROTOCOLS & SOLUTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between rounded-[32px] border border-blue-100 bg-white/95 p-7 shadow-[0_20px_70px_rgba(37,99,235,0.06)] backdrop-blur-xl sm:p-9"
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Radio className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      Standardized Architectures
                    </p>
                    <h3 className="font-serif text-2xl font-normal text-[#102A43]">
                      Protocols & Solutions
                    </h3>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-500">
                  We configure industry-standard communication backbones to prevent system dropouts, guaranteeing zero-latency control.
                </p>

                <div className="space-y-3.5">
                  {companyInfo.protocols.map((proto) => (
                    <div
                      key={proto.name}
                      className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-sans text-xs font-black tracking-wider text-blue-700">
                          {proto.name.split(" ")[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#102A43]">{proto.name}</h4>
                          <p className="text-xs text-slate-400">{proto.desc}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700">
                        {proto.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cabling Backbone */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-slate-400">
                  Infrastructure & Cabling Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.cablePartners.map((cable) => (
                    <span
                      key={cable}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      <Cable className="h-3 w-3 text-sky-500" />
                      {cable}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* VOICE & SMART PLATFORMS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-between rounded-[32px] border border-sky-100 bg-gradient-to-br from-[#0B3B66] via-[#102A43] to-[#0A2540] p-7 text-white shadow-[0_20px_70px_rgba(11,59,102,0.18)] sm:p-9"
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <Mic className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      Seamless Ecosystems
                    </p>
                    <h3 className="font-serif text-2xl font-normal text-white">
                      Compatible Voice & Control
                    </h3>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs italic leading-relaxed text-sky-200/90 sm:text-sm">
                  “Your voice is your remote control. Simply speak to control lights, locks, temperature, and security systems.”
                </div>

                <p className="mt-4 mb-6 text-sm leading-relaxed text-slate-300">
                  Squad connects to your existing smart setup without requiring you to switch phones or learn entirely new hubs.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {companyInfo.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm transition hover:border-cyan-400 hover:bg-white/15"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-cyan-400" />
                      <div>
                        <div className="text-xs font-bold text-white">{platform.name}</div>
                        <div className="text-[10px] text-slate-400">{platform.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote from brochure */}
              <div className="mt-8 border-t border-white/10 pt-5 text-xs text-sky-200">
                Works directly with your iPhone, Android device, smart speakers, and home hubs.
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS (FROM BROCHURE) ================= */}
      <section className="relative px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal text-[#102A43] sm:text-4xl">
              How SQUAD is your smart automation buddy
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
              From the moment you walk into your space, everything works exactly as you expect—without you having to think about it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyInfo.keyBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-[0_15px_40px_rgba(37,99,235,0.05)] transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-[#102A43]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="px-5 pb-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B3B66] via-[#0E5A88] to-[#1687BA] px-7 py-12 shadow-[0_25px_80px_rgba(14,116,180,0.18)] sm:px-12 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-300/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-300/15 blur-[100px]" />

          <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
                Smart Security Starts Here
              </p>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.03em] text-white sm:text-4xl">
                Ready to make your space smarter?
              </h2>
              <p className="mt-3 max-w-xl font-sans leading-7 text-blue-100">
                Explore our security, automation, and solar solutions tailored for your residence or business.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-7 py-3.5 font-sans font-bold text-[#0B3B66] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}