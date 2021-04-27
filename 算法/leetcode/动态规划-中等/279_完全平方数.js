/*
leetcode 279. 完全平方数
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

示例 1：
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4

示例 2：
输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：
1 <= n <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/perfect-squares
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 1824 ms
var numSquares = function(n) {
  // f(i) - 组成 i 的完全平方数的最少数量
  // 状态转移 - 将 i 拆分为两个数之和
  // f(i) = min(f(1)+f(i-1), f(2)+f(i-2), f(k)+f(i-k),f(i/2)+f(i-i/2))
  // 需要将完全平方数初始化出来
  const f = new Array(n+1).fill(Number.MAX_VALUE)
  for (let i = 1; i * i <= n; i++) {
    f[i * i] = 1
  }
  for (let i = 2; i <= n; i++) {
    if (f[i] === 1) {
      continue
    }
    for (let k = 1; k <= i >> 1; k++) {
      f[i] = Math.min(f[i], f[k] + f[i - k])
    }
  }
  return f[n]
}

// 动态规划 - 进行预处理
// 172 ms
const count = 10005
let f = new Array(count+1).fill(Number.MAX_VALUE)
let myFun = function(n) {
  for (let i = 1; i * i <= n; i++) {
    f[i * i] = 1
  }
  for (let i = 2; i <= n; i++) {
    if (f[i] === 1) {
      continue
    }
    for (let k = 1; k <= i >> 1; k++) {
      f[i] = Math.min(f[i], f[k] + f[i - k])
    }
  }
}
myFun(count)
var numSquares = function(n) {
  // f(i) - 组成 i 的完全平方数的最少数量
  // 状态转移 - 将 i 拆分为两个数之和
  // f(i) = min(f(1)+f(i-1), f(2)+f(i-2), f(k)+f(i-k),f(i/2)+f(i-i/2))
  // 需要将完全平方数初始化出来
  
  return f[n]
}

// 动态规划 - 优化算法
// f(0) = 0 
// f(i) = 1 + min(f(n-1^2), f(n-2^2), f(n-k^2))
// 这样求解 f(i) 时，只需要 lgn 遍，而最开始的需要 n/2 遍

// 贪心
// BFS

// 数学运算——四平方和定理
var n = 13
// n = 5
const res = numSquares(n)
console.log(res)
