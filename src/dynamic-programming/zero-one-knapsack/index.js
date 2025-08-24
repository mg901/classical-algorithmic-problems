// Explanation: https://youtu.be/cJ21moQpofY?si=La_TqVG6Cu0IffyP

export function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(i, remaining) {
    if (i === n || remaining === 0) return 0;

    let take = 0;

    if (weights[i] <= remaining) {
      take = values[i] + dfs(i + 1, remaining - weights[i]);
    }

    return Math.max(take, dfs(i + 1, remaining));
  }
}
