export function subsetSum(nums, target) {
  const n = nums.length;

  return dfs(0, 0);

  function dfs(index, sum) {
    if (sum === target) return true;
    if (index === n || sum > target) return false;

    return dfs(index + 1, sum + nums[index]) || dfs(index + 1, sum);
  }
}
