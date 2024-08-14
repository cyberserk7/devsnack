"use client";

import { redirect, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { moods } from "@/lib/moods";
import { useState } from "react";
import { AI_PROMPT, cn } from "@/lib/utils";
import { chatSession } from "@/lib/ai-model";

export const TaskInputForm = ({
  loading,
  setLoading,
  setSnackRecommendations,
}: {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setSnackRecommendations: (
    snackRecommendations: SnackRecommendation[]
  ) => void;
}) => {
  const [task, setTask] = useState("");
  const searchParams = useSearchParams();
  const paramsMood = searchParams.get("mood");

  const mood = moods.find((mood) => mood.value === paramsMood)?.label;

  const onSubmit = async () => {
    if (!mood || !task) return;
    const FINAL_PROMPT = AI_PROMPT.replace("{mood}", mood).replace(
      "{task}",
      task
    );
    // console.log(FINAL_PROMPT);

    setLoading(true);
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      setSnackRecommendations(JSON.parse(result?.response?.text()));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!mood) return redirect("/");

  return (
    <div className="flex flex-col gap-12 items-center text-center mt-20">
      <div className="flex flex-col gap-5 w-full items-center">
        <h1 className="text-xl">
          What coding task are you working on right now?
        </h1>
        <Textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Write the task here..."
          className="max-w-2xl bg-secondary border-none outline-none placeholder:text-lg text-lg min-h-40"
        />
      </div>
      <Button
        className={cn(
          "p-3 rounded-lg bg-accent hover:bg-accent/90 transition w-max cursor-pointer h-max text-base"
        )}
        disabled={loading || task.length === 0}
        onClick={onSubmit}
        size={"lg"}
      >
        😋 Get Recommendations
      </Button>
    </div>
  );
};
