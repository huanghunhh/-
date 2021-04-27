/*
leetcode 152. 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxProduct = function(nums) {
  // 代码错误
  // f(i) - nums[0~i] 这些数中，连续子数组（包含 nums[i]）的乘积最大值
  // 状态转移 - 要不要 nums[0~i-1]
  // f(i) = max(nums[i], f(i-1)*nums[i])
  const n = nums.length
  const f = []
  f[0] = nums[0]
  let res = f[0]
  for (let i = 1; i < n; i++) {
    f[i] = Math.max(nums[i], f[i - 1] * nums[i])
    res = Math.max(res, f[i])
  }
  return res
  // 代码错误
}

/*
上面的代码是参考的  53_最大子序和 的思路
但加和乘是不同的，加具有递增性（前面的负数就可以舍弃），
但乘不具备（前面的负数和当前的负数相乘可能是最大值）
[-2,3,-4] - 24，但我输出的是 3，因为舍弃了前面的 -6
*/
// 需要记录下最大和最小的连续子数组的乘积（最小-负数）
var maxProduct = function(nums) {
  // fMax(i) = max(fMax(i-1)*nums[i], fMin(i-1)*nums[i], nums[i])
  // fMin(i) = min(fMax(i-1)*nums[i], fMin(i-1)*nums[i], nums[i])
  const n = nums.length
  const fMin = []
  const fMax = []
  fMin[0] = fMax[0] = nums[0]
  let res = nums[0]
  for (let i = 1; i < n; i++) {
    fMin[i] = Math.min(nums[i], fMin[i - 1] * nums[i], fMax[i - 1] * nums[i])
    fMax[i] = Math.max(nums[i], fMin[i - 1] * nums[i], fMax[i - 1] * nums[i])
    res = Math.max(res, fMax[i])
  }
  return res
}

// 然后可以进行空间优化

var nums = [2,3,-2,4]
// var nums = [-2,0,-1]
// var nums = [-2,3,-4]
const res = maxProduct(nums)
console.log(res)
