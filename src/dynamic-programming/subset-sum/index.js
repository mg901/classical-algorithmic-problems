// Top-down
export function dfs(index, sum) {
  if (sum === 0) return true;
  if (index === nums.length || sum < 0) return false;

  return dfs(index + 1, sum - nums[index]) || dfs(index + 1, sum);
}

// Bottom-up
export function subsetSum(nums, target) {
  const n = nums.length;

  const dp = Array.from({ length: n + 1 }, () =>
    new Array(target + 1).fill(false)
  );

  for (let i = 0; i <= n; i += 1) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i += 1) {
    for (let sum = 1; sum <= target; sum += 1) {
      const take = sum >= nums[i - 1] ? dp[i - 1][sum - nums[i - 1]] : false;
      const skip = dp[i - 1][sum];

      dp[i][sum] = take || skip;
    }
  }

  return dp[n][target];
}
