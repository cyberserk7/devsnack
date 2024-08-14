import { moods } from "@/lib/moods";
import { MoodItem } from "./mood-item";

export const CodingMoods = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
      {moods.map((mood, index) => (
        <MoodItem key={index} label={mood.label} value={mood.value} />
      ))}
    </div>
  );
};
