import { describe, expect, it } from "vitest";
import { unboundedKnapsack } from "./index.js";

describe("unboundedKnapsack", () => {
  it("basic test case", () => {
    // Arrange
    const capacity = 8;
    const values = [40, 50, 60];
    const weights = [2, 3, 4];

    // Act & Assert
    expect(unboundedKnapsack(capacity, weights, values)).toBe(160);
  });

  it("zero capacity returns 0", () => {
    // Arrange
    const capacity = 0;
    const values = [10, 20, 30];
    const weights = [1, 2, 3];

    // Act & Assert
    expect(unboundedKnapsack(capacity, weights, values)).toBe(0);
  });

  it("empty weights and values return 0", () => {
    // Act & Assert
    expect(unboundedKnapsack(10, [], [])).toBe(0);
  });

  it("all items too heavy", () => {
    // Arrange
    const capacity = 5;
    const values = [10, 20, 30];
    const weights = [6, 7, 8];

    // Act & Assert
    expect(unboundedKnapsack(capacity, weights, values)).toBe(0);
  });

  it("single item used multiple times", () => {
    // Arrange
    const capacity = 10;
    const values = [5];
    const weights = [2];

    // Act & Assert
    expect(unboundedKnapsack(capacity, weights, values)).toBe(25); // 5 items of weight 2
  });
});
