import { describe, expect, it } from 'vitest';
import { binaryToDecimal } from './index';

describe('binaryToDecimal', () => {
  it('converts 0 → 0', () => {
    expect(binaryToDecimal(0)).toBe(0);
  });

  it('converts 1 → 1', () => {
    expect(binaryToDecimal(1)).toBe(1);
  });

  it('converts 10 → 2', () => {
    expect(binaryToDecimal(10)).toBe(2);
  });

  it('converts 101 → 5', () => {
    expect(binaryToDecimal(101)).toBe(5);
  });

  it('converts 1111 → 15', () => {
    expect(binaryToDecimal(1111)).toBe(15);
  });

  it('converts large binary numbers correctly', () => {
    expect(binaryToDecimal(1100100)).toBe(100);
  });

  it('handles zeros between ones', () => {
    expect(binaryToDecimal(1001)).toBe(9);
  });
});
