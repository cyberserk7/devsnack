import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";

const fredoka = Fredoka({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevSnack: Your Personalized Snack Recommender",
  description:
    "DevSnacks suggests the perfect snack based on your mood, time of day, and current coding task. Get tailored snack recommendations to fuel your development sessions and keep your energy levels up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("text-primaryText py-10", fredoka.className)}>
        <div className="container mx-auto space-y-10 min-h-full px-5">
          <Suspense>
            <Navbar />
          </Suspense>
          {children}
        </div>
      </body>
    </html>
  );
}
