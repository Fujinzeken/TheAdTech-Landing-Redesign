"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      key: "ernest",
      image: "/images/earnest.png",
      rating: 5,
    },
    {
      key: "stella",
      image: "/images/stella.png",
      rating: 5,
    },
    {
      key: "thomas",
      image: "/images/thomas.png",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-radial-[ellipse_50%_50%_at_50%_100%] from-accent-blue/6 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent-blue/60 font-medium mb-4 block">
            {t("label")}
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gradient-subtle"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {t("headline")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="h-full p-7 md:p-8 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-500">
                {/* Quote mark */}
                <div
                  className="text-4xl text-accent-violet/20 mb-4 leading-none"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      className="w-3.5 h-3.5 fill-accent-blue/60"
                    >
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-sm text-white/70 leading-relaxed mb-6 italic"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {t(`items.${item.key}.quote`)}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  {/* Avatar Image */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={item.image}
                      alt={t(`items.${item.key}.author`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-white/80"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {t(`items.${item.key}.author`)}
                    </div>
                    <div className="text-[11px] text-white/50">
                      {t(`items.${item.key}.role`)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
