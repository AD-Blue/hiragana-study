import Link from "next/link";

import PracticeModule from "../components/practice-module";
import { fisherYatesShuffle } from "../lib/fisher-yates-shuffle";
import { Character, fullAlphabet } from "../models/character";

interface PracticeProps {
  randomizedList: Character[];
}

const Practice = ({ randomizedList }: PracticeProps) => {
  return (
    <div className="pt-4 px-6">
      <h1 className="text-5xl text-center mb-4">Practice</h1>
      <p className="text-center">
        Type the pronunciation of the hiragana character that appears on screen
      </p>

      <PracticeModule randomizedList={randomizedList} />

      <div className="text-md text-center mt-28 text-gray-700">
        <p className="mb-4">Refresh to restart</p>
        <Link href="/">
          <a className="underline underline-offset-2">Quit Practice</a>
        </Link>
      </div>
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
