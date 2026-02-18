"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");

  const services = [
    {
      key: "web",
      skills: ["React", "Next.js", "Vue", "TypeScript"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      featured: true,
      gradient: "from-accent-blue/20 to-accent-cyan/10",
      borderGlow: "rgba(59, 130, 246, 0.3)",
    },
    {
      key: "backend",
      skills: ["Node.js", "Python", "Go", "Java"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
      featured: true,
      gradient: "from-accent-violet/20 to-accent-magenta/10",
      borderGlow: "rgba(124, 58, 237, 0.3)",
    },
    {
      key: "cloud",
      skills: ["AWS", "Azure", "Docker", "K8s"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6.5 19a4.5 4.5 0 01-.42-8.98A7 7 0 0119.5 10a4 4 0 01.5 7.97" />
          <path d="M12 13v6M9 16l3 3 3-3" />
        </svg>
      ),
      featured: false,
      gradient: "from-accent-cyan/15 to-accent-blue/5",
      borderGlow: "rgba(0, 212, 255, 0.25)",
    },
    {
      key: "mobile",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      featured: false,
      gradient: "from-accent-violet/15 to-accent-blue/5",
      borderGlow: "rgba(124, 58, 237, 0.25)",
    },
    {
      key: "qa",
      skills: ["Selenium", "Jest", "Cypress", "Postman"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
      featured: false,
      gradient: "from-emerald-500/15 to-accent-cyan/5",
      borderGlow: "rgba(52, 211, 153, 0.25)",
    },
    {
      key: "integrations",
      skills: ["Kafka", "RabbitMQ", "REST", "GraphQL"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M8.5 8.5l7 7" />
          <circle cx="18" cy="6" r="3" />
          <path d="M15.5 6H8.5" />
        </svg>
      ),
      featured: false,
      gradient: "from-accent-blue/15 to-accent-violet/5",
      borderGlow: "rgba(59, 130, 246, 0.25)",
    },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-[ellipse_50%_40%_at_50%_0%] from-accent-violet/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
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
          <p className="mt-4 text-white/60 max-w-lg text-base leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                service.featured ? "md:row-span-1 lg:col-span-1" : ""
              }`}
            >
              {/* Card */}
              <div
                className="relative h-full p-6 md:p-7 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-500 cursor-default"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.03)`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 60px ${service.borderGlow}, 0 0 30px ${service.borderGlow}`,
                  }}
                />

                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/4 border border-white/6 flex items-center justify-center text-white/40 group-hover:text-white/80 group-hover:border-white/12 transition-all duration-500 mb-5">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold text-white/90 mb-2.5 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {t(`items.${service.key}.title`)}
                    <ArrowUpRight
                      size={14}
                      className="text-white/0 group-hover:text-white/40 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {t(`items.${service.key}.description`)}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/4 text-white/50 group-hover:text-white group-hover:bg-white/6 border border-white/4 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Services;
