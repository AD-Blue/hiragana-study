import classNames from "classnames";
import { Character } from "../models/character";

interface IncorrectGuessMessageProps {
  userGuess: string;
  correctCharacter: Character;
  isVisible: boolean;
}

const IncorrectGuessMessage: React.FC<IncorrectGuessMessageProps> = ({
  userGuess,
  correctCharacter,
  isVisible,
}) => {
  return (
    <div className={classNames("text-center mt-8", !isVisible && "opacity-0")}>
      <p>
        {userGuess
          ? `${userGuess} was incorrect :(`
          : "You entered an empty answer!"}
      </p>
      <p>
        The correct spelling of {correctCharacter.hiragana} is{" "}
        {correctCharacter.romaji}
      </p>
    </div>
  );
};

export default IncorrectGuessMessage;
