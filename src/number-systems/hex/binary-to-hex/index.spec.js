import { describe, expect, it } from 'vitest';
import { binaryToHex } from './index.js';

describe('binaryToHex', () => {
  it('should convert small binary numbers', () => {
    expect(binaryToHex(0)).toBe('0');
    expect(binaryToHex(1)).toBe('1');
    expect(binaryToHex(10)).toBe('2');
    expect(binaryToHex(1111)).toBe('f');
  });

  it('should convert multi-digit binary numbers', () => {
    expect(binaryToHex(1010)).toBe('a');
    expect(binaryToHex(110011)).toBe('33');
    expect(binaryToHex(11111111)).toBe('ff');
    expect(binaryToHex(100000000)).toBe('100');
  });

  it('should handle leading zeros correctly', () => {
    expect(binaryToHex('0001')).toBe('1');
    expect(binaryToHex('001010')).toBe('a');
  });

  it('should handle long binary values', () => {
    expect(binaryToHex(111100001111)).toBe('f0f');
    expect(binaryToHex(1010101010101010)).toBe('aaaa');
  });

  it('should return "0" for invalid or empty input', () => {
    expect(binaryToHex('')).toBe('0');
    expect(binaryToHex(NaN)).toBe('0');
  });
});
