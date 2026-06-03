import { MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-ink-700">
      <a
        href="https://wa.me/254722901959"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 transition-colors"
      >
        <MessageCircle size={17} />
        Chat on WhatsApp
      </a>
    </div>
  );
}
