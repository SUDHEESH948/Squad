import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  ArrowDown,
  Layers,
  ChevronRight,
  Search,
  X,
} from "lucide-react";

const u = (id, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const badge = {
  CONTROL: "bg-amber-500",
  PROTECT: "bg-rose-500",
  SENSE: "bg-sky-600",
  AUTOMATE: "bg-indigo-600",
};

const cctvFeatures = [
  "Ultra HD resolution with color night vision",
  "Smart human & vehicle motion alerts",
  "Instant mobile remote live view & playback",
  "Secure hybrid cloud and local NVR recording",
  "Integration with Alexa, Siri & Google Assistant",
  "Military-grade banking encryption for privacy",
];

const productCatalog = [
  // CONTROL
  { name: "Touch Switch", category: "CONTROL", description: "Tempered crystal glass capacitive switch with soft-glow ambient LED backlighting.", tag: "Wired / Wireless", image: u("photo-1558611848-73f7eb4001a1") },
  { name: "Scene Switch", category: "CONTROL", description: "Custom multi-button preset panel to trigger full room lighting scenes in one click.", tag: "Scene Master", image: u("photo-1513694203232-719a280e022f") },
  { name: "In-Line Switch Module", category: "CONTROL", description: "Ultra-compact concealed relay module hidden behind your existing wall switchboard.", tag: "Retrofit No-Rewire", image: u("photo-1581092160607-ee22621dd758") },
  { name: "Smart Socket", category: "CONTROL", description: "High-capacity smart wall outlet with real-time wattage metering and remote cut-off.", tag: "Energy Tracking", image: u("photo-1544717305-2782549b5136") },
  { name: "IR Remote Blaster", category: "CONTROL", description: "Universal 360-degree infrared hub replacing all TV, AC, projector, and audio remotes.", tag: "Universal IR", image: u("photo-1550009158-9ebf69173e03") },
  // PROTECT
  { name: "Smart Door Lock", category: "PROTECT", description: "Keyless biometric security with fingerprint, PIN code, RFID card, and emergency keyway.", tag: "Biometric Entry", image: u("photo-1558002038-1055907df827") },
  { name: "Gate Controller", category: "PROTECT", description: "Heavy-duty sliding & swing gate motors with radar sensors and smartphone triggers.", tag: "Perimeter Access", image: u("photo-1506521781263-d8422e82f27a") },
  { name: "Video Door Bell", category: "PROTECT", description: "Crisp wide-angle camera with two-way duplex audio and visitor snapshot notifications.", tag: "HD Video Intercom", image: u("photo-1557597774-9d273605dfa9") },
  { name: "Panic Button", category: "PROTECT", description: "Instant SOS trigger for seniors and emergency situations with direct mobile alerts.", tag: "Instant SOS", image: u("photo-1584438784894-089d6a62b8fa") },
  { name: "Smart Alarm Siren", category: "PROTECT", description: "High-decibel audible chime and visual strobe siren for immediate burglary deterrence.", tag: "Active Deterrence", image: u("photo-1600585154340-be6161a56a0c") },
  // SENSE
  { name: "Motion Sensor", category: "SENSE", description: "Precision PIR radar sensor detecting room occupancy for automated lighting & alerts.", tag: "Radar / PIR", image: u("photo-1585771724684-38269d6639fd") },
  { name: "Door & Window Sensor", category: "SENSE", description: "Discrete magnetic contact sensors reporting instantaneous entry breaches and ajar states.", tag: "State Monitor", image: u("photo-1513694203232-719a280e022f") },
  { name: "Gas Leakage Detector", category: "SENSE", description: "Continuous combustible gas sensor triggering sirens and automated solenoid shutoff valves.", tag: "Life Safety", image: u("photo-1581092335397-9583fe92d232") },
  { name: "Vibration Sensor", category: "SENSE", description: "Sensitive tri-axial vibration tracker that alerts before glass windows or safe doors break.", tag: "Tamper Sensing", image: u("photo-1526738549149-8e07eca6c147") },
  { name: "Wi-Fi Security Camera", category: "SENSE", description: "Motorized 360-degree pan-tilt indoor/outdoor camera with automatic human tracking.", tag: "AI Tracking", image: u("photo-1557597774-9d273605dfa9") },
  // AUTOMATE
  { name: "Curtain Automation", category: "AUTOMATE", description: "Whisper-quiet motorized drapery rails with scheduled sunrise opens and manual pull-start.", tag: "Motorized Shading", image: u("photo-1513694203232-719a280e022f") },
  { name: "Integrated Climate Routines", category: "AUTOMATE", description: "Smart automation routines synchronizing gate opening, AC pre-cooling, and lighting.", tag: "Ecosystem Routine", image: u("photo-1600607687939-ce8a6c25118c") },
];

const categories = ["ALL", "CONTROL", "PROTECT", "SENSE", "AUTOMATE"];

const accessSystems = [
  {
    title: "Motorized Sliding & Swing Gates",
    image: u("photo-1506521781263-d8422e82f27a", 800),
    description: "Industrial-grade DC/AC gate motors with dual remote triggers, obstacle sensing radars, and battery backup during power failures.",
    specs: "Heavy Torque Motors • Automatic Radar Safety",
  },
  {
    title: "Commercial Rolling Shutters",
    image: u("photo-1558002038-1055907df827", 800),
    description: "Central motorized rolling shutter drives engineered for storefronts, warehouses, and garages with wireless keypad and remote controls.",
    specs: "Remote Keypad Sync • High-Duty Cycle Motors",
  },
  {
    title: "Biometric & Video Intercom Hubs",
    image: u("photo-1584438784894-089d6a62b8fa", 800),
    description: "IP-connected video door phones paired with 5-in-1 biometric locks featuring fingerprint, anti-peep PIN, RFID, and live two-way talk.",
    specs: "Full Duplex Audio • Keyless Biometric Entry",
  },
];

const ease = [0.22, 1, 0.36, 1];

// Staggered Container for Grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Option 1: Ultra-Sleek Modern Spring
const cardEntryVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 260,
      mass: 0.7,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -12,
    filter: "blur(3px)",
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/*
 * PRODUCT CARD: Ultra-Sleek Modern Spring + Spotlight
 */
function ProductCard({ prod }) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spot = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgba(59,130,246,0.14), transparent 70%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      layout
      variants={cardEntryVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={onMove}
      whileHover={{
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(37,99,235,0.05)] transition-colors duration-300 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
    >
      <motion.div
        style={{ background: spot }}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div>
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <motion.img
            src={prod.image}
            alt={prod.name}
            loading="lazy"
            initial={{ scale: 1.15, filter: "brightness(0.95)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            transition={{ duration: 0.6, ease }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${badge[prod.category]}`}
          >
            {prod.category}
          </motion.span>
        </div>

        <div className="p-5">
          <h3 className="font-sans text-lg font-bold text-[#102A43] transition-colors group-hover:text-blue-600">
            {prod.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            {prod.description}
          </p>
        </div>
      </div>

      <div className="mx-5 mb-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
        <span className="text-[11px] font-semibold text-blue-700">{prod.tag}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </motion.div>
  );
}

/*
 * ACCESS CARD: Harmonized Sleek Spring Entry
 */
function AccessCard({ system, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        damping: 22,
        stiffness: 260,
        mass: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group flex flex-col justify-between overflow-hidden rounded-[26px] border border-white bg-white/95 shadow-[0_15px_45px_rgba(37,99,235,0.06)] backdrop-blur-xl transition-colors duration-300 hover:border-sky-200 hover:shadow-xl"
    >
      <div>
        <div className="relative h-44 w-full overflow-hidden bg-slate-100">
          <motion.img
            src={system.image}
            alt={system.title}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background:
                  "repeating-conic-gradient(from 0deg, rgba(14,165,233,0.35) 0deg 8deg, transparent 8deg 24deg)",
                WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
                maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
              }}
            />
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-sky-300/80 blur-xl" />
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-bold text-[#102A43] transition-colors group-hover:text-sky-600">
            {system.title}
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">{system.description}</p>
        </div>
      </div>

      <div className="mx-6 mb-6 border-t border-slate-100 pt-4 text-[11px] font-bold text-sky-600">
        {system.specs}
      </div>
    </motion.div>
  );
}

function OrbitingSignal() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/40"
      >
        <motion.span
          animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.9)]"
        />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-200/30"
      >
        <motion.span
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-1.5 top-1/2 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_22px_rgba(59,130,246,0.8)]"
        />
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productCatalog.filter((item) => {
    const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setActiveCategory("ALL");
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBFF] font-sans text-[#102A43]">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-200/35 blur-[120px]" />
        <div className="absolute -right-40 top-[35%] h-[520px] w-[520px] rounded-full bg-blue-200/30 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[520px] rounded-full bg-cyan-100/35 blur-[130px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[58vh] items-center justify-center px-6 pb-14 pt-24">
        <OrbitingSignal />
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="relative z-10 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Security • Automation • Access
            </span>
          </div>

          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-[#102A43] sm:text-6xl lg:text-7xl">
            Our Services &
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text italic text-transparent">
              Hardware Lineup
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Complete security surveillance, smart space automation, and motorized access control systems engineered to work together effortlessly.
          </p>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 flex flex-col items-center"
          >
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Explore Catalog
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
              <ArrowDown className="h-4 w-4 text-blue-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PRODUCT LINEUP ================= */}
      <section className="relative px-6 py-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Layers className="h-3.5 w-3.5" /> Product Catalogue
            </div>
            <h2 className="mt-3 font-serif text-3xl font-normal text-[#102A43] sm:text-4xl lg:text-5xl">
              All Your Automation In One Place
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Every device is built to integrate with existing switches, gates, door locks, and appliances.
            </p>

            {/* Interactive Search Bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hardware (e.g. switch, biometric lock, gate motor, radar)..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-11 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                    title="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    activeCategory === cat
                      ? "text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="active-category-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                      className="absolute inset-0 -z-0 rounded-full bg-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </div>

            {/* Result Counter & Active Filter Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-slate-400">
              <span>Showing {filteredProducts.length} of {productCatalog.length} solutions</span>
              {searchQuery && (
                <span className="rounded bg-sky-100 px-2 py-0.5 text-sky-800 font-sans">
                  Query: "{searchQuery}"
                </span>
              )}
            </div>
          </div>

          {/* Staggered Container Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.name} prod={prod} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto my-12 max-w-md rounded-3xl border border-dashed border-slate-200 bg-white/80 p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-slate-800">
                No matching hardware found
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                No components match your search for "{searchQuery}". Try a different keyword or reset the category filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-5 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow hover:bg-blue-700 transition"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}

          {/* Protocols Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-14 rounded-3xl border border-sky-100 bg-gradient-to-r from-blue-900 via-[#102A43] to-slate-900 p-8 text-white shadow-xl"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="max-w-xl">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Protocols & Connectivity
                </div>
                <h4 className="font-serif text-2xl font-normal text-white">
                  Built on Open, Dependable Standards
                </h4>
                <p className="mt-1 text-xs text-slate-300">
                  KNX wired bus, Z-Wave mesh, and Zigbee/Wi-Fi wireless protocols ensure zero latency, zero cloud dropout, and instant local response.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {["KNX Wired", "Z-Wave Hybrid", "Zigbee & Wi-Fi"].map((p) => (
                  <span key={p} className="rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CCTV ================= */}
      <section className="relative px-6 py-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="overflow-hidden rounded-[32px] border border-blue-100 bg-white/95 shadow-[0_20px_70px_rgba(37,99,235,0.06)] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[340px] lg:col-span-5">
                <img
                  src={u("photo-1557597774-9d273605dfa9", 1000)}
                  alt="CCTV Surveillance Setup"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-blue-950/40 to-transparent lg:bg-gradient-to-r" />
                <motion.div
                  animate={{ y: ["-100%", "300%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent blur-sm"
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="rounded-full bg-blue-500/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    24/7 Shield
                  </span>
                  <h4 className="mt-2 font-serif text-2xl font-normal">Real-time AI Video Security</h4>
                  <p className="mt-1 text-xs text-blue-100">
                    High frame rate recording with active deterrent sirens & spotlights.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Surveillance Infrastructure
                </span>
                <h3 className="mt-2 font-serif text-3xl font-normal text-[#102A43]">
                  Commercial & Residential CCTV
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Custom engineered camera setups designed for perimeter deterrence, sharp vehicle license plate detection, and clear low-light visibility.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {cctvFeatures.map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 transition-colors hover:border-blue-200 hover:bg-white"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACCESS & PERIMETER ================= */}
      <section className="relative px-6 pb-28 pt-8">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Perimeter Defense
              </span>
              <h3 className="mt-2 font-serif text-3xl font-normal text-[#102A43] sm:text-4xl">
                Motorized Gates & Access Systems
              </h3>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Fortify boundaries and streamline everyday vehicle and visitor entry with heavy-duty automation and biometric controls.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {accessSystems.map((system, i) => (
              <AccessCard key={system.title} system={system} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/95 px-6 py-3.5 shadow-sm backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                Certified hardware • Seamless smart assistant integration • Full warranty coverage
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}