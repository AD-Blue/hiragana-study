import { FormEvent, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

import { fisherYatesShuffle } from "../lib/fisher-yates-shuffle";
import { randomInt } from "../lib/random-int";
import { Character } from "../models/character";
import { Difficulty } from "../pages/mode-select";
import IncorrectGuessMessage from "./incorrect-guess-message";
import Link from "next/link";

interface PracticeModuleProps {
  charList: Character[];
  difficulty: Difficulty;
}

const PracticeModule = ({ charList, difficulty }: PracticeModuleProps) => {
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

  const router = useRouter();

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
      <p className="text-9xl text-center font-kosugiMaru">
        {charList[counter].hiragana}
      </p>
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

      <Dialog
        className="text-center font-roboto p-2 absolute inset-0 mx-auto my-20 bg-gray-200 w-4/5 min-h-3/5 rounded-md opacity-90"
        open={gameFinished}
        onClose={() => router.push(router.asPath)}
      >
        <Link href="/mode-select">
          <a className="mt-8">Back to mode select</a>
        </Link>
        <p className="text-4xl text-center font-roboto mb-14 mt-8">
          Game Finished
        </p>
        <p className="text-xl mt-2">{`${score} correct`}</p>
        <p className="text-xl mt-2">{`${
          gameFinished ? counter - score + 1 : counter - score
        } incorrect`}</p>

        <p className="mt-8 mb-4">
          {incorrectCharacters.length === 0
            ? "Nice job! All of your answers were correct 😎"
            : "Good try! Here are the characters you missed:"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 overflow-y-scroll max-h-44 sm:max-h-64">
          {incorrectCharacters.map((char, index) => (
            <p key={index}>
              {char.romaji} = {char.hiragana}
            </p>
          ))}
        </div>
      </Dialog>
    </div>
  );
};

export default PracticeModule;
