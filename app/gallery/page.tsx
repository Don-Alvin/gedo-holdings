import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Completed projects and architectural designs by Gedo Holdings — homes, offices and finishes built across Kenya.",
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
