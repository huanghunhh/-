/*
leetcode 64. 最小路径和
给定一个包含非负整数的 m * n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：
![](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

示例 2：
输入：grid = [[1,2,3],[4,5,6]]
输出：12

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 动态规划
var minPathSum = function(grid) {
  // f(i, j) - 到达点 (i, j) 的路径上数字总和的最小值
  // 状态转移 - 最后一步向下/右
  // f(i, j) = min(f(i - 1, j), f(i, j - 1)) + grid(i, j)
  const m = grid.length // [][0]
  const n = grid[0].length // [0][]
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let sum = 0
  for (let i = 0; i < m; i++) {
    sum += grid[i][0]
    f[i][0] = sum
  }
  sum = 0
  for (let i = 0; i < n; i++) {
    sum += grid[0][i]
    f[0][i] = sum
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j]
    }
  }
  return f[m - 1][n - 1]
}

// 动态规划 - 空间优化（滚动数组）
// 空间小了 0.3MB 时间短了 4 ms
var minPathSum = function(grid) {
  // f(i, j) - 到达点 (i, j) 的路径上数字总和的最小值
  // 状态转移 - 最后一步向下/右
  // f(i, j) = min(f(i - 1, j), f(i, j - 1)) + grid(i, j)
  const m = grid.length // [][0]
  const n = grid[0].length // [0][]
  // [m, n] = [Math.min(m, n), Math.max(m, n)]
  let cur = new Array(n).fill(0)
  cur[0] = grid[0][0]
  // 第一行的每列路径，全部记录下来
  for (let i = 1; i < n; i++) {
    cur[i] = cur[i - 1] + grid[0][i]
  }
  for (let i = 1; i < m; i++) {
    // 第一列的每行累加
    cur[0] += grid[i][0]
    for (let j = 1; j < n; j++) {
      cur[j] = Math.min(cur[j], cur[j - 1]) + grid[i][j]
    }
  }
  return cur[n - 1]
}

var grid = [[1,3,1],[1,5,1],[4,2,1]] // 7
grid = [[1,2,3],[4,5,6]] // 12
const res = minPathSum(grid)
console.log(res)
