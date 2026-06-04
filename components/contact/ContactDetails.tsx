import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function DetailRow({ icon, label, children }: DetailRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-md bg-royal-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-secondary">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Eyebrow text="Reach Us" className="mb-5" />
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-ink-900 mb-4">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="font-sans text-base text-text-secondary leading-relaxed max-w-[420px]">
          Whether you&apos;re planning a new home, an office fit-out, or a
          renovation, our team is ready to help. Reach us by WhatsApp or email.
          We respond promptly.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Phone — plain text for reference per brief, no tel: link */}
        <DetailRow
          icon={<Phone size={18} className="text-royal-600" />}
          label="Phone"
        >
          <p className="font-sans text-ink-900 font-medium">0722 901 959</p>
        </DetailRow>

        <DetailRow
          icon={<MessageCircle size={18} className="text-royal-600" />}
          label="WhatsApp"
        >
          <a
            href="https://wa.me/254722901959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 transition-colors shadow-[0_6px_20px_rgba(30,71,230,0.25)] mt-1 self-start"
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>
        </DetailRow>

        <DetailRow
          icon={<Mail size={18} className="text-royal-600" />}
          label="Email"
        >
          <a
            href="mailto:gedohomes@gmail.com"
            className="font-sans text-ink-900 font-medium hover:text-royal-600 transition-colors"
          >
            gedohomes@gmail.com
          </a>
        </DetailRow>

        <DetailRow
          icon={<MapPin size={18} className="text-royal-600" />}
          label="Location"
        >
          <p className="font-sans text-ink-900 text-sm leading-relaxed">
            Grey Park Annex<br />
            Along Eastern Bypass<br />
            Nairobi, Kenya
          </p>
        </DetailRow>

        <DetailRow
          icon={<Clock size={18} className="text-royal-600" />}
          label="Working Hours"
        >
          <p className="font-sans text-ink-900 font-medium">
            Monday – Saturday
          </p>
          <p className="font-sans text-text-secondary text-sm">8:00 am – 5:00 pm</p>
        </DetailRow>
      </div>
    </div>
  );
}
