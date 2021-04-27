/*
leetcode 120. 三角形最小路径和
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例 1：
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

示例 2：
输入：triangle = [[-10]]
输出：-10

提示：
1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104

进阶：
你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 动态规划
var minimumTotal = function(triangle) {
  // 自顶向下的最小路径 === 自底向上的最小路径（不用考虑边界问题）
  // f(i, j) - 自底向上的路径的最小值
  // 状态转移 - 下到上 
  // f(i ,j) = min(f(i+1, j), f(i+1, j+1)) + triangle(i, j)
  const m = triangle.length // [][0]
  const n = triangle[m - 1].length // [0][]
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    f[m - 1][i] = triangle[m - 1][i]
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      f[i][j] = Math.min(f[i + 1][j], f[i + 1][j + 1]) + triangle[i][j]
    }
  }
  return f[0][0]
}


// 动态规划 - 空间优化（滚动数组思想）
// 空间小了 2MB 时间多了 16ms
var minimumTotal = function(triangle) {
  // 自顶向下的最小路径 === 自底向上的最小路径（不用考虑边界问题）
  // f(i, j) - 自底向上的路径的最小值
  // 状态转移 - 下到上 
  // f(i ,j) = min(f(i+1, j), f(i+1, j+1)) + triangle(i, j)
  const m = triangle.length // [][0]
  const n = triangle[m - 1].length // [0][]
  const cur = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    cur[i] = triangle[m - 1][i]
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      cur[j] = Math.min(cur[j], cur[j + 1]) + triangle[i][j]
    }
  }
  return cur[0]
}

var triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// triangle = [[-10]]
const res = minimumTotal(triangle)
console.log(res)
