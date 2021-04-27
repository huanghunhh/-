/*
leetcode 139. 单词拆分
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：
拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

示例 2：
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。

示例 3：
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-break
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 动态规划
var wordBreak = function(s, wordDict) {
  // 拆分 s，等同于拼接 wordDict
  // f(i) - s[0~i] 是否可由 wordDict 中的单词拼接而成
  // 状态转移 - s[k~i] 是由 wordDict 中的单词拼接而成的
  // f(i) = (f(i-1) && s[i] in wordDict) || (f(k) && s[k+1~i] in wordDict) || (f(0) && s[1~i] in wordDict)
  // f(i-1) = (f(i-2) && s[i-1] in wordDict) || (f(k) && s[k+1~i-1] in wordDict) || (f(0) && s[1~i-1] in wordDict)
  // 无法优化状态转移方程
  const n = s.length
  const f = new Array(n+1).fill(false)
  f[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const str = s.slice(j, i)
      f[i] = f[j] && (wordDict.indexOf(str) !== -1)
      if (f[i] === true) { // 已经能够拼接了，就不需要再转移了
        break
      }
    }
  }
  return f[n]
};

// 优化
// 检查一个字符串是否出现在给定的字符串列表中——哈希表
// 可以剪枝：如果分割点 k 到 i 的长度大于字典列表里最长的单词长度，则结束枚举
// 也可以使用字典树 Trie 来实现查找
// 还有一个优化方向：每次枚举 k 时，可以依据字典列表中的单词长度来枚举

// DFS、BFS 好像也可以

var s = "leetcode", wordDict = ["leet", "code"]
s = "applepenapple", wordDict = ["apple", "pen"]
s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
const res = wordBreak(s, wordDict)
console.log(res)
