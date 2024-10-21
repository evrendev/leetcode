import closeStrings from "./1657-determine-if-two-striings-are-close";

describe("Case 1", () => {
  test("word1 = 'abc', word2 = 'bca'", () => {
    expect(closeStrings("abc", "bca")).toBe(true);
  });
});

describe("Case 2", () => {
  test("word1 = 'a', word2 = 'aa'", () => {
    expect(closeStrings("a", "aa")).toBe(false);
  });
});

describe("Case 3", () => {
  test("word1 = 'cabbba', word2 = 'abbccc'", () => {
    expect(closeStrings("cabbba", "abbccc")).toBe(true);
  });
});
