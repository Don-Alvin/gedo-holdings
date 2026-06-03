import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Gedo Holdings"
              width={280}
              height={80}
              className="h-20 object-contain"
              style={{ width: "auto" }}
            />
            <p className="text-text-muted-inv text-sm leading-relaxed">
              Building Dreams. Enhancing Lives.
            </p>
            <Image
              src="/nca-registered.png"
              alt="NCA Registered"
              width={80}
              height={80}
              className="h-14 object-contain"
              style={{ width: "auto" }}
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[0.7rem] text-royal-600 uppercase tracking-[0.12em]">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted-inv text-sm hover:text-text-inverse transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[0.7rem] text-royal-600 uppercase tracking-[0.12em]">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              {/* Phone — plain text per brief, no tel: link */}
              <li className="flex items-center gap-2 text-text-muted-inv text-sm">
                <Phone size={13} className="text-royal-600 flex-shrink-0" />
                0722 901 959
              </li>
              <li>
                <a
                  href="https://wa.me/254722901959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted-inv text-sm hover:text-text-inverse transition-colors"
                >
                  <MessageCircle size={13} className="text-royal-600 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:gedohomes@gmail.com"
                  className="flex items-center gap-2 text-text-muted-inv text-sm hover:text-text-inverse transition-colors"
                >
                  <Mail size={13} className="text-royal-600 flex-shrink-0" />
                  gedohomes@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-muted-inv text-sm">
                <MapPin size={13} className="text-royal-600 flex-shrink-0 mt-0.5" />
                Grey Park Annex, Eastern Bypass, Nairobi
              </li>
              <li className="text-text-muted-inv text-sm pl-5">
                Mon–Sat · 8 am – 5 pm
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[0.7rem] text-royal-600 uppercase tracking-[0.12em]">
              Follow
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://facebook.com/gedoholdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted-inv text-sm hover:text-text-inverse transition-colors"
                >
                  <span className="text-royal-600 flex-shrink-0">
                    <FacebookIcon size={13} />
                  </span>
                  @gedoholdings
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/gedohomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted-inv text-sm hover:text-text-inverse transition-colors"
                >
                  <span className="text-royal-600 flex-shrink-0">
                    <InstagramIcon size={13} />
                  </span>
                  @gedohomes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-700">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-muted-inv text-xs">
            © {year} Gedo Holdings Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[0.65rem] text-text-muted-inv uppercase tracking-[0.1em]">
            NCA Registered · Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
