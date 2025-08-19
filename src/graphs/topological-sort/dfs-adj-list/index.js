export function topologicalSort(graph) {
  const visited = new Set();
  const visiting = new Set();
  const result = [];

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      if (!dfs(node)) return [];
    }
  }

  return result.reverse();

  function dfs(start) {
    const stack = [[start, 0]];

    while (stack.length) {
      const [u, state] = stack.pop();

      if (state === 0) {
        if (visited.has(u)) continue;
        if (visiting.has(u)) return false;

        visiting.add(u);
        stack.push([u, 1]);

        for (let v of graph[u] ?? []) {
          if (!visited.has(v)) {
            stack.push([v, 0]);
          }
        }
      } else {
        visiting.delete(u);
        visited.add(u);
        result.push(u);
      }
    }
    return true;
  }
}
