// Explanation:
// - Abdul Bari: https://youtu.be/FtN3BYH2Zes?si=SqSEK94IKi3wlUe-&t=622

export function bellmanFord(n, edges, start) {
  const dist = Array(n).fill(Infinity);
  dist[start] = 0;

  for (let i = 0; i < n - 1; i += 1) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      throw new Error('Negative weight cycle detected.');
    }
  }

  return dist;
}
