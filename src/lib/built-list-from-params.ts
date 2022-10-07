import {
  basicAlphabet,
  bChars,
  Character,
  dChars,
  fullAlphabet,
  gChars,
  hChars,
  kChars,
  mChars,
  nChars,
  pChars,
  rChars,
  sChars,
  singleChars,
  tChars,
  wChars,
  yChars,
  zChars,
} from "../models/character";
import { fisherYatesShuffle } from "./fisher-yates-shuffle";

const buildListFromParams = (selectedChars: string[]): Character[] => {
  const charList: Character[] = [];

  if (selectedChars.includes("All")) {
    return fisherYatesShuffle(fullAlphabet);
  }

  if (selectedChars.includes("Basic")) {
    return fisherYatesShuffle(basicAlphabet);
  }

  if (selectedChars.includes("Single")) {
    charList.push(...singleChars);
  }

  if (selectedChars.includes("K")) {
    charList.push(...kChars);
  }

  if (selectedChars.includes("S")) {
    charList.push(...sChars);
  }

  if (selectedChars.includes("T")) {
    charList.push(...tChars);
  }

  if (selectedChars.includes("N")) {
    charList.push(...nChars);
  }

  if (selectedChars.includes("H")) {
    charList.push(...hChars);
  }

  if (selectedChars.includes("M")) {
    charList.push(...mChars);
  }

  if (selectedChars.includes("Y")) {
    charList.push(...yChars);
  }

  if (selectedChars.includes("R")) {
    charList.push(...rChars);
  }

  if (selectedChars.includes("W")) {
    charList.push(...wChars);
  }

  if (selectedChars.includes("G")) {
    charList.push(...gChars);
  }

  if (selectedChars.includes("Z")) {
    charList.push(...zChars);
  }

  if (selectedChars.includes("D")) {
    charList.push(...dChars);
  }

  if (selectedChars.includes("B")) {
    charList.push(...bChars);
  }

  if (selectedChars.includes("P")) {
    charList.push(...pChars);
  }

  return fisherYatesShuffle(charList);
};

export { buildListFromParams };
