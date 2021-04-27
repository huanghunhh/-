/*
leetcode 1025. 除数博弈
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。

示例 1：
输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
示例 2：

输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。

提示：
1 <= N <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/divisor-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// 动态规划
var divisorGame = function(n) {
  // 集合不好确定呀
  // 从动态规划的特点出发-模糊详细步骤，决定之后状态的是啥：数字，现在该谁选择
  // f[x][2] - 对数字 x ，如果是 0/1（爱丽丝/鲍勃） 选择，能选到嘛
  // f(i, 1) - f(k, 0) k = 2i, 3i
  // 无法转移。。。放弃了
  const f = new Array(n + 5).fill(0).map(() => new Array(2).fill(0))
  f[n][1] = true
  for (let i = n - 1; i > 0; i--) {
    if (n % i === 0) {
      f[i][0] = f[n][1]
      f[i][1] = f[n][0]
    }
  }

};

var divisorGame = function(n) {
  return n % 2 === 0
}

// var res = divisorGame(3)
var res = parseInt(8/3)
console.log(res)
