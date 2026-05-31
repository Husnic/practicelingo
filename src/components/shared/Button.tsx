import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "nhs" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-[#005EB8] text-white hover:bg-[#004A93] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-[#005EB8] text-[#005EB8] hover:bg-[#005EB8] hover:text-white",
  ghost: "text-[#005EB8] hover:bg-[#E6F1FB]",
  nhs: "bg-[#007F3B] text-white hover:bg-[#005C2C] shadow-sm hover:shadow-md",
  white: "bg-white text-[#005EB8] hover:bg-blue-50 shadow-sm hover:shadow-md",
  "white-outline": "border-2 border-white text-white hover:bg-white hover:text-[#005EB8]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
