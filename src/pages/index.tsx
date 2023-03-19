import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center flex-col">
      <h1 className="font-kosugiMaru text-7xl text-center my-8">ひらがな</h1>
      <div className="mx-auto">
        <Image src="/chart.svg" alt="Hiragana Chart" height={464} width={768} />
      </div>
      <Link href="/game">
        <a className="font-roboto text-center mt-12 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100">
          Start
        </a>
      </Link>

      <button
        className="font-roboto text-center mt-6 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100"
        onClick={() => (session ? signOut() : signIn())}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
export default Home;
