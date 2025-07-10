export function unboundedKnapsack(capacity, weights, values) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i += 1) {
    for (let w = 0; w <= capacity; w += 1) {
      dp[i][w] = dp[i - 1][w];

      if (w >= weights[i - 1]) {
        dp[i][w] = Math.max(
          dp[i][w],
          dp[i][w - weights[i - 1]] + values[i - 1]
        );
      }
    }
  }

  return dp[n][capacity];
}
