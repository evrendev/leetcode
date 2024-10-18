/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  const vowels = new Set("aeiou");
  let maxVowelCount = 0,
    currentVowelCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) currentVowelCount++;

    if (i >= k && vowels.has(s[i - k])) currentVowelCount--;

    maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
  }

  return maxVowelCount;
};

export default maxVowels;
