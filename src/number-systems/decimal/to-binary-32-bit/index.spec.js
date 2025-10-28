import { describe, expect, it } from 'vitest';
import { decimalToBinary32Bit } from './index';

describe('decimalToBinary32Bit', () => {
  it('should handle zero', () => {
    expect(decimalToBinary32Bit(0)).toBe('0');
  });

  it('should handle positive numbers', () => {
    expect(decimalToBinary32Bit(1)).toBe('00000000000000000000000000000001');
    expect(decimalToBinary32Bit(5)).toBe('00000000000000000000000000000101');
    expect(decimalToBinary32Bit(255)).toBe('00000000000000000000000011111111');
    expect(decimalToBinary32Bit(1024)).toBe('00000000000000000000010000000000');
    expect(decimalToBinary32Bit(2147483647)).toBe(
      '01111111111111111111111111111111',
    ); // max signed 32-bit
  });

  it('should handle negative numbers', () => {
    expect(decimalToBinary32Bit(-1)).toBe('11111111111111111111111111111111');
    expect(decimalToBinary32Bit(-5)).toBe('11111111111111111111111111111011');
    expect(decimalToBinary32Bit(-255)).toBe('11111111111111111111111100000001');
    expect(decimalToBinary32Bit(-1024)).toBe(
      '11111111111111111111110000000000',
    );
    expect(decimalToBinary32Bit(-2147483648)).toBe(
      '10000000000000000000000000000000',
    ); // min signed 32-bit
  });

  it('should truncate non-integer input', () => {
    expect(decimalToBinary32Bit(5.9)).toBe('00000000000000000000000000000101');
    expect(decimalToBinary32Bit(-5.9)).toBe('11111111111111111111111111111010');
  });
});
