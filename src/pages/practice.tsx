import Link from "next/link";

import PracticeModule from "../components/practice-module";
import { fisherYatesShuffle } from "../lib/fisher-yates-shuffle";
import { Character, fullAlphabet } from "../models/character";

interface PracticeProps {
  randomizedList: Character[];
}

const Practice = ({ randomizedList }: PracticeProps) => {
  return (
    <div>
      <h1>Practice</h1>
      <p>
        Type the pronunciation of the hiragana character that appears on screen
      </p>

      <PracticeModule randomizedList={randomizedList} />

      <Link href="/">
        <a>Quit Practice</a>
      </Link>
    </div>
  );
};

const getServerSideProps = () => {
  const randomizedList = fisherYatesShuffle(fullAlphabet);

  return {
    props: {
      randomizedList,
    },
  };
};

export { getServerSideProps };

export default Practice;
