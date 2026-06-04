import Eyebrow from "@/components/Eyebrow";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(58,91,240,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(58,91,240,0.06) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Royal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 15% 50%, rgba(30,71,230,0.12) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Architectural line-art — house elevation with measurement ticks */}
      <svg
        viewBox="0 0 560 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute bottom-0 right-0 text-white opacity-[0.07] w-[min(500px,55vw)] pointer-events-none translate-y-4"
        aria-hidden="true"
      >
        {/* Ground line */}
        <line x1="40" y1="340" x2="520" y2="340" />
        {/* Walls */}
        <rect x="80" y="190" width="400" height="150" />
        {/* Roof */}
        <polyline points="60,190 280,60 500,190" />
        {/* Chimney */}
        <rect x="375" y="105" width="35" height="85" />
        {/* Door */}
        <rect x="235" y="255" width="55" height="85" />
        <circle cx="283" cy="300" r="2.5" />
        {/* Left window + panes */}
        <rect x="115" y="225" width="70" height="50" />
        <line x1="150" y1="225" x2="150" y2="275" />
        <line x1="115" y1="250" x2="185" y2="250" />
        {/* Right window + panes */}
        <rect x="340" y="225" width="70" height="50" />
        <line x1="375" y1="225" x2="375" y2="275" />
        <line x1="340" y1="250" x2="410" y2="250" />
        {/* Vertical height dimension — left */}
        <line x1="45" y1="60" x2="45" y2="340" />
        <line x1="38" y1="60" x2="52" y2="60" />
        <line x1="38" y1="340" x2="52" y2="340" />
        <line x1="52" y1="60" x2="80" y2="60" strokeDasharray="4 3" />
        <line x1="52" y1="340" x2="80" y2="340" strokeDasharray="4 3" />
        {/* Horizontal width dimension — below ground */}
        <line x1="80" y1="365" x2="480" y2="365" />
        <line x1="80" y1="358" x2="80" y2="372" />
        <line x1="480" y1="358" x2="480" y2="372" />
        <line x1="80" y1="340" x2="80" y2="358" strokeDasharray="4 3" />
        <line x1="480" y1="340" x2="480" y2="358" strokeDasharray="4 3" />
        {/* Roof height dimension — right */}
        <line x1="515" y1="60" x2="515" y2="190" />
        <line x1="508" y1="60" x2="522" y2="60" />
        <line x1="508" y1="190" x2="522" y2="190" />
        <line x1="500" y1="60" x2="508" y2="60" strokeDasharray="4 3" />
        <line x1="500" y1="190" x2="508" y2="190" strokeDasharray="4 3" />
      </svg>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-8 min-h-[45vh] py-16 md:py-24">
        <Eyebrow text="Get in Touch" light className="mb-6" />
        <h1 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-bold text-text-inverse mb-4">
          Let&apos;s build something that lasts
        </h1>
        <p className="font-sans text-base text-text-muted-inv max-w-[480px] leading-relaxed">
          Tell us about your project. We&apos;ll get back to you promptly by
          WhatsApp or email.
        </p>
      </div>
    </section>
  );
}
