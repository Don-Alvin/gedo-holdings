"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

type Category = "All" | "Construction" | "Partitioning" | "Renovation";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "All">;
  title: string;
  location: string;
}

const items: GalleryItem[] = [
  { id: 1, category: "Construction", title: "Residential Build", location: "Karen, Nairobi" },
  { id: 2, category: "Construction", title: "Family Home", location: "Syokimau, Nairobi" },
  { id: 3, category: "Construction", title: "Commercial Block", location: "Mlolongo, Nairobi" },
  { id: 4, category: "Partitioning", title: "Office Fit-out", location: "Westlands, Nairobi" },
  { id: 5, category: "Partitioning", title: "Corporate Suite", location: "CBD, Nairobi" },
  { id: 6, category: "Partitioning", title: "Open Plan Office", location: "Upperhill, Nairobi" },
  { id: 7, category: "Renovation", title: "Kitchen Renovation", location: "Lavington, Nairobi" },
  { id: 8, category: "Renovation", title: "Bathroom Remodel", location: "Kilimani, Nairobi" },
  { id: 9, category: "Renovation", title: "Facade Renovation", location: "Mombasa Rd, Nairobi" },
];

const categories: Category[] = ["All", "Construction", "Partitioning", "Renovation"];

export default function GalleryClient() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  const currentItem = lightbox !== null ? filtered[lightbox] : null;

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[0.7rem] uppercase tracking-[0.12em] px-4 py-2 rounded-sm border transition-colors ${
              active === cat
                ? "bg-royal-600 border-royal-600 text-white"
                : "border-concrete-200 text-text-secondary hover:border-royal-600 hover:text-royal-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-royal-600/30 bg-concrete-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-500"
            aria-label={`View ${item.title} — ${item.location}`}
          >
            {/* Placeholder fill */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-concrete-100">
              <Building2
                size={40}
                className="text-concrete-200"
                strokeWidth={1.5}
              />
              <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary">
                {item.category}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-left">
              <p className="font-display font-semibold text-white text-base leading-tight">
                {item.title}
              </p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-muted-inv mt-1">
                {item.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-ink-950/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${currentItem.title} lightbox`}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-text-muted-inv hover:text-white transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X size={26} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-text-muted-inv hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image area */}
          <div
            className="relative w-full max-w-3xl aspect-[4/3] rounded-lg overflow-hidden border border-royal-600/30 bg-ink-900 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Building2 size={56} className="text-ink-700" strokeWidth={1.5} />
            <p className="mt-3 font-display font-semibold text-text-muted-inv text-base">
              {currentItem.title}
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-muted-inv/60 mt-1">
              {currentItem.location}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-text-muted-inv hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-muted-inv">
            {lightbox + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  );
}
