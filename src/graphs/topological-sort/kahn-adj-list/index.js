export function topologicalSort(graph) {
  const nodes = Object.keys(graph);
  const nodeMetadataMap = new Map();
  const queue = [];
  const result = [];

  for (const node of nodes) {
    nodeMetadataMap.set(node, {
      in: 0,
      out: new Set(graph[node]),
    });
  }

  for (const node of nodes) {
    for (const neighbor of graph[node]) {
      nodeMetadataMap.get(neighbor).in += 1;
    }
  }

  for (const [node, metadata] of nodeMetadataMap) {
    if (metadata.in === 0) {
      queue.push(node);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node]) {
      nodeMetadataMap.get(neighbor).in -= 1;

      if (nodeMetadataMap.get(neighbor).in === 0) {
        queue.push(neighbor);
      }
    }
  }

  return nodes.length === result.length ? result : [];
}
