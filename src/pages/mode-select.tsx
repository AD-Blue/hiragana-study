import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

const ModeSelect = () => {
  const [difficulty, setDifficulty] = useState<string>("");

  return (
    <div className="pt-4 px-6 flex flex-col">
      <h1 className="text-5xl text-center mb-4">Select Your Practice Mode</h1>

      <button
        className={classNames(
          "text-2xl p-2 border-black border-4 w-fit mx-auto rounded-lg mt-8",
          difficulty === Difficulty.EASY && "bg-orange-200"
        )}
        onClick={() => setDifficulty(Difficulty.EASY)}
      >
        Easy
      </button>
      <button
        className={classNames(
          "text-2xl p-2 border-black border-4 w-fit mx-auto rounded-lg mt-8",
          difficulty === Difficulty.MEDIUM && "bg-orange-200"
        )}
        onClick={() => setDifficulty(Difficulty.MEDIUM)}
      >
        Medium
      </button>
      <button
        className={classNames(
          "text-2xl p-2 border-black border-4 w-fit mx-auto rounded-lg mt-8",
          difficulty === Difficulty.HARD && "bg-orange-200"
        )}
        onClick={() => setDifficulty(Difficulty.HARD)}
      >
        Hard
      </button>

      <Link href={`/practice?difficulty=${encodeURIComponent(difficulty)}`}>
        <button
          disabled={difficulty === ""}
          className="text-4xl text-center mt-12 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-white"
        >
          Start
        </button>
      </Link>
    </div>
  );
};

export default ModeSelect;
