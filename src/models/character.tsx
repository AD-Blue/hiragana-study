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

const sChars: Character[] = [
  {
    hiragana: "さ",
    romaji: "sa",
  },
  {
    hiragana: "し",
    romaji: "shi",
  },
  {
    hiragana: "す",
    romaji: "su",
  },
  {
    hiragana: "せ",
    romaji: "se",
  },
  {
    hiragana: "そ",
    romaji: "so",
  },
];

const tChars: Character[] = [
  {
    hiragana: "た",
    romaji: "ta",
  },
  {
    hiragana: "ち",
    romaji: "chi",
  },
  {
    hiragana: "つ",
    romaji: "tsu",
  },
  {
    hiragana: "て",
    romaji: "te",
  },
  {
    hiragana: "と",
    romaji: "to",
  },
];

const nChars: Character[] = [
  {
    hiragana: "な",
    romaji: "na",
  },
  {
    hiragana: "に",
    romaji: "ni",
  },
  {
    hiragana: "ぬ",
    romaji: "nu",
  },
  {
    hiragana: "ね",
    romaji: "ne",
  },
  {
    hiragana: "の",
    romaji: "no",
  },
];

const hChars: Character[] = [
  {
    hiragana: "は",
    romaji: "ha",
  },
  {
    hiragana: "ひ",
    romaji: "hi",
  },
  {
    hiragana: "ふ",
    romaji: "fu",
  },
  {
    hiragana: "へ",
    romaji: "he",
  },
  {
    hiragana: "ほ",
    romaji: "ho",
  },
];

const mChars: Character[] = [
  {
    hiragana: "ま",
    romaji: "ma",
  },
  {
    hiragana: "み",
    romaji: "mi",
  },
  {
    hiragana: "む",
    romaji: "mu",
  },
  {
    hiragana: "め",
    romaji: "me",
  },
  {
    hiragana: "も",
    romaji: "mo",
  },
];

const yChars: Character[] = [
  {
    hiragana: "や",
    romaji: "ya",
  },
  {
    hiragana: "ゆ",
    romaji: "yu",
  },
  {
    hiragana: "よ",
    romaji: "yo",
  },
];

const rChars: Character[] = [
  {
    hiragana: "ら",
    romaji: "ra",
  },
  {
    hiragana: "り",
    romaji: "ri",
  },
  {
    hiragana: "る",
    romaji: "ru",
  },
  {
    hiragana: "れ",
    romaji: "re",
  },
  {
    hiragana: "ろ",
    romaji: "ro",
  },
];

const wChars: Character[] = [
  {
    hiragana: "わ",
    romaji: "wa",
  },
  {
    hiragana: "ゐ",
    romaji: "wi",
  },
  {
    hiragana: "ゑ",
    romaji: "we",
  },
  {
    hiragana: "を",
    romaji: "wo",
  },
];

const fullAlphabet: Character[] = [
  ...singleChars,
  ...kChars,
  ...sChars,
  ...tChars,
  ...nChars,
  ...hChars,
  ...mChars,
  ...yChars,
  ...rChars,
  ...wChars,
  {
    hiragana: "ん",
    romaji: "n",
  },
];

export {
  singleChars,
  kChars,
  sChars,
  tChars,
  nChars,
  hChars,
  mChars,
  yChars,
  rChars,
  wChars,
  fullAlphabet,
};
