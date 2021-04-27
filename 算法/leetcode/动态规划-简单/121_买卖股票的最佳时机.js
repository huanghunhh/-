/*
leetcode 121. 买卖股票的最佳时机
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：
1 <= prices.length <= 105
0 <= prices[i] <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function(prices) {
  // f(i) - 在第 i 天卖出股票的最大利润
  // 状态转移 - 在哪天卖出的股票
  // f(i) = max(f(1)+p(i)-p(1),..., f(k)+p(i)-p(k)) —— 还可以模糊
  // 超时
  const n = prices.length
  let f = new Array(n+1).fill(0) // 需要初始化，不然会 NAN
  f[0] = 0
  let res = 0
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      f[i] = Math.max(f[i], f[k] + prices[i-1] - prices[k-1])
    }
    res = Math.max(res, f[i])
  }
  return res
}

// 动态规划用于求解 多阶段决策问题 ；
// 动态规划问题的问法：只问最优解，不问具体的解；

// 动态规划的状态转移
var maxProfit1 = function(prices) {
  // f(i) - 在第 i 天卖出股票的最大利润
  // 状态转移 - 前一天
  const n = prices.length
  let f = new Array(n+1).fill(0) // 需要初始化，不然会 NAN
  let res = 0
  for (let i = 2; i <= n; i++) {
    const j = i - 1
    // 状态转移方程：第 i 天卖出可以获得的最大利润 = 第 i-1 天卖出的最大利润 + 利润差
    // 为什么？ 第 i 天卖出可以获得的最大利润 = 第 i-2 天卖出的最大利润 + 利润差
    // 把公式展示？
    // f[i]   = max(f[1]+p[i]-p[1],   f[2]+p[i]-p[2],...  f[i-2]+p[i]-p[i-2],  f[i-1]+p[i]-p[i-1])
    // f[i-1] = max(f[1]+p[i-1]-p[1], f[2]+p[i-1]-p[2],...f[i-2]+p[i-1]-p[i-2],f[i-1]+p[i-1]-p[i-1]) =>
    // f[i-1]+p[i]-p[i-1] = max(f[1]+p[i]-p[1], f[2]+p[i]-p[2],...f[i-2]+p[i]-p[i-1]) =>
    // f[i] = f[i-1]+p[i]-p[i-1]
    // 改为对应的下标即可
    f[i] = Math.max(0, f[i - 1] + prices[j] - prices[j - 1])
    res = Math.max(res, f[i])
  }
  return res
}

// 动态规划-空间优化
var maxProfit = function(prices) {
  // f(i) - 在第 i 天卖出股票的最大利润
  const n = prices.length
  let res = 0
  let pre = 0 // 前一天卖出可以获得的最大利润
  for (let i = 1; i < n; i++) {
    // 利润差
    let diff = prices[i] - prices[i - 1]
    // 状态转移方程：第 i 天卖出可以获得的最大利润 = 第 i-1 天卖出的最大利润 + 利润差
    pre = Math.max(pre + diff, 0)
    res = Math.max(res, pre)
  }
  return res
}

// 贪心 - 在最低点买入
// 如果我是在历史最低点买进的，那么我今天卖出能赚多少钱？当考虑完所有天数之时，我们就得到了最好的答案。
var maxProfit = function(prices) {
  let minprice = Number.MAX_VALUE
  let maxprofit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i]
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice
    }
  }
  return maxprofit
}

arr = [7,1,5,3,6,4]
res = maxProfit(arr)
console.log(res)
