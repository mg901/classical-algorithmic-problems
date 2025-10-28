// from right to left
export function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  while (binary > 0) {
    const bit = binary % 10;
    decimal += bit * 2 ** power;
    binary = Math.floor(binary / 10);
    power += 1;
  }

  return decimal;
}

// // from left to right
// function binaryToDecimal(binary) {
//   let digits = Math.floor(Math.log10(binary)) + 1;
//   let result = 0;

//   for (let i = digits - 1; i >= 0; i -= 1) {
//     let div = 10 ** i;
//     let bit = Math.floor(binary / div);
//     result = result * 2 + bit;

//     binary %= div;
//   }

//   return result;
// }
