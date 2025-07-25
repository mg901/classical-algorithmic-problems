import { describe, expect, it } from "vitest";
import { zeroOneKnapsack } from "./index.js";

describe("zeroOneKnapsack", () => {
  it("basic test case", () => {
    // Arrange
    const capacity = 8;
    const values = [40, 50, 60];
    const weights = [2, 3, 4];

    // Act & Assert
    expect(zeroOneKnapsack(capacity, weights, values)).toBe(110);
  });

  it("zero capacity returns 0", () => {
    // Arrange
    const capacity = 0;
    const values = [10, 20, 30];
    const weights = [1, 2, 3];

    // Act & Assert
    expect(zeroOneKnapsack(capacity, weights, values)).toBe(0);
  });

  it("empty weights and values return 0", () => {
    // Act & Assert
    expect(zeroOneKnapsack(10, [], [])).toBe(0);
  });

  it("all items too heavy", () => {
    // Arrange
    const capacity = 5;
    const values = [10, 20, 30];
    const weights = [6, 7, 8];

    // Act & Assert
    expect(zeroOneKnapsack(capacity, weights, values)).toBe(0);
  });

  it("single item used once", () => {
    // Arrange
    const capacity = 2;
    const values = [5];
    const weights = [2];

    // Act & Assert
    expect(zeroOneKnapsack(capacity, weights, values)).toBe(5);
  });

  it("items with same weight but different values", () => {
    // Arrange
    const capacity = 5;
    const values = [10, 20, 30];
    const weights = [1, 1, 1];

    // Act & Assert
    expect(zeroOneKnapsack(capacity, weights, values)).toBe(60);
  });
});
