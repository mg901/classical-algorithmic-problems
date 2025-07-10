import { describe, expect, it } from "vitest";
import breadthFirstSearch from "./index.js";

describe("breadthFirstSearch", () => {
  it("returns empty array if graph is null or empty", () => {
    expect(breadthFirstSearch(null, "A")).toEqual([]);
    expect(breadthFirstSearch({}, "A")).toEqual([]);
  });

  it("returns correct BFS order for simple graph", () => {
    const graph = {
      A: ["B", "C"],
      B: ["D"],
      C: ["E"],
      D: [],
      E: [],
    };
    expect(breadthFirstSearch(graph, "A")).toEqual(["A", "B", "C", "D", "E"]);
  });

  it("handles graph with isolated nodes", () => {
    const graph = {
      A: ["B"],
      B: [],
      C: ["D"],
      D: [],
    };
    expect(breadthFirstSearch(graph, "A")).toEqual(["A", "B"]);
    expect(breadthFirstSearch(graph, "C")).toEqual(["C", "D"]);
  });

  it("handles graph with cycles", () => {
    const graph = {
      A: ["B"],
      B: ["C"],
      C: ["A"],
    };
    expect(breadthFirstSearch(graph, "A")).toEqual(["A", "B", "C"]);
  });

  it("returns just the source if no neighbors", () => {
    const graph = {
      A: [],
    };
    expect(breadthFirstSearch(graph, "A")).toEqual(["A"]);
  });

  it("handles source not in graph", () => {
    const graph = {
      A: ["B"],
      B: ["C"],
      C: [],
    };
    expect(breadthFirstSearch(graph, "Z")).toEqual(["Z"]);
  });
});
