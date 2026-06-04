"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  galleryItems,
  projects,
  designs,
  CATEGORY_LABEL,
  type GalleryItem,
} from "@/data/gallery";
import { ImageGallery } from "@/components/ui/image-gallery";

type Filter = "all" | "projects" | "designs";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "projects", label: "Projects" },
  { value: "designs", label: "Designs" },
];

function itemsFor(filter: Filter): GalleryItem[] {
  if (filter === "projects") return projects;
  if (filter === "designs") return designs;
  return galleryItems;
}

function ImageModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
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
      aria-label={CATEGORY_LABEL[item.category]}
    >
      <button
        className="absolute top-4 right-4 text-text-muted-inv hover:text-white transition-colors p-2 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div
        className="relative w-full max-w-4xl rounded-xl overflow-hidden bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={item.url}
            alt={CATEGORY_LABEL[item.category]}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="px-5 py-3 border-t border-ink-700">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-muted-inv">
            {CATEGORY_LABEL[item.category]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>("all");
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter gallery">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`font-mono text-[0.7rem] uppercase tracking-[0.12em] px-4 py-2 rounded-sm border transition-colors ${
              active === value
                ? "bg-royal-600 border-royal-600 text-white"
                : "border-concrete-200 text-text-secondary hover:border-royal-600 hover:text-royal-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Masonry gallery */}
      <ImageGallery items={itemsFor(active)} onImageClick={setModalItem} />

      {/* Lightbox modal */}
      {modalItem && (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </>
  );
}
