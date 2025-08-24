// Sub-pattern:
// - Unbounded Knapsack

export function subsetSum(nums, target) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint8Array(target + 1));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i += 1) {
    for (let sum = 0; sum <= target; sum += 1) {
      const num = nums[i - 1];

      dp[i][sum] = dp[i - 1][sum];

      if (sum >= num) {
        dp[i][sum] ||= dp[i - 1][sum - num];
      }
    }
  }

  return !!dp[n][target];
}
