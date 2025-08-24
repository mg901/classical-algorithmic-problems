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
