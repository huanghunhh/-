/*
leetcode 264. 丑数 II
给你一个整数 n ，请你找出并返回第 n 个 丑数 。

丑数 就是只包含质因数 2、3 和 / 或 5 的正整数。

示例 1：
输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

示例 2：
输入：n = 1
输出：1
解释：1 通常被视为丑数。

提示：
1 <= n <= 1690

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ugly-number-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 384 ms
var nthUglyNumber = function(n) {
  // f(i) - 第 i 个丑数
  // 状态转移 - 多的质因数为 2/3/5
  // f(i) = min(f(1)*2, f(k)*2, f(i-1)*2) && f(k)*2 > f(i-1)
  // f(i) = min(f(1)*3, f(k)*3, f(i-1)*3) && f(k)*2 > f(i-1)
  // f(i) = min(f(1)*5, f(k)*5, f(i-1)*5) && f(k)*2 > f(i-1)
  let f = [0, 1, 2, 3, 4, 5]
  if (n <= 5) {
    return f[n]
  }
  for (let i = 6; i <= n; i++) {
    f[i] = Number.MAX_VALUE
    for (let k = 2; k < i; k++) {
      let min = Number.MAX_VALUE
      if (f[k] * 2 > f[i - 1]) {
        min = Math.min(min, f[k] * 2)
      }
      if (f[k] * 3 > f[i - 1]) {
        min = Math.min(min, f[k] * 3)
      }
      if (f[k] * 5 > f[i - 1]) {
        min = Math.min(min, f[k] * 5)
      }
      f[i] = Math.min(min, f[i])
    }
  }
  return f[n]
}

// 动态规划 - 预处理
// 100 ms
let f = []
let myFun = function(n) {
  f = [0, 1, 2, 3, 4, 5]
  for (let i = 6; i <= n; i++) {
    f[i] = Number.MAX_VALUE
    for (let k = 2; k < i; k++) {
      let min = Number.MAX_VALUE
      if (f[k] * 2 > f[i - 1]) {
        min = Math.min(min, f[k] * 2)
      }
      if (f[k] * 3 > f[i - 1]) {
        min = Math.min(min, f[k] * 3)
      }
      if (f[k] * 5 > f[i - 1]) {
        min = Math.min(min, f[k] * 5)
      }
      f[i] = Math.min(min, f[i])
    }
  }
}
myFun(1700)
var nthUglyNumber = function(n) {
  // f(i) - 第 i 个丑数
  // 状态转移 - 多的质因数为 2/3/5
  // f(i) = min(f(1)*2, f(k)*2, f(i-1)*2) && f(k)*2 > f(i-1)
  // f(i) = min(f(1)*3, f(k)*3, f(i-1)*3) && f(k)*2 > f(i-1)
  // f(i) = min(f(1)*5, f(k)*5, f(i-1)*5) && f(k)*2 > f(i-1)
  return f[n]
}

// 动态规划 - 算法优化
// 80 ms
// 使用三指针，优化下一个丑数的寻找代码
// 不用每次更新 f(i) 时都遍历 f(k)，因为 f(i) 必定是由 f(k) * 2/3/5 转移来的，
// 就用三个指针记录下下一个可能转移过来的丑数
var nthUglyNumber = function(n) {
  const f = []
  f[1] = 1
  // 记录下一个可能转移过来的丑数的三个指针
  let p2 = 1, p3 = 1, p5 = 1
  for (let i = 2; i <= n; i++) {
    // 下一个可能转移过来的丑数
    const num2 = f[p2] * 2, num3 = f[p3] * 3, num5 = f[p5] * 5
    f[i] = Math.min(num2, num3, num5)
    // 转移过的就自增跳过
    if (f[i] === num2) {
      p2++
    }
    if (f[i] === num3) {
      p3++
    }
    if (f[i] === num5) {
      p5++
    }
  }
  return f[n]
}

// 最小堆
// 544 ms
// 因为要得到从小到大的第 n 个丑数，故可以使用 最小堆 来实现
class MinHeap { // 实现最小堆
  constructor() {
    this.heap = []
  }
  getParentIndex(i) {
    return (i - 1) >> 1
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  size() {
    return this.heap.length
  }
  peek() {
    return this.heap[0]
  }
  swap(i1, i2) {
    const tmp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = tmp
  }
  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return this.heap[0]
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.size() - 1)
  }
}
var nthUglyNumber = function(n) {
  const factors = [2, 3, 5]
  const seen = new Set() // 去重
  const heap = new MinHeap() // 实现的最小堆
  seen.add(1)
  heap.insert(1)
  let ugly = 0
  for (let i = 0; i < n; i++) {
    ugly = heap.pop()
    for (const f of factors) {
      const next = ugly * f
      if (!seen.has(next)) {
        seen.add(next)
        heap.insert(next)
      }
    }
  }
  return ugly
}

var n = 4
n = 10
const res = nthUglyNumber(n)
console.log(res)