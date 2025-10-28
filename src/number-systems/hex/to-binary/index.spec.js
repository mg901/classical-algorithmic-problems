import { describe, expect, it } from 'vitest';
import { hexToBinary } from './index';

describe('hexToBinary', () => {
  it('converts single hex digits to binary', () => {
    expect(hexToBinary('0')).toBe(0);
    expect(hexToBinary('1')).toBe(1);
    expect(hexToBinary('a')).toBe(1010);
    expect(hexToBinary('f')).toBe(1111);
  });

  it('handles uppercase letters', () => {
    expect(hexToBinary('A')).toBe(1010);
    expect(hexToBinary('F')).toBe(1111);
  });

  it('converts multi-digit hex values', () => {
    expect(hexToBinary('10')).toBe(10000);
    expect(hexToBinary('1a')).toBe(11010);
    expect(hexToBinary('ff')).toBe(11111111);
    expect(hexToBinary('100')).toBe(100000000);
  });

  it('handles mixed case input', () => {
    expect(hexToBinary('Ab')).toBe(10101011);
    expect(hexToBinary('fF')).toBe(11111111);
  });

  it('returns 0 for empty string', () => {
    expect(hexToBinary('')).toBe(0);
  });
});
