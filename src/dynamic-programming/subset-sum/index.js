// Top-down
// export function dfs(index, sum) {
//   if (sum === 0) return true;
//   if (index === nums.length || sum < 0) return false;

//   return dfs(index + 1, sum - nums[index]) || dfs(index + 1, sum);
// }

// Bottom-up
export function subsetSum(nums, target) {
  const dp = new Uint8Array(target + 1);
  dp[0] = 1;

  for (const num of nums) {
    for (let sum = target; sum >= num; sum -= 1) {
      dp[sum] ||= dp[sum - num];
    }
  }

  return !!dp[target];
}

// 2D Bottom-up
// Sub-pattern:
// - Unbounded Knapsack

// function subsetSum(nums, target) {
//   const n = nums.length;
//   const dp = Array.from({ length: n + 1 }, () => new Uint8Array(target + 1));
//   dp[0][0] = 1;

//   for (let i = 1; i <= n; i += 1) {
//     for (let sum = 0; sum <= target; sum += 1) {
//       const num = nums[i - 1];

//       dp[i][sum] = dp[i - 1][sum];

//       if (sum >= num) {
//         dp[i][sum] ||= dp[i - 1][sum - num];
//       }
//     }
//   }

//   return !!dp[n][target];
// }
