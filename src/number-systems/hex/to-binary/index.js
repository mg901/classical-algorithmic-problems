import { decimalToBinary } from '../../decimal/to-binary';
import { hexToDecimal } from '../to-decimal';

export function hexToBinary(hex) {
  const decimal = hexToDecimal(hex);

  return decimalToBinary(decimal);
}
