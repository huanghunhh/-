/*
leetcode 213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

示例 1：
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

示例 2：
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 3：
输入：nums = [0]
输出：0
 
提示：
1 <= nums.length <= 100
0 <= nums[i] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// 与打家劫舍 I 相比，就是偷窃第 n 家，不偷窃第 1 家，或，偷窃第 1 家，不偷窃第 n 家
// 拆成两个数组就行了
var rob = function(nums) {
  // 复用一下代码
  var myRob = function(nums) {
    // f(i) - 考虑 nums[1~i]，能偷窃到的最高金额
    // 状态转移 - nums[i] 是否偷窃
    // f(i) = max(f(i-1), nums[i] + f(i-2))
    const n = nums.length
    let pre = 0, cur = nums[0]
    for (let i = 2; i <= n; i++) {
      const tmp = Math.max(cur, nums[i - 1] + pre)
      // [pre, cur] = [cur, tmp] // 这样的写法，会报错 Cannot access 'tmp' before initialization
      pre = cur
      cur = tmp
    }
    return cur
  }
  const n = nums.length
  // 特判一下
  return n === 0 ? 0 : (
    n === 1 ? nums[0] : (
      Math.max(myRob(nums.slice(0, n-1)), myRob(nums.slice(1, n)))
    )
  )
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return nums[0]
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1])
  }
  return Math.max(myRob(nums.slice(0, n-1)), myRob(nums.slice(1, n)))
}

var nums = [2,3,2]
var nums = [1,2,3,1]
// var nums = [0]
const res = rob(nums)
console.log(res)
