import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  SunMedium,
  Cpu,
} from "lucide-react";

// 3 Background slides with images & thematic tags
const slides = [
  {
    id: 1,
    title: "CCTV & AI Security",
    icon: ShieldCheck,
    // Modern intelligent dome/bullet surveillance security camera
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yM9dNsfpgzTEOZ5aXZEr6o8Q8HAF2yGL4XQWcmAnWA&s=10",},
  {
    id: 2,
    title: "Architectural Solar Energy",
    icon: SunMedium,
    // Rooftop solar installation & clean energy architecture
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Home Automation",
    icon: Cpu,
    // Luxury automated smart interior with lighting & climate hubs
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload images for seamless transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Automatically cycle through background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[currentSlide];
  const SlideIcon = activeSlide.icon;

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-white px-6 py-24 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================= DYNAMIC BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-full w-full object-cover object-center"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop";
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Balanced Translucent Overlay: makes background image clearly visible while keeping text crisp */}
        <div className="absolute inset-0 bg-white/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />

        {/* High-End Technical Blueprint Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        
        {/* Dynamic Slide Indicator Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md"
        >
          <SlideIcon className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-900">
            {activeSlide.title}
          </span>
          <span className="h-1 w-1 rounded-full bg-blue-400" />
          <span className="font-mono text-[10px] text-blue-900/50">
            0{currentSlide + 1} / 0{slides.length}
          </span>
        </motion.div>

        {/* ================= MAIN HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-[64px] font-normal leading-[0.82] tracking-[-0.045em] text-blue-950 sm:text-7xl md:text-8xl lg:text-[128px]"
        >
          Smart.
          <br />

          <span className="relative inline-block italic text-blue-600">
            Secure.

            {/* Underline accent */}
            <span className="absolute -bottom-1 left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent sm:-bottom-2" />
          </span>

          <br />

          <span className="text-blue-950/90">
            Effortless.
          </span>
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mx-auto mt-10 max-w-2xl font-sans text-sm leading-7 text-blue-950/70 sm:text-base lg:text-lg"
        >
          Reliable CCTV security, intelligent smart-home automation, and
          high-efficiency solar energy systems designed to make modern spaces
          safer, smarter, and resilient.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
        >
          {/* Primary */}
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-4 rounded-full bg-blue-950 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-950/15 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:scale-105"
          >
            Explore Services
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* Secondary */}
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-blue-900/15 bg-white/90 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-blue-950 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* ================= SLIDER PAGINATION DOTS ================= */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === i
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-blue-300/60 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DECORATIVE FLOATING ACCENTS ================= */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute left-[7%] top-[25%] hidden h-16 w-16 rounded-2xl border border-blue-100 bg-white/80 shadow-md backdrop-blur-md lg:block"
      >
        <div className="flex h-full items-center justify-center">
          <Sparkles className="h-5 w-5 text-blue-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-[18%] right-[8%] hidden h-20 w-20 rounded-full border border-blue-200/80 bg-blue-50/60 backdrop-blur-sm lg:block"
      >
        <div className="absolute inset-3 rounded-full border border-blue-200/60" />
      </motion.div>

      <div className="absolute left-[16%] bottom-[20%] hidden h-2 w-2 rounded-full bg-blue-500 lg:block" />
      <div className="absolute right-[17%] top-[23%] hidden h-2 w-2 rounded-full bg-blue-400 lg:block" />
    </section>
  );
}