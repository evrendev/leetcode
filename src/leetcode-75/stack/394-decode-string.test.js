import { decodeString } from "./394-decode-string";

describe("decodeString", () => {
  test("Case 1", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });

  test("Case 2", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });

  test("Case 3", () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });

  test("Case 4", () => {
    expect(decodeString("abc3[cd]xyz")).toBe("abccdcdcdxyz");
  });
});
