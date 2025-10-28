function permute(nums) {
  const n = nums.length;
  const result = [];
  const used = new Uint8Array(n);

  backtrack([]);

  return result;

  function backtrack(path) {
    if (path.length === n) {
      result.push([...path]);

      return;
    }

    for (let i = 0; i < n; i += 1) {
      if (used[i]) continue;

      used[i] = 1;
      path.push(nums[i]);

      backtrack(path);

      path.pop();
      used[i] = 0;
    }
  }
}
