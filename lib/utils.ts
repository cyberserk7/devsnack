import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AI_PROMPT = "Generate 5 random junk food snack recommendations for a developer who is {mood} while {task}. For each recommendation, include the snack name, a detailed reason that connects the developer's mood and the task the coder is doing, a complementary item that pairs well with the snack, and relevant tags. Return the output in JSON format. The results should be a mix of heavy and light snacks with non-vegetarian and vegan options "