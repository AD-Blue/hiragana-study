import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum Column {
  SINGLE = "Single",
  K = "K",
  S = "S",
  T = "T",
  N = "N",
  H = "H",
  M = "M",
  Y = "Y",
  R = "R",
  W = "W",
  G = "G",
  Z = "Z",
  D = "D",
  B = "B",
  P = "P",
}

const ModeSelect = () => {
  const [difficulty, setDifficulty] = useState<string>("");
  const [columns, setColumns] = useState<string[]>(["All"]);

  const handleCharClick = (char: string) => {
    if (columns.includes(char)) {
      setColumns(columns.filter((item) => item !== char));

      return;
    }

    setColumns([
      ...columns.filter((item) => item !== "All" && item !== "Basic"),
      char,
    ]);
  };

  const handleAllClick = () => {
    if (columns.includes("All")) {
      setColumns([]);

      return;
    }

    setColumns(["All"]);
  };

  const handleBasicClick = () => {
    if (columns.includes("Basic")) {
      setColumns([]);

      return;
    }

    setColumns(["Basic"]);
  };

  const arrayToString = (stringArr: string[]): string => {
    let builtString = ``;

    for (let i = 0; i < stringArr.length; i++) {
      builtString += `${stringArr[i]}${i !== stringArr.length - 1 ? "-" : ""}`;
    }

    return builtString;
  };

  return (
    <div className="pt-4 px-6 flex flex-col font-roboto">
      <h1 className="text-5xl text-center mb-4 ">Select Your Practice Mode</h1>

      <p className="text-2xl text-center mt-8">Difficulty</p>
      <div className="flex justify-around w-full">
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
      </div>

      <p className="text-2xl text-center mt-16">Character Set</p>
      <div className="mt-8 grid grid-cols-5 gap-4">
        <div className="flex col-span-5 justify-around w-3/5 mx-auto">
          <button
            className={classNames(
              "border-black border-4 p-2 w-fit mx-auto rounded-lg",
              columns.includes("All") && "bg-orange-200"
            )}
            onClick={handleAllClick}
          >
            All
          </button>
          <button
            className={classNames(
              "border-black border-4 p-2 w-fit mx-auto rounded-lg",
              columns.includes("Basic") && "bg-orange-200"
            )}
            onClick={handleBasicClick}
          >
            Basic
          </button>
        </div>
        {Object.values(Column).map((char, index) => (
          <button
            className={classNames(
              "border-black border-4 p-2 rounded-lg",
              columns.includes(char) && "bg-orange-200"
            )}
            key={index}
            onClick={() => handleCharClick(char)}
          >
            {char}
          </button>
        ))}
      </div>

      <Link
        href={`/practice?difficulty=${encodeURIComponent(
          difficulty
        )}&columns=${encodeURIComponent(arrayToString(columns))}`}
      >
        <button
          disabled={difficulty === "" || columns.length === 0}
          className="text-4xl text-center mt-12 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-white"
        >
          Start
        </button>
      </Link>
    </div>
  );
};

export default ModeSelect;
