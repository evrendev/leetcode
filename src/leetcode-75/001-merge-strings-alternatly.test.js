import mergeAlternately from "./01-merge-strings-alternatly";

test("mergeAlternately with equal length strings", () => {
  const word1 = "abc";
  const word2 = "pqr";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqcr");
});

test("mergeAlternately with different length strings", () => {
  const word1 = "ab";
  const word2 = "pqrs";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqrs");
});

test("mergeAlternately with different length strings", () => {
  const word1 = "abcd";
  const word2 = "pq";
  const result = mergeAlternately(word1, word2);
  expect(result).toBe("apbqcd");
});
