# 🛡️ Squad Security System

> **Smart. Secure. Effortless.**  
> A high-performance, interactive web platform for **Squad Security System** — showcasing intelligent CCTV surveillance, smart home automation, motorized gate systems, and biometric access control.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
  - [1. Dynamic Background Hero](#1-dynamic-background-hero)
  - [2. Interactive "Deal & Scan" 3D Gallery](#2-interactive-deal--scan-3d-gallery)
  - [3. Auto-Trigger Location Video & Map Seamless Transition](#3-auto-trigger-location-video--map-seamless-transition)
  - [4. Categorized Hardware & Automation Catalog](#4-categorized-hardware--automation-catalog)
  - [5. Blueprint SVG Trace & Project Showcase](#5-blueprint-svg-trace--project-showcase)
  - [6. Consultation & Quotation Engine](#6-consultation--quotation-engine)
  - [7. Ecosystem, Brand & Protocol Showcase](#7-ecosystem-brand--protocol-showcase)
- [🎨 Design System & Visual Identity](#-design-system--visual-identity)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [Animation & Motion Principles](#animation--motion-principles)
- [📂 Project Structure](#-project-structure)
- [🛠️ Tech Stack & Dependencies](#️-tech-stack--dependencies)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [🏢 Company Profile & Contact](#-company-profile--contact)

---

## 🌐 Overview

**Squad Security System** (established in 2017, headquartered in Thalikulam, Kerala) provides unified commercial and residential smart infrastructure. This modern web application presents their complete solution catalog, verified hardware partners, protocol standards, portfolio installations, and direct consultation booking in a tactile, responsive, and animated user interface.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**, the application features fluid 3D card tilt physics, scroll-linked choreography, interactive video transitions, and glassmorphic technical blueprint layouts.

---

## ✨ Key Features

### 1. Dynamic Background Hero
- **Automated Thematic Slides**: Cycles through core verticals (*CCTV & AI Security*, *Access Control & Gate Automation*, *Smart Home Automation*) with 5-second intervals.
- **Micro-Interactions**: Real-time slide counter (`01 / 03`), indicator pill with pulsing icons, and subtle blueprint grid backdrop.
- **Performance Preloading**: Automatic asset caching ensures smooth slide transitions without layout shifts.

### 2. Interactive "Deal & Scan" 3D Gallery
- **Scroll-Linked Staggered Fan**: Projects spread out from a single centered face-down stack into an arc upon scrolling.
- **3D Card Flip & Glare**: Uses `rotateY` transforms and real-time mouse-tracking cursor glare (`radial-gradient` calculated via `useMotionValue` and `useMotionTemplate`).
- **Responsive Geometry**: Dynamically adjusts fan angles, offsets, and scale factors between desktop, tablet, and mobile breakpoints.

### 3. Auto-Trigger Location Video & Map Seamless Transition
- **Intersection Observer Video**: Automatically initializes muted playback as the user scrolls the section into view.
- **Seamless Video-to-Map Handshake**: Once the location tour video finishes, the player smoothly morphs into an interactive Google Maps view (`Pulipparambil Building, NH 66, Thalikulam`).
- **One-Click Navigation**: Direct link to turn-by-turn Google Maps driving directions.

### 4. Categorized Hardware & Automation Catalog
- **Multi-Category Filter**: Instant tab filtering between `ALL`, `CONTROL`, `PROTECT`, `SENSE`, and `AUTOMATE`.
- **Spotlight Hover Cards**: Cursor-following radial blue glow highlights components on hover.
- **Hardware Coverage**:
  - **Control**: Crystal glass capacitive touch switches, scene switches, in-line concealed modules, smart sockets, universal 360° IR blasters.
  - **Protect**: Biometric fingerprint door locks, motorized gate controllers, HD video doorbells, panic SOS triggers, deterrent sirens.
  - **Sense**: PIR radar motion sensors, magnetic door/window contact sensors, gas leakage detectors, tri-axial vibration sensors, Wi-Fi 360° tracking cameras.
  - **Automate**: Motorized curtain rails, synchronized climate routines, smart schedule triggers.
  - **Access Systems**: Motorized sliding/swing gates, commercial rolling shutters, biometric video intercom hubs.

### 5. Blueprint SVG Trace & Project Showcase
- **Animated SVG Stroke**: As portfolio project cards enter the viewport, an SVG border line draws itself around the card (`pathLength` animation) before revealing the full installation details.
- **3-Step Project Process**: Clear visual workflow (*01 Understand* ➔ *02 Integrate* ➔ *03 Deliver*) with connected animated progress pulse.

### 6. Consultation & Quotation Engine
- **Quote Form**: Clean, accessible inputs for name, phone, email, service selection, and property dimensions.
- **Animated Success Burst**: Particle explosion and animated checkmark SVG transition upon submission without page reload.
- **Direct Action Links**: Quick phone links (`tel:`) and dedicated WhatsApp inquiry shortcuts.

### 7. Ecosystem, Brand & Protocol Showcase
- **Hardware Brands**: LUMI, DomoGenie, ESCULT, ZMOTE, TREMBLAY, OZONE, FOXTECH UK, FUCOX.
- **Communication Protocols**: KNX (industrial wired), Z-Wave (hybrid mesh), Zigbee & Wi-Fi (wireless mesh).
- **Smart Ecosystem Compatibility**: Apple HomeKit & Siri, Google Assistant & Home, Amazon Alexa, Apple Shortcuts.
- **Cabling Partners**: Finolex, V-Guard, Honeywell, Norden, RR, Polycab, Schneider Electric.

---

## 🎨 Design System & Visual Identity

### Color Palette

| Token / Role | Hex / Value | Description |
|---|---|---|
| **Dark Obsidian** | `#0B0D11` | Root dark contrast base & background accent |
| **Deep Marine** | `#102A43` / `#0B3B66` | Primary corporate headers and high-contrast containers |
| **Tech Blue** | `#2563eb` / `#0B5ED7` | Primary brand accent, CTA buttons, active state indicators |
| **Electric Sky** | `#0ea5e9` / `#38bdf8` | Highlighting glows, badges, secondary accents, and radar animations |
| **Emerald Security**| `#10b981` | Safe state indicator, verified security badges |
| **Light Pearl** | `#F7FBFF` / `#F7FAF9` | Crisp, clean, glare-free page canvas |
| **Subtle Slate** | `#64748b` / `#475569` | Readable secondary copy and metadata text |

### Typography

- **Headings & Display**: `Outfit`, system-ui, sans-serif — modern geometric weights for commanding section titles and hero statements.
- **Tech / Futuristic Accent**: `Orbitron`, sans-serif (`font-orbitron`) — high-tech security styling, telemetry markers, and futuristic display accents.
- **Body & Content**: `Plus Jakarta Sans`, system-ui, sans-serif — clean, humanist sans-serif designed for legibility at all viewport scales.
- **Technical & Tags**: `JetBrains Mono`, monospace — precise technical badges, module numbers, and protocol tags.

### Animation & Motion Principles

- **Custom Physics**: Standardized cubic bezier ease curves `[0.22, 1, 0.36, 1]` across motion components.
- **Spring Dynamics**: `stiffness: 260`, `damping: 22` for responsive tactile feedback on cards and buttons.
- **CSS Keyframes** (in `src/index.css`):
  - `@keyframes float-slow`: 6s gentle floating ambiance for floating decorative badges.
  - `@keyframes pulse-radar`: 2.5s radar surveillance pulse effect.
  - `@keyframes glow-pulse`: 5s breathing ambient light backdrop.
  - `@keyframes shimmer-sweep`: Linear horizontal sheen sweep across interactive elements.

---

## 📂 Project Structure

```
squad/
├── public/
│   ├── favicon.svg               # Application browser icon
│   ├── icons.svg                 # SVG sprite and brand assets
│   ├── manus-routes.json         # Route manifest configuration
│   ├── robots.txt                # Search engine crawler permissions
│   └── sitemap.xml               # Canonical XML sitemap with all routes
├── src/
│   ├── assets/
│   │   ├── hero.png              # Hero graphic asset
│   │   ├── location.mp4          # Headquarters video clip for location module
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── video/
│   │       └── fist.mp4          # Supporting video asset
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky frosted navigation with active link pill & mobile drawer
│   │   ├── Footer.jsx            # Multi-column footer with brand info, quick links & ambient glow
│   │   └── home/
│   │       ├── HomeHero.jsx      # Dynamic 3-slide background hero with typography choreography
│   │       ├── HomeAbout.jsx     # Letter-by-letter animated about intro and service cards
│   │       ├── HomeGallery.jsx   # 3D interactive "Deal & Scan" scroll-driven card deck
│   │       └── HomeLocation.jsx  # Intersection-observed video player transitioning to Google Maps
│   ├── data/
│   │   └── companyData.js        # Single source of truth for company info, brands, phone, address
│   ├── pages/
│   │   ├── Home.jsx              # Main landing page assembling hero, about, gallery & location
│   │   ├── About.jsx             # Company story, partner brand logos, protocols, benefits
│   │   ├── Services.jsx          # Catalog with live search, category filters, CCTV & access control
│   │   ├── Projects.jsx          # Selected works, category tabs, blueprint SVG tracing & detail lightbox modal
│   │   └── Contact.jsx           # Form with Indian phone validation, adapter states, WhatsApp shortcut
│   ├── utils/
│   │   └── contactAdapter.js     # Isolated submission adapter with demo and API endpoint support
│   ├── App.css                   # Global styles
│   ├── App.jsx                   # React Router route configuration and persistent layout wrapper
│   ├── index.css                 # Tailwind CSS v4 setup, font imports, custom animations
│   └── main.jsx                  # Application entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # SEO defaults, Open Graph, preconnect fonts & LocalBusiness JSON-LD
├── package.json                  # Scripts & dependencies
└── vite.config.js                # Vite configuration with React & Tailwind plugins
```

---

## 🛠️ Tech Stack & Dependencies

| Dependency | Version | Purpose |
|---|---|---|
| **React** | `^19.2.8` | Core UI library |
| **React DOM** | `^19.2.8` | DOM rendering layer |
| **React Router DOM** | `^7.18.4` | Client-side routing and view switching |
| **Vite** | `^8.3.0` | Ultra-fast build tool and dev server |
| **Tailwind CSS** | `^4.3.3` | Utility-first CSS styling engine |
| **@tailwindcss/vite** | `^4.3.3` | Official Vite integration for Tailwind v4 |
| **Framer Motion** | `^13.4.6` | Declarative animations, layout animations & gestures |
| **Motion** | `^14.0.0` | Performance-focused motion utilities |
| **Lucide React** | `^1.49.0` | Clean, modern technical icon library |
| **Flubber** | `^0.4.2` | Smooth SVG path interpolation & morphing |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.0.0 or higher** and **npm** installed on your system:
```bash
node -v
npm -v
```

### Installation

Clone the repository or navigate to the project directory, then install dependencies:
```bash
cd c:\Users\USER\Desktop\squad_security\squad
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

### Production Build

Create an optimized production bundle:
```bash
npm run build
```
Preview the built production application locally:
```bash
npm run preview
```

### Code Quality

Run the linter to verify code standards:
```bash
npm run lint
```

---

## 🏢 Company Profile & Contact

- **Company Name**: Squad Security System
- **Established**: 2017
- **Tagline**: *Smart. Secure. Effortless.*
- **Lead / Contact Person**: Yousaf Ali
- **Direct Phone**: `+91 99477 36929` / `+91 92077 36929`
- **Official Address**: Pulipparambil Building, Room No: VII/504F, NH 66, Thalikulam, Kerala – 680 569
- **Working Hours**: Monday – Saturday: 9:00 AM – 7:00 PM
- **Key Domains**: AI CCTV Surveillance • Smart Home Automation • Motorized Gates & Shutters • Biometric Access Control

---

*Engineered with precision for modern, connected, and secure spaces.*
