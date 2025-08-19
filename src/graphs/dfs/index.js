export function depthFirstSearch(graph, source) {
  if (!graph || Object.keys(graph).length === 0) return [];

  const visited = new Set();
  const result = [];
  traverse(source);

  return result;

  function traverse(vertex) {
    if (visited.has(vertex)) return;

    visited.add(vertex);
    result.push(vertex);

    for (const neighbor of graph[vertex] ?? []) {
      traverse(neighbor);
    }
  }
}

export function depthFirstSearchIterative(graph, source) {
  if (!graph || !Object.keys(graph).length) return [];

  const stack = [source];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;

    visited.add(node);
    result.push(node);

    const neighbors = graph[node] ?? [];
    for (let i = neighbors.length - 1; i >= 0; i -= 1) {
      const neighbor = neighbors[i];

      if (visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}
