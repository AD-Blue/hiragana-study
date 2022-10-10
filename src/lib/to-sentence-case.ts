const toSentenceCase = (word: string): string => {
  const lowerCasedWord = word.toLowerCase();

  return `${lowerCasedWord.charAt(0).toUpperCase()}${lowerCasedWord.slice(1)}`;
};

export { toSentenceCase };
