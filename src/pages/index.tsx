import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-7xl text-center my-8">ひらがな</h1>
      <Image src="/chart.svg" alt="Hiragana Chart" height={464} width={768} />
      <Link href="/practice">
        <a>Practice</a>
      </Link>
    </div>
  );
};
export default Home;
