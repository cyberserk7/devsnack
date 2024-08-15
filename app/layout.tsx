import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";

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
      <body className={cn("text-primaryText min-h-full", fredoka.className)}>
        <NextTopLoader color="#4EB97A" showSpinner={false} />
        <div className="container mx-auto flex flex-col gap-10 min-h-full px-5  py-10">
          <Suspense>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
