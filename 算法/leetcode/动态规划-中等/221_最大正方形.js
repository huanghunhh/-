/*
leetcode 221. 最大正方形
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

示例 1：
![](https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg)
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4

示例 2：
![](https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg)
输入：matrix = [["0","1"],["1","0"]]
输出：1

示例 3：
输入：matrix = [["0"]]
输出：0

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 动态规划
var maximalSquare = function(matrix) {
  // f(i, j) - 以 (i, j) 为终点（右下角）的最大正方形的边长
  // 状态转移 matrix(i, j)===1 f(i, j)=min(f(i-1, j-1), f(i-1, j), f(i, j-1)) + 1
  const n = matrix.length // [][0]
  const m = matrix[0].length // [0][]
  let res = 0
  let f = new Array(n).fill(0).map(() => new Array(m).fill(0))
  // 先初始化，把第一行/列的正方形标记出来
  for (let i = 0; i < n; i++) {
    if (matrix[i][0] == 1) {
      f[i][0] = 1
      res = 1
    }
  }
  for (let i = 0; i < m; i++) {
    if (matrix[0][i] == 1) {
      f[0][i] = 1
      res = 1
    }
  }
  // 进行状态转移
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] == 1) {
        f[i][j] = Math.min(f[i - 1][j - 1], f[i][j - 1], f[i - 1][j]) + 1
        res = Math.max(f[i][j], res)
      }
    }
  }

  return res * res
}

// 动态规划 - 在 matrix 上原地修改
var maximalSquare = function(matrix) {
  // f(i, j) - 以 (i, j) 为终点（右下角）的最大正方形的边长
  // 状态转移 matrix(i, j)===1 f(i, j)=min(f(i-1, j-1), f(i-1, j), f(i, j-1)) + 1
  const n = matrix.length // [][0]
  const m = matrix[0].length // [0][]
  let res = 0
  // 初始化 res
  // for (let i = 0; i < n && res === 0; i++) {
  //   for (let j = 0; j < m && res === 0; j++) {
  //     if (matrix[i][j] == 1) {
  //       res = 1
  //     }
  //   }
  // }

  for (let i = 0; i < n && res === 0; i++) {
    if (matrix[i][0] == 1) {
      res = 1
    }
  }
  for (let i = 0; i < m && res === 0; i++) {
    if (matrix[0][i] == 1) {
      res = 1
    }
  }
  // 进行状态转移
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1
        res = Math.max(matrix[i][j], res)
      }
    }
  }

  return res * res
}

var matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
var matrix = [['0']]
const res = maximalSquare(matrix)
console.log(res)
