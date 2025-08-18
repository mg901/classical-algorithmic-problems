export function topologicalSort(graph) {
  const n = graph.length;
  const inDegree = new Uint8Array(n);
  const queue = [];
  const result = [];

  for (let u = 0; u < n; u += 1) {
    for (let v = 0; v < n; v += 1) {
      if (graph[u][v] === 1) inDegree[v] += 1;
    }
  }

  for (let i = 0; i < n; i += 1) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const u = queue.shift();
    result.push(u);

    for (let v = 0; v < n; v += 1) {
      if (graph[u][v] === 1) {
        inDegree[v] -= 1;

        if (inDegree[v] === 0) queue.push(v);
      }
    }
  }

  return result.length === graph.length ? result : [];
}
