import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Send,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { companyInfo } from "../data/companyData";

const ease = [0.22, 1, 0.36, 1];

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/*
 * ANIMATION HELPERS
 */
function Words({ text, className = "", delay = 0 }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 14 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.12, ease }}
          className="mr-[0.25em] inline-block"
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

function Ripple({ icon: Icon, tone }) {
  return (
    <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center">
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
          className="absolute inset-0 rounded-xl border border-sky-300/60"
        />
      ))}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow-sm backdrop-blur-md">
        <Icon className={`h-5 w-5 ${tone}`} />
      </div>
    </div>
  );
}

function Field({ label, index, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.25 + index * 0.08, ease }}
      className="group relative"
    >
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors group-focus-within:text-sky-600">
        {label}
      </label>
      {children}
      <span className="pointer-events-none absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 transition-transform duration-500 group-focus-within:scale-x-100" />
    </motion.div>
  );
}

const inputCls =
  "w-full bg-[#F7FBFF] border border-sky-100 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all";

function SuccessBurst() {
  const dots = Array.from({ length: 14 });
  return (
    <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
      {dots.map((_, i) => {
        const a = (i / dots.length) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: Math.cos(a) * 70, y: Math.sin(a) * 70, opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
            className={`absolute h-2 w-2 rounded-full ${i % 2 ? "bg-sky-400" : "bg-indigo-400"}`}
          />
        );
      })}
      <svg viewBox="0 0 96 96" className="h-24 w-24">
        <motion.circle
          cx="48"
          cy="48"
          r="42"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M30 50 L43 63 L67 36"
          fill="none"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, delay: 0.55, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const rows = [
    {
      icon: MapPin,
      tone: "text-sky-300",
      label: "Headquarters & Experience Hub",
      body: <p className="text-sm leading-6 text-blue-50 sm:text-base">{companyInfo.address}</p>,
    },
    {
      icon: Phone,
      tone: "text-blue-300",
      label: "Direct Phone & Mobile",
      body: (
        <>
          <p className="text-sm font-bold text-white">{companyInfo.contactPerson}</p>
          <p className="mt-1 text-sm text-blue-100/90">{companyInfo.phones?.join(" / ") || "+91 98765 43210"}</p>
        </>
      ),
    },
    {
      icon: Mail,
      tone: "text-sky-300",
      label: "Official Correspondence",
      body: (
        <a
          href="mailto:contact@squadsecurity.com"
          className="text-sm text-blue-50 transition-colors hover:text-sky-300 sm:text-base"
        >
          contact@squadsecurity.com
        </a>
      ),
    },
    {
      icon: Clock,
      tone: "text-indigo-300",
      label: "Support & Working Hours",
      body: <p className="text-sm text-blue-50">{companyInfo.workingHours || "Mon – Sat: 9:00 AM – 7:00 PM"}</p>,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBFF] text-slate-800 font-sans">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-sky-200/35 blur-[140px]" />
        <div className="absolute -right-40 top-[35%] h-[550px] w-[550px] rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[450px] rounded-full bg-sky-100/40 blur-[120px]" />
        <div className="absolute left-[40%] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-100/25 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-6 pt-24 pb-14">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-5 py-2.5 shadow-[0_8px_30px_rgba(14,165,233,0.08)] backdrop-blur-xl"
          >
            <MessageSquare className="h-4 w-4 text-sky-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-sm">
              Connect With Squad Security
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
            <Words text="Let's make your space" delay={0.15} />
            <br />
            <Words
              text="smarter & safer."
              delay={0.65}
              className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Schedule a site visit, explore live hardware demonstration demos, or request a complete project quotation for security, automation, and solar setups.
          </motion.p>
        </div>
      </section>

      {/* ================= TOP FEATURED VISUAL CARDS ================= */}
      <section className="relative px-6 pb-12">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Experience Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] border border-sky-100 bg-slate-900 p-6 shadow-md shadow-blue-500/5 min-h-[220px]"
          >
            <img
              src={u("photo-1558002038-1055907df827", 700)}
              alt="Live Smart Home Demo"
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="inline-block rounded-full bg-sky-500/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                Experience Center
              </span>
              <h4 className="mt-2 font-serif text-xl font-bold">Interactive Hardware Demo</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Experience glass touch panels, automated curtains, and video locks hands-on.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Free Site Survey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] border border-sky-100 bg-slate-900 p-6 shadow-md shadow-blue-500/5 min-h-[220px]"
          >
            <img
              src={u("photo-1513694203232-719a280e022f", 700)}
              alt="Free On-Site Assessment"
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="inline-block rounded-full bg-blue-500/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                On-Site Visit
              </span>
              <h4 className="mt-2 font-serif text-xl font-bold">Property Security Audit</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Our technicians evaluate perimeter sightlines and electrical cabling on-premise.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Instant WhatsApp / Quick Chat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] border border-sky-100 bg-slate-900 p-6 shadow-md shadow-blue-500/5 min-h-[220px] sm:col-span-2 lg:col-span-1"
          >
            <img
              src={u("photo-1557597774-9d273605dfa9", 700)}
              alt="Rapid Dispatch"
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="inline-block rounded-full bg-emerald-500/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                Fast Response
              </span>
              <h4 className="mt-2 font-serif text-xl font-bold">Quick Technical Support</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Direct WhatsApp assistance and emergency support for installed networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT INFO & INQUIRY FORM ================= */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
          {/* INFO COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-950 p-7 text-white shadow-[0_25px_80px_rgba(30,64,175,0.16)] sm:p-9 lg:col-span-5"
          >
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-sky-400/20 blur-[100px]" />
            <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-blue-400/15 blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-sm backdrop-blur-xl">
                  <ShieldCheck className="h-7 w-7 text-sky-300" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                    Trusted Security Partner
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    {companyInfo.name}
                  </h2>
                </div>
              </div>

              {/* Connecting line + Rows */}
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
                  style={{ originY: 0 }}
                  className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-sky-300/70 via-blue-300/40 to-transparent"
                />

                <div className="space-y-6">
                  {rows.map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.35 + i * 0.2, ease }}
                      className="relative flex items-start gap-4"
                    >
                      <Ripple icon={r.icon} tone={r.tone} />
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-200/60">
                          {r.label}
                        </p>
                        {r.body}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom mini image banner */}
            <div className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-sky-400" />
                <p className="text-xs text-blue-100">
                  Residential, commercial, and industrial automation solutions delivered with genuine parts warranty.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/90 p-7 shadow-[0_20px_70px_rgba(37,99,235,0.08)] backdrop-blur-2xl sm:p-9 lg:col-span-7"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/20 blur-[90px]" />

            {!submitted ? (
              <>
                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    <CalendarCheck className="h-3.5 w-3.5" /> Book Consultation
                  </div>
                  <h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.035em] text-slate-900 sm:text-4xl">
                    Request an Estimate
                  </h2>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-slate-500">
                    Fill out the form below and an engineer will contact you with a customized architecture and quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your Name" index={0}>
                      <input required type="text" placeholder="John Doe" className={inputCls} />
                    </Field>
                    <Field label="Phone Number" index={1}>
                      <input required type="tel" placeholder="+91 98765 43210" className={inputCls} />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email Address" index={2}>
                      <input required type="email" placeholder="name@domain.com" className={inputCls} />
                    </Field>
                    <Field label="Service Required" index={3}>
                      <select className={inputCls}>
                        <option>Full Smart Villa Automation</option>
                        <option>CCTV Surveillance Network</option>
                        <option>Gate / Motorized Shutter Automation</option>
                        <option>Rooftop Solar Solutions</option>
                        <option>Smart Locks & Video Intercom</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Project & Property Details" index={4}>
                    <textarea
                      rows="4"
                      placeholder="Specify your property type, rooms/areas to automate, or specific requirements..."
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:from-sky-500 hover:via-blue-500 hover:to-indigo-500"
                  >
                    Send Quotation Request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>
              </>
            ) : (
              <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center text-center">
                <SuccessBurst />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                    Confirmation Received
                  </p>
                  <h3 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                    We've received your request. An engineer from Squad Security System will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-xl border border-sky-200 bg-white px-7 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-sky-400 hover:text-sky-700 hover:shadow-md"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-sky-100 bg-white/80 p-7 shadow-[0_15px_50px_rgba(37,99,235,0.06)] backdrop-blur-xl sm:p-10"
        >
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-sky-200/20 blur-[80px]" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Direct Consultation
              </p>
              <h3 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                Prefer speaking directly to an expert?
              </h3>
              <p className="mt-2 font-sans text-sm text-slate-500">
                Call our technical team right now for instant consultation and guidance.
              </p>
            </div>

            <a
              href={`tel:${companyInfo.phones?.[0] || ""}`}
              className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/15 transition-all hover:from-sky-500 hover:to-blue-500"
            >
              <motion.span
                animate={{ rotate: [0, -18, 16, -14, 12, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 2.2 }}
                className="inline-flex"
              >
                <Phone className="h-4 w-4" />
              </motion.span>
              Call Our Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}