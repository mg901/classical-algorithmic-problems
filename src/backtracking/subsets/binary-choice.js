function subsets(nums) {
  const n = nums.length;
  const result = [];
  backtrack(0, []);

  return result;

  function backtrack(i, subset) {
    if (i === n) {
      result.push([...subset]);

      return;
    }

    subset.push(nums[i]);
    backtrack(i + 1, subset);
    subset.pop();

    backtrack(i + 1, subset);
  }
}
