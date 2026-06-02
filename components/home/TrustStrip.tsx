import Image from "next/image";

const items = [
  { label: "Est. 2018" },
  { label: "8 Years Experience" },
  { nca: true },
  { label: "Nairobi, Kenya" },
];

export default function TrustStrip() {
  return (
    <div className="bg-ink-900 border-b border-ink-700">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-5 flex flex-wrap items-center justify-center gap-5 md:gap-0 md:divide-x md:divide-ink-700">
        {items.map((item, i) =>
          item.nca ? (
            <div
              key={i}
              className="flex items-center gap-2.5 md:px-8"
            >
              <Image
                src="/nca-registered.png"
                alt="NCA Registered"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
              />
              <span className="font-mono text-[0.7rem] text-text-muted-inv uppercase tracking-[0.12em]">
                NCA Registered
              </span>
            </div>
          ) : (
            <div key={i} className="flex items-center gap-2.5 md:px-8">
              <span className="block w-5 h-px bg-royal-600 flex-shrink-0" />
              <span className="font-mono text-[0.7rem] text-text-muted-inv uppercase tracking-[0.12em]">
                {item.label}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
