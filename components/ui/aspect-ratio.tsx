import * as React from "react";

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function AspectRatio({ ratio = 16 / 9, children, className, style }: AspectRatioProps) {
  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", paddingBottom: `${(1 / ratio) * 100}%`, ...style }}
    >
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
    </div>
  );
}
