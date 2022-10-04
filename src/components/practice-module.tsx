import { FormEvent, useState } from "react";

import { Character } from "../models/character";

interface PracticeModuleProps {
  randomizedList: Character[];
}

const PracticeModule = ({ randomizedList }: PracticeModuleProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [gameFinished, setGameFinished] = useState(false);

  const checkAnswer = (
    userAnswer: string,
    correctAnswer: string,
    event: FormEvent
  ) => {
    event.preventDefault();

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (counter === 47) {
      setGameFinished(true);

      return;
    }

    setCounter(counter + 1);

    setAnswer("");
  };

  return (
    <div className="my-8">
      <p className="text-9xl text-center">{randomizedList[counter].hiragana}</p>
      <p className="text-center my-8">
        {!gameFinished
          ? `On character ${counter + 1} out of 48`
          : "Practice Complete!"}
      </p>
      <form
        onSubmit={(event) =>
          checkAnswer(answer, randomizedList[counter].romaji, event)
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

      <p className="text-xl text-center mt-2">Your Score: {score}</p>
    </div>
  );
};

export default PracticeModule;
