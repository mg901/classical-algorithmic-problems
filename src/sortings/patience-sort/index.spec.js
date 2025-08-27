import { describe, expect, it } from 'vitest';
import { patienceSort } from './index.js';

describe('patienceSort', () => {
  it('sorts an empty array', () => {
    // Act & Assert
    expect(patienceSort([])).toEqual([]);
  });

  it('sorts an array with one element', () => {
    // Act & Assert
    expect(patienceSort([5])).toEqual([5]);
  });

  it('sorts a sorted array', () => {
    // Act & Assert
    expect(patienceSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts a reverse array', () => {
    // Act & Assert
    expect(patienceSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array with repeated elements', () => {
    // Act & Assert
    expect(patienceSort([4, 2, 4, 3, 2])).toEqual([2, 2, 3, 4, 4]);
  });

  it('sorts a random array', () => {
    // Act & Assert
    expect(patienceSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([
      1, 1, 2, 3, 4, 5, 5, 6, 9,
    ]);
  });
});
