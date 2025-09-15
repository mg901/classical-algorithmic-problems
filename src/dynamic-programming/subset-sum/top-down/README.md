```js
function subsetSum(nums, target) {
  const n = nums.length;

  return dfs(0, 0);

  function dfs(index, sum) {
    if (sum === target) return true;
    if (index === n || sum > target) return false;

    return dfs(index + 1, sum + nums[index]) || dfs(index + 1, sum);
  }
}

// backtracking
function subsetSum(nums, target) {
  const n = nums.length;

  return dfs(0, 0);

  function dfs(start, sum) {
    if (sum === target) return true;
    if (start === n || sum > target) return false;

    for (let i = start; i < n; i += 1) {
      if (dfs(i + 1, sum + nums[i])) return true;
    }

    return false;
  }
}
```
