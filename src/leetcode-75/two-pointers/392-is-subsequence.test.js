import isSubsequence from "./392-is-subsequence";

test("Case 1", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test("Case 2", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});

test("Case 3", () => {
  expect(isSubsequence("ab", "baab")).toBe(true);
});

test("Case 4", () => {
  expect(isSubsequence("leeeeetcode", "leeeeeetcode")).toBe(true);
});
