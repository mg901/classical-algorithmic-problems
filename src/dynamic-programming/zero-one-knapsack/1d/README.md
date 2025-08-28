```js
function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;
  const dp = new Uint32Array(capacity + 1);

  for (let i = 0; i < n; i += 1) {
    for (let w = capacity; w >= weights[i]; w -= 1) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}
```
