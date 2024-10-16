/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let readIndex = 0;
  let writeIndex = 0;

  while (readIndex < chars.length) {
    let currentChar = chars[readIndex];
    let count = 0;

    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    chars[writeIndex++] = currentChar;

    if (count > 1) {
      for (let digit of count.toString()) {
        chars[writeIndex++] = digit;
      }
    }
  }

  return writeIndex;
};

export default compress;
