
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const AnimatedButton = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: AnimatedButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "bg-transparent hover:bg-secondary text-foreground"
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-md font-medium shadow-sm transition-all duration-300 ease-in-out",
        "after:absolute after:inset-0 after:rounded-md after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:hover:opacity-100 after:border after:border-white/20",
        "transform hover:translate-y-[-2px] active:translate-y-[0px]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default AnimatedButton;
