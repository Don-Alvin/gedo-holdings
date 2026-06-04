import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Gedo Holdings Ltd",
  description:
    "Get in touch with Gedo Holdings for a free quote on home construction, office partitioning, or renovation work in Nairobi.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Details + Form */}
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

      {/* Map */}
      <section className="bg-concrete-100 border-t border-concrete-200 py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <Eyebrow text="Find Us" className="mb-6" />
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-8">
            Grey Park Annex, Eastern Bypass
          </h2>

          {/*
            To embed the real map:
            1. Open Google Maps and search "Grey Park Annex Eastern Bypass Nairobi"
            2. Click Share → Embed a map → copy the iframe src URL
            3. Replace the <div> placeholder below with:

            <iframe
              src="PASTE_EMBED_SRC_HERE"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gedo Holdings office location"
              className="rounded-lg"
            />
          */}
          <div className="rounded-lg overflow-hidden border border-concrete-200 h-72 md:h-[450px] bg-concrete-100 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-md bg-royal-50 flex items-center justify-center">
              <MapPin size={20} className="text-royal-600" strokeWidth={1.75} />
            </div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-secondary">
              Map coming soon
            </p>
            <a
              href="https://maps.google.com/?q=Grey+Park+Annex+Eastern+Bypass+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-royal-600 hover:text-royal-700 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
