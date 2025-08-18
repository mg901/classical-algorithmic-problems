import { describe, expect, test } from "vitest";
import { topologicalSort } from "./index.js";

describe("topologicalSort", () => {
  test("empty graph", () => {
    expect(topologicalSort([])).toEqual([]);
  });

  test("graphs with one node", () => {
    expect(topologicalSort([[0]])).toEqual([0]);
  });

  test("graphs with two nodes", () => {
    expect(
      topologicalSort([
        [0, 1],
        [0, 0],
      ])
    ).toEqual([0, 1]);

    expect(
      topologicalSort([
        [0, 0],
        [1, 0],
      ])
    ).toEqual([1, 0]);
  });

  test("graphs with multiple nodes", () => {
    expect(
      topologicalSort([
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 0],
      ])
    ).toEqual([0, 1, 2]);

    expect(
      topologicalSort([
        [0, 1, 1, 0, 1], // A → B,C,E
        [0, 0, 1, 0, 0], // B → C
        [0, 0, 0, 0, 0], // C
        [0, 1, 0, 0, 0], // D → B
        [0, 0, 1, 1, 0], // E → C,D
      ])
    ).toEqual([0, 4, 3, 1, 2]);

    expect(
      topologicalSort([
        [0, 1, 1, 0, 0, 0], // A → B,C
        [0, 0, 1, 1, 1, 0], // B → C,D,E
        [0, 0, 0, 0, 0, 1], // C → F
        [0, 0, 0, 0, 0, 0], // D
        [0, 0, 0, 0, 0, 1], // E → F
        [0, 0, 0, 0, 0, 0], // F
      ])
    ).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("linked list", () => {
    expect(
      topologicalSort([
        [0, 1, 0], // A → B
        [0, 0, 1], // B → C
        [0, 0, 0], // C
      ])
    ).toEqual([0, 1, 2]);

    expect(
      topologicalSort([
        [0, 0, 0, 0, 0, 0], // A
        [1, 0, 0, 0, 0, 0], // B → A
        [0, 1, 0, 0, 0, 0], // C → B
        [0, 0, 1, 0, 0, 0], // D → C
        [0, 0, 0, 1, 0, 0], // E → D
        [0, 0, 0, 0, 1, 0], // F → E
      ])
    ).toEqual([5, 4, 3, 2, 1, 0]);
  });

  test("graph with cycles", () => {
    expect(topologicalSort([[1]])).toEqual([]);
    expect(
      topologicalSort([
        [1, 1],
        [0, 0],
      ])
    ).toEqual([]);
    expect(
      topologicalSort([
        [1, 1],
        [1, 0],
      ])
    ).toEqual([]);
    expect(
      topologicalSort([
        [0, 0, 0, 1, 1], // A → D,E
        [1, 1, 1, 1, 1], // B → A,B,C,D,E
        [0, 0, 0, 0, 0], // C
        [0, 1, 0, 0, 0], // D → B
        [0, 0, 1, 0, 0], // E → C
      ])
    ).toEqual([]);
  });
});
