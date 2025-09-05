import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  emotionalState?: "crisis" | "overwhelmed" | "stable" | "planning";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, emotionalState, ...props }, ref) => {
    const adjustedHeight =
      emotionalState === "crisis" || emotionalState === "overwhelmed"
        ? "h-12" // Larger for crisis users
        : "h-9";

    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          adjustedHeight,
          className,
        )}
        data-slot="input"
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
