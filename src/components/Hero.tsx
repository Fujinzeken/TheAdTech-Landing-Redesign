"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OrbitalVisual from "./OrbitalVisual";

const marqueeItems = [
  "Custom Software",
  "Web Applications",
  "Mobile Apps",
  "Cloud Architecture",
  "AI Solutions",
  "DevOps & CI/CD",
  "UI/UX Design",
  "API Development",
];

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    if (spotlightRef.current) {
      spotlightRef.current.classList.add("active");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.classList.remove("active");
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background layers */}
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="noise" />
      <div ref={spotlightRef} className="hero-spotlight" />

      {/* Aurora blob */}
      <div className="absolute top-[-10%] right-[-10%] z-1 opacity-80">
        <div className="aurora-blob" />
      </div>
      <div className="absolute bottom-[10%] left-[-15%] z-1 opacity-70">
        <div
          className="aurora-blob"
          style={{ animationDelay: "-10s", width: 400, height: 400 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main hero area */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left column — Text */}
            <div className="max-w-2xl">
              {/* Status pill */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.03]">
                  <span className="status-dot" />
                  <span className="text-[12px] text-white/40 tracking-wide">
                    Available for new projects
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-gradient-subtle">We build software</span>
                <br />
                <span className="text-gradient-subtle">that redefines</span>
                <br />
                <span className="headline-underline shimmer-text">
                  {"what's possible."}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg text-white/40 max-w-md leading-relaxed mb-10"
              >
                From concept to deployment — we craft high-performing digital
                products that give your business an unfair advantage.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/get-quote"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
                >
                  {/* Button gradient background */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
                    }}
                  />
                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #7c3aed 100%)",
                    }}
                  />
                  <span className="relative z-10">Get a Quote</span>
                  <ArrowRight
                    size={15}
                    className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                >
                  <span className="relative">
                    See Our Work
                    <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-px bg-white/30 transition-all duration-300" />
                  </span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Right column — Orbital Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden md:block"
            >
              <OrbitalVisual />
            </motion.div>
          </div>
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="border-t border-b border-white/[0.04] py-5 overflow-hidden"
        >
          <div className="marquee-track">
            {/* Double the items for seamless loop */}
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-6 text-[11px] uppercase tracking-[0.25em] text-white/15 font-medium whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="w-1 h-1 rounded-full bg-white/10" />
              </span>
            ))}
          </div>
        </motion.div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="py-14"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/15 mb-8">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 px-6 max-w-5xl mx-auto">
            {[
              { name: "Akhmad Tea", path: "/images/logos/akhmad-tea.png" },
              { name: "GAC Motor", path: "/images/logos/gac-motor.png" },
              { name: "KPI", path: "/images/logos/kpi.png" },
              {
                name: "Orient Motors",
                path: "/images/logos/orient-motors.png",
              },
              { name: "Riada", path: "/images/logos/riada.png", light: true },
              { name: "Simma", path: "/images/logos/simma.png" },
            ].map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.08, duration: 0.5 }}
                className={`grayscale opacity-30 hover:opacity-70 transition-all duration-300 cursor-default ${
                  logo.light ? "" : "invert"
                }`}
              >
                <div
                  className={`relative w-24 h-8 ${logo.name === "Orient Motors" ? "scale-140" : ""}`}
                >
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
