import { 
  LucideIcon, 
  BookOpenText, 
  Newspaper, 
  Sparkles, 
  GraduationCap, 
  Megaphone, 
  FileText 
} from "lucide-react";

export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
  icon?: LucideIcon;
}

export const quickActions: QuickAction[] = [
  {
    title: "Narrate a Story",
    description: "Bring characters to life with expressive AI narration",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=Once upon a time in a quiet village nestled between rolling hills a curious child discovered a mysterious book that whispered stories only when the moon was full.",
    icon: BookOpenText,
  },
  {
    title: "Breaking News Bulletin",
    description: "Get the latest updates in a professional news anchor voice",
    gradient: "from-blue-400 to-blue-50",
    href: "/text-to-speech?text=Breaking news just in! Scientists have announced a major breakthrough in renewable energy that could change the way we power our world forever.",
    icon: Newspaper,
  },
  {
    title: "Guided Meditation",
    description: "Find your inner peace with a soothing and calm voice",
    gradient: "from-purple-400 to-purple-50",
    href: "/text-to-speech?text=Take a deep breath in... and out. Notice the weight of your body as you relax into this moment of pure stillness and calm.",
    icon: Sparkles,
  },
  {
    title: "Educational Lesson",
    description: "Learn something new with a clear instructional voice",
    gradient: "from-emerald-400 to-emerald-50",
    href: "/text-to-speech?text=The solar system consists of our star, the Sun, and everything bound to it by gravity—the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    icon: GraduationCap,
  },
  {
    title: "Product Launch Pitch",
    description: "Deliver a persuasive pitch for your latest innovation",
    gradient: "from-amber-400 to-amber-50",
    href: "/text-to-speech?text=Imagine a world where your ideas come to life instantly. Introducing our new platform—designed to empower creators and redefine the future of technology.",
    icon: Megaphone,
  },
  {
    title: "Read a Document",
    description: "Convert long reports into easy-to-listen audio summaries",
    gradient: "from-rose-400 to-rose-50",
    href: "/text-to-speech?text=This quarterly report highlights our consistent growth across all sectors, showing a fifteen percent increase in user engagement and overall productivity.",
    icon: FileText,
  },
];
