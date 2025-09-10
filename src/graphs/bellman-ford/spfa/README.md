```js
function spfa(n, edges, src) {
  const dist = Array(n).fill(Infinity);
  const inQueue = Array(n).fill(false);
  const count = Array(n).fill(0);
  const queue = [];

  const graph = createGraph(n, edges);

  dist[src] = 0;
  queue.push(src);
  inQueue[src] = true;

  while (queue.length > 0) {
    const u = queue.shift();
    inQueue[u] = false;

    for (const [v, w] of graph[u]) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;

        if (inQueue[v]) continue;

        queue.push(v);
        inQueue[v] = true;
        count[v] += 1;

        if (count[v] > n - 1) {
          throw new Error('Negative weight cycle detected.');
        }
      }
    }
  }
  return dist;
}

function createGraph(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  return graph;
}
```
