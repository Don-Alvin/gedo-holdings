"use client";

import { useState } from "react";

export default function QuoteForm() {
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
        setFormData({ name: "", phone: "", location: "", message: "", website: "" });
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

  return (
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
  );
}
