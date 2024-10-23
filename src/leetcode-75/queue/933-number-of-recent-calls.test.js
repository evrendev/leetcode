import { RecentCounter } from "./933-number-of-recent-calls";

test("Case 1", () => {
  const recentCounter = new RecentCounter();
  expect(recentCounter.ping(1)).toBe(1);
  expect(recentCounter.ping(100)).toBe(2);
  expect(recentCounter.ping(3001)).toBe(3);
  expect(recentCounter.ping(3002)).toBe(3);
});
