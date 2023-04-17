import Link from "next/link";
import { useState } from "react";

import CharSelectButton from "../components/char-select-button";
import CharSetButton, { CharSet } from "../components/char-set-button";
import { RadioButton } from "../components/radio-button";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum Column {
  SINGLE = "Ones",
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

export enum Mode {
  HIRAGANA = "HIRAGANA",
  KATAKANA = "KATAKANA",
  DUAL = "DUAL"
}

const ModeSelect = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.HARD);
  const [columns, setColumns] = useState<string[]>(["All"]);
  const [mode, setMode] = useState<Mode>(Mode.HIRAGANA)

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

      <div className='flex justify-around w-full flex-col md:flex-row'>
        <div className="flex flex-col sm:w-1/3">
          <p className="text-2xl text-center mt-8">Difficulty</p>
          <div className="flex justify-around">
            {Object.values(Difficulty).map((difficultyLevel, index) => (
              <RadioButton
                key={index}
                currentDifficulty={difficulty}
                difficultyLevel={difficultyLevel}
                onClick={() => setDifficulty(difficultyLevel)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:w-1/3">
          <p className="text-2xl text-center mt-8">Mode</p>
          <div className="flex justify-around w-full">
            {Object.values(Mode).map((selectMode, index) => (
              <RadioButton
                key={index}
                currentDifficulty={mode}
                difficultyLevel={selectMode}
                onClick={() => setMode(selectMode)}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-2xl text-center mt-16">Character Set</p>
      <div className="mt-8 grid grid-cols-5 gap-4">
        <div className="flex col-span-5 justify-around w-3/5 mx-auto">
          <CharSetButton
            charSetName={CharSet.ALL}
            currentSelectedCharsList={columns}
            onClick={handleAllClick}
          />
          <CharSetButton
            charSetName={CharSet.BASIC}
            currentSelectedCharsList={columns}
            onClick={handleBasicClick}
          />
        </div>
        {Object.values(Column).map((char, index) => (
          <CharSelectButton
            key={index}
            character={char}
            currentSelectedCharsList={columns}
            onClick={() => handleCharClick(char)}
          />
        ))}
      </div>

      <Link
        href={`/practice?difficulty=${encodeURIComponent(
          difficulty
        )}&columns=${encodeURIComponent(arrayToString(
          columns
        ))}&mode=${encodeURIComponent(mode)}`}
      >
        <button
          disabled={columns.length === 0}
          className="text-4xl text-center mt-12 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-white"
        >
          Start
        </button>
      </Link>
    </div>
  );
};

export default ModeSelect;
