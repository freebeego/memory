const shuffle = (array) => {
  const result = array;
  let randomIndex;
  for (let i = array.length - 1; i > 0; --i) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return result;
};

export default shuffle;
