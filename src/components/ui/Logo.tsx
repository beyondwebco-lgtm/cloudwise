import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" for dark backgrounds (navbar/footer), "light" for light backgrounds
  symbolOnly?: boolean;
  className?: string;
  height?: number;
}

export function Logo({
  variant = "dark",
  symbolOnly = false,
  className = "",
  height = 40,
}: LogoProps) {
  if (symbolOnly) {
    const src = "/logo-symbol.png";
    const width = Math.round(height * (284 / 163));
    return (
      <Image
        src={src}
        alt="CloudWize Symbol"
        width={width}
        height={height}
        className={`object-contain h-auto ${className}`}
        priority
      />
    );
  }

  // Full Horizontal 3D Ribbon Logo (907 x 163)
  const src = variant === "dark" ? "/logo-white.png" : "/logo.png";
  const width = Math.round(height * (907 / 163));

  return (
    <Image
      src={src}
      alt="CloudWize Consulting Services"
      width={width}
      height={height}
      className={`object-contain h-auto ${className}`}
      priority
    />
  );
}
