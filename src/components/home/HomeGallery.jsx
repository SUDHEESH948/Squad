import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Camera,
  Cpu,
  BellRing,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Scan,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";

/****Task: Completely Redesign `HomeGallery.jsx`**

Remove the entire existing gallery design and replace it with a completely new, premium 3D animated gallery for Squad Security System.

**Important requirements**
- Do not preserve the existing card deck, layout, animations, background grid, scan reticle, decorative glows, or current section styling.
- Remove unused imports, functions, state, and animation logic from the old implementation.
- Create a fresh design rather than modifying the existing components.

**New animation concept**
1. Start with a clean, cinematic introduction featuring the heading “Security in Motion”.
2. Display a realistic 3D CCTV camera entering from the right side of the screen, rotating gently into position.
3. Reveal the heading, description, and service information with smooth staggered animations.
4. Transition to a new service card featuring CCTV installation, with an image reveal and subtle 3D tilt.
5. Animate the next cards into view as the user scrolls, using smooth horizontal movement, depth, and perspective.
6. Include four service cards:
   - CCTV Installation
   - Smart Home Automation
   - Smart Video Intercom
   - Access Gate Control
7. Each card should feature a high-quality image, service title, short description, and a minimal “Explore Service” link.
8. Finish with a premium call-to-action button linking to the existing `/projects` route.

**Visual direction**
- Premium architectural security brand.
- White and very light blue backgrounds with deep navy typography.
- Sky-blue accents, realistic imagery, soft shadows, and generous spacing.
- Minimal, modern composition with no unnecessary decorative elements.
- Responsive on desktop, tablet, and mobile.

**Technical requirements**
- React, Tailwind CSS, Framer Motion, and Lucide React.
- Use scroll-triggered animation, staggered entrances, image reveals, and subtle 3D hover effects.
- Keep animations smooth and performant.
- Respect reduced-motion preferences.
- Preserve the existing `/projects` route.
- Export the component as `HomeGallery` from `HomeGallery.jsx`.
- Provide the complete replacement code, ready to paste, with no dependency on the old gallery implementation.

The final result must look and behave like a completely new website section, not a restyled version of the old gallery.
 * Verified Service Catalog Data
 */
const services = [
  {
    id: "cctv-installation",
    number: "01",
    category: "SURVEILLANCE ARCHITECTURE",
    title: "CCTV Installation & Monitoring",
    subtitle: "Ultra-HD Optical Surveillance",
    description:
      "Enterprise & residential 4K IP camera arrays engineered with AI-assisted human and vehicle motion detection, ultra-low-light night vision, and encrypted multi-device mobile streaming.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=900&auto=format&fit=crop",
    icon: Camera,
    accentColor: "sky",
    badge: "Core System",
    features: [
      "4K Ultra-HD Optical Sensors",
      "AI Person & Vehicle Analytics",
      "Infrared & Full-Color Night Vision",
      "Encrypted Multi-Device Live Feed",
    ],
  },
  {
    id: "smart-automation",
    number: "02",
    category: "INTELLIGENT LIVING",
    title: "Smart Home Automation",
    subtitle: "Centralized Environmental Control",
    description:
      "Unified architectural intelligence orchestrating smart ambient lighting scenes, automated climate routines, motorized window treatments, and responsive scene management.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=900&auto=format&fit=crop",
    icon: Cpu,
    accentColor: "blue",
    badge: "Connected Space",
    features: [
      "Centralized In-Wall Touch Panels",
      "Automated Custom Scene Modes",
      "Voice Assistant Integration",
      "Optimized Energy Automation",
    ],
  },
  {
    id: "video-intercom",
    number: "03",
    category: "ACCESS MANAGEMENT",
    title: "Smart Video Intercom",
    subtitle: "Encrypted Visitor Communication",
    description:
      "Crystal-clear two-way noise-canceling audio and full-color video entrance panels. Screen incoming visitors, trigger remote gate unlocking, and maintain timestamped digital logs.",
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=900&auto=format&fit=crop",
    icon: BellRing,
    accentColor: "teal",
    badge: "Visitor Control",
    features: [
      "Full HD Wide-Angle Video Feed",
      "Instant Mobile Call & Chime",
      "One-Touch Remote Gate Release",
      "Tamper-Proof IP65 Enclosure",
    ],
  },
  {
    id: "gate-control",
    number: "04",
    category: "PERIMETER DEFENSE",
    title: "Access Gate Control",
    subtitle: "Automated Physical Security",
    description:
      "Heavy-duty motorized sliding and swing gate mechanisms paired with touchless RFID credentials, automated barrier arms, and obstacle-sensing safety loops.",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=900&auto=format&fit=crop",
    icon: ShieldCheck,
    accentColor: "indigo",
    badge: "Perimeter Barrier",
    features: [
      "High-Torque Heavy Duty Motors",
      "Touchless RFID & Remote Fobs",
      "Anti-Crush Infrared Safety Loops",
      "Battery Backup Redundancy",
    ],
  },
];

