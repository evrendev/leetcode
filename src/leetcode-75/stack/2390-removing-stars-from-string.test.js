import { removeStars } from "./2390-removing-stars-from-string";

test("Case 1", () => {
  expect(removeStars("leet**cod*e")).toBe("lecoe");
});

test("Case 2", () => {
  expect(removeStars("erase*****")).toBe("");
});
