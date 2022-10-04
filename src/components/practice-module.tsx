import { FormEvent, useState } from "react";

import { Character } from "../models/character";

interface PracticeModuleProps {
  randomizedList: Character[];
}

const PracticeModule = ({ randomizedList }: PracticeModuleProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  const checkAnswer = (
    userAnswer: string,
    correctAnswer: string,
    event: FormEvent
  ) => {
    event.preventDefault();

    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }

    setCounter(counter + 1);

    setAnswer("");
  };

  return (
    <div>
      <p>{randomizedList[counter].hiragana}</p>
      <form
        onSubmit={(event) =>
          checkAnswer(answer, randomizedList[counter].romaji, event)
        }
      >
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border border-black"
          placeholder="Your answer:"
        />
      </form>

      <p>Your Score: {score}</p>
      <p>{`You've answered ${counter} out of 48 characters`}</p>
    </div>
  );
};

export default PracticeModule;
