"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    // Use the i18n-aware router to change the locale while preserving the pathname
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="flex flex-col items-center gap-4 w-full mt-4 py-4 border-t border-white/5">
        <div className="flex items-center gap-2 mb-2">
          <Globe size={14} className="text-white/40" />
          <span className="text-[11px] uppercase tracking-widest text-white/40 font-medium">
            Language
          </span>
        </div>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                locale === lang.code
                  ? "bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  : "bg-white/2 text-white/40 border border-white/5 hover:bg-white/5 hover:text-white/60"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium text-white/60 hover:text-white/90 border border-white/6 hover:border-accent-violet/30 transition-all duration-300"
      >
        <Globe size={14} className={isOpen ? "text-accent-violet" : ""} />
        <span className="uppercase">{locale}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-40 glass-strong border border-white/10 rounded-xl overflow-hidden shadow-2xl z-60"
          >
            <div className="p-1.5 flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    locale === lang.code
                      ? "bg-white/8 text-white"
                      : "text-white/50 hover:bg-white/5 hover:text-white/80"
                  }`}
                >
                  <span>{lang.label}</span>
                  {locale === lang.code && (
                    <Check size={14} className="text-accent-violet" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
