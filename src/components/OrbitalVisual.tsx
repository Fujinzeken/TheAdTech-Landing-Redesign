"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OrbitalVisual = () => {
  const t = useTranslations("OrbitalVisual");

  const rings = [
    { size: 280, duration: 25, direction: 1, opacity: 0.12, delay: 0.6 },
    { size: 380, duration: 35, direction: -1, opacity: 0.08, delay: 0.9 },
    { size: 460, duration: 45, direction: 1, opacity: 0.05, delay: 1.2 },
  ];

  const nodes = [
    { ring: 0, angle: 45, color: "#3b82f6", size: 8 },
    { ring: 0, angle: 200, color: "#7c3aed", size: 6 },
    { ring: 1, angle: 120, color: "#00d4ff", size: 7 },
    { ring: 1, angle: 310, color: "#3b82f6", size: 5 },
    { ring: 2, angle: 80, color: "#7c3aed", size: 6 },
    { ring: 2, angle: 250, color: "#00d4ff", size: 4 },
  ];

  const floatingCards = [
    {
      key: "uptime",
      initialValue: "99.98%",
      position: "top-[8%] right-[2%]",
      delay: 1.5,
      animDelay: "0s",
    },
    {
      key: "projects",
      initialValue: "150+",
      position: "bottom-[12%] left-[0%]",
      delay: 1.8,
      animDelay: "2s",
    },
    {
      key: "response",
      initialValue: "< 2hrs",
      position: "top-[35%] right-[-5%]",
      delay: 2.1,
      animDelay: "4s",
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto orbital-container">
      {/* Central glow */}
      <div className="orbital-glow" />

      {/* Central orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)",
              transform: "scale(3)",
              filter: "blur(20px)",
            }}
          />
          {/* Core orb */}
          <div
            className="w-16 h-16 rounded-full relative"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #7c3aed, #3b82f6, #1e1b4b)",
              boxShadow:
                "0 0 40px rgba(124,58,237,0.4), 0 0 80px rgba(59,130,246,0.2), inset 0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            {/* Specular highlight */}
            <div
              className="absolute w-4 h-4 rounded-full top-2.5 left-3"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Orbital rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: ring.delay,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute top-1/2 left-1/2"
          style={{
            width: ring.size,
            height: ring.size,
            marginLeft: -ring.size / 2,
            marginTop: -ring.size / 2,
          }}
        >
          {/* The ring itself */}
          <div
            className="w-full h-full rounded-full absolute"
            style={{
              border: `1px solid rgba(124, 58, 237, ${ring.opacity})`,
              animation: `${ring.direction > 0 ? "orbit-spin" : "orbit-spin-reverse"} ${ring.duration}s linear infinite`,
            }}
          >
            {/* Nodes on this ring */}
            {nodes
              .filter((n) => n.ring === i)
              .map((node, j) => {
                const radius = ring.size / 2;
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius + radius;
                const y = Math.sin(rad) * radius + radius;
                return (
                  <div
                    key={j}
                    className="absolute"
                    style={{
                      left: x - node.size / 2,
                      top: y - node.size / 2,
                      width: node.size,
                      height: node.size,
                      borderRadius: "50%",
                      background: node.color,
                      boxShadow: `0 0 ${node.size * 2}px ${node.color}80`,
                      // Counter-rotate so nodes stay upright
                      animation: `${ring.direction > 0 ? "orbit-spin-reverse" : "orbit-spin"} ${ring.duration}s linear infinite`,
                    }}
                  />
                );
              })}
          </div>

          {/* Dashed decoration ring (every other) */}
          {i % 2 === 0 && (
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${ring.size} ${ring.size}`}
              style={{
                animation: `${ring.direction > 0 ? "orbit-spin-reverse" : "orbit-spin"} ${ring.duration * 2}s linear infinite`,
              }}
            >
              <circle
                cx={ring.size / 2}
                cy={ring.size / 2}
                r={ring.size / 2 - 12}
                fill="none"
                stroke="rgba(59, 130, 246, 0.06)"
                strokeWidth="0.5"
                strokeDasharray="4 8"
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Floating metric cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: card.delay, duration: 0.7 }}
          className={`floating-card absolute ${card.position} px-3.5 py-2.5 z-20`}
          style={{ animationDelay: card.animDelay }}
        >
          <div className="text-[9px] text-foreground/40 uppercase tracking-wider mb-0.5">
            {t(`${card.key}.label`)}
          </div>
          <div
            className="text-sm font-semibold text-foreground/90"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {card.initialValue}
          </div>
          <span
            className={`text-[9px] ${card.key === "uptime" ? "text-emerald-400/80" : card.key === "projects" ? "text-accent-blue/80" : "text-accent-violet/80"}`}
          >
            {card.key === "uptime" ? "●" : card.key === "projects" ? "↗" : "◆"}{" "}
            {t(`${card.key}.status`)}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default OrbitalVisual;
