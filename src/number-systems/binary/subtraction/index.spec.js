import { describe, expect, it } from 'vitest';
import { subtractBinary } from './index'; // adjust the path if needed

describe('binarySubtract', () => {
  it('subtracts simple binary numbers without borrow', () => {
    expect(subtractBinary('1010', '0010')).toBe('1000'); // 10 - 2 = 8
  });

  it('handles subtraction with borrow', () => {
    expect(subtractBinary('1000', '0001')).toBe('111'); // 8 - 1 = 7
  });

  it('returns "0" when both numbers are equal', () => {
    expect(subtractBinary('1001', '1001')).toBe('0');
  });

  it('handles different length inputs', () => {
    expect(subtractBinary('101', '1')).toBe('100'); // 5 - 1 = 4
  });

  it('trims leading zeros in the result', () => {
    expect(subtractBinary('0100', '0010')).toBe('10'); // 4 - 2 = 2
  });

  it('returns "0" when subtracting zero from zero', () => {
    expect(subtractBinary('0', '0')).toBe('0');
  });

  it('handles subtraction resulting in zero after multiple borrows', () => {
    expect(subtractBinary('10000', '10000')).toBe('0');
  });

  it('returns incorrect result when second number is larger (negative result not supported)', () => {
    expect(subtractBinary('011', '1010')).not.toBe('0');
  });
});
