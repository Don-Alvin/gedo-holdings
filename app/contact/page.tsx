import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Gedo Holdings about construction, design and finishing across Kenya. WhatsApp or message us to start your project.",
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
          <iframe
            src="https://maps.app.goo.gl/u2UqaJCjTP4qqxsC6"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gedo Holdings office location"
            className="rounded-lg border border-concrete-200 h-72 md:h-[450px] w-full"
          />
        </div>
      </section>
    </>
  );
}
