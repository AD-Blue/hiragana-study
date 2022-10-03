export interface Character {
  hiragana: string;
  romaji: string;
}

const singleChars: Character[] = [
  {
    hiragana: "あ",
    romaji: "a",
  },
  {
    hiragana: "い",
    romaji: "i",
  },
  {
    hiragana: "う",
    romaji: "u",
  },
  {
    hiragana: "え",
    romaji: "e",
  },
  {
    hiragana: "お",
    romaji: "o",
  },
];

const kChars: Character[] = [
  {
    hiragana: "か",
    romaji: "ka",
  },
  {
    hiragana: "き",
    romaji: "ki",
  },
  {
    hiragana: "く",
    romaji: "ku",
  },
  {
    hiragana: "け",
    romaji: "ke",
  },
  {
    hiragana: "こ",
    romaji: "ko",
  },
];

const fullAlphabet: Character[] = [
  ...singleChars,
  ...kChars,
  {
    hiragana: "ん",
    romaji: "n",
  },
];

export { fullAlphabet };
