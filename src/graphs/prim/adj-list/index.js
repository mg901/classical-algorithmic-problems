import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function prim(adjList, n) {
  const visited = new Uint8Array(n);
  const parent = new Array(n).fill(-1);

  const key = new Array(n).fill(Infinity);
  const minpq = new MinPriorityQueue(([_, weight]) => weight);

  key[0] = 0;
  minpq.enqueue([0, 0]);

  while (!minpq.isEmpty()) {
    const [u] = minpq.dequeue();

    if (visited[u]) continue;
    visited[u] = 1;

    for (const [v, w] of adjList[u] ?? []) {
      if (!visited[v] && w < key[v]) {
        key[v] = w;
        parent[v] = u;
        minpq.enqueue([v, w]);
      }
    }
  }

  return parent;
}
