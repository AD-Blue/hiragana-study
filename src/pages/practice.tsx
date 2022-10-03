import Link from "next/link";

const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <p>
        Type the pronunciation of the hiragana character that appears on screen
      </p>
      <p>く</p>
      <input type="text" />
      <Link href="/">
        <a>Quit Practice</a>
      </Link>
    </div>
  );
};

export default Practice;
