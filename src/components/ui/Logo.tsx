import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" for dark backgrounds (navbar), "light" for light backgrounds (footer)
  symbolOnly?: boolean;
  className?: string;
  height?: number;
}

export function Logo({
  variant = "dark",
  symbolOnly = false,
  className = "",
  height = 44,
}: LogoProps) {
  if (symbolOnly) {
    const src = "/logo-symbol.png";
    const width = Math.round(height * (970 / 373));
    return (
      <Image
        src={src}
        alt="Cloudwize Symbol"
        width={width}
        height={height}
        className={`object-contain ${className || "h-auto w-auto"}`}
        priority
      />
    );
  }

  // Full Stacked Logo (970 x 574)
  const src = variant === "dark" ? "/logo-white.png" : "/logo.png";
  const width = Math.round(height * (970 / 574));

  return (
    <Image
      src={src}
      alt="Cloudwize Consulting"
      width={width}
      height={height}
      className={`object-contain ${className || "h-auto w-auto"}`}
      priority
    />
  );
}
