/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const arr = s.split("");
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (!vowels.has(arr[i].toLowerCase())) {
      i++;
      continue;
    }
    if (!vowels.has(arr[j].toLowerCase())) {
      j--;
      continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join("");
};

export default reverseVowels;
