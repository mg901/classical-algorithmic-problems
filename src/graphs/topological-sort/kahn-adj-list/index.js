export function topologicalSort(graph) {
  const graphNodes = Object.keys(graph);
  const nodeMetadataMap = new Map();
  const queue = [];
  const order = [];

  for (const node of graphNodes) {
    nodeMetadataMap.set(node, {
      in: 0,
      out: new Set(graph[node]),
    });
  }

  for (const node of graphNodes) {
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

    for (const neighbor of nodeMetadataMap.get(node).out) {
      nodeMetadataMap.get(neighbor).in -= 1;

      if (nodeMetadataMap.get(neighbor).in === 0) {
        queue.push(neighbor);
      }
    }

    order.push(node);
  }

  return order.length === graphNodes.length ? order : [];
}
