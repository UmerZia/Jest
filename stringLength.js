const stringLength = (word) => {
  if (word.length >= 1 && word.length <= 10) {
    return word.length;
  }

  return null;
};

const reverseString = (word) => [...word].reverse().join('');

module.exports = stringLength;
module.exports = reverseString;