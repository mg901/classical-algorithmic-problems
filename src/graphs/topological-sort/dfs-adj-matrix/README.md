```js
function topologicalSort(matrix) {
  const n = matrix.length;
  const visited = new Set();
  const visiting = new Set();
  const result = [];

  for (let u = 0; u < n; u += 1) {
    if (dfs(u) === false) return [];
  }

  return result.reverse();

  function dfs(node) {
    const stack = [[node, 0]];

    while (stack.length) {
      const [u, state] = stack.pop();

      if (state === 0) {
        if (visited.has(u)) continue;
        if (visiting.has(u)) return false;

        stack.push([u, 1]);
        visiting.add(u);

        for (let v = 0; v < n; v += 1) {
          if (matrix[u][v] && !visited.has(v)) {
            stack.push([v, 0]);
          }
        }
      } else {
        visiting.delete(u);
        visited.add(u);
        result.push(u);
      }
    }

    return true;
  }
}
```
