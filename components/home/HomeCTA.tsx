import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

export default function HomeCTA() {
  return (
    <section className="bg-ink-950 py-14 md:py-24 relative overflow-hidden">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(58, 91, 240, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58, 91, 240, 1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
        <Eyebrow text="Get Started" className="justify-center mb-6" light />

        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-text-inverse mb-5 max-w-[540px] mx-auto">
          Ready to Build Your Next Project?
        </h2>

        <p className="font-sans text-base text-text-muted-inv mb-10 max-w-[480px] mx-auto leading-relaxed">
          Talk to our team today. We offer free consultations and competitive
          quotes for every project, big or small.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-royal-600 text-white font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/254722901959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-ink-700 text-text-inverse font-medium hover:border-royal-600 hover:text-royal-500 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
