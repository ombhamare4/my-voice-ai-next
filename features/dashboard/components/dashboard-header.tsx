"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const DashbordHeader = () => {
  const { user, isLoaded } = useUser();

  return (

    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-foreground font-semibold tracking-tight">
          Welcome back,
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
          {isLoaded ? (
            user?.fullName ?? user?.firstName ?? "User"
          ) : (
            <Skeleton className="h-10 w-full" />
          )}
        </h1>
      </div>
      <div className="lg:flex items-center gap-3 hidden">
        <Button variant="secondary" size="sm" asChild>
          <Link href={`mailto:${process.env.CONTACT_EMAIL}`}>
            {" "}
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link href={`mailto:${process.env.CONTACT_EMAIL}`}>
            {" "}
            <Headphones />
            <span className="hidden lg:block">Need Help?</span>
          </Link>
        </Button>
      </div>
     
    </div>
  );
};

export default DashbordHeader;
