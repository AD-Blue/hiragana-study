import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-7xl text-center my-8">ひらがな</h1>
      <div className="mx-auto">
        <Image src="/chart.svg" alt="Hiragana Chart" height={464} width={768} />
      </div>
      <Link href="/mode-select">
        <a className="text-4xl text-center mt-28 border-black border-4 rounded-lg w-fit mx-auto p-2 hover:bg-gray-100">
          Practice
        </a>
      </Link>
    </div>
  );
};
export default Home;
