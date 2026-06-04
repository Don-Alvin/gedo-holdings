"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { CATEGORY_LABEL, type GalleryItem } from "@/data/gallery";

function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  const label = CATEGORY_LABEL[item.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-lg border border-concrete-200 bg-concrete-100 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${label}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Image
        src={item.url}
        alt={label}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={90}
        style={{ width: "100%", height: "auto", display: "block" }}
        className="transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Hover label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-4 py-3 pointer-events-none">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-text-muted-inv">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function ImageGallery({
  items,
  onImageClick,
}: {
  items: GalleryItem[];
  onImageClick?: (item: GalleryItem) => void;
}) {
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
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="break-inside-avoid mb-4">
          <GalleryCard item={item} onClick={() => onImageClick?.(item)} />
        </div>
      ))}
    </div>
  );
}
