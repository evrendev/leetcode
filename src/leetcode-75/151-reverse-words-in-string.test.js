import reverseWords from "./151-reverse-words-in-string";

test("Case 1", () => {
  const s = "the sky is blue";
  const result = reverseWords(s);
  expect(result).toBe("blue is sky the");
});

test("Case 2", () => {
  const s = "  hello world  ";
  const result = reverseWords(s);
  expect(result).toBe("world hello");
});

test("Case 3", () => {
  const s = "a good   example";
  const result = reverseWords(s);
  expect(result).toBe("example good a");
});
