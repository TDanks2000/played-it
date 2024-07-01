import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ensureDecimal = (num: number): string => {
  if (isNaN(num)) return "??";
  if (!num) return num?.toString();
  // Check if the number is a whole number
  if (num % 1 === 0) {
    return (num / 10).toFixed(1); // Convert to decimal by deviding by 10
  }

  // If the number is already a decimal, return it as is
  return num.toFixed(1);
};
