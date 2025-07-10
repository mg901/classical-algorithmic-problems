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
  if (!graph || Object.keys(graph).length === 0) return [];

  const visited = new Set();
  const stack = [source];
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();
    if (visited.has(vertex)) continue;

    visited.add(vertex);
    result.push(vertex);

    const neighbors = (graph[vertex] ?? []).toReversed();

    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;

      stack.push(neighbor);
    }
  }

  return result;
}
