import { CodingMoods } from "@/components/coding-moods";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-6 md:gap-12 items-center min-h-full flex-1 justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center">
        Get personalized snack recommendations based on your mood and coding
        tasks
      </h1>
      <span className="text-xl">How are you feeling at this moment?</span>
      <CodingMoods />
    </main>
  );
}
