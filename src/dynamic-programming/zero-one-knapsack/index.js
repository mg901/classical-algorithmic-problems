// Explanation: https://youtu.be/cJ21moQpofY?si=La_TqVG6Cu0IffyP

// Bottom-up
export function zeroOneKnapsack(capacity, weights, values) {
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

// One row
// function zeroOneKnapsack(capacity, values, weights) {
//   const n = weights.length;
//   const dp = new Uint32Array(capacity + 1);

//   for (let i = 0; i < n; i += 1) {
//     for (let w = capacity; w >= weights[i]; w -= 1) {
//       dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
//     }
//   }

//   return dp[capacity];
// }

// Top-down
// function zeroOneKnapsack(capacity, weights, values) {
//   const n = weights.length;

//   return dfs(0, capacity);

//   function dfs(i, remaining) {
//     if (i === n || remaining === 0) return 0;

//     let take = 0;

//     if (weights[i] <= remaining) {
//       take = values[i] + dfs(i + 1, remaining - weights[i]);
//     }

//     return Math.max(take, dfs(i + 1, remaining));
//   }
// }
