import reverseVowels from "./345-reverse-vowels-of-a-string";

test("Case 1", () => {
  expect(reverseVowels("IceCreAm")).toBe("AceCreIm");
});

test("Case 2", () => {
  expect(reverseVowels("leetcode")).toBe("leotcede");
});