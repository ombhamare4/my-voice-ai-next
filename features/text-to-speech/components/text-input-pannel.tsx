"use client";

import { useState } from "react";
import { TEXT_MAX_LENGTH, COST_PER_CHAR } from "../data/constants";
import { Textarea } from "@/components/ui/textarea";
import { Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export function TextInputPanel() {
  const [text, setText] = useState("");
  return (
    <div className="flex h-full min-h-0 flex-col flex-1">
      <div className="relative min-h-0 flex-1">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert to speech"
          className="absolute inset-0 resize-none border-0 bg-transparent p-4 pb-6 lg:p-6 lg:pb-8 text-base! leading-relaxed tracking-tight  shadow-none wrap-break-word focus-visible:ring-0"
          maxLength={TEXT_MAX_LENGTH}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="shrink-0 p-4 lg:p-6">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-3 lg:hidden">
          <Button className="w-full"> Genrate Speech</Button>
        </div>
        {/* Desktop Layout */}
        {text.length > 0 ? (
          <div className="hidden items-center justify-between lg:flex">
            <Badge variant={"outline"} className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span className="tabular-nums">
                ${(text.length * COST_PER_CHAR).toFixed(4)}
              </span>{" "}
              estimated
            </Badge>
            <div className="flex items-center gap-3">
              <p className="text-xs -tracking-tight">
                {text.length.toLocaleString()}
                <span className="text-muted-foreground">
                  {" "}
                  / {TEXT_MAX_LENGTH.toLocaleString()} character
                </span>
              </p>
              <Button
                variant="default"
                size="sm"
                disabled={text.trim().length === 0}
              >
                Generate Speech
              </Button>
            </div>
          </div>
        ) : (
          <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">
              Get started by typing some text above
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
