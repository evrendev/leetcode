import mergeAlternately from "./1768-merge-strings-alternately";

test("Case 1", () => {
  const word1 = "abc";
  const word2 = "pqr";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqcr");
});

test("Case 2", () => {
  const word1 = "ab";
  const word2 = "pqrs";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqrs");
});

test("Case 3", () => {
  const word1 = "abcd";
  const word2 = "pq";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqcd");
});
