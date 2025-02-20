/*
leetcode 96. 不同的二叉搜索树
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:
输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var numTrees = function(n) {
  // G(n) - 序列长度为 n 的二叉搜索树的种数
  // f(i, n) - 以 i 为根结点，序列长度为 n 的二叉搜索树的种数
  // 状态转移 - 不同根结点构成所有二叉搜索树
  // G(n) = f(1, n) + f(2, n) + ... + f(n, n)
  // f(i, n) = G(i - 1)G(n - i) =>
  // G(n) = G(0)G(n-1) + G(1)G(n-2) + ... + G(n-1)G(0)
  // let g = [] // 必须初始化为 0，这样声明，里面的值是 undefined，无法计算
  // console.log(g[0]) // undefined
  let g = new Array(n + 1).fill(0)
  g[0] = 1
  g[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      g[i] += g[j - 1] * g[i - j]
    }
  }
  return g[n]
}

// G(n) = G(0)G(n-1) + G(1)G(n-2) + ... + G(n-1)G(0) —— 卡塔兰数 C_n
// C0 = 1，C_(n+1)=2(2n+1)/(n+2) C_n
​	

var n = 10
const res = numTrees(n)
console.log(res)
