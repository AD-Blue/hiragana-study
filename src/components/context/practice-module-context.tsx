import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Character } from "../../models/character";

interface StateSetter<T> extends Dispatch<SetStateAction<T>> {}

// Delete all the comments next to the new var names
// Im adding comments to help me remember which ones are supposed to be which
// cuz the old names were so trash fr fr
export interface PracticeModuleContextState {
  counter?: number;
  setCounter?: StateSetter<number>;
  score?: number;
  setScore?: StateSetter<number>;
  userAnswer?: string; // answer + setAnswer
  setUserAnswer?: StateSetter<string>;
  isGameFinished?: boolean; // gameFinished + setGameFinished
  setIsGameFinished?: StateSetter<boolean>;
  previousUserAnswer?: string; // previousGuess + setPreviousGuess
  setPreviousUserAnswer?: StateSetter<string>;
  previousCorrectAnswer?: Character; // previousCharacter + setPreviousCharacter
  setPreviousCorrectAnswer?: StateSetter<Character>;
  isPreviousUserGuessCorrect?: boolean; // previousGuessCorrect, setpreviousGuessCorrect
  setIsPreviousUserGuessCorrect?: StateSetter<boolean>;
  possibleAnswers?: string[];
  setPossibleAnswers?: StateSetter<string[]>;
  incorrectGuesses?: Character[]; // incorrect characters
  setIncorrectGuesses?: StateSetter<Character[]>;
}

const initialState: PracticeModuleContextState = {
  counter: 0,
  score: 0,
  userAnswer: "",
  isGameFinished: false,
  previousUserAnswer: "",
  isPreviousUserGuessCorrect: true,
  possibleAnswers: [],
  incorrectGuesses: [],
};

const PracticeModuleContext = createContext(initialState);

const PracticeModuleProvider = ({ children }: { children: JSX.Element }) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [previousUserAnswer, setPreviousUserAnswer] = useState("");

  const [isPreviousUserGuessCorrect, setIsPreviousUserGuessCorrect] =
    useState(true);
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<Character[]>([]);

  return (
    <PracticeModuleContext.Provider
      value={{
        counter,
        setCounter,
        score,
        setScore,
        userAnswer,
        setUserAnswer,
        isGameFinished,
        setIsGameFinished,
        previousUserAnswer,
        setPreviousUserAnswer,
        isPreviousUserGuessCorrect,
        setIsPreviousUserGuessCorrect,
        possibleAnswers,
        setPossibleAnswers,
        incorrectGuesses,
        setIncorrectGuesses,
      }}
    >
      {children}
    </PracticeModuleContext.Provider>
  );
};

const usePracticeModuleContext = () => {
  const context = useContext(PracticeModuleContext);

  if (!context) {
    throw new Error(
      "practiceModuleContext can only be used within a PracticeModuleProvider"
    );
  }

  return context;
};

export {
  PracticeModuleContext,
  PracticeModuleProvider,
  usePracticeModuleContext,
};
