```js
function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(i, w) {
    if (i === n || w === 0) return 0;

    let take = 0;
    const weight = weights[i];

    if (w >= weight) {
      take = dfs(i + 1, w - weight) + values[i];
    }

    return Math.max(take, dfs(i + 1, w));
  }
}

// Backtracking
function zeroOneKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(start, w) {
    if (start === n || w === 0) return 0;

    let take = 0;

    for (let i = start; i < n; i += 1) {
      const weight = weights[i];

      if (w >= weight) {
        take = Math.max(take, dfs(i + 1, w - weight) + values[i]);
      }
    }

    return take;
  }
}
```
