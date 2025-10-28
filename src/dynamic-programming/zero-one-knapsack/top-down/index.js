// Explanation: https://youtu.be/cJ21moQpofY?si=La_TqVG6Cu0IffyP

export function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(i, rest) {
    if (i === n || rest === 0) return 0;

    let take = 0;
    const weight = weights[i];

    if (rest >= weight) {
      take = dfs(i + 1, rest - weight) + values[i];
    }

    return Math.max(take, dfs(i + 1, rest));
  }
}
