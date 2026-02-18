"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const footerLinks = {
    [t("sections.company")]: [
      { name: t("links.about"), href: "/#about" },
      { name: t("links.portfolio"), href: "/#portfolio" },
      { name: t("links.services"), href: "/#services" },
      { name: t("links.contact"), href: "/#contact" },
    ],
    [t("sections.services")]: [
      { name: t("links.web"), href: "/#services" },
      { name: t("links.backend"), href: "/#services" },
      { name: t("links.mobile"), href: "/#services" },
      { name: t("links.cloud"), href: "/#services" },
    ],
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "14, Novza, Tashkent, Uzbekistan",
      href: "https://maps.google.com/?q=14,Novza,Tashkent,Uzbekistan",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+998 95 551 0307",
      href: "tel:+998955510307",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "info@theadtech.uz",
      href: "mailto:info@theadtech.uz",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/company/theadtech",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      href: "https://instagram.com/theadtech.uz",
    },
    { icon: <Send className="w-4 h-4" />, href: "https://t.me/theadtech" },
  ];

  return (
    <footer className="relative border-t border-white/4">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 md:gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/favicon.svg"
                  alt="The AdTech Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-foreground">The</span>
                <span className="text-gradient-main ml-0.5">AdTech</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-8">
              {t("description")}
            </p>
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="status-dot animate-pulse" />
              <span className="text-[11px] text-white/40 font-medium uppercase tracking-wider">
                {t("status")}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-blue-500 mr-0">
                        —
                      </span>
                      <span className="group-hover:ml-2 transition-all duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-6">
              {t("sections.contact")}
            </h4>
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-white/3 border border-white/5 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300 leading-snug pt-1.5">
                    {item.text}
                  </span>
                </a>
              ))}

              <div className="pt-4 flex items-center gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-linear-to-br hover:from-blue-600/20 hover:to-purple-600/20 hover:border-white/10 transition-all duration-500 group shadow-lg"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/40 font-medium">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-medium"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-medium"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
