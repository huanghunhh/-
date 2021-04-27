/*
leetcode 面试题 08.01. 三步问题
三步问题。有个小孩正在上楼梯，楼梯有 n 阶台阶，小孩一次可以上 1 阶、2 阶或 3 阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模 1000000007。

示例 1:
输入：n = 3 
输出：4
说明: 有四种走法

示例 2:
输入：n = 5
输出：13

提示:
n 范围在 [1, 1000000] 之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/three-steps-problem-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var waysToStep = function(n) {
  // f(i) 上到第 i 阶台阶的方式数
  // 状态转移 - 最后一步是怎么上的台阶，由上 1/2/3 阶台阶的方式
  const f = []
  f[0] = 1
  f[1] = 1
  f[2] = 2
  // f[3] = 4
  for (let i = 3; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2] + f[i - 3]) % 1000000007
  }
  return f[n]
};

// 动态规划 - 空间优化
var waysToStep = function(n) {
  // f(i) 上到第 i 阶台阶的方式数
  // 状态转移 - 最后一步是怎么上的台阶，由上 1/2/3 阶台阶的方式
  if (n < 3) {
    return n
  }
  let d0 = 1, d1 = 1, d2 = 2
  for (let i = 3; i <= n; i++) {
    const tmp = (d0 + d1 + d2) % 1000000007
    d0 = d1
    d1 = d2
    d2 = tmp
  }
  return d2
};

// f[i] = (f[i - 1] + f[i - 2] + f[i - 3])
// 也可以优化成矩阵快速幂，时间复杂度降为 O(lgn)

const res = waysToStep(5)
console.log(res)