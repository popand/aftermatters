"use client";
import { cn, calculateProgress, getProgressMessage } from "@/lib/utils";
import { Progress } from "./progress";
import { EmotionalState } from "@/types";

export interface ProgressIndicatorProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  showMessage?: boolean;
  emotionalState?: EmotionalState;
  className?: string;
  gentle?: boolean;
}

export function ProgressIndicator({
  current,
  total,
  label = "Progress",
  showPercentage = true,
  showMessage = true,
  emotionalState = "stable",
  className,
  gentle = true,
}: ProgressIndicatorProps) {
  const percentage = calculateProgress(current, total);
  const progressMessage = getProgressMessage(percentage);

  const isStressedState =
    emotionalState === "crisis" || emotionalState === "overwhelmed";

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">{label}</p>
          {showMessage && (
            <p
              className={cn(
                "text-xs",
                isStressedState
                  ? "text-information-blue"
                  : "text-muted-foreground",
              )}
            >
              {progressMessage}
            </p>
          )}
        </div>
        {showPercentage && (
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">{percentage}%</p>
            <p className="text-xs text-muted-foreground">
              {current} of {total}
            </p>
          </div>
        )}
      </div>

      <Progress
        value={percentage}
        gentle={gentle}
        className={cn(
          isStressedState && "h-3", // Slightly taller for stressed users
          "transition-all duration-300",
        )}
        aria-label={`${label}: ${current} of ${total} completed, ${percentage}%`}
      />

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Progress updated: ${percentage}% complete. ${progressMessage}`}
      </div>
    </div>
  );
}
