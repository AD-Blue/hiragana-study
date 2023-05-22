export interface Character {
  hiragana: string;
  katakana: string;
  romaji: string;
}

const singleChars: Character[] = [
  {
    hiragana: "あ",
    katakana: "ア",
    romaji: "a",
  },
  {
    hiragana: "い",
    katakana: "イ",
    romaji: "i",
  },
  {
    hiragana: "う",
    katakana: "ウ",
    romaji: "u",
  },
  {
    hiragana: "え",
    katakana: "エ",
    romaji: "e",
  },
  {
    hiragana: "お",
    katakana: "オ",
    romaji: "o",
  },
];

const kChars: Character[] = [
  {
    hiragana: "か",
    katakana: "カ",
    romaji: "ka",
  },
  {
    hiragana: "き",
    katakana: "キ",
    romaji: "ki",
  },
  {
    hiragana: "く",
    katakana: "ク",
    romaji: "ku",
  },
  {
    hiragana: "け",
    katakana: "ケ",
    romaji: "ke",
  },
  {
    hiragana: "こ",
    katakana: "コ",
    romaji: "ko",
  },
];

const sChars: Character[] = [
  {
    hiragana: "さ",
    katakana: "サ",
    romaji: "sa",
  },
  {
    hiragana: "し",
    katakana: "シ",
    romaji: "shi",
  },
  {
    hiragana: "す",
    katakana: "ス",
    romaji: "su",
  },
  {
    hiragana: "せ",
    katakana: "セ",
    romaji: "se",
  },
  {
    hiragana: "そ",
    katakana: "ソ",
    romaji: "so",
  },
];

const tChars: Character[] = [
  {
    hiragana: "た",
    katakana: "タ",
    romaji: "ta",
  },
  {
    hiragana: "ち",
    katakana: "チ",
    romaji: "chi",
  },
  {
    hiragana: "つ",
    katakana: "ツ",
    romaji: "tsu",
  },
  {
    hiragana: "て",
    katakana: "テ",
    romaji: "te",
  },
  {
    hiragana: "と",
    katakana: "ト",
    romaji: "to",
  },
];

const nChars: Character[] = [
  {
    hiragana: "な",
    katakana: "ナ",
    romaji: "na",
  },
  {
    hiragana: "に",
    katakana: "ニ",
    romaji: "ni",
  },
  {
    hiragana: "ぬ",
    katakana: "ヌ",
    romaji: "nu",
  },
  {
    hiragana: "ね",
    katakana: "ネ",
    romaji: "ne",
  },
  {
    hiragana: "の",
    katakana: "ノ",
    romaji: "no",
  },
];

const hChars: Character[] = [
  {
    hiragana: "は",
    katakana: "ハ",
    romaji: "ha",
  },
  {
    hiragana: "ひ",
    katakana: "ヒ",
    romaji: "hi",
  },
  {
    hiragana: "ふ",
    katakana: "フ",
    romaji: "fu",
  },
  {
    hiragana: "へ",
    katakana: "ヘ",
    romaji: "he",
  },
  {
    hiragana: "ほ",
    katakana: "ホ",
    romaji: "ho",
  },
];

const mChars: Character[] = [
  {
    hiragana: "ま",
    katakana: "マ",
    romaji: "ma",
  },
  {
    hiragana: "み",
    katakana: "ミ",
    romaji: "mi",
  },
  {
    hiragana: "む",
    katakana: "ム",
    romaji: "mu",
  },
  {
    hiragana: "め",
    katakana: "メ",
    romaji: "me",
  },
  {
    hiragana: "も",
    katakana: "モ",
    romaji: "mo",
  },
];

const yChars: Character[] = [
  {
    hiragana: "や",
    katakana: "ヤ",
    romaji: "ya",
  },
  {
    hiragana: "ゆ",
    katakana: "ユ",
    romaji: "yu",
  },
  {
    hiragana: "よ",
    katakana: "ヨ",
    romaji: "yo",
  },
];

const rChars: Character[] = [
  {
    hiragana: "ら",
    katakana: "ラ",
    romaji: "ra",
  },
  {
    hiragana: "り",
    katakana: "リ",
    romaji: "ri",
  },
  {
    hiragana: "る",
    katakana: "ル",
    romaji: "ru",
  },
  {
    hiragana: "れ",
    katakana: "レ",
    romaji: "re",
  },
  {
    hiragana: "ろ",
    katakana: "ロ",
    romaji: "ro",
  },
];

const wChars: Character[] = [
  {
    hiragana: "わ",
    katakana: "ワ",
    romaji: "wa",
  },
  {
    hiragana: "を",
    katakana: "ヲ",
    romaji: "wo",
  },
];

const gChars: Character[] = [
  {
    hiragana: "が",
    katakana: "ガ",
    romaji: "ga",
  },
  {
    hiragana: "ぎ",
    katakana: "ギ",
    romaji: "gi",
  },
  {
    hiragana: "ぐ",
    katakana: "グ",
    romaji: "gu",
  },
  {
    hiragana: "げ",
    katakana: "ゲ",
    romaji: "ge",
  },
  {
    hiragana: "ご",
    katakana: "ゴ",
    romaji: "go",
  },
];

const zChars: Character[] = [
  {
    hiragana: "ざ",
    katakana: "ザ",
    romaji: "za",
  },
  {
    hiragana: "じ",
    katakana: "ジ",
    romaji: "ji",
  },
  {
    hiragana: "ず",
    katakana: "ズ",
    romaji: "zu",
  },
  {
    hiragana: "ぜ",
    katakana: "ゼ",
    romaji: "ze",
  },
  {
    hiragana: "ぞ",
    katakana: "ゾ",
    romaji: "zo",
  },
];

const dChars: Character[] = [
  {
    hiragana: "だ",
    katakana: "ダ",
    romaji: "da",
  },
  {
    hiragana: "ぢ",
    katakana: "ヂ",
    romaji: "dji",
  },
  {
    hiragana: "づ",
    katakana: "ヅ",
    romaji: "dzu",
  },
  {
    hiragana: "で",
    katakana: "デ",
    romaji: "de",
  },
  {
    hiragana: "ど",
    katakana: "ド",
    romaji: "do",
  },
];

const bChars: Character[] = [
  {
    hiragana: "ば",
    katakana: "バ",
    romaji: "ba",
  },
  {
    hiragana: "び",
    katakana: "ビ",
    romaji: "bi",
  },
  {
    hiragana: "ぶ",
    katakana: "ブ",
    romaji: "bu",
  },
  {
    hiragana: "べ",
    katakana: "ベ",
    romaji: "be",
  },
  {
    hiragana: "ぼ",
    katakana: "ボ",
    romaji: "bo",
  },
];

const pChars: Character[] = [
  {
    hiragana: "ぱ",
    katakana: "パ",
    romaji: "pa",
  },
  {
    hiragana: "ぴ",
    katakana: "ピ",
    romaji: "pi",
  },
  {
    hiragana: "ぷ",
    katakana: "プ",
    romaji: "pu",
  },
  {
    hiragana: "ぺ",
    katakana: "ペ",
    romaji: "pe",
  },
  {
    hiragana: "ぽ",
    katakana: "ポ",
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
    katakana: "ン",
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
