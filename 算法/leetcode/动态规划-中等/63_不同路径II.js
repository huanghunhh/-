/*
leetcode 63. 不同路径 II
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

示例 1：
![](https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg)
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

示例 2：
![](https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg)
输入：obstacleGrid = [[0,1],[0,0]]
输出：1

提示：
m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] 为 0 或 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// 动态规划 
var uniquePathsWithObstacles = function(obstacleGrid) {
  // f(i, j) - 走到 (i, j) 共有的路径数
  // 状态转移 - 最后一步是向下/右
  // f(i, j) = f(i - 1, j) + f(i, j - 1)
  // 将最上/左方初始化为 1（不能这样初始化了，因为有障碍物后面的点不可达）
  // 有障碍物处的 f(i, j) 始终为 0
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // 出发点或终点有障碍物，直接返回 0——不特判也能得到正确结果
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
    return 0
  }

  // 不同的初始化方式
  // const f = new Array(m).fill(0).map(() => new Array(n).fill(1))

  // // 所有有障碍的地方初始化为 0
  // obstacleGrid.forEach((item, i) => {
  //   item.forEach((x, j) => {
  //     if (item[j] === 1) {
  //       f[i][j] = 0
  //     }
  //   })
  // })

  // // 第 0 行中，若出现障碍物，则此后的点均初始化为 0
  // for (let i = 0; i < n; i++) {
  //   if (obstacleGrid[0][i] === 1) {
  //     for (let j = i; j < n; j++) {
  //       f[0][j] = 0
  //     }
  //     break
  //   }
  // }

  // // 第 0 列中，若出现障碍物，则此后的点均初始化为 0
  // for (let i = 0; i < m; i++) {
  //   if (obstacleGrid[i][0] === 1) {
  //     for (let j = i; j < m; j++) {
  //       f[j][0] = 0
  //     }
  //     break
  //   }
  // }

  // 也可以先全部初始化为 0，然后将初始可达的点置为 1
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))

  // 第 0 行中，若未出现障碍物，则点均初始化为 1
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break
    }
    f[0][i] = 1
  }

  // 第 0 列中，若出现障碍物，则此后的点均初始化为 0
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break
    }
    f[i][0] = 1
  }

  // 只计算第 1 行/列之后的
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        f[i][j] = f[i - 1][j] + f[i][j - 1]
      }
    }
  }

  return f[m-1][n-1]
};

// 动态规划 - 空间优化（滚动数组思想）
// 空间少了 0.6MB 时间多了 28 ms
var uniquePathsWithObstacles = function(obstacleGrid) {
  // f(i, j) - 走到 (i, j) 共有的路径数
  // 状态转移 - 最后一步是向下/右
  // f(i, j) = f(i - 1, j) + f(i, j - 1)
  // 将最上/左方初始化为 1（不能这样初始化了，因为有障碍物后面的点不可达）
  // 有障碍物处的 f(i, j) 始终为 0
  const n = obstacleGrid.length // [][0] n 行
  const m = obstacleGrid[0].length // [0][] m 列

  // 也可以先全部初始化为 0，然后将初始可达的点置为 1
  const cur = new Array(m).fill(0)
  cur[0] = (obstacleGrid[0][0] === 0)

  // 只计算第 1 行/列之后的
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        cur[j] = 0
        continue
      }
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) {
        cur[j] += cur[j - 1]
      }
    }
  }
  return cur[m-1]
};

var obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] // 2
var obstacleGrid = [[0,1],[0,0]] // 1
// var obstacleGrid = [[1, 0]] // 0
// var obstacleGrid = [[0,0],[1,1],[0,0]] // 0

const res = uniquePathsWithObstacles(obstacleGrid)
console.log(res)
