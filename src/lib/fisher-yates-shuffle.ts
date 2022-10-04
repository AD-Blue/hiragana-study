const fisherYatesShuffle = (array: any[]): any[] => {
  let copy = array.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const k = copy[i];

    copy[i] = copy[j];
    copy[j] = k;
  }

  return copy;
};

export { fisherYatesShuffle };
