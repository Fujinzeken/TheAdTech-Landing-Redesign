"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-radial-[ellipse_50%_50%_at_50%_50%] from-accent-violet/10 via-accent-blue/5 to-transparent pointer-events-none blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-gradient-subtle">Ready to build</span>
            <br />
            <span className="text-gradient-subtle">something </span>
            <span className="text-gradient-main">extraordinary?</span>
          </h2>

          <p className="text-white/35 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Let&apos;s talk about your next project. We&apos;ll scope it, plan
            it, and ship it — faster than you thought possible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]"
            >
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #7c3aed 100%)",
                }}
              />
              <span className="relative z-10">Get a Free Quote</span>
              <ArrowRight
                size={15}
                className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>

            <a
              href="mailto:info@theadtech.uz"
              className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              or email us directly →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
