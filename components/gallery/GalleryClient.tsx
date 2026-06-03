"use client";

import { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { InteractiveImageBentoGallery } from "@/components/ui/bento-gallery";

type Filter = "all" | "projects" | "designs";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "projects", label: "Projects" },
  { value: "designs", label: "Designs" },
];

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>("all");

  const items =
    active === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* Filter chips */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filter gallery"
      >
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

      {/* Bento gallery */}
      <InteractiveImageBentoGallery items={items} />
    </>
  );
}
