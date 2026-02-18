"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";

const GetQuoteForm = () => {
  const t = useTranslations("GetQuoteForm");

  const projectTypes = [
    { key: "web", label: t("projectTypes.web") },
    { key: "mobile", label: t("projectTypes.mobile") },
    { key: "ai", label: t("projectTypes.ai") },
    { key: "cloud", label: t("projectTypes.cloud") },
    { key: "design", label: t("projectTypes.design") },
    { key: "other", label: t("projectTypes.other") },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "web",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent-blue/20 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-accent-blue" />
        </div>
        <h3
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {t("success.title")}
        </h3>
        <p className="text-white/60 mb-8 max-w-sm">{t("success.message")}</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-sm transition-all"
        >
          {t("success.back")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            {t("labels.name")}
          </label>
          <div className="relative group">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("placeholders.name")}
              className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            {t("labels.email")}
          </label>
          <div className="relative group">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("placeholders.email")}
              className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            {t("labels.phone")}
          </label>
          <div className="relative group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("placeholders.phone")}
              className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            {t("labels.company")}
          </label>
          <div className="relative group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("placeholders.company")}
              className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
          {t("labels.projectType")}
        </label>
        <div className="relative group">
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300 appearance-none cursor-pointer"
          >
            {projectTypes.map((type) => (
              <option
                key={type.key}
                value={type.key}
                className="bg-[#0a0a1a] text-white"
              >
                {type.label}
              </option>
            ))}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
          {t("labels.description")}
        </label>
        <div className="relative group">
          <textarea
            required
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t("placeholders.description")}
            className="w-full px-5 py-4 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/5 transition-all duration-300 resize-none"
          />
          <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-400 text-xs font-medium bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2 mt-4 overflow-hidden"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full relative group mt-4 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
          style={{
            background: "linear-gradient(90deg, #3b82f6 0%, #7c3aed 100%)",
          }}
        />
        <div className="relative flex items-center justify-center gap-2 py-4 px-6 text-white font-semibold tracking-wide">
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {t("submit")}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>
    </form>
  );
};

export default GetQuoteForm;
