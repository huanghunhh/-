/*
leetcode 303. 区域和检索 - 数组不可变
给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

实现 NumArray 类：

NumArray(int[] nums) 使用数组 nums 初始化对象
int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）

示例：
输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

提示：
0 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= i <= j < nums.length
最多调用 104 次 sumRange 方法

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/range-sum-query-immutable
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 */
// 前缀和
var NumArray = function(nums) {
  this.nums = nums
  this.f = [] // 计算前缀和
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  // let getSum = () => {
  //   let sum = 0
  //   for (let i = 0; i < this.nums.length; i++) {
  //     sum += this.nums[i]
  //     this.f[i] = sum
  //     // console.log(this.f)
  //   }
  // }

  // if (this.f.length === 0) { // 只计算一遍前缀和
  //   getSum()
  // }
  // let l = left === 0 ? 0 : this.f[left - 1]
  // return this.f[right] - l

  let getSum = () => {
    this.f[0] = 0
    for (let i = 0; i < this.nums.length; i++) {
      this.f[i + 1] = this.f[i] + this.nums[i]
      // console.log(this.f)
    }
  }

  if (this.f.length === 0) { // 只计算一遍前缀和
    getSum()
  }
  return this.f[right + 1] - this.f[left+1 - 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// 前缀和 - 优化写法
var NumArray = function(nums) {
  this.f = [] // 计算前缀和
  this.f[0] = 0
  for (let i = 0; i < nums.length; i++) {
    this.f[i + 1] = this.f[i] + nums[i]
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.f[right + 1] - this.f[left+1 - 1]
};

var nums = [-2, 0, 3, -5, 2, -1]
var obj = new NumArray(nums)
var res = obj.sumRange(2, 5)
console.log(res)
var res = obj.sumRange(0, 5)
console.log(res)
