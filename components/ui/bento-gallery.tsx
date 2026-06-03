"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { X, Building2 } from "lucide-react";

export interface BentoItem {
  src: string;
  category: "projects" | "designs";
  title: string;
  desc: string;
  span: string;
}

// ── ImageModal ───────────────────────────────────────────────────────────────

function ImageModal({
  item,
  onClose,
}: {
  item: BentoItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-950/92 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        className="absolute top-4 right-4 text-text-muted-inv hover:text-white transition-colors p-2 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div
        className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="px-5 py-4 border-t border-ink-700">
          <p className="font-display font-semibold text-text-inverse">
            {item.title}
          </p>
          {item.desc && (
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-muted-inv mt-1">
              {item.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── BentoCard ────────────────────────────────────────────────────────────────

function BentoCard({
  item,
  onOpen,
  index,
}: {
  item: BentoItem;
  onOpen: (item: BentoItem) => void;
  index: number;
}) {
  const prefersReduced = useReducedMotion();
  const startX = useRef(0);
  const startY = useRef(0);
  const DRAG_THRESHOLD = 6;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-concrete-100 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 ${item.span}`}
      initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
      onPointerDown={(e) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
      }}
      onClick={(e) => {
        const dx = Math.abs(e.clientX - startX.current);
        const dy = Math.abs(e.clientY - startY.current);
        if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) return;
        onOpen(item);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(item);
        }
      }}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes={
          item.span.includes("col-span-2")
            ? "(max-width: 768px) 80vw, 45vw"
            : "(max-width: 768px) 40vw, 22vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading={index < 4 ? "eager" : "lazy"}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 pointer-events-none">
        <p className="font-display font-semibold text-white text-sm leading-snug">
          {item.title}
        </p>
        {item.desc && (
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted-inv mt-1">
            {item.desc}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── InteractiveImageBentoGallery ─────────────────────────────────────────────

export function InteractiveImageBentoGallery({ items }: { items: BentoItem[] }) {
  const [modalItem, setModalItem] = useState<BentoItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // Recalculate drag bounds when items or window size change
  const recalc = useCallback(() => {
    if (!containerRef.current || !innerRef.current) return;
    const containerW = containerRef.current.offsetWidth;
    const innerW = innerRef.current.scrollWidth;
    setConstraints({ left: Math.min(0, containerW - innerW - 1), right: 0 });
  }, []);

  useEffect(() => {
    const t = setTimeout(recalc, 60); // let layout settle
    window.addEventListener("resize", recalc);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", recalc);
    };
  }, [recalc, items]);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-20 text-center">
        <div className="w-12 h-12 rounded-lg bg-concrete-100 flex items-center justify-center">
          <Building2 size={22} className="text-concrete-200" strokeWidth={1.5} />
        </div>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-secondary">
          Photos coming soon
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Clip overflow so the drag reveal doesn't bleed out */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.06}
          dragMomentum
          style={{
            x,
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateRows: "repeat(2, clamp(140px, 18vw, 220px))",
            gridAutoColumns: "clamp(160px, 22vw, 300px)",
            gap: "1rem",
          }}
          className="w-max cursor-grab active:cursor-grabbing"
        >
          {items.map((item, i) => (
            <BentoCard
              key={item.src}
              item={item}
              onOpen={setModalItem}
              index={i}
            />
          ))}
        </motion.div>
      </div>

      {modalItem && (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </>
  );
}
