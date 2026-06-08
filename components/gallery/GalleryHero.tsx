import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import { galleryItems, type GalleryItem } from "@/data/gallery";

function splitColumns(items: GalleryItem[], n: number): GalleryItem[][] {
  const cols: GalleryItem[][] = Array.from({ length: n }, () => []);
  items.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

function ScrollImageColumn({
  items,
  duration,
  className = "",
}: {
  items: GalleryItem[];
  duration: number;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex-1 overflow-hidden ${className}`}>
      <div
        className="flex flex-col gap-2"
        style={{ animation: `scrollUp ${duration}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-sm flex-shrink-0"
          >
            <Image
              src={item.url}
              alt=""
              fill
              quality={90}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryHero() {
  const [col0, col1, col2, col3] = splitColumns(galleryItems, 4);

  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Scrolling image columns — decorative background */}
      <div
        className="absolute inset-0 flex gap-2 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <ScrollImageColumn items={col0} duration={30} />
        <ScrollImageColumn items={col1} duration={40} className="hidden sm:block" />
        <ScrollImageColumn items={col2} duration={35} className="hidden md:block" />
        <ScrollImageColumn items={col3} duration={38} className="hidden lg:block" />
      </div>

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 bg-ink-950/75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(58,91,240,0.05) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(58,91,240,0.05) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Page title — centered over the scrolling background */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-8 min-h-[60vh] py-24 md:py-32">
        <Eyebrow text="Our Work" className="mb-6" light />
        <h1 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-bold text-text-inverse mb-4">
          Projects &amp; Designs
        </h1>
        <p className="font-sans text-base text-text-muted-inv max-w-[480px] leading-relaxed">
          A selection of completed builds and architectural designs from across Kenya.
        </p>
      </div>
    </section>
  );
}
