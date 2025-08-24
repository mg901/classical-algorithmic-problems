export function subsetSum(nums, target) {
  return dfs(0, target);

  function dfs(index, sum) {
    if (sum === 0) return true;
    if (index === nums.length || sum < 0) return false;

    return dfs(index + 1, sum - nums[index]) || dfs(index + 1, sum);
  }
}
