export function hexToDecimal(hex) {
  const n = hex.length;
  const hexChars = '0123456789abcdef';
  let decimal = 0;

  for (let i = 0; i < n; i += 1) {
    const value = hexChars.indexOf(hex[i].toLowerCase());
    decimal = decimal * 16 + value;
  }

  return decimal;
}
