import { Phone, MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t border-ink-700">
      <a
        href="tel:+254722901959"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 transition-colors"
      >
        <Phone size={17} />
        Call
      </a>
      <div className="w-px bg-ink-700" />
      <a
        href="https://wa.me/254722901959"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-ink-950 text-text-inverse text-sm font-medium hover:text-white transition-colors"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}
