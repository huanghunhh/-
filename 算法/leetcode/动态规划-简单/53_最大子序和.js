/*
leetcode 53. 最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [0]
输出：0

示例 4：
输入：nums = [-1]
输出：-1

示例 5：
输入：nums = [-100000]
输出：-100000
 
提示：
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 
进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力 双重循环
var maxSubArray1 = function(nums) {

}

// 动态规划
var maxSubArray2 = function(nums) {
  // f[i] - 数组 nums[0~i] 中以下标 i 结尾的连续子数组之和的最大值
  // 状态转移：要不要考虑，以下标 i-1 结尾的连续子数组
  let f = []
  let res = nums[0]
  f[0] = res
  for (let i = 1; i < nums.length; i++) {
    f[i] = Math.max(f[i - 1] + nums[i], nums[i])
    // f[i] 中存储的是，以不同位置为结尾的，各个连续子数组之和的最大值
    // 再取出其中的最大值就可
    res = Math.max(res, f[i])
  }
  // console.log(f)
  return res
}

// 动态规划优化：滚动数组
var maxSubArray2 = function(nums) {
  // 优化 f(i) 只与 f(i-1) 有关 - 滚动数组
  let pre = 0, maxAns = nums[0]
  nums.forEach(x => {
    pre = Math.max(pre + x, x)
    maxAns = Math.max(maxAns, pre)
  });
  return maxAns
}

// 贪心
var maxSubArray3 = function(nums) {
  // 如果有一段连续子数组和小于 0，则舍弃
  let sum = 0
  // let res = -Number.MAX_VALUE
  let res = nums[0] // 性能更好一点
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    res = Math.max(res, sum)
    if (sum < 0) {
      sum = 0
    }
  }
  return res
}

// 分治法
// 线段树
// 具有最大和的连续子数组，要么在左边，要么在右边，要么在中间
// 可以解决任意的子区间 [l, r] 的问题
// 如果我们把 [0, n-1] 分治下去出现的所有子区间的信息都用堆式存储的方式记忆化下来，即建成一颗真正的树之后，我们就可以在 O(logn) 的时间内求到任意区间内的答案
// 我们甚至可以修改序列中的值，做一些简单的维护，之后仍然可以在 O(logn) 的时间内求到任意区间内的答案，对于大规模查询的情况下，这种方法的优势便体现了出来
var maxSubArray4 = function(nums) {
  function Status(l, r, m, i) {
    this.lSum = l
    this.rSum = r
    this.mSum = m
    this.iSum = i
  }

  const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum
    const lSum = Math.max(l.lSum, l.iSum + r.lSum)
    const rSum = Math.max(r.rSum, r.iSum + l.rSum)
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum)
    return new Status(lSum, rSum, mSum, iSum)
  }

  const getInfo = (a, l, r) => {
    if (l === r) {
      return new Status(a[l], a[l], a[l], a[l])
    }
    const m = (l + r) >> 1
    const lSub = getInfo(a, l, m)
    const rSub = getInfo(a, m + 1, r)
    return pushUp(lSub, rSub)
  }

  return getInfo(nums, 0, nums.length - 1).mSum
}

nums = [-2,1,-3,4,-1,2,1,-5,4]
res = maxSubArray4(nums)
console.log(res)
