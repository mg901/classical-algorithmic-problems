// subsetSum.test.js
import { describe, expect, test } from "vitest";
import { subsetSum } from "./index";

describe("subsetSum", () => {
  test("subset exists (simple case)", () => {
    // Act and Assert
    expect(subsetSum([1, 2, 3], 5)).toBe(true); // 2 + 3
  });

  test("no subset matches target", () => {
    // Act and Assert
    expect(subsetSum([1, 2, 5], 10)).toBe(false);
  });

  test("full array sum", () => {
    // Act and Assert
    expect(subsetSum([2, 4, 6], 12)).toBe(true); // 2+4+6
  });

  test("empty subset forms 0", () => {
    // Act and Assert
    expect(subsetSum([1, 2, 3], 0)).toBe(true);
  });

  test("array is empty and target > 0", () => {
    // Act and Assert
    expect(subsetSum([], 3)).toBe(false);
  });

  test("handles duplicate numbers correctly", () => {
    // Act and Assert
    expect(subsetSum([1, 5, 11, 5], 11)).toBe(true); // 11 or 5+5+1
  });

  test("all numbers are bigger than target", () => {
    // Act and Assert
    expect(subsetSum([10, 20, 30], 5)).toBe(false);
  });
});
