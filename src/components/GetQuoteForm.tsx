"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronRight, Check } from "lucide-react";

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud Architecture",
  "UI/UX Design",
  "Other",
];

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Web Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Submission failed. Please try again or contact info@theadtech.uz directly.",
      );
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
          Request Received
        </h3>
        <p className="text-white/60 mb-8 max-w-sm">
          Thank you for reaching out. Our team will review your project details
          and get back to you within 24 hours.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-sm transition-all"
        >
          Back to Home
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
            Name*
          </label>
          <div className="relative group">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            Email*
          </label>
          <div className="relative group">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            Phone / WhatsApp / Telegram
          </label>
          <div className="relative group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
            Company / Organization
          </label>
          <div className="relative group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">
          Project Type*
        </label>
        <div className="relative group">
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300 appearance-none cursor-pointer"
          >
            {projectTypes.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-[#0a0a1a] text-white"
              >
                {type}
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
          Project Description*
        </label>
        <div className="relative group">
          <textarea
            required
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, and timeline..."
            className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/10 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
          />
          <div className="absolute inset-0 rounded-xl bg-accent-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
        </div>
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full relative group mt-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-violet opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-center justify-center gap-2 py-4 px-6 text-white font-semibold tracking-wide">
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Submit Request
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>
    </form>
  );
};

export default GetQuoteForm;
