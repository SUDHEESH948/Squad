
import React from "react";

import HomeHero from "../components/home/HomeHero";

import HomeAbout from "../components/home/HomeAbout";
import HomeGallery from "../components/home/HomeGallery";
import HomeLocation from "../components/home/HomeLocation";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F7FAF9] text-[#102A2A]">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Emerald glow */}
        <div className="absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-emerald-200/30 blur-[140px]" />

        {/* Cyan glow */}
        <div className="absolute -right-48 top-[25%] h-[600px] w-[600px] rounded-full bg-cyan-200/25 blur-[150px]" />

        {/* Warm glow */}
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[500px] rounded-full bg-yellow-100/40 blur-[130px]" />

      </div>

      {/* ================= CONTENT ================= */}

      {/* 1. Hero */}
      <section className="min-h-screen">
        <HomeHero />
      </section>

    

      {/* 3. About */}
      <HomeAbout />

      {/* 4. Gallery */}
      <HomeGallery />

      {/* 5. Location */}
      <HomeLocation />

      

    </main>
  );
}