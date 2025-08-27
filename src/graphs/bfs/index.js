export default function breadthFirstSearch(graph, source) {
  if (!graph || Object.keys(graph).length === 0) return [];

  const visited = new Set();
  const queue = [source];
  const result = [];

  while (queue.length) {
    const u = queue.shift();
    if (visited.has(u)) continue;

    visited.add(u);
    result.push(u);

    for (const v of graph[u] ?? []) {
      if (!visited.has(v)) {
        queue.push(v);
      }
    }
  }

  return result;
}
