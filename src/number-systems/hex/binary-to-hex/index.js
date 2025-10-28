import { binaryToDecimal } from '../../binary/to-decimal';
import { decimalToHex } from '../decimal-to-hex';

export function binaryToHex(binary) {
  const decimal = binaryToDecimal(binary);

  return decimalToHex(decimal);
}
