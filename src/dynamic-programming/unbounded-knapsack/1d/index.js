// Explanation: https://youtu.be/M4XKbq_FasA?si=9Cr5FtPnmpaL3scn

export function unboundedKnapsack(capacity, weights, values) {
  const n = weights.length;
  const dp = new Uint32Array(capacity + 1);

  for (let i = 0; i < n; i += 1) {
    for (let w = weights[i]; w <= capacity; w += 1) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}
