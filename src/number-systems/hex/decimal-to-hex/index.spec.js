import { describe, expect, it } from 'vitest';
import { decimalToHex } from './index.js';

describe('decimalToHex', () => {
  it('converts 0 correctly', () => {
    expect(decimalToHex(0)).toBe('0');
  });

  it('converts small numbers', () => {
    expect(decimalToHex(1)).toBe('1');
    expect(decimalToHex(9)).toBe('9');
    expect(decimalToHex(10)).toBe('a');
    expect(decimalToHex(15)).toBe('f');
  });

  it('converts multi-digit numbers', () => {
    expect(decimalToHex(16)).toBe('10');
    expect(decimalToHex(26)).toBe('1a');
    expect(decimalToHex(255)).toBe('ff');
    expect(decimalToHex(256)).toBe('100');
    expect(decimalToHex(4095)).toBe('fff');
  });

  it('handles large 32-bit unsigned integers', () => {
    expect(decimalToHex(4294967295)).toBe('ffffffff'); // max 32-bit unsigned
  });

  it('handles negative numbers (unsigned conversion)', () => {
    expect(decimalToHex(-1)).toBe('ffffffff');
  });
});
