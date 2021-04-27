/*
leetcode 198. 打家劫舍
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 
提示：
0 <= nums.length <= 100
0 <= nums[i] <= 400

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function(nums) {
  // f(i) - 考虑 nums[1~i]，能偷窃到的最高金额
  // 状态转移 - nums[i] 是否偷窃
  // f(i) = max(f(i-1), nums[i] + f(i-2))
  let f = []
  f[0] = 0
  f[1] = nums[0]
  const n = nums.length
  for (let i = 2; i <= n; i++) {
    f[i] = Math.max(f[i - 1], nums[i - 1] + f[i - 2])
  }
  return f[n]
}

// 动态规划 - f(i) 另外一种定义
// f(i) - 考虑 nums[1~i]，且必偷窃 nums[i] 的情况下，能偷窃到的最高金额
// 状态转移 - 倒数第二个是偷窃谁家的
// f(i) = nums[i] + max(f(i - 2), f(i - 3), f(k), f(1))
// f(i-1) = nums[i-1] + max(f(i - 3), f(i - 4), f(k), f(1))
// f(i) - nums[i] = max(f(i - 2), f(i - 1) - nums[i - 1])
// 最后的结果必须比较每个 f(i)，返回最大值
var rob = function(nums) {
  let f = []
  f[0] = 0
  f[1] = nums[0]
  const n = nums.length
  let res = nums[0] ? nums[0] : 0 // nums 为空则 res = 0
  for (let i = 2; i <= n; i++) {
    f[i] = nums[i - 1] + Math.max(f[i - 2], f[i - 1] - nums[i - 2])
    res = Math.max(res, f[i])
  }
  return res
}

/*
状态的定义会影响状态转移方程
第二种的定义就比第一种的定义要细致一点，也就会复杂一点
第一种的定义更贴近题意
*/

// 可以进行空间优化（滚动数组思想）

var nums = [1,2,3,1]
var nums = [2,7,9,3,1]
var nums = [2,1,1,2] // 4
var nums = [] // 4
const res = rob(nums)
console.log(res)
