import { describe, expect, it } from "vitest";
import { depthFirstSearch } from "./index.js";

describe("depthFirstSearch", () => {
  it("returns empty array if graph is null or empty", () => {
    expect(depthFirstSearch(null, "A")).toEqual([]);
    expect(depthFirstSearch({}, "A")).toEqual([]);
  });

  it("returns correct DFS order for simple graph", () => {
    const graph = {
      A: ["B", "C"],
      B: ["D"],
      C: ["E"],
      D: [],
      E: [],
    };
    expect(depthFirstSearch(graph, "A")).toEqual(["A", "B", "D", "C", "E"]);
  });

  it("handles graph with isolated nodes", () => {
    const graph = {
      A: ["B"],
      B: [],
      C: ["D"],
      D: [],
    };
    expect(depthFirstSearch(graph, "A")).toEqual(["A", "B"]);
    expect(depthFirstSearch(graph, "C")).toEqual(["C", "D"]);
  });

  it("handles graph with cycles", () => {
    const graph = {
      A: ["B"],
      B: ["C"],
      C: ["A"],
    };
    expect(depthFirstSearch(graph, "A")).toEqual(["A", "B", "C"]);
  });

  it("returns just the source if no neighbors", () => {
    const graph = {
      A: [],
    };
    expect(depthFirstSearch(graph, "A")).toEqual(["A"]);
  });

  it("handles source not in graph gracefully", () => {
    const graph = {
      A: ["B"],
      B: ["C"],
      C: [],
    };
    expect(depthFirstSearch(graph, "Z")).toEqual(["Z"]);
  });
});
