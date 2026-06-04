"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const inputBase =
  "w-full bg-paper border border-concrete-200 rounded-md px-4 py-3 text-sm text-ink-900 font-sans placeholder:text-text-secondary focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form delivery wired up later (Resend / email service)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center bg-paper rounded-lg border border-concrete-200 px-8">
        <div className="w-12 h-12 rounded-md bg-royal-50 flex items-center justify-center">
          <Send size={20} className="text-royal-600" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">
            Message Received
          </h3>
          <p className="font-sans text-sm text-text-secondary max-w-[300px] leading-relaxed">
            Thanks for reaching out. Our team will be in touch shortly. For
            urgent enquiries, WhatsApp us directly.
          </p>
        </div>
        <a
          href="https://wa.me/254722901959"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 transition-colors shadow-[0_6px_20px_rgba(30,71,230,0.25)]"
        >
          <MessageCircle size={15} />
          Chat on WhatsApp
        </a>
        <button
          onClick={() => setSubmitted(false)}
          className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-secondary hover:text-royal-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary"
          >
            Full Name <span className="text-royal-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Kamau"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary"
          >
            Phone <span className="text-royal-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="0722 000 000"
            className={inputBase}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary"
        >
          Message <span className="text-royal-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project: type of work, location, timeline..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-royal-600 text-white font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)] self-start"
      >
        <Send size={16} />
        Send Message
      </button>

      <p className="font-mono text-[0.65rem] text-text-secondary uppercase tracking-[0.08em]">
        * Required fields. Form delivery coming soon.
      </p>
    </form>
  );
}
