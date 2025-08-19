// Explanation: https://www.youtube.com/watch?v=7J3GadLzydI&list=PLjvveANJO04NSN0e7plJH_OspfTnhVXx3&index=39

export function topologicalSort(graph) {
  const nodes = Object.keys(graph);
  const visited = new Set();
  const visiting = new Set();
  const result = [];

  for (const node of nodes) {
    if (dfs(node) === false) {
      return [];
    }
  }

  return result.reverse();

  function dfs(node) {
    const stack = [[node, 0]];

    while (stack.length) {
      const [u, state] = stack.pop();

      if (state === 0) {
        if (visited.has(u)) continue;
        if (visiting.has(u)) return false;

        visiting.add(u);
        stack.push([u, 1]);

        for (const v of graph[u] ?? []) {
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
