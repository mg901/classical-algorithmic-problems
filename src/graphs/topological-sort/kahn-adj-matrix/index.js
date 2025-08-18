export function topologicalSort(matrix) {
  const n = matrix.length;
  const inDegree = new Uint8Array(n);
  const queue = [];
  const result = [];

  for (let u = 0; u < n; u += 1) {
    for (let v = 0; v < n; v += 1) {
      if (matrix[u][v] === 1) {
        inDegree[v] += 1;
      }
    }
  }

  for (let v = 0; v < n; v += 1) {
    if (inDegree[v] === 0) {
      queue.push(v);
    }
  }

  while (queue.length) {
    const u = queue.shift();
    result.push(u);

    for (let v = 0; v < n; v += 1) {
      if (matrix[u][v] === 1) {
        inDegree[v] -= 1;

        if (inDegree[v] === 0) {
          queue.push(v);
        }
      }
    }
  }

  return result.length === matrix.length ? result : [];
}
