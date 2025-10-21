import React from "react";
import clsx from "clsx";


export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}) {
  const variants: Record<string, string> = {
    default: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
