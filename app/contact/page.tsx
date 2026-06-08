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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8282989455206!2d36.97020279999999!3d-1.2764163000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6bdc9cc3a817%3A0xd81ae7b36478834e!2sGrey%20Park%20Annex!5e0!3m2!1sen!2ske!4v1780928148211!5m2!1sen!2ske"
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
