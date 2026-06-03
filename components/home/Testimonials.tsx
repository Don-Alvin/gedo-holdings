import { MapPin } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

interface Testimonial {
  text: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    text: "[Real client quote — home construction, Nairobi]",
    name: "[Client Name]",
    location: "Nairobi",
  },
  {
    text: "[Real client quote — office fit-out, Westlands]",
    name: "[Client Name]",
    location: "Westlands, Nairobi",
  },
  {
    text: "[Real client quote — repair & renovation project]",
    name: "[Client Name]",
    location: "Kiambu",
  },
  {
    text: "[Real client quote — new residential build]",
    name: "[Client Name]",
    location: "Kisumu",
  },
  {
    text: "[Real client quote — architectural design]",
    name: "[Client Name]",
    location: "Nyeri",
  },
  {
    text: "[Real client quote — home construction]",
    name: "[Client Name]",
    location: "Migori",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3);

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-ink-900 border border-ink-700 rounded-lg p-6 flex flex-col gap-4 shadow-[0_4px_24px_rgba(30,71,230,0.08)] flex-shrink-0">
      <p className="font-sans text-sm text-text-inverse leading-relaxed">
        &ldquo;{item.text}&rdquo;
      </p>
      <div>
        <p className="font-sans text-sm font-medium text-white">{item.name}</p>
        <p className="flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted-inv mt-0.5">
          <MapPin size={10} className="text-royal-500 flex-shrink-0" />
          {item.location}
        </p>
      </div>
    </div>
  );
}

function ScrollColumn({
  items,
  duration,
}: {
  items: Testimonial[];
  duration: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden flex-1"
      style={{
        height: "420px",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col gap-5"
        style={{ animation: `scrollUp ${duration}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-ink-950 py-14 md:py-24 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(58,91,240,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(58,91,240,0.06) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Royal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(30,71,230,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="mb-12 max-w-[540px]">
          <Eyebrow text="Testimonials" className="mb-5" light />
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-text-inverse mb-4">
            What our clients say
          </h2>
          <p className="font-sans text-base text-text-muted-inv leading-relaxed">
            From Nairobi to Kisumu, Nyeri, Kiambu and Migori — what clients say
            about building with us.
          </p>
        </div>

        <div className="flex gap-5">
          <ScrollColumn items={col1} duration={22} />
          <ScrollColumn items={col2} duration={28} />
        </div>

        <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-700">
          Replace placeholders with real client quotes before launch.
        </p>
      </div>
    </section>
  );
}
