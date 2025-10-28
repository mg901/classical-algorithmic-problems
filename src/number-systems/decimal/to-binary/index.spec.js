import { describe, expect, it } from 'vitest';
import { decimalToBinary } from './index';

describe('decimalToBinary', () => {
  it('converts small numbers', () => {
    expect(decimalToBinary(0)).toBe(0);
    expect(decimalToBinary(1)).toBe(1);
    expect(decimalToBinary(2)).toBe(10);
    expect(decimalToBinary(3)).toBe(11);
    expect(decimalToBinary(4)).toBe(100);
  });

  it('converts larger numbers', () => {
    expect(decimalToBinary(5)).toBe(101);
    expect(decimalToBinary(8)).toBe(1000);
    expect(decimalToBinary(10)).toBe(1010);
    expect(decimalToBinary(15)).toBe(1111);
    expect(decimalToBinary(16)).toBe(10000);
  });

  it('converts big values correctly', () => {
    expect(decimalToBinary(255)).toBe(11111111);
    expect(decimalToBinary(256)).toBe(100000000);
    expect(decimalToBinary(1023)).toBe(1111111111);
  });

  it('handles negative numbers as 0 (not supported)', () => {
    expect(decimalToBinary(-1)).toBe(0);
    expect(decimalToBinary(-10)).toBe(0);
  });

  it('handles non-integer input by truncating', () => {
    expect(decimalToBinary(5.9)).toBe(101);
    expect(decimalToBinary(3.1)).toBe(11);
  });
});
