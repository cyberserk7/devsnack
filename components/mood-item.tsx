"use client";

import { useRouter } from "next/navigation";

export const MoodItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="px-2 py-5 border border-accent rounded-lg flex items-center justify-center text-base md:text-lg text-center cursor-pointer hover:bg-accent transition hover:shadow-md"
      onClick={() => router.replace(`/snack?mood=${value}`)}
    >
      {label}
    </div>
  );
};
