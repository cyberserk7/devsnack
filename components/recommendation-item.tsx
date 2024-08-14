import Link from "next/link";
import { Button } from "./ui/button";

export const RecommendationItem = ({
  snackRecommendations,
  index,
  setCurrIndex,
}: {
  snackRecommendations: SnackRecommendation[];
  index: number;
  setCurrIndex: (index: number) => void;
}) => {
  const snack = snackRecommendations[index];

  return (
    <div className="w-full rounded-xl p-5 bg-secondary flex flex-col gap-5">
      <h1 className="text-xl font-medium">{snack.snack} 😋</h1>
      <span className="text-lg">{snack.reason}</span>
      <span className="text-lg text-accent">
        Pairs great with -{" "}
        <span className="text-primaryText">{snack.complementary_item}</span>
      </span>
      <div className="flex items-center justify-between mt-5">
        <Button
          className="bg-accent hover:bg-accent/90 text-base"
          onClick={() => setCurrIndex(index - 1)}
          disabled={index === 0}
          size={"lg"}
        >
          ⬅️ Back
        </Button>
        <Button
          className="bg-primaryText hover:bg-primaryText/90 text-background text-base"
          asChild
        >
          <Link
            href={`https://www.amazon.in/s?k=${snack.snack}`}
            target="_blank"
          >
            🛒 Order
          </Link>
        </Button>
        <Button
          className="bg-accent hover:bg-accent/90 text-base"
          onClick={() => setCurrIndex(index + 1)}
          disabled={index === snackRecommendations.length - 1}
          size={"lg"}
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};