/**
 * Realistic 3D CCTV Camera Component
 * Renders an architectural CCTV surveillance camera that enters smoothly
 * from the right side, gently rotates into position, projects a subtle spotlight cone,
 * and responds to subtle cursor tracking.
 */
function Realistic3DCamera() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse interaction for interactive 3D camera pan/tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 sm:p-8"
      style={{ perspective: 1200 }}
    >
      {/* Soft spotlight cone projecting from camera lens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute -left-20 sm:-left-36 top-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[220px] sm:h-[320px] origin-right"
        style={{
          background:
            "conic-gradient(from 180deg at 100% 50%, rgba(56, 189, 248, 0.18) 0deg, rgba(14, 165, 233, 0.04) 35deg, transparent 70deg)",
          filter: "blur(18px)",
        }}
      />

      {/* Camera 3D Assembly Container */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, x: 140, rotateY: 34, rotateX: 8, scale: 0.9 }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, x: 0, rotateY: -10, rotateX: 3, scale: 1 }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateXSpring,
          rotateY: shouldReduceMotion ? 0 : rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-[16/11]"
      >
        {/* Continuous gentle scanning sweep */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateY: [-12, -4, -12],
                  rotateX: [2, 6, 2],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          {/* SVG Photographic 3D CCTV Camera Model */}
          <svg
            viewBox="0 0 500 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_25px_35px_rgba(15,23,42,0.14)]"
          >
            <defs>
              {/* Gradients for camera chassis */}
              <linearGradient id="wallMountGrad" x1="440" y1="90" x2="480" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#94A3B8" />
                <stop offset="0.5" stopColor="#64748B" />
                <stop offset="1" stopColor="#334155" />
              </linearGradient>

              <linearGradient id="armGrad" x1="380" y1="120" x2="440" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CBD5E1" />
                <stop offset="0.6" stopColor="#94A3B8" />
                <stop offset="1" stopColor="#475569" />
              </linearGradient>

              <linearGradient id="bodyGrad" x1="180" y1="100" x2="380" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="0.25" stopColor="#F1F5F9" />
                <stop offset="0.7" stopColor="#E2E8F0" />
                <stop offset="1" stopColor="#94A3B8" />
              </linearGradient>

              <linearGradient id="visorGrad" x1="140" y1="80" x2="360" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFC" />
                <stop offset="0.5" stopColor="#E2E8F0" />
                <stop offset="1" stopColor="#CBD5E1" />
              </linearGradient>

              <linearGradient id="lensBezelGrad" x1="130" y1="130" x2="200" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E293B" />
                <stop offset="0.7" stopColor="#0F172A" />
                <stop offset="1" stopColor="#020617" />
              </linearGradient>

              {/* Optical glass reflection */}
              <radialGradient id="lensGlassGrad" cx="155" cy="180" r="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#0284C7" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#0369A1" />
                <stop offset="100%" stopColor="#082F49" />
              </radialGradient>

              <radialGradient id="sensorIrisGrad" cx="155" cy="180" r="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0369A1" />
                <stop offset="70%" stopColor="#0C4A6E" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>

              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- 1. Architectural Wall Mounting Base --- */}
            <rect x="445" y="100" width="30" height="130" rx="6" fill="url(#wallMountGrad)" />
            <circle cx="460" cy="120" r="4" fill="#334155" />
            <circle cx="460" cy="210" r="4" fill="#334155" />

            {/* --- 2. Swivel Bracket Arm & Ball Joint --- */}
            <path
              d="M445 155 L380 165 L375 195 L445 185 Z"
              fill="url(#armGrad)"
            />
            {/* Ball joint sphere */}
            <circle cx="375" cy="180" r="22" fill="#64748B" />
            <circle cx="372" cy="177" r="19" fill="#94A3B8" />

            {/* Cable conduit line */}
            <path
              d="M450 170 Q410 195 385 188"
              stroke="#475569"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* --- 3. Camera Bullet Main Cylinder Body --- */}
            {/* Body Shadow underneath */}
            <ellipse cx="280" cy="245" rx="85" ry="12" fill="#0F172A" fillOpacity="0.16" />

            {/* Main Body Chassis */}
            <path
              d="M170 135 L365 145 C375 146 385 156 385 168 L385 200 C385 212 375 222 365 223 L170 230 Z"
              fill="url(#bodyGrad)"
            />

            {/* Technical rib details & laser engraved label */}
            <line x1="240" y1="140" x2="240" y2="226" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="246" y1="140" x2="246" y2="226" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="330" y1="144" x2="330" y2="224" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Branding label on chassis */}
            <text
              x="256"
              y="186"
              fill="#475569"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="2"
            >
              SQUAD OPTICS // 4K
            </text>
            <text
              x="256"
              y="198"
              fill="#94A3B8"
              fontSize="6"
              fontFamily="monospace"
              letterSpacing="1"
            >
              AI PERIMETER SENTINEL • IP67
            </text>

            {/* --- 4. Sunshade Visor Hood --- */}
            <path
              d="M135 110 L370 132 C376 133 380 138 380 144 L378 152 L145 130 Z"
              fill="url(#visorGrad)"
            />
            {/* Visor drop shadow on front barrel */}
            <path
              d="M142 128 L370 148 L360 156 L150 138 Z"
              fill="#334155"
              fillOpacity="0.3"
            />

            {/* --- 5. Front Lens Barrel & Bezel --- */}
            <ellipse cx="165" cy="182" rx="34" ry="46" fill="url(#lensBezelGrad)" />
            <ellipse cx="165" cy="182" rx="30" ry="42" fill="#0A0F1D" />

            {/* IR LED Array Ring (Surrounding Diodes) */}
            <circle cx="165" cy="144" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="184" cy="152" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="191" cy="172" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="188" cy="194" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="178" cy="212" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="165" cy="220" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="152" cy="212" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="142" cy="194" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="139" cy="172" r="2.2" fill="#EF4444" fillOpacity="0.85" />
            <circle cx="146" cy="152" r="2.2" fill="#EF4444" fillOpacity="0.85" />

            {/* Optical Glass Lens */}
            <ellipse cx="165" cy="182" rx="22" ry="30" fill="url(#lensGlassGrad)" />
            {/* Internal Iris / Aperture */}
            <ellipse cx="165" cy="182" rx="12" ry="16" fill="url(#sensorIrisGrad)" />
            <ellipse cx="165" cy="182" rx="6" ry="8" fill="#020617" />

            {/* Glass Curvature Specular Highlights */}
            <ellipse
              cx="160"
              cy="174"
              rx="9"
              ry="14"
              fill="#FFFFFF"
              fillOpacity="0.45"
              transform="rotate(-15 160 174)"
            />
            <circle cx="170" cy="190" r="2.5" fill="#38BDF8" fillOpacity="0.75" />

            {/* Active Security Status Beacon LED */}
            <circle
              cx="198"
              cy="142"
              r="4"
              fill="#10B981"
              filter="url(#softGlow)"
              className="animate-pulse"
            />
            <circle cx="198" cy="142" r="1.8" fill="#ECFDF5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating System Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-1 sm:bottom-4 left-6 sm:left-12 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-semibold text-slate-800 tracking-wide uppercase">
          Live 4K Sentinel
        </span>
        <span className="text-[10px] text-slate-400 font-mono">30 FPS</span>
      </motion.div>
    </div>
  );
}

