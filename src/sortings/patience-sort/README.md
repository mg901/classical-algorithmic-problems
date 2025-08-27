```js
function patienceSort(nums) {
  const piles = [];

  for (const num of nums) {
    let placed = false;

    for (const pile of piles) {
      if (pile.at(-1) >= num) {
        pile.push(num);
        placed = true;

        break;
      }
    }

    if (!placed) piles.push([num]);
  }

  const sorted = [];
  const minHeap = piles
    .map((pile) => ({ val: pile.pop(), pile }))
    .sort((a, b) => a.val - b.val);

  while (minHeap.length) {
    const smallest = minHeap.shift();
    sorted.push(smallest.val);

    if (!smallest.pile.length) continue;
    smallest.val = smallest.pile.pop();

    let i = 0;
    while (i < minHeap.length && minHeap[i].val < smallest.val) {
      i += 1;
    }

    minHeap.splice(i, 0, smallest);
  }

  return sorted;
}
```
