"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Process = () => {
  const t = useTranslations("Process");

  const steps = [
    {
      number: "01",
      key: "discovery",
    },
    {
      number: "02",
      key: "design",
    },
    {
      number: "03",
      key: "develop",
    },
    {
      number: "04",
      key: "deploy",
    },
  ];

  return (
    <section id="process" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent-cyan/60 font-medium mb-4 block">
            {t("label")}
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gradient-subtle"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {t("headline.line1")}
            <br />
            {t("headline.line2")}
          </h2>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute top-[60px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-linear-to-r from-transparent via-white/6 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Step card */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500 group h-full">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border border-white/8 group-hover:border-accent-blue/30 transition-all duration-500"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    <span className="text-white/40 group-hover:text-white/80 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-accent-blue/10 opacity-0 group-hover:opacity-100 filter blur-xl transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-white/85 mb-3"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {t(`steps.${step.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
