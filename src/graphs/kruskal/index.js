class DisjointSet {
  #parent;

  #rank;

  constructor(n) {
    this.#parent = Array.from({ length: n }, (_, index) => index);
    this.#rank = new Uint32Array(n);
  }

  find(x) {
    if (this.#parent[x] !== x) {
      this.#parent[x] = this.find(this.#parent[x]);
    }

    return this.#parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.#rank[rootX] < this.#rank[rootY]) {
      this.#parent[rootX] = rootY;
    } else if (this.#rank[rootX] > this.#rank[rootY]) {
      this.#parent[rootY] = rootX;
    } else {
      this.#parent[rootY] = rootX;
      this.#rank += 1;
    }

    return true;
  }
}

// Explanation:
// - Abdul Bari: https://youtu.be/4ZlRH0eK-qQ?si=zqtaneX9DVkaR3Gx&t=693

export function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  const ds = new DisjointSet(n);
  const mst = [];
  let totalWeight = 0;

  for (const [u, v, w] of edges) {
    if (ds.union(u, v)) {
      totalWeight += w;
      mst.push([u, v, w]);
    }
  }

  return { mst, totalWeight };
}
