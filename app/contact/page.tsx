import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Gedo Holdings Ltd",
  description:
    "Get in touch with Gedo Holdings for a free quote on home construction, office partitioning, or renovation work in Nairobi.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink-950 py-16 md:py-24 border-b border-ink-700">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <Eyebrow text="Contact Us" className="mb-5" light />
          <h1 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-bold text-text-inverse mb-4">
            Get a Free Quote
          </h1>
          <p className="font-sans text-base text-text-muted-inv max-w-[480px] leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one
            business day. Or call and WhatsApp us directly.
          </p>
        </div>
      </section>

      {/* Contact body */}
      <section className="bg-concrete-50 py-14 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <ContactDetails />

            <div className="flex flex-col gap-6">
              <div>
                <Eyebrow text="Send a Message" className="mb-5" />
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">
                  Project Enquiry
                </h2>
                <p className="font-sans text-sm text-text-secondary">
                  Fill in the form and we&apos;ll respond promptly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-concrete-100 border-t border-concrete-200 py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <Eyebrow text="Find Us" className="mb-6" />
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-8">
            Grey Park Annex, Eastern Bypass
          </h2>

          {/*
            Replace this div with a Google Maps iframe:
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%" height="400" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            Get the embed URL from Google Maps → Share → Embed a map.
          */}
          <div className="rounded-lg overflow-hidden border border-concrete-200 h-72 md:h-96 bg-concrete-100 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-md bg-royal-50 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="text-royal-600"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-secondary">
              Map embed — replace with Google Maps iframe
            </p>
            <a
              href="https://maps.google.com/?q=Grey+Park+Annex+Eastern+Bypass+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-royal-600 hover:text-royal-700 transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
