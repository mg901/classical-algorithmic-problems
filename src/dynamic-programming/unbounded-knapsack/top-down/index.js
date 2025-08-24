// Explanation: https://youtu.be/M4XKbq_FasA?si=9Cr5FtPnmpaL3scn

export function unboundedKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(capacity);

  function dfs(remaining) {
    if (remaining === 0) return 0;

    let best = 0;

    for (let i = 0; i < n; i += 1) {
      if (weights[i] <= remaining) {
        best = Math.max(best, values[i] + dfs(remaining - weights[i]));
      }
    }

    return best;
  }
}
