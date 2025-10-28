function permute(nums) {
  const n = nums.length;
  const result = [];
  backtrack(0);

  return result;

  function backtrack(start) {
    if (start === n) {
      result.push([...nums]);

      return;
    }

    for (let i = start; i < n; i += 1) {
      swap(nums, start, i);
      backtrack(start + 1);
      swap(nums, start, i);
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
