"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const inputBase =
  "w-full bg-paper border border-concrete-200 rounded-md px-4 py-3 text-sm text-ink-900 font-sans placeholder:text-text-secondary focus:outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-200 transition-colors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error("Unable to send message");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "There was a problem sending your message. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center bg-paper rounded-lg border border-concrete-200 px-8">
        <div className="w-12 h-12 rounded-md bg-royal-50 flex items-center justify-center">
          <Send size={20} className="text-royal-600" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-2">
            Thanks — we&apos;ll be in touch.
          </h3>
          <p className="font-sans text-sm text-text-secondary max-w-[320px] leading-relaxed">
            Your enquiry has been sent successfully. We&apos;ll get back to you as
            soon as possible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-secondary hover:text-royal-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        autoComplete="off"
        tabIndex={-1}
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />

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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
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
          Email Address <span className="text-royal-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
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
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
          placeholder="Describe your project: type of work, location, timeline..."
          className={`${inputBase} resize-none`}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-600">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-royal-600 text-white font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)] self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      <p className="font-mono text-[0.65rem] text-text-secondary uppercase tracking-[0.08em]">
        * Required fields.
      </p>
    </form>
  );
}
