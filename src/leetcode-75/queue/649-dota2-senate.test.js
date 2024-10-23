import { predictPartyVictory } from "./649-dota2-senate";

describe("Dota2 Senate", () => {
  test("Test case 1", () => {
    const senate = "RD";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });

  test("Test case 2", () => {
    const senate = "RDD";
    expect(predictPartyVictory(senate)).toBe("Dire");
  });

  test("Test case 3", () => {
    const senate = "RRDDD";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });
});
