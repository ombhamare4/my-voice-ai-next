import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Voice AI",
    template: "%s | My Voice AI",
  },
  description:
    "My Voice AI is a cutting‑edge voice cloning and synthesis platform that empowers creators, businesses, and developers to generate realistic, personalized voices with ease. Built with modern full‑stack technologies, it offers seamless integration, high‑quality audio output, and customizable features for podcasts, content creation, customer support, and accessibility solutions. Whether you’re building interactive applications or enhancing brand identity, My Voice AI delivers natural speech experiences that sound authentic and engaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
