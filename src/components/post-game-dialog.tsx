import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Character } from "../models/character";

interface PostGameDialogProps {
  isOpen: boolean;
  correctGuesses: number;
  incorrectGuesses: number;
  incorrectCharList: Character[];
}

const PostGameDialog = ({
  isOpen,
  correctGuesses,
  incorrectGuesses,
  incorrectCharList,
}: PostGameDialogProps) => {
  const router = useRouter();

  return (
    <Dialog
      className="text-center font-roboto p-2 absolute inset-0 mx-auto my-20 bg-sky-200 w-4/5 min-h-3/5 rounded-md opacity-90"
      open={isOpen}
      onClose={() => router.push(router.asPath)}
    >
      <p className="text-4xl text-center font-roboto mb-14 mt-8">
        Game Finished
      </p>
      <p className="text-xl mt-2">{`${correctGuesses} correct`}</p>
      <p className="text-xl mt-2">{`${incorrectGuesses} incorrect`}</p>

      <p className="mt-8 mb-4">
        {incorrectCharList.length === 0
          ? "Nice job! All of your answers were correct 😎"
          : "Good try! Here are the characters you missed:"}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 overflow-y-scroll max-h-44 sm:max-h-64 mb-14">
        {incorrectCharList.map((char, index) => (
          <p key={index}>
            {char.romaji} = {char.hiragana}
          </p>
        ))}
      </div>
      <Link href="/mode-select">
        <a className="underline underline-offset-2">Back to mode select</a>
      </Link>
    </Dialog>
  );
};

export default PostGameDialog;
