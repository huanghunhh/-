# CSDN 面试题

## 2020 阿里游戏前端实习生笔试总结

[阿里前端笔试总结](https://blog.csdn.net/weixin_47312141/article/details/107665071)

```js
/* T1
有一个长度未知的数组 a，如果它的长度为 0 就把数字 1 添加到数组里面，
否则按照先进先出的队列规则让第一个元素出队。
*/
let a = [1, 3]
a.lenght === 0 ? a.push(1) : a.shift()
console.log(a)


/* T2
下面代码会输出什么：
*/
var test = (function(a) {
  this.a = a
  return function(b) {
    return this.a + b
  }
} (function(a, b) {
  return a
}(1, 2)))
console.log(test(4)) // 5


/* T3
请把<ul><li>第1行</li><li>第2行</li>...</ul>（ul 之间有 10 个 li 元素）插入 body 里面，
注意：需要考虑到性能问题。
分析：这题主要考察了 dom 操作。插入节点操作的可以使用 insertBefore 和 appendChild 方法，随便用一个都行。但是，题目要求要考虑性能问题，这才是关键，因为，JavaScript 操作 dom 的开销是很大的！提高性能就要减少 dom 操作。因此，我当时使用了下面的方法，只操作一次 dom 就够的了：
*/
let ul = document.createElement('ul')
let lis = ''
for (let i = 0; i < 10; i++) {
  lis += `<li>第${i+1}行</li>`
}
ul.innerHTML = lis
document.body.appendChild(ul)


/* T4 
不使用 loop 循环，创建一个长度为 100 的数组，并且每个元素的值等于它的下标。
JavaScript 数组是稀疏数组，比如，通过 new Array (100) 创建一个新的数组的，虽然他的长度是 100，但是实际上他是一个空数组，也就是说没有真实存在的元素。所以使用 map 方法，根本不会去遍历这个数组 100 次的。
*/
let a = Array(100).join(',').split(',').map((item, index) => {
  return index
})
console.log(a)


/* T5
实现对数组进行乱序
*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a.sort((a, b) => {
  let sign = (Math.random() > 0.5) ? 1 : -1
  return (a - b) * sign
})
console.log(a)


/* T6
有一个长度为 100 的数组，请以优雅的方式求出该数组的前 10 个元素之和
*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let res = a.slice(0, 10).reduce((pre, cur) => {
  return pre + cur
})
console.log(res)
```

## 2020 阿里前端岗暑期实习面试经历

[2020 阿里前端岗暑期实习面试经历](https://blog.csdn.net/qq_32035241/article/details/105441552)

```js
/*
T1 
语义化标签的作用和意义
常用于布局的 div 标签，对于搜索引擎来说，是没有语义的，故 HTML5 新增了语义化标签，这种语义化标准主要是针对搜索引擎的
header 头部标签
nav 导航标签
article 内容标签
section 文档区域标签
aside 侧边栏标签
footer 尾部标签

新增的多媒体标签
audio 音频
video 视频

T2 css3 新特性
过渡和动画
transition 
animation
多列布局和弹性盒模型
dispaly: flex;
盒子变幻
transform: translate/rotate/scale
媒体查询
@media screen and (max-width: 480px) {
	background: red;
}
阴影
h1 {
	text-shadow: 5px 5px 5px red; // 文字阴影
}
div {
	box-shadow: 10px 5px 5px yellow; // 盒子阴影
}

T3 js 的继承

T4 调试代码
F12 加断点调试
console.log 输出调试
vue 的 devtools 调试工具

T5 http 的状态码
1 - 消息提示
2 - 成功
3 - 重定向
4 - 请求出错
5 - 服务器错误

T6 七层模型
*/
```

[html 语义化标签](https://blog.csdn.net/qq_38128179/article/details/80811339)

[代码调试系列之前端代码调试的几种基本方法](https://blog.csdn.net/YaoDeBiAn/article/details/86761412)

[常见的 HTTP 状态码 (HTTP Status Code) 说明](https://blog.csdn.net/dufufd/article/details/53112184)

[网络的七层通信过程](https://blog.csdn.net/weixin_40304276/article/details/81509074)

[过渡 transition - vue 官网](https://cn.vuejs.org/v2/guide/transitions.html)

![image-20210314185147206](https://gitee.com/twilight_h_1184651848/pic-go-img/raw/master/%E9%9D%A2%E8%AF%95/CSDN%E9%9D%A2%E8%AF%95%E9%A2%98/image-20210314185147206.png)

