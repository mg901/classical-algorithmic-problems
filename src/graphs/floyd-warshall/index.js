// Explanation:
// - Abdul Bari: https://youtu.be/oNI0rf2P9gE?si=WKT-u8LajiluOQ3o

// Complexity:
// - Time: O(V^3)
// - Space: (V^2)
export function floydWarshall(graph) {
  const n = graph.length;
  const dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => graph[i][j]),
  );

  for (let mid = 0; mid < n; mid += 1) {
    for (let u = 0; u < n; u += 1) {
      for (let v = 0; v < n; v += 1) {
        if (dist[u][mid] !== Infinity && dist[mid][v] !== Infinity) {
          dist[u][v] = Math.min(dist[u][v], dist[u][mid] + dist[mid][v]);
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
