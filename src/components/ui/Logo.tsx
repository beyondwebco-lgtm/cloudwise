import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light"; // "dark" means for dark backgrounds, "light" means for light backgrounds
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
    const src = variant === "dark" ? "/logo-symbol-light.svg" : "/logo-symbol.svg";
    const width = Math.round(height * 1.3);
    return (
      <Image
        src={src}
        alt="CloudWize Symbol"
        width={width}
        height={height}
        className={`object-contain ${className}`}
        priority
      />
    );
  }

  // Full Horizontal Logo
  const src = variant === "dark" ? "/logo-white.svg" : "/logo.svg";
  const width = Math.round(height * 3.85);

  return (
    <Image
      src={src}
      alt="CloudWize Consulting Services"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}
