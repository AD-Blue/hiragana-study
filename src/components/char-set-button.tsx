import classNames from "classnames";
import { toSentenceCase } from "../lib/to-sentence-case";

export enum CharSet {
  ALL = "ALL",
  BASIC = "BASIC",
}

interface CharSetButtonProps {
  charSetName: CharSet;
  currentSelectedCharsList: string[];
  onClick: () => void;
}

const CharSetButton = ({
  charSetName,
  currentSelectedCharsList,
  onClick,
}: CharSetButtonProps) => {
  return (
    <button
      className={classNames(
        "border-black border-4 p-2 w-fit mx-auto rounded-lg",
        currentSelectedCharsList.includes(toSentenceCase(charSetName)) &&
          "bg-sky-200"
      )}
      onClick={onClick}
    >
      {toSentenceCase(charSetName)}
    </button>
  );
};

export default CharSetButton;
