import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Trauma-informed utility functions
export function getEmotionalStateClass(
  emotionalState?: "crisis" | "overwhelmed" | "stable" | "planning",
) {
  switch (emotionalState) {
    case "crisis":
      return "emotional-crisis";
    case "overwhelmed":
      return "emotional-crisis"; // Similar treatment to crisis
    case "stable":
    case "planning":
    default:
      return "emotional-stable";
  }
}

export function getTouchTargetClass(
  emotionalState?: "crisis" | "overwhelmed" | "stable" | "planning",
) {
  return emotionalState === "crisis" || emotionalState === "overwhelmed"
    ? "btn-crisis"
    : "";
}

// Format text for trauma-informed messaging
export function getGentleValidationMessage(
  message: string,
  isGentle: boolean = true,
): string {
  if (!isGentle) return message;

  return `We'd appreciate this information when you're ready: ${message}`;
}

// Province code utilities
export type ProvinceCode =
  | "AB"
  | "BC"
  | "MB"
  | "NB"
  | "NL"
  | "NS"
  | "NT"
  | "NU"
  | "ON"
  | "PE"
  | "QC"
  | "SK"
  | "YT";

export const provinceNames: Record<ProvinceCode, string> = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NS: "Nova Scotia",
  NT: "Northwest Territories",
  NU: "Nunavut",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  YT: "Yukon",
};

export function getProvinceName(code: ProvinceCode): string {
  return provinceNames[code] || code;
}

// Date formatting utilities
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatRelativeTime(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return formatDate(d);
}

// Progress calculation utilities
export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getProgressMessage(percentage: number): string {
  if (percentage === 0) return "Ready to start your journey";
  if (percentage < 25) return "Taking the first steps - you're doing great";
  if (percentage < 50) return "Making steady progress";
  if (percentage < 75) return "You're more than halfway there";
  if (percentage < 100) return "Almost complete - you're doing wonderfully";
  return "Congratulations on completing this section!";
}
