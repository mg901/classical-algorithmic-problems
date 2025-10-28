export function subtractBinary(a, b) {
  let result = '';
  let borrow = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    const bitA = i >= 0 ? +a[i] : 0;
    const bitB = j >= 0 ? +b[j] : 0;

    let diff = bitA - bitB - borrow;

    if (diff < 0) {
      diff += 2;
      borrow = 1;
    } else {
      borrow = 0;
    }

    result = diff + result;
    i -= 1;
    j -= 1;
  }

  let firstOne = 0;
  while (firstOne < result.length && result[firstOne] === '0') {
    firstOne += 1;
  }

  result = result.slice(firstOne);

  return result === '' ? '0' : result;
}
