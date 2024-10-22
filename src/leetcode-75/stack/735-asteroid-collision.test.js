import { asteroidCollision } from "./735-asteroid-collision";

describe("Example 1", () => {
  it("should return [5, 10]", () => {
    const asteroids = [5, 10, -5];
    const expected = [5, 10];
    expect(asteroidCollision(asteroids)).toEqual(expected);
  });
});

describe("Example 2", () => {
  it("should return []", () => {
    const asteroids = [8, -8];
    const expected = [];
    expect(asteroidCollision(asteroids)).toEqual(expected);
  });
});

describe("Example 3", () => {
  it("should return [10]", () => {
    const asteroids = [10, 2, -5];
    const expected = [10];
    expect(asteroidCollision(asteroids)).toEqual(expected);
  });
});
