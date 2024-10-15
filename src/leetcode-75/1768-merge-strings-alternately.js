/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  const englishLowerLetters = "abcdefghijklmnopqrstuvwxyz ".split("");
  const arr1 = word1.split("");
  const arr2 = word2.split("");
  const result = [];

  if (
    arr1.length < 1 ||
    arr2.length > 100 ||
    arr1.find((el) => !englishLowerLetters.includes(el)) ||
    arr2.find((el) => !englishLowerLetters.includes(el))
  ) {
    throw new Error("Invalid input");
  }

  const length = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    const letter1 = arr1[i] || "";
    const letter2 = arr2[i] || "";

    if (letter1 === " ") {
      result.push(letter2);
    } else if (letter2 === " ") {
      result.push(letter1);
    } else {
      result.push(letter1, letter2);
    }
  }

  return result.join("");
};

export default mergeAlternately;
