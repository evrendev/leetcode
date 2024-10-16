import compress from "./443-string-compression";

test("Case 1", () => {
  expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toBe(6);
});

test("Case 2", () => {
  expect(compress(["a"])).toBe(1);
});

test("Case 3", () => {
  expect(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
  ).toBe(4);
});
