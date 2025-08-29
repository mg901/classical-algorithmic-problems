export function bellmanFord(vertices, edges, start) {
  const dist = Array(vertices).fill(Infinity);
  dist[start] = 0;

  for (let i = 0; i < vertices - 1; i += 1) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      throw new Error('Graph contains negative weight cycle');
    }
  }

  return dist;
}
