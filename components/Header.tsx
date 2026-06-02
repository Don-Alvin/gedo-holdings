"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ink-950 transition-[border-color] duration-200 ${
        scrolled ? "border-b border-ink-700" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Gedo Holdings home">
          <Image
            src="/logo.png"
            alt="Gedo Holdings"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-royal-500"
                  : "text-text-inverse hover:text-royal-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+254722901959"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 hover:-translate-y-px transition-all shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
          >
            <Phone size={14} />
            Call
          </a>
          <a
            href="https://wa.me/254722901959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-ink-700 text-text-inverse text-sm font-medium hover:border-royal-600 hover:text-royal-500 transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-inverse p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-ink-950 z-40 flex flex-col px-6 pt-12 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-3xl font-bold py-3 border-b border-ink-700 transition-colors ${
                pathname === link.href
                  ? "text-royal-500"
                  : "text-text-inverse"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-8">
            <a
              href="tel:+254722901959"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-royal-600 text-white font-medium shadow-[0_6px_20px_rgba(30,71,230,0.30)]"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="https://wa.me/254722901959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-ink-700 text-text-inverse font-medium"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
