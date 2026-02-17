"use client";

import React from "react";
import { motion } from "framer-motion";

const DashboardMockup = () => {
  // SVG line chart path data — realistic revenue curve
  const chartPath =
    "M 0 80 C 20 75, 40 70, 60 55 C 80 40, 100 45, 120 35 C 140 25, 160 30, 180 20 C 200 10, 220 15, 240 8 C 260 5, 280 12, 300 6 C 320 3, 340 8, 360 2";
  const chartFill =
    "M 0 80 C 20 75, 40 70, 60 55 C 80 40, 100 45, 120 35 C 140 25, 160 30, 180 20 C 200 10, 220 15, 240 8 C 260 5, 280 12, 300 6 C 320 3, 340 8, 360 2 L 360 100 L 0 100 Z";

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 2 }}
      transition={{
        duration: 1.4,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="relative w-full max-w-[1100px] mx-auto"
      style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
    >
      {/* Ambient glow */}
      <div className="mockup-glow" />

      {/* Main window */}
      <div className="relative rounded-xl border border-white/[0.08] bg-[#0a0a10]/90 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
          <div className="flex gap-[6px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]/80" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]/80" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 px-8 py-1 rounded-md bg-white/[0.04] text-[10px] text-white/20 font-mono">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              app.theadtech.uz/dashboard
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Dashboard body */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-[200px] border-r border-white/[0.04] p-3 bg-white/[0.01]">
            <div className="flex items-center gap-2.5 px-2 py-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-accent-cyan/80 to-accent-blue/80 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">A</span>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-white/80">
                  AdTech
                </div>
                <div className="text-[9px] text-white/20">Enterprise</div>
              </div>
            </div>

            <div className="text-[9px] font-medium text-white/15 uppercase tracking-wider px-2 mb-2">
              Platform
            </div>
            {[
              { label: "Overview", active: true, icon: "◫" },
              { label: "Analytics", active: false, icon: "◩" },
              { label: "Projects", active: false, icon: "▦" },
              { label: "Deployments", active: false, icon: "△" },
              { label: "Integrations", active: false, icon: "⬡" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-[7px] rounded-lg text-[11px] mb-0.5 ${
                  item.active
                    ? "bg-white/[0.06] text-white/90 font-medium"
                    : "text-white/25 hover:text-white/40"
                }`}
              >
                <span className="text-[10px] opacity-60">{item.icon}</span>
                {item.label}
              </div>
            ))}

            <div className="mt-auto pt-4 border-t border-white/[0.04]">
              <div className="text-[9px] font-medium text-white/15 uppercase tracking-wider px-2 mb-2">
                Team
              </div>
              <div className="flex -space-x-1.5 px-2">
                {["#3b82f6", "#7c3aed", "#00d4ff", "#ef4444"].map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-[#0a0a10]"
                    style={{ background: c }}
                  />
                ))}
                <div className="w-5 h-5 rounded-full border-2 border-[#0a0a10] bg-white/10 flex items-center justify-center text-[7px] text-white/40">
                  +3
                </div>
              </div>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 p-4 md:p-5 min-h-[360px]">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <h3 className="text-[13px] font-semibold text-white/90">
                  Overview
                </h3>
                <div className="flex gap-1">
                  {["7D", "30D", "90D"].map((p, i) => (
                    <span
                      key={p}
                      className={`px-2 py-0.5 rounded text-[9px] ${i === 1 ? "bg-white/[0.06] text-white/70" : "text-white/20"}`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[10px] text-white/30">
                  Export
                </div>
                <div className="px-2.5 py-1 rounded-md bg-accent-blue/20 text-[10px] text-accent-cyan/90 font-medium">
                  + Deploy
                </div>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {[
                {
                  label: "Revenue",
                  value: "$124.5k",
                  delta: "+23.5%",
                  up: true,
                },
                { label: "Users", value: "84,232", delta: "+12.3%", up: true },
                { label: "Latency", value: "42ms", delta: "-8.1%", up: true },
                { label: "Uptime", value: "99.98%", delta: "+0.02%", up: true },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="text-[9px] text-white/25 uppercase tracking-wider mb-1">
                    {m.label}
                  </div>
                  <div className="flex items-end gap-1.5">
                    <span
                      className="text-base font-semibold text-white/85"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {m.value}
                    </span>
                    <span
                      className={`text-[9px] font-medium mb-0.5 ${m.up ? "text-emerald-400/80" : "text-red-400/80"}`}
                    >
                      {m.delta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-medium text-white/50">
                  Deployment Activity
                </span>
                <div className="flex items-center gap-4 text-[9px] text-white/20">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-px bg-accent-cyan"></span> Deploys
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-px bg-accent-violet"></span> Errors
                  </span>
                </div>
              </div>
              <svg
                viewBox="0 0 360 100"
                className="w-full h-[100px]"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[25, 50, 75].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="360"
                    y2={y}
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Fill */}
                <motion.path
                  d={chartFill}
                  fill="url(#chartGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                />
                {/* Line */}
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
                />
                {/* Glow dot at end */}
                <motion.circle
                  cx="360"
                  cy="2"
                  r="3"
                  fill="#00d4ff"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.4 }}
                />
                <motion.circle
                  cx="360"
                  cy="2"
                  r="6"
                  fill="#00d4ff"
                  opacity={0.2}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.4 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardMockup;
