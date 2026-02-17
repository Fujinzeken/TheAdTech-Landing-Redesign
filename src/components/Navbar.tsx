"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-2.5 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  }}
                >
                  A
                </div>
              </div>
              <span
                className="text-base font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-foreground">The</span>
                <span className="text-gradient-main ml-0.5">AdTech</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3.5 py-2 text-[13px] text-white/30 hover:text-white/75 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/get-quote"
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium text-white/80 hover:text-white border border-white/8 hover:border-accent-violet/30 bg-white/3 hover:bg-accent-violet/10 transition-all duration-300"
              >
                Get a Quote
                <ArrowUpRight
                  size={13}
                  className="text-white/30 group-hover:text-accent-violet transition-colors duration-300"
                />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-white/70 border border-white/6 hover:border-white/12 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-white/40 hover:text-white transition-colors duration-200 py-2 block"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.35 }}
                className="pt-6"
              >
                <Link
                  href="/get-quote"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  }}
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
