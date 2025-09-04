import { describe, expect, it } from 'vitest';
import { prim } from './index.js';

describe('prim', () => {
  it('calculates MST for a small graph', () => {
    // Arrange
    const adjMatrix = [
      [0, 2, 0, 6, 0],
      [2, 0, 3, 8, 5],
      [0, 3, 0, 0, 7],
      [6, 8, 0, 0, 9],
      [0, 5, 7, 9, 0],
    ];

    // Act
    const result = prim(adjMatrix);

    // Assert
    expect(result).toEqual([-1, 0, 1, 0, 1]);
  });

  it('handles graph with single node', () => {
    // Arrange
    const adjMatrix = [[0]];

    // Act
    const result = prim(adjMatrix);

    // Assert
    expect(result).toEqual([-1]);
  });

  it('handles disconnected graph', () => {
    // Arrange
    const adjMatrix = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];

    // Act
    const result = prim(adjMatrix);

    // Assert
    expect(result).toEqual([-1, 0, -1]);
  });

  it('handles empty graph', () => {
    // Arrange
    const adjMatrix = [];

    // Act
    const result = prim(adjMatrix);

    // Assert
    expect(result).toEqual([]);
  });
});
