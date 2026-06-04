import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Gedo Holdings Ltd",
  description:
    "Browse our portfolio of completed projects: home construction, office partitioning, and repair & renovation across Kenya.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />

      <section className="bg-concrete-50 py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
