// Top-down
export function dfs(index, sum) {
  if (sum === 0) return true;
  if (index === nums.length || sum < 0) return false;

  return dfs(index + 1, sum - nums[index]) || dfs(index + 1, sum);
}

// Bottom-up
export function subsetSum(nums, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let sum = target; sum >= num; sum -= 1) {
      dp[sum] ||= dp[sum - num];
    }
  }

  return dp[target];
}
