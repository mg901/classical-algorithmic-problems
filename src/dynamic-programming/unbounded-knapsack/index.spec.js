// unboundedKnapsack.test.js
import { describe, expect, it } from "vitest";
import { unboundedKnapsack } from "./index.js";

describe("unboundedKnapsack", () => {
  it("basic test case", () => {
    const capacity = 8;
    const weights = [2, 3, 4];
    const values = [40, 50, 60];
    expect(unboundedKnapsack(capacity, weights, values)).toBe(160);
  });

  it("zero capacity returns 0", () => {
    const W = 0;
    const weights = [1, 2, 3];
    const values = [10, 20, 30];
    expect(unboundedKnapsack(W, weights, values)).toBe(0);
  });

  it("empty weights and values return 0", () => {
    expect(unboundedKnapsack(10, [], [])).toBe(0);
  });

  it("all items too heavy", () => {
    const W = 5;
    const weights = [6, 7, 8];
    const values = [10, 20, 30];
    expect(unboundedKnapsack(W, weights, values)).toBe(0);
  });

  it("single item used multiple times", () => {
    const W = 10;
    const weights = [2];
    const values = [5];
    expect(unboundedKnapsack(W, weights, values)).toBe(25); // 5 items of weight 2
  });
});
