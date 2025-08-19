export function topologicalSort(graph) {
  const nodes = Object.keys(graph);
  const nodeMetadataMap = new Map();
  const queue = [];
  const result = [];

  for (const u of nodes) {
    nodeMetadataMap.set(u, {
      in: 0,
      out: new Set(graph[u]),
    });
  }

  for (const u of nodes) {
    for (const v of graph[u]) {
      nodeMetadataMap.get(v).in += 1;
    }
  }

  for (const [node, metadata] of nodeMetadataMap) {
    if (metadata.in === 0) {
      queue.push(node);
    }
  }

  while (queue.length) {
    const u = queue.shift();
    result.push(u);

    for (const v of graph[u]) {
      nodeMetadataMap.get(v).in -= 1;

      if (nodeMetadataMap.get(v).in === 0) {
        queue.push(v);
      }
    }
  }

  return nodes.length === result.length ? result : [];
}
