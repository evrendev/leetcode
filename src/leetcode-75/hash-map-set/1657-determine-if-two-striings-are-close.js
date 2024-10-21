/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const frequencyMap1 = new Map();
  const frequencyMap2 = new Map();

  for (let index = 0; index < word1.length; index++) {
    frequencyMap1.set(word1[index], (frequencyMap1.get(word1[index]) || 0) + 1);
    frequencyMap2.set(word2[index], (frequencyMap2.get(word2[index]) || 0) + 1);
  }

  const frequencyArray1 = Array.from(frequencyMap1.values()).sort(
    (a, b) => a - b
  );
  const frequencyArray2 = Array.from(frequencyMap2.values()).sort(
    (a, b) => a - b
  );

  const charSet1 = Array.from(frequencyMap1.keys()).sort().join("");
  const charSet2 = Array.from(frequencyMap2.keys()).sort().join("");

  return (
    frequencyArray1.join("") === frequencyArray2.join("") &&
    charSet1 === charSet2
  );
};

export default closeStrings;
