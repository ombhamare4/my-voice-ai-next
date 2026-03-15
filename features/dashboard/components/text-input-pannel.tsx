"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Coins, Pencil, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TEXT_MAX_LENGTH, COST_PER_CHAR } from "@/features/text-to-speech/data/constants";

export const TextInputPannel = () => {
  const [text, setText] = useState("");
  const router = useRouter();
  const handleGernerate = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    router.push(
      `/dashboard/text-to-speech?text=${encodeURIComponent(trimmed)}`
    );
  };

  return (
    <div className="rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15%  via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-xl">
      <div className="rounded-[20px] bg-[#F9F9F9] p-1">
        <div className="space-y-4 rounded-2xl bg-white p-4">
          <Textarea
            className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 "
            placeholder="Enter or paste text to generate speech"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={TEXT_MAX_LENGTH}
          />
          <div className="flex justify-between">
            <Badge variant="outline" className="gap-1.5 border-dashed">
              <Pencil className="size-3 text-chart-5" />
              <span className="text-xs">
                {text.length}/{TEXT_MAX_LENGTH}
              </span>
            </Badge>
            <Badge variant="outline" className="gap-1.5 border-dashed">
              <Coins className="size-3  text-amber-500" />
              <span className="text-xs ">
                {text.length === 0 ? (
                  "Start typing"
                ) : (
                  <>
                    <span className="tabular-nums">
                      ${(text.length * COST_PER_CHAR).toFixed(4)}
                    </span>
                  </>
                )}
              </span>
            </Badge>
          </div>
          <div className="flex items-center justify-end p-3">
            <Button
              size="sm"
              disabled={!text.trim()}
              onClick={handleGernerate}
              className="w-full lg:w-auto"
            >
              <Brain />
              Generate Speech
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
