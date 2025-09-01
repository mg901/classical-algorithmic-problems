import { describe, expect, it } from 'vitest';
import { kruskal } from './index.js';

describe('Kruskal algorithm', () => {
  it('returns correct MST for a basic graph', () => {
    // Arrange
    const edges = [
      [0, 1, 10],
      [0, 2, 6],
      [0, 3, 5],
      [1, 3, 15],
      [2, 3, 4],
    ];

    // Act
    const result = kruskal(4, edges);

    // Assert
    expect(result.totalWeight).toBe(19);
    expect(result.mst).toHaveLength(3);
    expect(result.mst).toEqual(
      expect.arrayContaining([
        [2, 3, 4],
        [0, 3, 5],
        [0, 1, 10],
      ]),
    );
  });

  it('returns empty MST when no edges are given', () => {
    // Act
    const result = kruskal(3, []);

    // Assert
    expect(result.totalWeight).toBe(0);
    expect(result.mst).toEqual([]);
  });

  it('handles graph with equal edge weights', () => {
    // Arrange
    const edges = [
      [0, 1, 1],
      [1, 2, 1],
      [0, 2, 1],
    ];

    // Act
    const result = kruskal(3, edges);

    // Assert
    expect(result.totalWeight).toBe(2);
    expect(result.mst).toHaveLength(2);
  });

  it('connects all vertices in a connected graph', () => {
    // Arrange
    const edges = [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 1],
      [3, 0, 4],
    ];

    // Act
    const result = kruskal(4, edges);

    // Assert
    expect(result.mst).toHaveLength(3);
    const vertices = new Set(result.mst.flatMap(([u, v]) => [u, v]));
    expect(vertices.size).toBe(4);
  });
});
