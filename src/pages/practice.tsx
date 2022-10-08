import { NextPageContext } from "next";
import Link from "next/link";

import PracticeModule from "../components/practice-module";
import { buildListFromParams } from "../lib/built-list-from-params";
import { Character } from "../models/character";
import { Difficulty } from "./mode-select";

interface PracticeProps {
  charList: Character[];
  difficulty: Difficulty;
}

const Practice = ({ charList, difficulty }: PracticeProps) => {
  return (
    <div className="pt-4 px-6 font-roboto">
      <h1 className="text-5xl text-center mb-4">Practice</h1>
      <p className="text-center">
        Type the pronunciation of the hiragana character that appears on screen
      </p>

      <PracticeModule charList={charList} difficulty={difficulty} />

      <div className="text-md text-center mt-28 text-gray-700">
        <p className="mb-4">Refresh to restart</p>
        <div className="flex justify-between w-3/5 md:w-1/5 mx-auto">
          <Link href="mode-select">
            <a className="underline underline-offset-2">Mode Select</a>
          </Link>
          <Link href="/">
            <a className="underline underline-offset-2">Quit Practice</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const getServerSideProps = (context: NextPageContext) => {
  const { difficulty, columns } = context.query;

  if (!difficulty || !columns) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const columnsList = (columns as string).split("-");

  const charList = buildListFromParams(columnsList);

  return {
    props: {
      charList,
      difficulty,
    },
  };
};

export { getServerSideProps };

export default Practice;
