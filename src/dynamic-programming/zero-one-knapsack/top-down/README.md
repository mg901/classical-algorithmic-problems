```js
function zeroOneKnapsack(capacity, weights, values) {
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

// Backtracking
function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(start, rest) {
    if (start === n || rest === 0) return 0;

    let take = 0;

    for (let i = start; i < n; i += 1) {
      const weight = weights[i];

      if (rest >= weight) {
        take = Math.max(take, dfs(i + 1, rest - weight) + values[i]);
      }
    }

    return take;
  }
}
```
