import { LucideIcon, BookOpenText} from "lucide-react";
export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
  icon?: LucideIcon;
}

export const  quickActions:QuickAction[] = [
  {
    title: "Narrate a Story",
    description: "Bring characters to life with expressive AI narration",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=Once upon a time in a quiet village nestled between rolling hills a curious child discovered a mysterious book that whispered stories only when the moon was full.",
    icon: BookOpenText,
  },
]
