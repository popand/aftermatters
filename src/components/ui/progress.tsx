"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    gentle?: boolean;
  }
>(({ className, value, gentle = true, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full",
      gentle ? "bg-muted/30" : "bg-primary/20",
      className,
    )}
    data-slot="progress"
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all duration-300 ease-out",
        gentle ? "bg-gradient-to-r from-secondary to-primary" : "bg-primary",
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      data-slot="progress-indicator"
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
