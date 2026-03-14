import { QuickAction } from "../data/quick-actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type QuickActionCardProps = QuickAction;

export function QuickActionCard({
  title,
  description,
  gradient,
  href,
  icon,
}: QuickActionCardProps) {
  return (
    <div className="group relative flex gap-0 rounded-2xl border border-white/10 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      
      {/* Left: Gradient panel */}
      <div
        className={cn(
          "relative w-28 shrink-0 bg-linear-to-br overflow-hidden",
          gradient
        )}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-16 rounded-full bg-white/10 ring-1 ring-white/20" />
          <div className="absolute size-8 rounded-full bg-white/20" />
        </div>

        {/* Icon */}
        {/* {icon && (
          <div className="absolute inset-0 flex items-center justify-center text-white/90 text-2xl">
            {icon}
          </div>
        )} */}

        {/* Shine overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Right: Content */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "w-fit h-7 px-2.5 text-xs font-medium rounded-lg",
            "bg-foreground/5 hover:bg-foreground/10",
            "text-foreground/70 hover:text-foreground",
            "transition-all duration-200 group/btn"
          )}
          asChild
        >
          <Link href={href}>
            Try now
            <ArrowRight className="ml-1.5 size-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}