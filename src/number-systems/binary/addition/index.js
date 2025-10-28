export function addBinary(a, b) {
  let result = '';
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) {
      sum += +a[i];
      i -= 1;
    }

    if (j >= 0) {
      sum += +b[j];
      j -= 1;
    }

    result = (sum & 1) + result;
    carry = sum >> 1;
  }

  return result;
}
