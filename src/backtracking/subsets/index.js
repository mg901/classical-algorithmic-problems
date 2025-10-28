function subsets(nums) {
  const result = [];
  backtrack(0, []);

  return result;

  function backtrack(start, subset) {
    result.push([...subset]);

    for (let i = start; i < nums.length; i += 1) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);

      subset.pop();
    }
  }
}
