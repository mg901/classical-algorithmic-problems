import { describe, expect, it } from 'vitest';
import { spfa } from './index.js';

describe('SPFA algorithm', () => {
  it('returns correct shortest paths on graph without negative edges', () => {
    // Arrange
    const vertices = 5;
    const edges = [
      [0, 1, 6],
      [0, 2, 7],
      [1, 2, 8],
      [1, 3, 5],
      [1, 4, -4],
      [2, 3, -3],
      [2, 4, 9],
      [3, 1, -2],
      [4, 0, 2],
      [4, 3, 7],
    ];

    // Act
    const dist = spfa(vertices, edges, 0);

    // Assert
    expect(dist).toEqual([0, 2, 7, 4, -2]);
  });

  it('returns all Infinity if start is disconnected', () => {
    // Arrange
    const vertices = 3;
    const edges = [[1, 2, 5]];

    // Act
    const dist = spfa(vertices, edges, 0);

    // Assert
    expect(dist).toEqual([0, Infinity, Infinity]);
  });

  it('throws error on negative weight cycle', () => {
    // Arrange
    const vertices = 3;
    const edges = [
      [0, 1, 1],
      [1, 2, -1],
      [2, 0, -1],
    ];

    // Act & Assert
    expect(() => spfa(vertices, edges, 0)).toThrow(
      'Negative weight cycle detected.',
    );
  });
});
