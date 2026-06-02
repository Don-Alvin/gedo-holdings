import { Building2 } from "lucide-react";

interface PlaceholderImageProps {
  className?: string;
  label?: string;
  dark?: boolean;
}

export default function PlaceholderImage({
  className = "",
  label,
  dark = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center border border-royal-600/40 rounded-lg ${
        dark ? "bg-ink-900" : "bg-concrete-100"
      } ${className}`}
    >
      <Building2
        size={36}
        className={dark ? "text-ink-700" : "text-concrete-200"}
        strokeWidth={1.5}
      />
      {label && (
        <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-muted-inv">
          {label}
        </span>
      )}
    </div>
  );
}
