"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { moods } from "@/lib/moods";

export const Navbar = () => {
  const params = useSearchParams();
  const paramMood = params.get("mood");
  const router = useRouter();
  const pathname = usePathname();

  const mood = moods.find((mood) => mood.value === paramMood)?.label;

  if (pathname === "/snack" && !mood) return redirect("/");

  return (
    <nav
      className={cn(
        "w-full md:max-w-2xl mx-auto rounded-2xl shadow-lg bg-secondary  flex items-center justify-between"
      )}
    >
      <div className="flex-1 p-2">
        <div
          className="p-2 rounded-xl hover:bg-primaryText/20 transition w-max cursor-pointer"
          onClick={() => router.replace("/")}
        >
          <Image
            src={"/chips.png"}
            alt="Snacks"
            width={100}
            height={100}
            className="size-8 w-fit"
            priority
          />
        </div>
      </div>
      <h1 className="text-xl font-medium flex-1 text-center">
        <span className="hidden md:block">
          {pathname === "/" ? "DevSnack" : mood}
        </span>
        {pathname === "/" && (
          <span className="text-base md:hidden">DevSnack</span>
        )}
      </h1>
      <div className="flex-1 flex justify-end h-full p-2">
        {pathname === "/snack" && (
          <button
            className="p-3 rounded-xl bg-accent hover:bg-accent/90 transition w-max cursor-pointer h-full"
            onClick={() => router.replace("/")}
          >
            🔄 Edit Mood
          </button>
        )}
      </div>
    </nav>
  );
};
