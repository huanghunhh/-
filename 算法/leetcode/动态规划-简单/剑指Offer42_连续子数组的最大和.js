/*
leetcode 剑指 Offer 42. 连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为 O (n)。

示例 1:
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 
提示：
1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // f(i) 数组中，以 nums[i] 结尾的子数组的和的最大值
  // 状态转移，要不要 nums[0~i-1] 部分
  const f = []
  f[0] = 0
  let res = nums[0]
  const n = nums.length
  for (let i = 1; i <= n; i++) {
    f[i] = Math.max(f[i - 1] + nums[i - 1], nums[i - 1])
    res = Math.max(f[i], res)
  }
  return res
};

// 动态规划 - 空间优化
var maxSubArray = function(nums) {
  let pre = 0
  let res = nums[0]
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    res = Math.max(pre, res)
    // const cur = Math.max(pre + nums[i], nums[i])
    // pre = cur
    // res = Math.max(pre, res)
  }
  return res
}

const nums = [-2,1,-3,4,-1,2,1,-5,4]
const res = maxSubArray(nums)
console.log(res)
