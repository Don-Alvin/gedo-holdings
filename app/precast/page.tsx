"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import {
  Zap,
  DollarSign,
  CheckCircle2,
  Lightbulb,
  MapPin,
  Building2,
  MessageCircle,
} from "lucide-react";
import { SITE_URL } from "@/lib/site";

// Note: This page is dynamic due to form state, so we use generateMetadata at export time
export const generateMetadata = (): Metadata => {
  const title = "Precast Concrete Construction in Kenya | Gedo Holdings";
  const description =
    "Build a precast concrete home faster and more affordable across Kenya. NCA registered since 2018. Modern, factory-built homes with superior quality control. Get your quote today.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/precast`,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: "Precast Concrete Construction by Gedo Holdings",
        },
      ],
    },
  };
};

export default function PrecastPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
    website: "", // honeypot
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "precast-campaign",
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({
          name: "",
          phone: "",
          location: "",
          message: "",
          website: "",
        });
        setTimeout(() => setFormState("idle"), 5000);

        // TODO: On successful submission, dataLayer event will be pushed here in §13:
        // window.dataLayer?.push({ event: 'generate_lead', source: 'precast-campaign' });
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  const handleWhatsAppClick = () => {
    // TODO: In §13, fire dataLayer event here before navigating:
    // window.dataLayer?.push({ event: 'whatsapp_click', source: 'precast-campaign' });
    window.open("https://wa.me/254722901959", "_blank");
  };

  return (
    <main>
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-ink-950 text-text-inverse py-16 md:py-24 overflow-hidden">
        {/* Blueprint grid + royal glow background */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="blueprint" x="40" y="40" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint)" className="text-royal-500" />
          </svg>
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal-600 rounded-full opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column: content */}
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-royal-500" />
                <p className="font-mono text-xs font-medium tracking-widest text-royal-500 uppercase">
                  Precast Construction · Across Kenya
                </p>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Your home,{" "}
                <span className="text-royal-500">built in weeks not months</span>
              </h1>

              {/* Subhead */}
              <p className="font-sans text-lg md:text-xl leading-relaxed text-text-muted-inv max-w-md">
                Modern precast concrete construction: faster builds, lower costs, factory-controlled quality.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 md:py-3.5 bg-royal-600 text-white font-medium rounded-md hover:bg-royal-700 transition-all hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
                >
                  Get a Quote
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 bg-transparent border border-text-inverse text-text-inverse font-medium rounded-md hover:border-royal-500 hover:text-royal-500 transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Right column: hero image placeholder */}
            <div className="relative aspect-square md:aspect-auto md:h-96">
              <div className="absolute inset-0 bg-gradient-to-b from-ink-800 to-ink-900 rounded-lg border border-ink-700 flex items-center justify-center overflow-hidden">
                {/* TODO: Replace this placeholder with live-build hero photo */}
                <div className="flex flex-col items-center gap-3 text-text-muted-inv">
                  <Building2 size={48} opacity={0.5} />
                  <p className="text-sm font-mono uppercase tracking-wide">Live build photo (TODO)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY PRECAST SECTION ============ */}
      <section className="bg-concrete-50 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-6 bg-royal-600" />
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase">
                Why Choose Precast
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900">
              Benefits Built In
            </h2>
          </div>

          {/* Benefit cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speed */}
            <div className="bg-paper p-6 md:p-7 rounded-lg border border-concrete-200 hover:border-royal-600 transition-colors group">
              <div className="w-12 h-12 bg-royal-50 rounded-lg flex items-center justify-center group-hover:bg-royal-600 transition-colors mb-4">
                <Zap
                  size={24}
                  className="text-royal-600 group-hover:text-white transition-colors"
                />
              </div>
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase mb-2">
                Build Speed
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Precast panels are cast offsite, so assembly on-site is 50% faster than traditional methods.
              </p>
            </div>

            {/* Cost */}
            <div className="bg-paper p-6 md:p-7 rounded-lg border border-concrete-200 hover:border-royal-600 transition-colors group">
              <div className="w-12 h-12 bg-royal-50 rounded-lg flex items-center justify-center group-hover:bg-royal-600 transition-colors mb-4">
                <DollarSign
                  size={24}
                  className="text-royal-600 group-hover:text-white transition-colors"
                />
              </div>
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase mb-2">
                Lower Cost
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Reduced labor, no weather delays, minimal waste. Save on timeline costs and contingencies.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-paper p-6 md:p-7 rounded-lg border border-concrete-200 hover:border-royal-600 transition-colors group">
              <div className="w-12 h-12 bg-royal-50 rounded-lg flex items-center justify-center group-hover:bg-royal-600 transition-colors mb-4">
                <CheckCircle2
                  size={24}
                  className="text-royal-600 group-hover:text-white transition-colors"
                />
              </div>
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase mb-2">
                Factory Quality
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Controlled casting environment, tested materials, precision tolerances. Every panel meets specs.
              </p>
            </div>

            {/* Comfort */}
            <div className="bg-paper p-6 md:p-7 rounded-lg border border-concrete-200 hover:border-royal-600 transition-colors group">
              <div className="w-12 h-12 bg-royal-50 rounded-lg flex items-center justify-center group-hover:bg-royal-600 transition-colors mb-4">
                <Lightbulb
                  size={24}
                  className="text-royal-600 group-hover:text-white transition-colors"
                />
              </div>
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase mb-2">
                Comfort & Insulation
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Integrated insulation in panels keeps homes cooler in heat, warmer in cooler seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIVE BUILD / GALLERY SECTION ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-6 bg-royal-600" />
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase">
                The Process
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 mb-3">
              Live Build Progress
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              Follow our current precast build: from casting to assembly to finish. This is real, active construction.
            </p>
          </div>

          {/* Gallery placeholder grid — designed to not look empty with few images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main featured image */}
            <div className="md:row-span-2 relative bg-gradient-to-b from-ink-800 to-ink-900 rounded-lg border border-ink-700 aspect-square flex items-center justify-center overflow-hidden">
              {/* TODO: Replace with actual live build foundation/assembly photo */}
              <div className="flex flex-col items-center gap-3 text-text-muted-inv">
                <Building2 size={48} opacity={0.5} />
                <p className="text-sm font-mono uppercase tracking-wide">Stage 1 photo (TODO)</p>
              </div>
            </div>

            {/* Secondary images */}
            <div className="relative bg-gradient-to-b from-ink-800 to-ink-900 rounded-lg border border-ink-700 aspect-video flex items-center justify-center overflow-hidden">
              {/* TODO: Replace with stage 2 photo */}
              <div className="flex flex-col items-center gap-3 text-text-muted-inv">
                <Building2 size={36} opacity={0.5} />
                <p className="text-sm font-mono uppercase tracking-wide">Stage 2 (TODO)</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-ink-800 to-ink-900 rounded-lg border border-ink-700 aspect-video flex items-center justify-center overflow-hidden">
              {/* TODO: Replace with stage 3 photo */}
              <div className="flex flex-col items-center gap-3 text-text-muted-inv">
                <Building2 size={36} opacity={0.5} />
                <p className="text-sm font-mono uppercase tracking-wide">Stage 3 (TODO)</p>
              </div>
            </div>
          </div>

          {/* CTA to see more */}
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">Want updates as the build progresses?</p>
            <a
              href="#quote-form"
              className="inline-flex items-center px-5 py-2.5 bg-royal-600 text-white font-medium rounded-md hover:bg-royal-700 transition-all hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
            >
              Request Updates via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS SECTION ============ */}
      <section className="bg-concrete-100 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Section header */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-0.5 w-6 bg-royal-600" />
              <p className="font-mono text-xs font-medium tracking-widest text-royal-600 uppercase">
                Our Approach
              </p>
              <div className="h-0.5 w-6 bg-royal-600" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900">
              How We Build With Precast
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-royal-600 text-white font-display font-bold text-2xl flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Consult & Design</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We meet with you, understand your vision, and create a custom design optimized for precast manufacturing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-royal-600 text-white font-display font-bold text-2xl flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Cast & Cure</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Panels are cast in our facility with integrated insulation, then cured to strength while your site is prepared.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-royal-600 text-white font-display font-bold text-2xl flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Install & Finish</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Panels are delivered and assembled on-site. Connections are sealed, utilities run, interior finishing follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="bg-ink-950 text-text-inverse py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
            <div className="border-b sm:border-b-0 sm:border-r border-ink-700 pb-6 sm:pb-0 sm:pr-8">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-royal-500">
                NCA Registered
              </p>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-ink-700 pb-6 sm:pb-0 sm:pr-8">
              <p className="font-mono text-xs font-medium tracking-widest uppercase">
                Building Since 2018
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-medium tracking-widest uppercase">
                Across Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA BAND ============ */}
      <section className="bg-royal-600 text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Faster?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">
            Get your free quote and timeline estimate for a precast build.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-royal-600 font-medium rounded-md hover:bg-concrete-50 transition-colors"
            >
              Get Your Quote
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <MessageCircle size={18} />
              Chat Now
            </button>
          </div>
        </div>
      </section>

      {/* ============ QUOTE FORM SECTION ============ */}
      <section id="quote-form" className="bg-concrete-50 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 mb-3">
              Get Your Quote
            </h2>
            <p className="text-lg text-text-secondary">
              Tell us about your project. We'll follow up within 24 hours.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-paper p-8 md:p-10 rounded-lg border border-concrete-200 space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                disabled={formState === "loading"}
                className="w-full px-4 py-2.5 border border-concrete-200 rounded-md focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 disabled:bg-concrete-50"
                placeholder="Your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                disabled={formState === "loading"}
                className="w-full px-4 py-2.5 border border-concrete-200 rounded-md focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 disabled:bg-concrete-50"
                placeholder="0722 901 959"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-ink-900 mb-2">
                Project Location / Size (Optional)
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleFormChange}
                disabled={formState === "loading"}
                className="w-full px-4 py-2.5 border border-concrete-200 rounded-md focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 disabled:bg-concrete-50"
                placeholder="e.g., Nairobi, 200 sq m"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                disabled={formState === "loading"}
                rows={4}
                className="w-full px-4 py-2.5 border border-concrete-200 rounded-md focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 disabled:bg-concrete-50 resize-none"
                placeholder="Tell us about your project, timeline, and any specific needs..."
              />
            </div>

            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleFormChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Submit + Status */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full px-6 py-3 bg-royal-600 text-white font-medium rounded-md hover:bg-royal-700 disabled:opacity-60 transition-all hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
              >
                {formState === "loading" ? "Sending..." : "Send Quote Request"}
              </button>

              {formState === "success" && (
                <p className="text-center text-sm text-green-600 font-medium">
                  ✓ Request sent! We'll be in touch within 24 hours.
                </p>
              )}

              {formState === "error" && (
                <p className="text-center text-sm text-red-600 font-medium">
                  Something went wrong. Please try again or WhatsApp us directly.
                </p>
              )}
            </div>

            {/* Note about tracking */}
            <p className="text-center text-xs text-text-secondary pt-2">
              {/* TODO: Conversions will be tracked in §13 (analytics pass) via dataLayer events */}
              By submitting, you agree to be contacted about your quote.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
