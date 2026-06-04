// src/data/gallery.ts
// Drives the gallery hero's scrolling columns + the masonry grid + the All / Projects / Designs filter.
//
// Files: project-01..19 and design-01..11 live in /public/gallery/; the 3 hero renders are
// reused from /public. Adjust the extension if yours aren't .jpg (e.g. .jpeg / .webp).
//
// No per-image titles — every image's caption is just its category label (see CATEGORY_LABEL).
// Images render at their natural aspect ratio (no forced crop).

export type GalleryCategory = "projects" | "designs";

export type GalleryItem = {
  id: string;
  url: string;
  category: GalleryCategory;
};

// The only text shown on/with an image.
export const CATEGORY_LABEL: Record<GalleryCategory, string> = {
  projects: "Project",
  designs: "Architectural design",
};

const pad = (n: number) => String(n).padStart(2, "0");

// Designs: 3 hero renders (in /public) + design-01..11 (in /public/gallery)
const designUrls: string[] = [
  "/hero-villa.jpeg",
  "/hero-manor.jpeg",
  "/hero-bungalow.jpeg",
  ...Array.from({ length: 11 }, (_, i) => `/gallery/design-${pad(i + 1)}.jpeg`),
];

// Projects: project-01..19 (in /public/gallery)
const projectUrls: string[] = Array.from(
  { length: 19 },
  (_, i) => `/gallery/project-${pad(i + 1)}.jpeg`,
);

export const designs: GalleryItem[] = designUrls.map((url, i) => ({
  id: `design-${pad(i + 1)}`,
  url,
  category: "designs",
}));

export const projects: GalleryItem[] = projectUrls.map((url, i) => ({
  id: `project-${pad(i + 1)}`,
  url,
  category: "projects",
}));

// "All" order (projects first, then designs). Also feeds the hero's scrolling columns.
export const galleryItems: GalleryItem[] = [...projects, ...designs];
