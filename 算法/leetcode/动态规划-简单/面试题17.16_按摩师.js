/*
leetcode 面试题 17.16. 按摩师
一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

注意：本题相对原题稍作改动 

示例 1：
输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。

示例 2：
输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。

示例 3：
输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/the-masseuse-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var massage = function(nums) {
  // f[i] - 第 i 天是所有预约的最后一天，其预约的最大分钟数
  // 状态转移 - 是由前面哪天转移过来的
  // f[i]     = max(f[i - 2], f[i - 3], ... , f[0]) + nums[i]
  // f[i - 1] = max(f[i - 3], f[i - 4], ... , f[0]) + nums[i - 1]
  // f[i] - nums[i] = max(f[i - 2], f[i - 1] - nums[i - 1])
  const n = nums.length
  if (n === 0) {
    return 0
  }
  const f = []
  f[0] = 0
  f[1] = nums[0]
  let res = f[1]
  for (let i = 2; i <= n; i++) {
    f[i] = Math.max(f[i - 2], f[i - 1] - nums[i-1 - 1]) + nums[i-1]
    res = Math.max(f[i], res)
  }
  console.log(f)
  return res
}

// 动态规划 - 空间优化
var massage1 = function(nums) {
  // f[i] - 第 i 天是所有预约的最后一天，其预约的最大分钟数
  // 状态转移 - 是由前面哪天转移过来的
  // f[i]     = max(f[i - 2], f[i - 3], ... , f[0]) + nums[i]
  // f[i - 1] = max(f[i - 3], f[i - 4], ... , f[0]) + nums[i - 1]
  // f[i] - nums[i] = max(f[i - 2], f[i - 1] - nums[i - 1])
  const n = nums.length
  if (n === 0) {
    return 0
  }
  let pre = 0, cur = nums[0]
  let res = cur
  for (let i = 2; i <= n; i++) {
    const next = Math.max(pre, cur - nums[i-1 - 1]) + nums[i-1]
    pre = cur
    cur = next
    res = Math.max(next, res)
  }
  return res
}

// 动态规划
/*
其他动态规划的思路
1. f[i] - 考虑前 i 天，最大的预约总时间
  状态转移 - 第 i 天是否预约，预约-f[i - 2] + nums[i]，不预约-f[i - 1]
  f[i] = max(f[i - 2] + nums[i], f[i - 1])
2. f[i][0/1] - 考虑前 i 天，且第 i 天，是否预约（0-不预约，1-预约）
  f[i][0] = max(f[i - 1][0], f[i - 1][0])
  f[i][1] = f[i - 1][0] + nums[i]
  答案：max(f[n][0], f[n][1])
*/

// const nums = [1,2,3,1]
// const nums = [2,7,9,3,1]
const nums = [2,1,4,5,3,1,1,3]
const res = massage(nums)
console.log(res)
