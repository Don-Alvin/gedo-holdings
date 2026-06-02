import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-ink-950 min-h-[88vh] flex items-center overflow-hidden">
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(58, 91, 240, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58, 91, 240, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Royal measure line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-royal-600 opacity-25"
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-36 w-full">
        <div className="max-w-[820px]">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="block w-8 h-px bg-royal-600 flex-shrink-0" />
            <span className="font-mono text-[0.7rem] text-royal-500 uppercase tracking-[0.12em]">
              Est. 2018 · NCA Registered · Nairobi, Kenya
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-text-inverse mb-6 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            We Build What{" "}
            <span className="text-royal-500">Matters</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-sans text-lg text-text-muted-inv leading-relaxed mb-10 max-w-[560px] animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Building Dreams. Enhancing Lives. Your trusted construction partner
            in Nairobi — from home builds to office fit-outs and renovation.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-royal-600 text-white font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+254722901959"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-ink-700 text-text-inverse font-medium hover:border-royal-600 hover:text-royal-500 transition-colors"
            >
              <Phone size={16} />
              Call Us
            </a>
            <a
              href="https://wa.me/254722901959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-ink-700 text-text-inverse font-medium hover:border-royal-600 hover:text-royal-500 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
