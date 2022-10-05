import { FormEvent, useState } from "react";

import { Character } from "../models/character";
import IncorrectGuessMessage from "./incorrect-guess-message";

interface PracticeModuleProps {
  randomizedList: Character[];
}

const PracticeModule = ({ randomizedList }: PracticeModuleProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [previousGuess, setPreviousGuess] = useState("");
  const [previousCharacter, setPreviousCharacter] = useState<Character>(
    randomizedList[0]
  );
  const [previousGuessCorrect, setPreviousGuessCorrect] = useState(true);

  const checkAnswer = (
    userAnswer: string,
    correctAnswer: Character,
    event: FormEvent
  ) => {
    event.preventDefault();

    if (userAnswer === correctAnswer.romaji) {
      setScore(score + 1);
      setPreviousGuessCorrect(true);
    } else {
      setPreviousGuessCorrect(false);
      setPreviousGuess(userAnswer);
      setPreviousCharacter(correctAnswer);
    }

    if (counter === 47) {
      setGameFinished(true);

      return;
    }

    setCounter(counter + 1);

    setAnswer("");
  };

  return (
    <div className="mt-8">
      <p className="text-9xl text-center">{randomizedList[counter].hiragana}</p>
      <p className="text-center mt-8">
        {!gameFinished
          ? `On character ${counter + 1} out of 48`
          : "Practice Complete!"}
      </p>
      <form
        onSubmit={(event) =>
          checkAnswer(answer, randomizedList[counter], event)
        }
      >
        <div className="flex justify-center">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border-b border-black py-2 px-4 mx-auto rounded-sm text-center focus:outline-none"
            placeholder="Answer here..."
            disabled={gameFinished}
          />
        </div>
      </form>

      <p className="text-xl text-center mt-2">{`${score} correct`}</p>
      <p className="text-xl text-center mt-2">{`${
        counter - score
      } incorrect`}</p>

      <IncorrectGuessMessage
        userGuess={previousGuess}
        correctCharacter={previousCharacter}
        isVisible={!previousGuessCorrect}
      />
    </div>
  );
};

export default PracticeModule;
