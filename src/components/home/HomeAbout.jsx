import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  SunMedium,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    number: "01",
    tag: "SURVEILLANCE",
    title: "Residential Security",
    description:
      "Intelligent 360° AI cameras, smart-motion alerts and secure recording for complete property protection.",
    badgeIcon: ShieldCheck,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEwAFpYXFCNDvmrWZtF9CV7MCnh2aKdFQ-J69vPPDtQ&s=10",
    features: ["360° AI", "PoE", "Human Detection"],
  },
  {
    number: "02",
    tag: "INTELLIGENT LIVING",
    title: "Smart Automation",
    description:
      "Centralized control for lighting, gates, climate, curtains and connected spaces from one system.",
    badgeIcon: Cpu,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    features: ["Mobile Control", "Scheduling", "Mesh Network"],
  },
  {
    number: "03",
    tag: "CLEAN ENERGY",
    title: "Solar Energy Hub",
    description:
      "Efficient on-grid and hybrid solar systems with intelligent energy monitoring and battery backup.",
    badgeIcon: SunMedium,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFvt68gCx0EOVl4cfPDHZtNtpj_gi9wHGci-be1dZw&s=10",
    features: ["Hybrid", "Smart Battery", "Energy Monitor"],
  },
];

// Stagger container for letters
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.022,
      delayChildren: 0.2,
    },
  },
};

// Individual character animation (comes up smoothly with blur fade)
const letterVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Word fade for description
const wordContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
      delayChildren: 0.4,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:py-20 selection:bg-blue-100 selection:text-blue-900">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-sky-100/50 blur-[120px]" />

      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
              <Sparkles className="h-3 w-3 text-blue-600" />
            </div>

            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
              About Squad Security
            </span>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-4xl font-normal leading-none tracking-tight text-blue-950 sm:text-5xl">
              Security that{" "}
              <span className="italic text-blue-600">thinks ahead.</span>
            </h2>

            <p className="max-w-sm font-sans text-xs leading-5 text-blue-900/60 md:text-right">
              Unified security, automation and energy solutions engineered for
              modern spaces.
            </p>
          </div>
        </motion.div>

        {/* SERVICES CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((item, index) => {
            const BadgeIcon = item.badgeIcon;
            const letters = Array.from(item.title);
            const words = item.description.split(" ");

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-[28px] border border-blue-900/10 bg-[#1b3859] p-4 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-5"
              >
                {/* Inner architectural border */}
                <div className="pointer-events-none absolute inset-4 rounded-[21px] border border-white/10" />

                <div className="relative z-10 overflow-hidden">
                  {/* =========================================
                      IMAGE — SILKY ENTRANCE FROM LEFT
                  ========================================== */}
                  <motion.div
                    initial={{ opacity: 0, x: -75, scale: 0.88, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.08 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative flex justify-center py-2"
                  >
                    {/* Circular portal */}
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-white/30 bg-white p-1 shadow-lg transition-transform duration-500 group-hover:scale-[1.04] sm:h-44 sm:w-44">
                      <div className="h-full w-full overflow-hidden rounded-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-2 rounded-full bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />

                      {/* Module badge */}
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-blue-900/10 bg-white/95 px-2.5 py-1 font-sans text-[8px] font-semibold text-blue-950 shadow-md backdrop-blur-md">
                        <BadgeIcon className="h-3 w-3 text-blue-600" />
                        MOD.{item.number}
                      </div>
                    </div>
                  </motion.div>

                  {/* =========================================
                      CONTENT — SMOOTH SLIDE + LETTER ANIMATION
                  ========================================== */}
                  <motion.div
                    initial={{ opacity: 0, x: 55 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-2 pb-2 pt-5 text-center"
                  >
                    {/* Tag badge with shimmer */}
                    <motion.span
                      initial={{ opacity: 0, y: -6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.4,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="inline-block font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-sky-300"
                    >
                      {item.tag}
                    </motion.span>

                    {/* TITLE — LETTER BY LETTER REVEAL */}
                    <motion.h3
                      variants={titleContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="mt-2 flex flex-wrap justify-center font-serif text-[27px] font-normal leading-[0.95] tracking-tight text-white"
                    >
                      {letters.map((char, charIdx) => (
                        <motion.span
                          key={charIdx}
                          variants={letterVariants}
                          className="inline-block whitespace-pre"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h3>

                    {/* DESCRIPTION — WORD BY WORD SMOOTH REVEAL */}
                    <motion.p
                      variants={wordContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="mx-auto mt-3 min-h-[60px] max-w-[270px] font-sans text-[11px] leading-5 text-blue-100/70"
                    >
                      {words.map((word, wordIdx) => (
                        <motion.span
                          key={wordIdx}
                          variants={wordVariants}
                          className="inline-block whitespace-pre"
                        >
                          {word}{" "}
                        </motion.span>
                      ))}
                    </motion.p>

                    {/* Feature chips */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.45,
                        delay: 0.5 + index * 0.08,
                      }}
                      className="mt-4 flex flex-wrap justify-center gap-1.5"
                    >
                      {item.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 font-sans text-[9px] text-blue-100"
                        >
                          <CheckCircle className="h-2.5 w-2.5 text-sky-400" />
                          {feature}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.45,
                        delay: 0.58 + index * 0.08,
                      }}
                      className="mt-5"
                    >
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-950 transition-all duration-300 hover:scale-105 hover:bg-sky-50"
                      >
                        Learn Details
                        <ArrowUpRight className="h-3 w-3 text-blue-600 transition-transform duration-300 group-hover:rotate-45" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer (Repeats on scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-2 border-t border-blue-100 pt-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-blue-900/40">
            Squad Security Architecture
          </span>

          <div className="flex items-center gap-3 font-sans text-[9px] text-blue-900/60">
            <span>Encrypted Feed</span>
            <span className="text-blue-400">•</span>
            <span>Smart Mesh</span>
            <span className="text-blue-400">•</span>
            <span>Energy Control</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}