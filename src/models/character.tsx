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

const gChars: Character[] = [
  {
    hiragana: "が",
    romaji: "ga",
  },
  {
    hiragana: "ぎ",
    romaji: "gi",
  },
  {
    hiragana: "ぐ",
    romaji: "gu",
  },
  {
    hiragana: "げ",
    romaji: "ge",
  },
  {
    hiragana: "ご",
    romaji: "go",
  },
];

const zChars: Character[] = [
  {
    hiragana: "ざ",
    romaji: "za",
  },
  {
    hiragana: "じ",
    romaji: "ji",
  },
  {
    hiragana: "ず",
    romaji: "zu",
  },
  {
    hiragana: "ぜ",
    romaji: "ze",
  },
  {
    hiragana: "ぞ",
    romaji: "zo",
  },
];

const dChars: Character[] = [
  {
    hiragana: "だ",
    romaji: "da",
  },
  {
    hiragana: "ぢ",
    romaji: "dji",
  },
  {
    hiragana: "づ",
    romaji: "dzu",
  },
  {
    hiragana: "で",
    romaji: "de",
  },
  {
    hiragana: "ど",
    romaji: "do",
  },
];

const bChars: Character[] = [
  {
    hiragana: "ば",
    romaji: "ba",
  },
  {
    hiragana: "び",
    romaji: "bi",
  },
  {
    hiragana: "ぶ",
    romaji: "bu",
  },
  {
    hiragana: "べ",
    romaji: "be",
  },
  {
    hiragana: "ぼ",
    romaji: "bo",
  },
];

const pChars: Character[] = [
  {
    hiragana: "ぱ",
    romaji: "pa",
  },
  {
    hiragana: "ぴ",
    romaji: "pi",
  },
  {
    hiragana: "ぷ",
    romaji: "pu",
  },
  {
    hiragana: "ぺ",
    romaji: "pe",
  },
  {
    hiragana: "ぽ",
    romaji: "po",
  },
];

const basicAlphabet: Character[] = [
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

const fullAlphabet: Character[] = [
  ...basicAlphabet,
  ...gChars,
  ...zChars,
  ...dChars,
  ...bChars,
  ...pChars,
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
  gChars,
  zChars,
  dChars,
  bChars,
  pChars,
  basicAlphabet,
  fullAlphabet,
};
