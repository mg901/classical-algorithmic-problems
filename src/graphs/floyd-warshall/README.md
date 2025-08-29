```js
function floydWarshall(graph) {
  const n = graph.length;
  const dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => graph[i][j]),
  );

  for (let k = 0; k < n; k += 1) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    if (dist[i][i] < 0) {
      throw new Error('Negative weight cycle detected.');
    }
  }

  return dist;
}
```
