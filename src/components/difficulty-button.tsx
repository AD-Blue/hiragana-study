import classNames from "classnames";
import { toSentenceCase } from "../lib/to-sentence-case";

import { Difficulty } from "../pages/mode-select";

interface DifficultyButtonProps {
  currentDifficulty: Difficulty;
  difficultyLevel: Difficulty;
  onClick: () => void;
}

const DifficultyButton = ({
  currentDifficulty,
  difficultyLevel,
  onClick,
}: DifficultyButtonProps) => {
  return (
    <button
      className={classNames(
        "text-2xl p-2 border-black border-4 w-fit mx-auto rounded-lg mt-8 hover:bg-slate-200",
        currentDifficulty === difficultyLevel && "bg-sky-200"
      )}
      onClick={onClick}
    >
      {toSentenceCase(difficultyLevel)}
    </button>
  );
};

export default DifficultyButton;
