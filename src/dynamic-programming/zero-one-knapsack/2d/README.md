```js
function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint32Array(capacity + 1));

  for (let i = 1; i <= n; i += 1) {
    for (let w = 0; w <= capacity; w += 1) {
      dp[i][w] = dp[i - 1][w];

      const weight = weights[i - 1];
      const value = values[i - 1];

      if (w >= weight) {
        dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - weight] + value);
      }
    }
  }

  return dp[n][capacity];
}
```
