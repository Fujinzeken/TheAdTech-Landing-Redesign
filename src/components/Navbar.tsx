"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "@/i18n/navigation";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: t("home"), href: "/#" },
    { name: t("about"), href: "/#about" },
    { name: t("portfolio"), href: "/#portfolio" },
    { name: t("services"), href: "/#services" },
    { name: t("contact"), href: "/#contact" },
  ];

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
              <div className="relative w-8 h-8">
                <Image
                  src="/favicon.svg"
                  alt={t("brandName")}
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <span
                className="text-base font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-foreground">{t("brandFirst")}</span>
                <span className="text-gradient-main ml-0.5">
                  {t("brandSecond")}
                </span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3.5 py-2 text-[13px] text-foreground/60 hover:text-foreground/90 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Language */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
              <Link
                href="/get-quote"
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium text-foreground/80 hover:text-foreground border border-foreground/8 hover:border-accent-violet/30 bg-foreground/3 hover:bg-accent-violet/10 transition-all duration-300"
              >
                {t("getQuote")}
                <ArrowUpRight
                  size={13}
                  className="text-foreground/30 group-hover:text-accent-violet transition-colors duration-300"
                />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground/60 hover:text-foreground/80 border border-foreground/6 hover:border-foreground/12 transition-all duration-200"
                aria-label={t("toggleMenu")}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
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
            <nav className="flex flex-col items-center gap-1 w-full max-w-sm px-10">
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
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-foreground/60 hover:text-foreground transition-colors duration-200 py-2 block"
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
                className="pt-6 w-full flex justify-center"
              >
                <Link
                  href="/get-quote"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base w-full justify-center"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                  }}
                >
                  {t("getQuote")}
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: (navLinks.length + 1) * 0.06,
                  duration: 0.35,
                }}
                className="w-full"
              >
                <LanguageSwitcher mobile />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
