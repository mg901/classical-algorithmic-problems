```js
function unboundedKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(0, capacity);

  function dfs(i, w) {
    if (i === n || w === 0) return 0;

    let take = 0;
    const weight = weights[i];

    if (w >= weight) {
      take = dfs(i, w - weight) + values[i];
    }

    return Math.max(take, dfs(i + 1, w));
  }
}

// Backtracking
function unboundedKnapsack(capacity, weights, values) {
  const n = weights.length;

  return dfs(capacity);

  function dfs(w) {
    if (w === 0) return 0;

    let best = 0;
    for (let i = 0; i < n; i += 1) {
      const weight = weights[i];

      if (w >= weight) {
        best = Math.max(best, dfs(w - weight) + values[i]);
      }
    }

    return best;
  }
}
```
