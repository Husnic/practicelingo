import Image from "next/image";
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  children?: ReactNode;
  /** 0–1. How dark the overlay is. Default 0.65 */
  overlayOpacity?: number;
  /** Extra tint colour blended on top. Default transparent */
  overlayColor?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  imageAlt = "Hero background",
  children,
  overlayOpacity = 0.65,
  overlayColor = "#005EB8",
}: PageHeroProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${overlayColor}cc 0%, #000000bb 100%)`,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-white/60 animate-fade-in">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-in-up delay-300">{children}</div>
        )}
      </div>
    </section>
  );
}
