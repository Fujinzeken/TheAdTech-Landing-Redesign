"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Orbit } from "lucide-react";
import GetQuoteForm from "@/components/GetQuoteForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent-blue/30 selection:text-white overflow-hidden">
      <Navbar />

      <div className="relative pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/[0.03] rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-accent-blue text-sm transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-gradient mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Let&apos;s build something{" "}
                <span className="italic">extraordinary</span> together.
              </h1>
              <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
                Whether you have a fully scoped project or just a seedling of an
                idea, we&apos;re here to help you redefine what&apos;s possible.
              </p>

              {/* Perks/Trust items */}
              <div className="space-y-6">
                {[
                  {
                    title: "Rapid Strategy",
                    desc: "Get a high-level roadmap within 48 hours.",
                  },
                  {
                    title: "Expert Engineering",
                    desc: "Top 1% talent dedicated to your architecture.",
                  },
                  {
                    title: "Direct Collaboration",
                    desc: "Work closely with our founders and core team.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-all duration-300">
                      <Orbit className="w-4 h-4 text-accent-blue" />
                    </div>
                    <div>
                      <h4
                        className="text-white/90 font-medium mb-1"
                        style={{ fontFamily: "var(--font-space)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="relative"
            >
              {/* Form container with glass effect */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl relative overflow-hidden">
                {/* Internal accent glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-blue/[0.05] rounded-full blur-[80px] pointer-events-none" />

                <div className="relative">
                  <h2
                    className="text-2xl font-bold text-white mb-8"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Send us a project request
                  </h2>
                  <GetQuoteForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
