import classNames from "classnames";

interface CharSelectButtonProps {
  character: string;
  currentSelectedCharsList: string[];
  onClick: () => void;
}

const CharSelectButton = ({
  character,
  currentSelectedCharsList,
  onClick,
}: CharSelectButtonProps) => {
  return (
    <button
      className={classNames(
        "border-black border-4 p-2 rounded-lg",
        currentSelectedCharsList.includes(character) && "bg-sky-200"
      )}
      onClick={onClick}
    >
      {character}
    </button>
  );
};

export default CharSelectButton;
