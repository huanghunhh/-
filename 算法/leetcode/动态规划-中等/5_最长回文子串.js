/*
leetcode 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"

提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和 / 或小写）组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */

// 动态规划
var longestPalindrome = function(s) {
  // f[i] - s[0~i] 中，以第 i 个字符为结尾的回文子串的最大长度
  // 状态转移 - 
  // f[i - 1] + 2 (s[i] === s[i - f[i-1] - 1])
  // f[i - 1] + 1 (f[i - 1] === 1 && s[i] === s[i - 1]])
  // ... 无法转移

  // f[i][j] - s[i~j] 是不是一个回文串（i<=j）
  // 状态转移 
  // f[i][j] = f[i+1][j-1] && s[i] == s[j]
  // 初始化
  // 回文串长 1：f[i][i] = true
  // 回文串长 2：f[i][j] = (s[i] === s[j]) j=i+1
  const n = s.length
  // 定义 f 并初始化为 false
  const f = new Array(n + 5).fill(0).map(() => new Array(n + 5).fill(false))

  // 在状态转移方程中，我们是从长度较短的字符串向长度较长的字符串进行转移的，因此一定要注意动态规划的循环顺序。
  // let res = ''
  let res = [0, 0, 0]
  for (let i = 0; i < n; i++) {
    // i - 字符串长度-1
    for (let j = 0; j + i < n; j++) {
      // j - 字符串的起始位置
      const k = i + j
      // k - 字符串的终止位置
      if (i === 0) { // 字符串长 1
        f[j][k] = true
      } else if (i === 1) { // 字符串长 2
        f[j][k] = (s[j] === s[k])
      } else { // 字符串的长大于 2
        f[j][k] = f[j + 1][k - 1] && (s[j] === s[k])
      }
      // 记录最长的回文子串
      // if (f[j][k] && i + 1 > res.length) {
      //   res = s.slice(j, k + 1) // slice 不会影响性能，性能反而要好点
      // }
      // 怕 slice 影响了性能，试着只是记录最长回文子串的起止位置和长度
      if (f[j][k] && i + 1 > res[2]) {
        res[0] = j
        res[1] = k
        res[2] = k - j + 1
      }
    }
  }
  return s.slice(res[0], res[1] + 1)
}

// 中心扩展法
// 枚举所有的「回文中心」并尝试「扩展」，直到无法扩展为止，此时的回文串长度即为此「回文中心」下的最长回文串长度。
var longestPalindrome1 = function(s) {
  const n = s.length
  // 扩展函数
  function expandAroundCenter(s, l, r) {
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--
      r++
    }
    return [l + 1, r - 1] // 返回回文串的左右位置
  }

  let start = end = 0
  for (let i = 0; i < n; i++) {
    // 对长度为 1 的回文串进行扩展
    const [l1, r1] = expandAroundCenter(s, i, i)
    // 对长度为 2 的回文串进行扩展
    const [l2, r2] = expandAroundCenter(s, i, i + 1)
    // 更新最长回文子串
    if (r1 - l1 > end - start) {
      start = l1
      end = r1
    }
    if (r2 - l2 > end - start) {
      start = l2
      end = r2
    }
  }
  // 返回最长回文子串
  return s.slice(start, end + 1)
}

// Manacher 算法
// 使用臂长的概念，优化中心扩展法，跳过部分不需要比较的字符

var s = "babad"
const res = longestPalindrome(s)
console.log(res)
