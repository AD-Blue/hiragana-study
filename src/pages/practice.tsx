import Link from "next/link";
import { useState } from "react";

import { fullAlphabet } from "../models/character";

const Practice = () => {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(false);

  const checkAnswer = (submission: string): boolean => {
    return submission === fullAlphabet[0].romaji;
  };

  const onSubmit = (submission: string) => {
    if (checkAnswer(submission)) {
      setCorrect(true);

      return;
    }

    setCorrect(false);
  };

  return (
    <div>
      <h1>Practice</h1>
      <p>
        Type the pronunciation of the hiragana character that appears on screen
      </p>
      <p>{fullAlphabet[0].hiragana}</p>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
      />
      <button onClick={() => onSubmit(answer)}>Check</button>

      {correct && <p>Correct!</p>}

      <Link href="/">
        <a>Quit Practice</a>
      </Link>
    </div>
  );
};

export default Practice;
