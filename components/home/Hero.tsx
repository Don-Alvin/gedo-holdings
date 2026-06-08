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


  return (
    <section className="relative bg-ink-950 overflow-hidden">
      {/* Blueprint grid */}
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

      {/* Royal radial glow — right side, behind image grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 82% 52%, rgba(30,71,230,0.14) 0%, transparent 65%)",
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
                Est. 2018 · Across Kenya
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
              Design, construction, and finishing across Kenya, delivered by an
              NCA-registered team with 8 years on the ground.
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

          {/* ── Right: image grid ── */}
          <div className="flex flex-col gap-4">

            {/* Lead image — full-width, 16:9 */}
            <motion.div
              initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl"
            >
              {/* Royal frame */}
              <div
                className="absolute inset-0 ring-2 ring-royal-600/50 rounded-xl z-10 pointer-events-none"
                aria-hidden="true"
              />
              {/* Blueprint corner accents */}
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
                alt="Contemporary two-storey villa by Gedo Holdings"
                fill
                quality={90}
                priority
                sizes="(max-width: 1024px) calc(100vw - 3rem), 46vw"
                className="object-cover"
              />
            </motion.div>

            {/* 2-up row — ~3:2 ratio */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
                className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src="/hero-manor.jpeg"
                  alt="Grand stone manor by Gedo Holdings"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: prefersReduced ? 1 : 0, scale: prefersReduced ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
                className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src="/hero-bungalow.jpeg"
                  alt="Modern bungalow by Gedo Holdings"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 50vw, 23vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
