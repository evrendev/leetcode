import gcdOfStrings from "./1071-greatest-common-divisor-of-strings";

test("Case 1", () => {
  const str1 = "ABCABC";
  const str2 = "ABC";
  const result = gcdOfStrings(str1, str2);
  expect(result).toBe("ABC");
});

test("Case 2", () => {
  const str1 = "ABCABC";
  const str2 = "ABC";
  const result = gcdOfStrings(str1, str2);
  expect(result).toBe("ABC");
});

test("Case 3", () => {
  const str1 = "LEET";
  const str2 = "CODE";
  const result = gcdOfStrings(str1, str2);
  expect(result).toBe("");
});
