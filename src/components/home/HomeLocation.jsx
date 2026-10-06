import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  Globe2,
  Play,
  Navigation, // <-- Added missing import
} from "lucide-react";

import locationVideo from "../../assets/location.mp4";

export default function HomeLocation() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [videoFinished, setVideoFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Pulipparambil%20Building%20Thalikulam%20Kerala%20680569&t=m&z=17&output=embed&iwloc=near";

  /* ============================================================
     INTERSECTION OBSERVER FOR PLAY / PAUSE
  ============================================================ */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || videoFinished) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setHasEntered(true);
          if (video && !videoFinished) {
            video.muted = true;
            video.playsInline = true;
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch((err) => {
                console.log("Autoplay blocked:", err);
                setIsPlaying(false);
              });
          }
        } else if (video && !entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: [0, 0.25] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [videoFinished]);

  /* ============================================================
     VIDEO HANDLERS
  ============================================================ */
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setVideoFinished(true);
  };

  const handleManualPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
      setHasEntered(true);
    } catch (error) {
      console.log("Video playback failed:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7FBFF] px-4 py-24 text-[#102A43] selection:bg-sky-500 selection:text-white sm:px-6"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[500px] rounded-full bg-sky-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
            Find Us
          </p>
          <h2 className="font-serif text-4xl font-normal tracking-[-0.03em] text-[#102A43] sm:text-5xl lg:text-6xl">
            Visit Our Location
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Connect with Squad Security System for professional CCTV,
            automation, smart security, and modern protection solutions.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid items-stretch gap-7 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between rounded-[30px] border border-sky-100 bg-white p-7 shadow-[0_25px_80px_rgba(14,165,233,0.08)] sm:p-9 lg:col-span-5"
          >
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <MapPin className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[10px] font-bold tracking-wider text-sky-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
                  LOCATION ACTIVE
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
                Squad Security System
              </p>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-[#102A43] sm:text-4xl">
                Our Location
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                Visit us for professional CCTV surveillance, smart security
                systems, home automation, gate automation, and advanced
                protection solutions.
              </p>

              {/* Address Card */}
              <div className="mt-8 rounded-2xl border border-sky-100 bg-[#F7FBFF] p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#102A43]">
                      Squad Security System
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Pulipparambil Building, Room No: VII/504F
                      <br />
                      NH 66, Thalikulam
                      <br />
                      Kerala – 680 569
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-5 border-t border-sky-100 pt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Contact
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919947736929"
                      className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-sky-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                        <Phone className="h-4 w-4" />
                      </span>
                      +91 99477 36929
                    </a>
                    <a
                      href="tel:+919207736929"
                      className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Phone className="h-4 w-4" />
                      </span>
                      +91 92077 36929
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B5ED7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#084DB3]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VIDEO / MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-sky-100 bg-slate-950 shadow-[0_25px_80px_rgba(14,165,233,0.12)] lg:col-span-7"
          >
            {/* VIDEO */}
            {!videoFinished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <video
                  ref={videoRef}
                  src={locationVideo}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={handleVideoEnd}
                  className="h-full min-h-[520px] w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-slate-950/20" />

                <div className="absolute left-4 top-4 z-20">
                  <div className="flex items-center gap-2 rounded-xl border border-sky-300/20 bg-slate-950/60 px-3 py-2 font-mono text-[10px] text-white shadow-lg backdrop-blur-md sm:text-xs">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
                    LOCATION VIDEO
                  </div>
                </div>

                <div className="absolute right-4 top-4 z-20">
                  <div className="rounded-xl border border-sky-300/20 bg-slate-950/60 px-3 py-2 font-mono text-[10px] text-sky-300 backdrop-blur-md sm:text-xs">
                    {isPlaying ? "PLAYING" : "READY"}
                  </div>
                </div>

                {!isPlaying && hasEntered && (
                  <button
                    onClick={handleManualPlay}
                    className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#102A43] shadow-2xl transition hover:scale-105 hover:bg-sky-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white">
                      <Play className="h-4 w-4 fill-current" />
                    </span>
                    Play Location
                  </button>
                )}

                {!hasEntered && (
                  <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
                    <div className="rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-sky-200 backdrop-blur-md">
                      Scroll to explore location
                    </div>
                  </div>
                )}

                <div className="absolute bottom-5 left-5 z-20">
                  <div className="rounded-xl border border-sky-300/20 bg-slate-950/60 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-300">
                      Squad Security System
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {isPlaying
                        ? "Finding our location..."
                        : hasEntered
                        ? "Ready to play"
                        : "Scroll down to begin"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* GOOGLE MAP */}
            {videoFinished && (
              <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0"
              >
                <iframe
                  title="Squad Security System Location"
                  src={mapEmbedUrl}
                  className="h-full min-h-[520px] w-full border-0"
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-white/10" />

                <div className="absolute left-4 top-4 z-20">
                  <div className="flex items-center gap-2 rounded-xl border border-sky-200 bg-white/95 px-3 py-2 font-mono text-[10px] text-slate-600 shadow-lg backdrop-blur-md sm:text-xs">
                    <Globe2 className="h-3.5 w-3.5 text-sky-600" />
                    LOCATION FOUND
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">
                        Squad Security System
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#102A43]">
                        Pulipparambil Building, Thalikulam, Kerala
                      </p>
                    </div>

                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Pulipparambil+Building+Thalikulam+Kerala+680569"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B5ED7] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#084DB3]"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}