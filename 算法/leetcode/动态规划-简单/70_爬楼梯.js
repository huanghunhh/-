/*
leetcode 70. 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function(n) {
  // f(i) - 爬到第 i 阶台阶的方法总数
  // 状态转移 - 最后一步是怎么爬的 - 爬了 1/2 个台阶
  f[i] = f[i - 2] + f[i - 1]
  let f = []
  // 初始化
  f[0] = 1 // 初始 f[0] 也可
  f[1] = 1
  f[2] = 2
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1]
  }
  return f[n]
}

// 动态规划优化：滚动数组思想
var climbStairs = function(n) {
  // f(i) - 爬到第 i 阶台阶的方法总数
  // 状态转移 - 最后一步是怎么爬的 - 爬了 1/2 个台阶
  // 优化：滚动数组思想
  let p = 0, q = 0, r = 1
  for (let i = 1; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}

// 矩阵快速幂
// 将时间复杂度优化成 O(lgn)
// 如果一个问题可以转化为求解一个矩阵的 n 次方的形式，那么可以用快速幂来加速计算
// 如果一个递归式形如 f(n) = 求和(i=1~m)a_if(n-i)，即齐次线性递推式，就能将数列的递推关系转化为矩阵的递推关系
// 即构造出一个矩阵的 n 次方乘以一个列向量得到一个列向量，这个列向量中包含 f(n)
// 非齐次线性递推式，可以转化为齐次线性递推式
// f(i) = f(i-2) + f(i-1)
// f(i+1) = f(i-1) + f(i)
// [1 1 | 1 0][f(n) | f(n-1)] = [f(n)+f(n-1) | f(n)] = [f(n+1) | f(n)]
// [f(n+1) | f(n)] = [1 1 | 1 0]^n [f(1) | f(0)]
// 令 M = [1 1 | 1 0]
var climbStairs = function(n) {
  const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0))
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
      }
    }
    return c
  }
  const pow = (a, n) => {
    let res = [[1, 0], [0, 1]]
    while (n > 0) {
      if (n & 1 === 1) {
        res = multiply(res, a)
      }
      n >>= 1;
      a = multiply(a, a)
    }
    return res
  }
  const q = [[1, 1], [1, 0]]
  const res = pow(q, n)
  return res[0][0]
}

let res = climbStairs(3)
console.log(res)
