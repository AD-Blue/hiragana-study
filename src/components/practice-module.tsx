import { FormEvent, useEffect, useState } from "react";
import { fisherYatesShuffle } from "../lib/fisher-yates-shuffle";
import { randomInt } from "../lib/random-int";

import { Character } from "../models/character";
import { Difficulty } from "../pages/mode-select";
import IncorrectGuessMessage from "./incorrect-guess-message";

interface PracticeModuleProps {
  randomizedList: Character[];
  difficulty: Difficulty;
}

const PracticeModule = ({
  randomizedList,
  difficulty,
}: PracticeModuleProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [previousGuess, setPreviousGuess] = useState("");
  const [previousCharacter, setPreviousCharacter] = useState<Character>(
    randomizedList[0]
  );
  const [previousGuessCorrect, setPreviousGuessCorrect] = useState(true);
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);

  const checkAnswer = (
    userAnswer: string,
    correctAnswer: Character,
    event: FormEvent
  ) => {
    event.preventDefault();

    if (userAnswer.toLowerCase() === correctAnswer.romaji) {
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

  useEffect(() => {
    const randomChars = [];

    while (randomChars.length < 2) {
      const randomIndex = randomInt(randomizedList.length);

      if (randomizedList[randomIndex] === randomizedList[counter]) {
        continue;
      }

      if (
        randomChars.length === 1 &&
        randomChars[0] === randomizedList[randomIndex].romaji
      ) {
        continue;
      }

      randomChars.push(randomizedList[randomIndex].romaji);
    }

    setPossibleAnswers(
      fisherYatesShuffle([randomizedList[counter].romaji, ...randomChars])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

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
        <div className="flex flex-row text-center justify-evenly w-4/5 mx-auto">
          {difficulty === Difficulty.EASY ? (
            possibleAnswers.map((answer, index) => (
              <button
                className="border-black border-2 text-xl px-2 py rounded-lg my-4 italic"
                onClick={() => setAnswer(answer)}
                key={index}
              >
                {answer}
              </button>
            ))
          ) : (
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="border-b border-black py-2 px-4 mx-auto rounded-sm text-center focus:outline-none"
              placeholder={
                difficulty === Difficulty.HARD
                  ? "..."
                  : `${randomizedList[counter].romaji[0]}...`
              }
              disabled={gameFinished}
            />
          )}
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
