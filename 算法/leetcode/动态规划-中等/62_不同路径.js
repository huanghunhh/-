/*
leetcode 62. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：
![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)
输入：m = 3, n = 7
输出：28

示例 2：
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

示例 3：
输入：m = 7, n = 3
输出：28

示例 4：
输入：m = 3, n = 3
输出：6

提示：
1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 动态规划
var uniquePaths = function(m, n) {
  // f(i, j) - 走到 (i, j) 共有的路径数
  // 状态转移 - 最后一步是向下/右
  // f(i, j) = f(i - 1, j) + f(i, j - 1)
  // 将最上/左方初始化为 1（偷懒全部初始化为 1）
  const f = new Array(m + 5).fill(0).map(() => new Array(n + 5).fill(1))
  // 只计算第 2 行/列之后的
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }
  return f[m-1][n-1]
};

// 动态规划 - 空间优化
// f(i, j) 仅与第 i 行和第 i-1 行的状态有关，可使用滚动数组思想降低空间复杂度
var uniquePaths1 = function(m, n) {
  // m n 具有交换性，让 m 一直是较小的那个
  [m, n] = [Math.min(m, n), Math.max(m, n)]
  // console.log(m, n)
  let pre = new Array(m + 5).fill(1)
  let cur = new Array(m + 5).fill(1)
  // 只计算第 2 行/列之后的
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) { // j 就是遍历 m 了
      cur[j] = pre[j] + cur[j - 1]
    }
    pre = cur
  }
  return pre[m-1]
};

// 动态规划 - 空间优化（进一步优化）
var uniquePaths1 = function(m, n) {
  // m n 具有交换性，让 m 一直是较小的那个
  [m, n] = [Math.min(m, n), Math.max(m, n)]
  let cur = new Array(m + 5).fill(1)
  // 只计算第 2 行/列之后的
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) { // j 就是遍历 m 了
      cur[j] += cur[j - 1]
    }
  }
  return cur[m-1]
};

var m = 3, n = 7
// var m = 7, n = 3
// var m = 3, n = 2
// var m = 3, n = 3
const res = uniquePaths(m, n)
console.log(res)
