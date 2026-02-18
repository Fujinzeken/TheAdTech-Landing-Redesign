"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const clientLogos = [
  { name: "Akhmad Tea", path: "/images/logos/akhmad-tea.png" },
  { name: "GAC Motor", path: "/images/logos/gac-motor.png" },
  { name: "KPI", path: "/images/logos/kpi.png" },
  { name: "Orient Motors", path: "/images/logos/orient-motors.png" },
  { name: "Riada", path: "/images/logos/riada.png", light: true },
  { name: "Simma", path: "/images/logos/simma.png" },
];

const Clients = () => {
  const t = useTranslations("Clients");

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[10px] uppercase tracking-[0.25em] text-white/60 mb-10"
        >
          {t("label")}
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-t border-b border-white/3 py-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map(
            (logo, i) => (
              <div
                key={i}
                className={`flex items-center justify-center px-12 grayscale opacity-40 hover:opacity-80 transition-all duration-500 cursor-default shrink-0 ${
                  logo.light ? "" : "invert"
                }`}
              >
                <div
                  className={`relative w-32 h-12 ${logo.name === "Orient Motors" ? "scale-125" : ""}`}
                >
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
