```js
function prim(graph) {
  const n = graph.length;
  const parent = new Array(n).fill(-1);
  const key = new Array(n).fill(Infinity);
  const visited = new Uint8Array(n);

  key[0] = 0;

  for (let count = 0; count < n - 1; count += 1) {
    let u = -1;
    let minKey = Infinity;

    for (let v = 0; v < n; v += 1) {
      if (!visited[v] && key[v] < minKey) {
        minKey = key[v];
        u = v;
      }
    }

    visited[u] = 1;

    for (let v = 0; v < n; v += 1) {
      if (!visited[v] && graph[u][v] && graph[u][v] < key[v]) {
        key[v] = graph[u][v];
        parent[v] = u;
      }
    }
  }

  return parent;
}
```
