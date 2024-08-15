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
      <h1 className="text-xl font-medium">{snack.snack_name} 😋</h1>
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
          size={"sm"}
        >
          ⬅️ Back
        </Button>
        <Button
          className="bg-primaryText hover:bg-primaryText/90 text-background text-base"
          asChild
          size={"sm"}
        >
          <Link
            href={`https://www.amazon.in/s?k=${snack.snack_name}`}
            target="_blank"
          >
            🛒 Order
          </Link>
        </Button>
        <Button
          className="bg-accent hover:bg-accent/90 text-base"
          onClick={() => setCurrIndex(index + 1)}
          disabled={index === snackRecommendations.length - 1}
          size={"sm"}
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};
