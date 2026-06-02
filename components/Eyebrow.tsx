interface EyebrowProps {
  text: string;
  className?: string;
  light?: boolean;
}

export default function Eyebrow({ text, className = "", light = false }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="block w-8 h-px bg-royal-600 flex-shrink-0" />
      <span
        className={`font-mono text-[0.7rem] uppercase tracking-[0.12em] ${
          light ? "text-royal-500" : "text-royal-600"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
