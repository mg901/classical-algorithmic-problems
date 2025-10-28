import { describe, expect, it } from 'vitest';
import { hexToDecimal } from './index.js';

describe('hexToDecimal', () => {
  it('converts single hex digits', () => {
    expect(hexToDecimal('0')).toBe(0);
    expect(hexToDecimal('9')).toBe(9);
    expect(hexToDecimal('a')).toBe(10);
    expect(hexToDecimal('f')).toBe(15);
  });

  it('handles uppercase letters', () => {
    expect(hexToDecimal('A')).toBe(10);
    expect(hexToDecimal('F')).toBe(15);
  });

  it('converts multi-digit hex values', () => {
    expect(hexToDecimal('10')).toBe(16);
    expect(hexToDecimal('1a')).toBe(26);
    expect(hexToDecimal('ff')).toBe(255);
    expect(hexToDecimal('100')).toBe(256);
  });

  it('handles mixed case input', () => {
    expect(hexToDecimal('Ab')).toBe(171);
    expect(hexToDecimal('fF')).toBe(255);
  });

  it('returns 0 for empty string', () => {
    expect(hexToDecimal('')).toBe(0);
  });
});
