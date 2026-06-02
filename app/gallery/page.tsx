import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Gedo Holdings Ltd",
  description:
    "Browse our portfolio of completed projects: home construction, office partitioning, and repair & renovation across Nairobi.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-950 py-16 md:py-24 border-b border-ink-700">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <Eyebrow text="Our Work" className="mb-5" light />
          <h1 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-bold text-text-inverse mb-4">
            Project Gallery
          </h1>
          <p className="font-sans text-base text-text-muted-inv max-w-[520px] leading-relaxed">
            A selection of completed builds, fit-outs, and renovations across
            Nairobi. Real project photos coming soon — placeholders shown below.
          </p>
        </div>
      </section>

      {/* Gallery body */}
      <section className="bg-concrete-50 py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
