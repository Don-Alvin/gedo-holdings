export interface GalleryItem {
  src: string;
  category: "projects" | "designs";
  title: string;
  desc: string;
  span: string; // Tailwind col-span / row-span classes for bento sizing
}

// Add project photos to /public/gallery/ and register them here.
// "designs" = architectural renders; "projects" = built work (photos).
export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/hero-villa.jpeg",
    category: "designs",
    title: "Contemporary Villa",
    desc: "Architectural render · Nairobi",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/hero-manor.jpeg",
    category: "designs",
    title: "Stone Manor",
    desc: "Architectural render · Nairobi",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/hero-bungalow.jpeg",
    category: "designs",
    title: "Modern Bungalow",
    desc: "Architectural render · Nairobi",
    span: "col-span-1 row-span-1",
  },
];