/**
 * 3D Interactive Service Card Component
 * Supports smooth mouse-tracking 3D tilt, image reveal on hover,
 * feature specifications list, and minimal direct action link.
 */
function ServiceCard3D({ service, index, isPriority }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 40, x: (index + 1) * 15, scale: 0.95 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, x: 0, scale: 1 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-6 transition-all duration-300 ${
        isPriority
          ? "border-2 border-sky-300 shadow-[0_12px_36px_-10px_rgba(14,165,233,0.18)]"
          : "border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-sky-300 hover:shadow-[0_16px_40px_-10px_rgba(14,165,233,0.14)]"
      }`}
    >
      {/* Top Header Strip */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-sky-600 tracking-wider">
              {service.number}
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
              {service.category}
            </span>
          </div>

          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
              isPriority
                ? "bg-sky-50 text-sky-700 border border-sky-200"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {service.badge}
          </span>
        </div>

        {/* Image Container with Reveal and Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-5">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Floating Category Icon Badge */}
          <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 backdrop-blur-md text-sky-700 shadow-sm">
            <IconComponent className="h-5 w-5" />
          </div>
        </div>

        {/* Service Titles */}
        <div className="mb-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs font-medium text-sky-600 mt-0.5">
            {service.subtitle}
          </p>
        </div>

        {/* Short Architectural Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>

        {/* Feature Checkpoints */}
        <ul className="space-y-1.5 pt-2 border-t border-slate-100 mb-5">
          {service.features.map((feature, fIdx) => (
            <li
              key={fIdx}
              className="flex items-center gap-2 text-xs text-slate-600"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="pt-3 border-t border-slate-100/80">
        <Link
          to="/projects"
          className="inline-flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-700 group/link"
        >
          <span>Explore Service</span>
          <span className="flex items-center gap-1 text-sky-600 transition-transform duration-200 group-hover/link:translate-x-1">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

/**
 * Main HomeGallery Component
 */
export function HomeGallery() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.id === activeTab);

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white py-20 sm:py-28"
    >
      {/* Ambient background architectural blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-sky-200/25 blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-blue-200/20 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO INTRODUCTION ("Security in Motion")      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          {/* Left Column: Heading, Value Proposition & Metadata */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-100/70 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider"
            >
              <Scan className="h-3.5 w-3.5 text-sky-600" />
              <span>Engineered Surveillance & Access</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Security in{" "}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  Motion
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              Squad Security System engineers precision-grade IP surveillance,
              intelligent home automation, encrypted intercom entry, and motorized
              perimeter barriers. Every deployment is calibrated for seamless 24/7
              protection, instant mobile oversight, and architectural elegance.
            </motion.p>

            {/* Minimal Metric Strips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 max-w-xl"
            >
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
                  4K AI
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Optical Resolution
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
                  24/7
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Live Mobile Sync
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
                  100%
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Verified Hardware
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Realistic 3D CCTV Camera Entering from Right */}
          <div className="lg:col-span-5 relative">
            <Realistic3DCamera />
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. SERVICE SELECTOR / CAROUSEL CONTROLS                   */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Service Catalog
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Integrated Security Disciplines
            </h3>
          </div>

          {/* Service Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              All Systems ({services.length})
            </button>
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === item.id
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {item.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. FOUR SERVICE CARDS SHOWCASE                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {filteredServices.map((service, index) => (
            <ServiceCard3D
              key={service.id}
              service={service}
              index={index}
              isPriority={service.id === "cctv-installation"}
            />
          ))}
        </div>

        {/* ========================================================= */}
        {/* 4. PREMIUM CALL-TO-ACTION SECTION                         */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle architectural backdrop shapes */}
          <div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 -mb-10 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                <Shield className="h-4 w-4" />
                <span>Verified Field Deployments</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Explore Our Real-World Security Deployments
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Discover how Squad Security System protects residential villas,
                commercial properties, and gated compounds with tailored CCTV,
                automation, and access control solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:bg-sky-400 hover:shadow-sky-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 group"
              >
                <span>View Verified Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeGallery;