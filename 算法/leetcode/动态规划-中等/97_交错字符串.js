/*
leetcode 97. 交错字符串
给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
提示：a + b 意味着字符串 a 和 b 连接。 

示例 1：
![](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true

示例 2：
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false

示例 3：
输入：s1 = "", s2 = "", s3 = ""
输出：true

提示：
0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1、s2、和 s3 都由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/interleaving-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 动态规划
var isInterleave = function(s1, s2, s3) {
  // 能决定下一步的是？现在选择的是哪个字符串，另一个字符串从哪里选择
  // f(i, j) - s3[i~] 是从 j(0/1) 字符串选择的
  // 放弃
  
  // 上面的思路错了——不用管交错的，直接一个字符一个字符接着匹配就行
  // 主要是看 s3 的字符能不能和 s1/s2 的字符匹配
  // f(i, j) - s1[1~i] 和 s2[1~j] 能否交错组成 s3[1~i+j]
  // 状态转移 - s3[i+j] 最后是和谁匹配的 s1[i] 还是 s2[j]
  // (f(i - 1, j) && s1[i] === s3[i + j]) || (f(i, j - 1) && s2[j] === s3[i + j])
  const len1 = s1.length
  const len2 = s2.length
  if (len1 + len2 !== s3.length) {
    return false
  }
  const f = new Array(len1 + 5).fill(false).map(() => new Array(len2 + 5).fill(false))
  // f[0, x] f[x, 0] 都要初始化出来 f[0, 0]-用不到，可以不管
  f[0][0] = true // 如果传入的都是空串，就要初始化 f[0, 0]

  // 初始化复杂了 - 动态转移不从 1 开始，从 0 开始
  // for (let i = 1; i <= len1; i++) {
  //   f[i][0] = (s1[i - 1] === s3[i - 1])
  //   if (f[i][0] === false) { // 有字符不匹配了，后面的就不可能匹配上
  //     break
  //   }
  // }
  // for (let i = 1; i <= len2; i++) {
  //   f[0][i] = (s2[i - 1] === s3[i - 1])
  //   if (f[0][i] === false) {
  //     break
  //   }
  // }
  // for (let i = 1; i <= len1; i++) {
  //   for (let j = 1; j <= len2; j++) {
  //     const x = i - 1, y = j - 1
  //     f[i][j] = (f[i - 1][j] && (s1[x] === s3[x + y + 1])) || (f[i][j - 1] && (s2[y] === s3[x + y + 1]))
  //   }
  // }

  // 动态转移不从 1 开始，从 0 开始
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      const x = i - 1, y = j - 1
      if (i > 0) { // 这里就要加上自己去或了
        f[i][j] = f[i][j] || (f[i - 1][j] && (s1[x] === s3[x + y + 1]))
      }
      if (j > 0) {
        f[i][j] = f[i][j] || (f[i][j - 1] && (s2[y] === s3[x + y + 1]))
      }
    }
  }
  return f[len1][len2]
}

// 动态规划 - 空间优化（滚动数组的思想）
// 空间小了 3MB 时间多了 4ms 
// 老实说，懂了滚动数组的思想，但单独写代码写不出来，只能按照未优化的代码去改写
var isInterleave = function(s1, s2, s3) {
  // 不用管交错的，直接一个字符一个字符接着匹配就行
  // 主要是看 s3 的字符能不能和 s1/s2 的字符匹配
  // f(i, j) - s1[1~i] 和 s2[1~j] 能否交错组成 s3[1~i+j]
  // 状态转移 - s3[i+j] 最后是和谁匹配的 s1[i] 还是 s2[j]
  // (f(i - 1, j) && s1[i] === s3[i + j]) || (f(i, j - 1) && s2[j] === s3[i + j])
  const len1 = s1.length
  const len2 = s2.length
  if (len1 + len2 !== s3.length) {
    return false
  }
  const cur = new Array(len2 + 5).fill(false)
  cur[0] = true

  // 动态转移不从 1 开始，从 0 开始
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      const x = i - 1, y = j - 1
      if (i > 0) {
        cur[j] = cur[j] && (s1[x] === s3[x + y + 1])
      }
      if (j > 0) {
        cur[j] = cur[j] || (cur[j - 1] && (s2[y] === s3[x + y + 1]))
      }
    }
  }
  return cur[len2]
}

var s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" // true
var s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc" // false
var s1 = "", s2 = "", s3 = "" // true
var s1 = "db", s2 = "b", s3 = "cbb" // false
const res = isInterleave(s1, s2, s3)
console.log(res)
