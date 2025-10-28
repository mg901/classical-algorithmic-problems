export function decimalToBinary(decimal) {
  decimal = Math.floor(decimal);
  if (decimal <= 0) return 0;

  let binary = 0;
  let place = 1;

  while (decimal > 0) {
    const bit = decimal % 2;
    binary += bit * place;
    decimal = Math.floor(decimal / 2);
    place *= 10;
  }

  return binary;
}
