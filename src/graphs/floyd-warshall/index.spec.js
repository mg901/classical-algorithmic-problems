import { describe, expect, it } from 'vitest';
import { floydWarshall } from './index.js';

describe('Floyd-Warshall algorithm', () => {
  it('computes shortest paths for a simple graph', () => {
    // Arrange
    const graph = [
      [0, 3, Infinity, 7],
      [8, 0, 2, Infinity],
      [5, Infinity, 0, 1],
      [2, Infinity, Infinity, 0],
    ];

    // Act
    const result = floydWarshall(graph);

    // Assert
    expect(result).toEqual([
      [0, 3, 5, 6],
      [5, 0, 2, 3],
      [3, 6, 0, 1],
      [2, 5, 7, 0],
    ]);
  });

  it('returns the same matrix when all distances are infinity except diagonals', () => {
    // Arrange
    const graph = [
      [0, Infinity, Infinity],
      [Infinity, 0, Infinity],
      [Infinity, Infinity, 0],
    ];

    // Act
    const result = floydWarshall(graph);

    // Assert
    expect(result).toEqual(graph);
  });

  it('detects negative weight cycles and throws an error', () => {
    // Arrange
    const graph = [
      [0, 1, Infinity],
      [Infinity, 0, -1],
      [-1, Infinity, 0],
    ];

    // Act & Assert
    expect(() => floydWarshall(graph)).toThrow(
      'Negative weight cycle detected.',
    );
  });

  it('handles a single node graph', () => {
    // Arrange
    const graph = [[0]];

    // Act
    const result = floydWarshall(graph);

    // Assert
    expect(result).toEqual(graph);
  });

  it('handles a graph with negative but no negative cycles', () => {
    // Arrange
    const graph = [
      [0, -2, Infinity],
      [Infinity, 0, 3],
      [4, Infinity, 0],
    ];

    // Act
    const result = floydWarshall(graph);

    // Assert
    expect(result).toEqual([
      [0, -2, 1],
      [7, 0, 3],
      [4, 2, 0],
    ]);
  });
});
