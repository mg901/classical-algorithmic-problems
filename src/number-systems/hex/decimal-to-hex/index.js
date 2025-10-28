export function decimalToHex(decimal) {
  if (decimal === 0) return '0';

  const hexChars = '0123456789abcdef';
  let result = '';
  let n = decimal >>> 0; // to unsigned 32 bit integer

  while (n > 0) {
    const remainder = n % 16;
    result = hexChars[remainder] + result;
    n = Math.floor(n / 16);
  }

  return result;
}
