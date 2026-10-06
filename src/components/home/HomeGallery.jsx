import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Camera,
  Cpu,
  Sun,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";

const img = (id) =>
  `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;


const galleryItems = [
  {
    title: "CCTV Installation",
    category: "SURVEILLANCE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrw2ht4yZHLSYk_Zlrl-mywYmB3-NRrAbUPsUzIsY1Q&s=10",
    number: "01",
    icon: Camera,
    x: [-450, -280, 0],
    y: [40, 30, -150],
    rotate: -8,
  },
  {
    title: "Smart Automation",
    category: "CONNECTED HOMES",
    image: img("photo-1558002038-1055907df827"),
    number: "02",
    icon: Cpu,
    x: [-150, -95, 0],
    y: [-10, -10, -50],
    rotate: -3,
  },
  {
    title: "Solar Installation",
    category: "CLEAN GENERATION",
    image: img("photo-1509391365360-2e959784a276"),
    number: "03",
    icon: Sun,
    x: [150, 95, 0],
    y: [-10, -10, 50],
    rotate: 3,
  },
  {
    title: "Access Gate Control",
    category: "PERIMETER DEFENSE",
    image: img("photo-1584438784894-089d6a62b8fa"),
    number: "04",
    icon: ShieldCheck,
    x: [450, 280, 0],
    y: [40, 30, 150],
    rotate: 8,
  },
];

// 0 = desktop, 1 = tablet, 2 = mobile
function useLayout() {
  const get = () =>
    typeof window === "undefined" ? 0 : window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 1 : 0;
  const [l, setL] = useState(get);
  useEffect(() => {
    const on = () => setL(get());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return l;
}

/*
 * NEW ANIMATION: "DEAL & SCAN"
 * 1. Cards are dealt from a face-down stack into a fan/arc (staggered).
 * 2. Each card flips in 3D (rotateY 90 -> 0) as it lands.
 * 3. (scanner removed)
 * 4. On hover: 3D mouse-tilt with a moving light glare.
 */
function GalleryCard({ item, index, progress, layout }) {
  const Icon = item.icon;
  const smooth = useSpring(progress, { stiffness: 45, damping: 20, mass: 0.8 });

  const s = 0.05 + index * 0.02; // all start together at center
  const e = 0.75;

  const isMobile = layout === 2;
  const w = [270, 220, 190][layout];

  const x = useTransform(smooth, [s, e], [0, isMobile ? 0 : item.x[layout]]);
  const y = useTransform(smooth, [s, e], [0, isMobile ? item.y[2] : item.y[layout]]);
  const rotate = useTransform(smooth, [s, e], [0, item.rotate]);
  const scale = useTransform(smooth, [s, 0.3, e], [0.72, 0.88, 1]);
  const flip = useTransform(smooth, [s, s + 0.3], [90, 0]);
  const opacity = useTransform(smooth, [s, s + 0.1], [0, 1]);
  const imageScale = useTransform(smooth, [s, e], [1.25, 1]);

  // mouse tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 18 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 18 });
  const rotateY = useTransform([flip, tiltY], ([a, b]) => a + b);
  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 55%)`;

  const onMove = (ev) => {
    const r = ev.currentTarget.getBoundingClientRect();
    mx.set((ev.clientX - r.left) / r.width - 0.5);
    my.set((ev.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        width: w,
        height: w * 1.25,
        x,
        y,
        rotate,
        scale,
        opacity,
        rotateY,
        rotateX: tiltX,
        zIndex: 10 - index,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ zIndex: 50, scale: 1.05 }}
      className="absolute inset-0 m-auto overflow-hidden rounded-[26px] border border-white/30 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.25)] will-change-transform"
    >
      <motion.img
        src={item.image}
        alt={item.title}
        style={{ scale: imageScale }}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/45 to-blue-500/5" />

      {/* GLARE */}
      <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 mix-blend-soft-light" />

      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 font-mono text-[9px] font-semibold text-white backdrop-blur-md">
        {item.number}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/10 backdrop-blur-md">
            <Icon className="h-3.5 w-3.5 text-sky-300" />
          </div>
          <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.18em] text-sky-200">
            {item.category}
          </span>
        </div>
        <h3 className="font-serif text-lg font-normal leading-tight text-white sm:text-xl">{item.title}</h3>
        <div className="mt-3 flex items-center gap-2 font-sans text-[8px] font-semibold uppercase tracking-[0.14em] text-white/80">
          <span>Explore Details</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
            <ArrowUpRight className="h-3 w-3 text-sky-300" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomeGallery() {
  const ref = useRef(null);
  const layout = useLayout();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 20%"] });

  const headerScale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0.4, 1]);
  const glowScale = useTransform(scrollYProgress, [0.05, 0.75], [0.7, 1.5]);
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.4, 0.75], [0.3, 0.15, 0]);
  const indOpacity = useTransform(scrollYProgress, [0.05, 0.3, 0.55], [1, 0.6, 0]);
  const indScale = useTransform(scrollYProgress, [0.05, 0.4], [1, 1.5]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-5 py-24 selection:bg-blue-100 selection:text-blue-900 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-sky-100/60 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div style={{ scale: headerScale, opacity: headerOpacity }} className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
              Featured Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            See our work{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text italic text-transparent">
              in action.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-xs leading-6 text-blue-900/65 sm:text-sm">
            Scroll to watch our installations open up from one stack at the center into a complete showcase.
          </p>
        </motion.div>

        {/* CARD STAGE (perspective enables the 3D flip) */}
        <div
          style={{ perspective: 1200 }}
          className="relative flex h-[620px] w-full items-center justify-center sm:h-[470px] md:h-[500px]"
        >
          <motion.div
            style={{ scale: glowScale, opacity: glowOpacity }}
            className="pointer-events-none absolute h-64 w-64 rounded-full bg-blue-400/40 blur-[90px]"
          />

          {galleryItems.map((item, i) => (
            <GalleryCard key={item.number} item={item} index={i} progress={scrollYProgress} layout={layout} />
          ))}

          <motion.div
            style={{ opacity: indOpacity, scale: indScale }}
            className="pointer-events-none absolute z-30 flex flex-col items-center justify-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-white/80 shadow-xl backdrop-blur-md">
              <ZoomIn className="h-5 w-5 text-blue-600" />
            </div>
            <span className="mt-3 rounded-full bg-white/80 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-blue-900/60 backdrop-blur-md">
              Scroll to explore
            </span>
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-10">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-blue-900/15 bg-blue-950 px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 sm:px-8 sm:text-xs"
          >
            <span>View All Installations</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-blue-100 pt-6 text-[9px] sm:flex-row">
          <span className="font-mono uppercase tracking-[0.2em] text-blue-950/40">
            Squad Security • Interactive Deck
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 text-blue-900/70 sm:gap-4">
            <span>Surveillance</span>
            <span className="text-blue-400">•</span>
            <span>Mesh Automation</span>
            <span className="text-blue-400">•</span>
            <span>Photovoltaics</span>
          </div>
        </div>
      </div>
    </section>
  );
}