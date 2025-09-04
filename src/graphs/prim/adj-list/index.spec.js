import { describe, expect, it } from 'vitest';
import { prim } from './index.js';

describe('prim', () => {
  it('calculates MST for a small graph', () => {
    // Arrange
    const adjList = [
      [
        [1, 2],
        [3, 6],
      ],
      [
        [0, 2],
        [2, 3],
        [3, 8],
        [4, 5],
      ],
      [
        [1, 3],
        [4, 7],
      ],
      [
        [0, 6],
        [1, 8],
        [4, 9],
      ],
      [
        [1, 5],
        [2, 7],
        [3, 9],
      ],
    ];

    // Act
    const result = prim(adjList, 5);

    // Assert
    expect(result).toEqual([-1, 0, 1, 0, 1]);
  });

  it('handles graph with single node', () => {
    // Arrange
    const adjList = [[]];

    // Act
    const result = prim(adjList, 1);

    // Assert
    expect(result).toEqual([-1]);
  });

  it('handles disconnected graph', () => {
    // Arrange
    const adjList = [[[1, 1]], [[0, 1]], []];

    // Act
    const result = prim(adjList, 3);

    // Assert
    expect(result).toEqual([-1, 0, -1]);
  });

  it('handles empty graph', () => {
    // Arrange
    const adjList = [];

    // Act
    const result = prim(adjList, 0);

    // Assert
    expect(result).toEqual([]);
  });
});
