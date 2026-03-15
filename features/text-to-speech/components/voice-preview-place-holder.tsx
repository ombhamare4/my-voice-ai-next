import { AudioLines, BookOpen, Sparkle, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function VoicePreviewPlaceHolder() {
  return (
    <div className="hidden flex-1 lg:flex flex-col items-center justify-center gap-6 border-t">
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex w-32 items-center justify-center">
          <div className="absolute left-0 -rotate-30 rounded-full bg-muted p-4">
            <Volume2 className="size-5 text-muted-foreground" />
          </div>
          <div className="relative z-10 rounded-full bg-foreground p-4">
            <Sparkles className="size-5 text-background" />
          </div>
          <div className="absolute right-0 -rotate-30 rounded-full bg-muted p-4">
            <AudioLines className="size-5 text-muted-foreground" />
          </div>
        </div>
        {/* <div className="flex flex-col items-center"> */}
        <p className="text-lg font-semibold tracking-tight text-foreground">
          Preview will appear here
        </p>
        <p className="text-sm font-semibold tracking-tight text-muted-foreground">
          Once you generate, your audio result will appear here. Sit back and
          relax.
        </p>
        {/* </div> */}
      </div>
      <Button variant="outline" size="sm" asChild>
        <Link href={`mailto:${process.env.CONTACT_EMAIL}`}>
          <BookOpen />
          Don&apos;t know how?
        </Link>
      </Button>
    </div>
  );
}
