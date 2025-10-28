import { describe, expect, it } from 'vitest';
import { addBinary } from './index';

describe('addBinary', () => {
  it('adds two simple binary numbers without carry', () => {
    expect(addBinary('1010', '0101')).toBe('1111'); // 10 + 5 = 15
  });

  it('adds two binary numbers with carry', () => {
    expect(addBinary('11', '1')).toBe('100'); // 3 + 1 = 4
  });

  it('adds numbers of different lengths', () => {
    expect(addBinary('101', '11')).toBe('1000'); // 5 + 3 = 8
  });

  it('adds zero to a binary number', () => {
    expect(addBinary('0', '101')).toBe('101');
    expect(addBinary('101', '0')).toBe('101');
  });

  it('adds two zeros', () => {
    expect(addBinary('0', '0')).toBe('0');
  });

  it('adds large binary numbers correctly', () => {
    expect(addBinary('1111', '1')).toBe('10000'); // 15 + 1 = 16
  });

  it('adds binary numbers with multiple carries', () => {
    expect(addBinary('111', '111')).toBe('1110'); // 7 + 7 = 14
  });
});
