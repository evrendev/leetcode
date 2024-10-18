import maxVowels from "./1456-maximum-number-of-vowels-in-a-substring-of-given-length";

test("Case 1", () => {
  expect(maxVowels("abciiidef", 3)).toBe(3);
});

test("Case 2", () => {
  expect(maxVowels("aeiou", 2)).toBe(2);
});
