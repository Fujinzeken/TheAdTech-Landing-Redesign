"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, value, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const Augmentation = () => {
  const t = useTranslations("Augmentation");

  const stats = [
    { value: 50, suffix: "+", label: t("stats.engineers"), key: "engineers" },
    { value: 6, suffix: "+", label: t("stats.experience"), key: "experience" },
    { value: 150, suffix: "+", label: t("stats.projects"), key: "projects" },
    { value: 99, suffix: "%", label: t("stats.retention"), key: "retention" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background band */}
      <div className="absolute inset-0 bg-linear-to-b from-accent-violet/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent-violet/60 font-medium mb-4 block">
              {t("label")}
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t("headline.line1")}
              <br />
              {t("headline.line2")}
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed max-w-md mb-8">
              {t("description")}
            </p>
            <a
              href="/get-quote"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
              }}
            >
              {t("cta")}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-5 md:p-6 rounded-2xl border border-foreground/5 bg-foreground/2 hover:bg-foreground/4 hover:border-foreground/10 transition-all duration-500"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-foreground/90 mb-1"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] text-foreground/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Augmentation;
