const questionsUtils = {
  getRandomIndexes: (length: number, count = 4) => {
    const indexes: Array<number> = [];
    let i = 0;
    while (i < count) {
      const maxIndex = length - 1;
      const index = Math.ceil(Math.random() * maxIndex);
      if (!indexes.includes(index)) {
        indexes.push(index);
        i++;
      }
    }
    return indexes;
  },

  shuffleArray: (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export default questionsUtils;
