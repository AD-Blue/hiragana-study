import { FormEvent, useEffect, useState } from "react";

import { fisherYatesShuffle } from "../lib/fisher-yates-shuffle";
import { randomInt } from "../lib/random-int";
import { Character } from "../models/character";
import { Difficulty } from "../pages/mode-select";
import IncorrectGuessMessage from "./incorrect-guess-message";
import PostGameDialog from "./post-game-dialog";

interface PracticeModuleProps {
  charList: Character[];
  difficulty: Difficulty;
  katakana: boolean
}

const PracticeModule = ({ charList, difficulty, katakana }: PracticeModuleProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [gameFinished, setGameFinished] = useState(false);
  const [previousGuess, setPreviousGuess] = useState("");
  const [previousCharacter, setPreviousCharacter] = useState<Character>(
    charList[0]
  );
  const [previousGuessCorrect, setPreviousGuessCorrect] = useState(true);
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);
  const [incorrectCharacters, setIncorrectCharacters] = useState<Character[]>(
    []
  );

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
      setIncorrectCharacters([...incorrectCharacters, correctAnswer]);
    }

    if (counter === charList.length - 1) {
      setGameFinished(true);

      return;
    }

    setCounter(counter + 1);

    setAnswer("");
  };

  useEffect(() => {
    const randomChars = [];

    while (randomChars.length < 2) {
      const randomIndex = randomInt(charList.length);

      if (charList[randomIndex] === charList[counter]) {
        continue;
      }

      if (
        randomChars.length === 1 &&
        randomChars[0] === charList[randomIndex].romaji
      ) {
        continue;
      }

      randomChars.push(charList[randomIndex].romaji);
    }

    setPossibleAnswers(
      fisherYatesShuffle([charList[counter].romaji, ...randomChars])
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, gameFinished]);

  return (
    <div className="mt-8">
      <div className='flex flex-row justify-center'>
        <p className="text-9xl text-center font-kosugiMaru">
          {charList[counter].hiragana}
        </p>
        {katakana && <p className="text-9xl text-center border-l border-black font-kosugiMaru">
          {charList[counter].katakana}
        </p>}

      </div>
      <p className="text-center mt-8 font-roboto">
        {!gameFinished
          ? `On character ${counter + 1} out of ${charList.length}`
          : "Practice Complete!"}
      </p>
      <form onSubmit={(event) => checkAnswer(answer, charList[counter], event)}>
        <div className="flex flex-row text-center justify-evenly w-4/5 md:w-1/3 mx-auto font-roboto">
          {difficulty === Difficulty.EASY ? (
            possibleAnswers.map((answer, index) => (
              <button
                className="border-black border-2 text-xl px-2 py rounded-lg my-4 italic disabled:opacity-50"
                onClick={() => setAnswer(answer)}
                key={index}
                disabled={gameFinished}
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
                  : `${charList[counter].romaji[0]}...`
              }
              disabled={gameFinished}
            />
          )}
        </div>
      </form>

      <IncorrectGuessMessage
        userGuess={previousGuess}
        correctCharacter={previousCharacter}
        isVisible={!previousGuessCorrect}
      />

      <PostGameDialog
        isOpen={gameFinished}
        correctGuesses={score}
        incorrectGuesses={counter - score + 1}
        incorrectCharList={incorrectCharacters}
      />
    </div>
  );
};

export default PracticeModule;
