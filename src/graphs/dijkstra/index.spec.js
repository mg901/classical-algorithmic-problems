import { describe, expect, it } from 'vitest';
import { dijkstra } from './index.js';

describe('Dijkstra algorithm', () => {
  it('finds shortest paths in a simple graph', () => {
    // Arrange
    const n = 4;
    const edges = [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 4],
      [3, 4, 1],
    ];

    // Act
    const result = dijkstra(n, edges, 1);

    // Assert
    expect(result.slice(1)).toEqual([0, 1, 3, 4]);
  });

  it('handles disconnected nodes', () => {
    // Arrange
    const n = 3;
    const edges = [[1, 2, 5]];

    // Act
    const result = dijkstra(n, edges, 1);

    // Assert
    expect(result.slice(1)).toEqual([0, 5, Infinity]);
  });

  it('finds correct path when multiple routes exist', () => {
    // Arrange
    const n = 4;
    const edges = [
      [1, 2, 2],
      [1, 3, 5],
      [2, 3, 1],
      [2, 4, 7],
      [3, 4, 1],
    ];

    // Act
    const result = dijkstra(n, edges, 1);

    // Assert
    expect(result.slice(1)).toEqual([0, 2, 3, 4]);
  });

  it('works when start node has no outgoing edges', () => {
    // Arrange
    const n = 3;
    const edges = [[2, 3, 1]];

    // Act
    const result = dijkstra(n, edges, 1);

    // Assert
    expect(result.slice(1)).toEqual([0, Infinity, Infinity]);
  });

  it('returns 0 for start node distance', () => {
    // Arrange
    const n = 2;
    const edges = [[1, 2, 10]];

    // Act
    const result = dijkstra(n, edges, 1);

    // Assert
    expect(result[1]).toBe(0);
  });
});
