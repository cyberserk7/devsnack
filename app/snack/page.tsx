"use client";

import { TaskInputForm } from "@/components/form/task-input-form";
import { RecommendationItem } from "@/components/recommendation-item";
import { Suspense, use, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function SnackPage() {
  const [snackRecommendations, setSnackRecommendations] = useState<
    SnackRecommendation[] | null
  >(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-full w-full md:max-w-2xl mx-auto flex-1">
      {loading ? (
        <div className=" flex flex-col gap-14 items-center mt-20 text-center">
          <span className="text-lg md:text-xl">
            Sit tight, we&apos;re selecting the{" "}
            <span className="text-accent">perfect snacks</span> to keep you
            going...
          </span>
          <PacmanLoader size={35} color="#4EB97A" />
        </div>
      ) : (
        <div>
          {snackRecommendations ? (
            <>
              <RecommendationItem
                snackRecommendations={snackRecommendations}
                index={currIndex}
                setCurrIndex={setCurrIndex}
              />
            </>
          ) : (
            <Suspense>
              <TaskInputForm
                loading={loading}
                setLoading={setLoading}
                setSnackRecommendations={setSnackRecommendations}
              />
            </Suspense>
          )}
        </div>
      )}
    </div>
  );
}
