"use client";

import * as React from "react";
import { cn, getGentleValidationMessage } from "@/lib/utils";
import { Input } from "./input";
import { TraumaInformedProps } from "@/types";

export interface TraumaInformedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TraumaInformedProps {
  label: string;
  helpText?: string;
  errorMessage?: string;
  showOptional?: boolean;
}

const TraumaInformedInput = React.forwardRef<
  HTMLInputElement,
  TraumaInformedInputProps
>(
  (
    {
      label,
      helpText,
      errorMessage,
      required = false,
      showOptional = true,
      emotionalState = "stable",
      gentleValidation = true,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || React.useId();
    const helpId = `${inputId}-help`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(errorMessage);
    const displayError = hasError && errorMessage;
    const gentleError = hasError && gentleValidation;

    const finalErrorMessage = gentleError
      ? getGentleValidationMessage(errorMessage!, gentleValidation)
      : errorMessage;

    return (
      <div className={cn("space-y-2", className)}>
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm font-medium text-foreground block",
            required && "after:content-['*'] after:text-destructive after:ml-1",
          )}
        >
          {label}
          {!required && showOptional && (
            <span className="text-muted-foreground font-normal ml-1">
              (optional)
            </span>
          )}
        </label>

        {helpText && (
          <p id={helpId} className="text-xs text-muted-foreground">
            {helpText}
          </p>
        )}

        <Input
          ref={ref}
          id={inputId}
          required={required}
          emotionalState={emotionalState}
          className={cn(
            hasError && "border-destructive focus-visible:ring-destructive/20",
            "transition-colors",
          )}
          aria-describedby={cn(helpText && helpId, hasError && errorId)}
          aria-invalid={hasError}
          {...props}
        />

        {displayError && (
          <div
            id={errorId}
            className={cn(
              "flex items-center gap-2 text-xs",
              gentleError ? "text-information-blue" : "text-destructive",
            )}
            role="alert"
            aria-live="polite"
          >
            <svg
              className={cn(
                "size-4 shrink-0",
                gentleError ? "text-information-blue" : "text-destructive",
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {gentleError ? (
                // Info icon for gentle validation
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              ) : (
                // Warning icon for standard validation
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
            <span>{finalErrorMessage}</span>
          </div>
        )}
      </div>
    );
  },
);

TraumaInformedInput.displayName = "TraumaInformedInput";

export { TraumaInformedInput };
