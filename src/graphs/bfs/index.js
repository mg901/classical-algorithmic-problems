export default function breadthFirstSearch(graph, source) {
  if (!graph || Object.keys(graph).length === 0) return [];

  const visited = new Set();
  const queue = [source];
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (visited.has(vertex)) continue;
    visited.add(vertex);
    result.push(vertex);

    for (const neighbor of graph[vertex]) {
      if (visited.has(neighbor)) continue;
      queue.push(neighbor);
    }
  }

  return result;
}
