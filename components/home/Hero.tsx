"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CalendarClock, BadgeCheck, Building2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const stats = [
  { icon: CalendarClock, value: "8+ Years", label: "On the Ground" },
  { icon: BadgeCheck, value: "NCA", label: "Registered" },
  { icon: Building2, value: "120+", label: "Projects" },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const collageReveal = {
    hidden: { opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.97 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative bg-ink-950 overflow-hidden">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(58,91,240,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(58,91,240,0.06) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Soft royal radial glow — sits behind the right collage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(30,71,230,0.13) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* ── Left: content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px bg-royal-600 flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[0.7rem] text-royal-500 uppercase tracking-[0.12em]">
                Est. 2018 · Nairobi
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-display text-[clamp(2.75rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-inverse mb-6"
            >
              Building dreams,{" "}
              <span className="text-royal-500">enhancing&nbsp;lives</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-sans text-lg text-text-muted-inv leading-relaxed mb-10 max-w-[520px]"
            >
              Architectural design, home construction, office partitioning, and
              renovation across Nairobi — delivered by an NCA-registered team
              with 8 years on the ground.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="https://wa.me/254722901959"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-royal-600 text-white font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/20 text-text-inverse font-medium hover:border-royal-500 hover:text-royal-500 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-8 pt-8 border-t border-ink-700"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-ink-800 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-royal-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-inverse leading-none">
                      {value}
                    </p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-text-muted-inv mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: image collage ── */}
          <motion.div
            variants={collageReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
          >
            {/* Mobile — lead image only */}
            <div className="relative lg:hidden aspect-video rounded-xl overflow-hidden shadow-xl ring-2 ring-royal-600/40">
              <Image
                src="/hero-villa.jpeg"
                alt="Contemporary two-storey villa — Gedo Holdings project"
                fill
                priority
                sizes="(max-width: 1024px) calc(100vw - 3rem), 46vw"
                className="object-cover"
              />
            </div>

            {/* Desktop — three-image collage */}
            <div className="hidden lg:block relative h-[460px] select-none">

              {/* Manor — back layer, bottom-left */}
              <div className="absolute bottom-0 left-0 w-[48%] h-[57%] rounded-lg overflow-hidden shadow-md z-0">
                <Image
                  src="/hero-manor.jpeg"
                  alt="Grand stone manor — Gedo Holdings project"
                  fill
                  sizes="22vw"
                  className="object-cover"
                />
              </div>

              {/* Bungalow — back layer, bottom-right */}
              <div className="absolute bottom-0 right-0 w-[48%] h-[57%] rounded-lg overflow-hidden shadow-md z-0">
                <Image
                  src="/hero-bungalow.jpeg"
                  alt="Modern bungalow — Gedo Holdings project"
                  fill
                  sizes="22vw"
                  className="object-cover"
                />
              </div>

              {/* Villa — lead image, front-center */}
              <div className="absolute top-0 left-[8%] right-[8%] h-[71%] rounded-xl overflow-hidden shadow-xl z-20">
                <div
                  className="absolute inset-0 ring-2 ring-royal-600/50 rounded-xl z-10 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-royal-600 z-20 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-royal-600 z-20 pointer-events-none"
                  aria-hidden="true"
                />
                <Image
                  src="/hero-villa.jpeg"
                  alt="Contemporary two-storey villa — Gedo Holdings project"
                  fill
                  priority
                  sizes="36vw"
                  className="object-cover"
                />
              </div>

              {/* Horizontal measure-line between lead and secondaries */}
              <div
                className="absolute left-0 right-0 z-30 flex items-center gap-2 px-3"
                style={{ top: "calc(71% - 1px)" }}
                aria-hidden="true"
              >
                <span className="block h-px flex-1 bg-royal-600/15" />
                <span className="font-mono text-[0.5rem] text-royal-600/50 uppercase tracking-[0.1em]">
                  GH
                </span>
                <span className="block h-px w-6 bg-royal-600/50" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
