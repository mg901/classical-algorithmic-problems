import { describe, expect, it } from 'vitest';
import { cyclicSort } from './index.js';

describe('cyclicSort', () => {
  it('sorts an empty array', () => {
    // Arrange
    const arr = [];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr).toEqual([]);
  });

  it('sorts an array with one element', () => {
    // Arrange
    const arr = [1];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr).toEqual([1]);
  });

  it('sorts an already sorted array', () => {
    // Arrange
    const arr = [1, 2, 3, 4, 5];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts a reverse array', () => {
    // Arrange
    const arr = [5, 4, 3, 2, 1];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts a random array', () => {
    // Arrange
    const arr = [3, 1, 5, 4, 2];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts an array with duplicates (duplicates are ignored)', () => {
    // Arrange
    const arr = [3, 1, 2, 3];

    // Act
    cyclicSort(arr);

    // Assert
    expect(arr.slice(0, 3)).toEqual([1, 2, 3]);
  });
});
