/*
leetcode 392. 判断子序列
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace" 是 "abcde" 的一个子序列，而 "aec" 不是）。

进阶：
如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10 亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：
特别感谢 @pbrother 添加此问题并且创建所有测试用例。

示例 1：
输入：s = "abc", t = "ahbgdc"
输出：true

示例 2：
输入：s = "axc", t = "ahbgdc"
输出：false
 

提示：
0 <= s.length <= 100
0 <= t.length <= 10^4
两个字符串都只由小写字符组成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 动态规划
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 动态规划
var isSubsequence = function(s, t) {
  // f(i, j) s(0~i) 是否为 t(0~j) 的子序列
  // 状态转移 s(i) t(j)
  // f(i-1, j-1)(s(i)===t(j)) || f(i, j-1)(删除 t(j))
  const lenS = s.length
  const lenT = t.length
  let f = new Array(lenS + 5).fill(0).map(() => new Array(lenT + 5).fill(false)) // 声明二维数组 第一个 fill 必需，不然不会创建出来
  for (let i = 0; i <= lenT; i++) {
    f[0][i] = true
  }
  for (let i = 1; i <= lenS; i++) {
    for (let j = 1; j <= lenT; j++) {
      const x = i - 1, y = j - 1
      f[i][j] = (f[i - 1][j - 1] && s[x] === t[y]) || f[i][j - 1]
      // console.log(i, j, f[i][j])
    }
  }
  return f[lenS][lenT]
};

// 双指针
var isSubsequence = function(s, t) {
  const lenS = s.length
  const lenT = t.length
  let i = 0, j = 0
  while (i < lenS && j < lenT) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }
  return i === lenS
};

// 预处理出对于 t 的每一个位置，从该位置开始往后每一个字符第一次出现的位置。
// 动态规划进行预处理
// f(i, j) 字符串 t 中从位置 i 开始往后字符 j 第一次出现的位置
// f(i, j) - f(i+1, j)
// 该解法中对 t 的处理与 s 无关，且预处理完成后，可以利用预处理数组的信息，线性地算出任意一个字符串 s 是否为 t 的子串。——可以完成进阶部分：如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10 亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
var isSubsequence = function(s, t) {
  const lenS = s.length
  const lenT = t.length
  const codeA = 'a'.charCodeAt()
  let f = new Array(lenT + 5).fill(0).map(() => new Array(26).fill(0))
  for (let i = 0; i < 26; i++) {
    f[lenT][i] = lenT // 不存在字符串
  }
  for (let i = lenT - 1; i >= 0; i--) { // 状态转移
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt() === codeA + j) { // 下一个可以匹配的位置即为 i
        f[i][j] = i
      } else { // 看后面的
        f[i][j] = f[i + 1][j]
      }
    }
  }

  let next = 0 // 下一个匹配的位置
  for (let i = 0; i < lenS; i++) {
    if (f[next][s[i].charCodeAt() - codeA] === lenT) {
      return false // 不存在
    }
    next = f[next][s[i].charCodeAt() - codeA] + 1
  }
  return true
}

var s = "abdc"
var s = "axc"
var t = "ahbgdc"
// var res = isSubsequence(s, t)
// console.log(res)
// str.charAt(n) 取出 str 中的第 n 个字符
// str.charCodeAt(n) 返回 str 中的第 n 个字符的 ASCII 编码
// 上面两个 n 都默认取 0
// console.log('a'.charAt(),'b'.charCodeAt() - 'a'.charCodeAt())
// console.log('ab'.charCodeAt(1))
// console.log('ab'.charAt())
