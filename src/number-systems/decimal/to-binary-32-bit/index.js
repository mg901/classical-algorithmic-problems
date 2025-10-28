export function decimalToBinary32Bit(decimal) {
  decimal = Math.floor(decimal);

  if (decimal === 0) return '0';

  const bits = 32;
  let binaryArray = new Int32Array(bits);

  if (decimal > 0) {
    let n = decimal;
    for (let i = bits - 1; i >= 0; i -= 1) {
      binaryArray[i] = n % 2;
      n = Math.floor(n / 2);
    }
  } else {
    // negative value
    let n = Math.abs(decimal);

    // to binary
    for (let i = bits - 1; i >= 0; i -= 1) {
      binaryArray[i] = n % 2;
      n = Math.floor(n / 2);
    }

    // invert the bits
    for (let i = 0; i < bits; i += 1) {
      binaryArray[i] = 1 - binaryArray[i];
    }

    // add 1
    for (let i = bits - 1; i >= 0; i -= 1) {
      if (binaryArray[i] === 1) {
        binaryArray[i] = 0;
      } else {
        binaryArray[i] = 1;
        break;
      }
    }
  }

  return binaryArray.join('');
}
